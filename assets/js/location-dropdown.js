/**
 * LOCATION DROPDOWN - Cascading Searchable Dropdowns
 * State → District → Taluk (free-text)
 * 
 * Uses the static JSON file for instant client-side filtering.
 * No server queries needed — all data loaded once on page init.
 */

const LocationDropdown = (() => {
  let _locationData = null;  // Cached JSON data
  let _instances = [];       // Track all initialized instances

  /**
   * Load the india-locations.json data (cached after first load)
   */
  async function loadData() {
    if (_locationData) return _locationData;
    try {
      const resp = await fetch('assets/data/india-locations.json');
      _locationData = await resp.json();
      return _locationData;
    } catch (err) {
      console.error('Failed to load location data:', err);
      return { states: [] };
    }
  }

  /**
   * Create a searchable combo-box from a regular select or input element
   * @param {HTMLElement} el - The original element
   * @param {string} placeholder - Placeholder text
   * @param {Function} onSelect - Callback when an option is selected
   * @returns {object} Controller with methods: setOptions, setValue, getValue, clear
   */
  function createSearchableSelect(el, placeholder, onSelect) {
    const wrapper = document.createElement('div');
    wrapper.className = 'loc-combo-wrapper';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control loc-combo-input';
    input.placeholder = placeholder;
    input.autocomplete = 'off';

    const arrow = document.createElement('span');
    arrow.className = 'loc-combo-arrow';
    arrow.innerHTML = '<i class="bi bi-chevron-down"></i>';

    const dropdown = document.createElement('div');
    dropdown.className = 'loc-combo-dropdown';

    wrapper.appendChild(input);
    wrapper.appendChild(arrow);
    wrapper.appendChild(dropdown);

    // Replace original element
    el.parentNode.insertBefore(wrapper, el);
    el.style.display = 'none';

    let options = [];
    let selectedId = '';
    let selectedName = '';
    let isOpen = false;

    function renderOptions(filter = '') {
      const filtered = filter
        ? options.filter(o => o.name.toLowerCase().includes(filter.toLowerCase()))
        : options;

      if (!filtered.length) {
        dropdown.innerHTML = '<div class="loc-combo-empty">No matches found</div>';
        return;
      }

      dropdown.innerHTML = filtered.map(o => `
        <div class="loc-combo-option${o.id === selectedId ? ' active' : ''}" 
             data-id="${o.id}" data-name="${o.name}">
          ${highlightMatch(o.name, filter)}
        </div>
      `).join('');

      // Attach click handlers
      dropdown.querySelectorAll('.loc-combo-option').forEach(opt => {
        opt.addEventListener('mousedown', (e) => {
          e.preventDefault();
          selectOption(opt.dataset.id, opt.dataset.name);
        });
      });
    }

    function highlightMatch(text, query) {
      if (!query) return text;
      const idx = text.toLowerCase().indexOf(query.toLowerCase());
      if (idx === -1) return text;
      return text.slice(0, idx) + 
             '<strong>' + text.slice(idx, idx + query.length) + '</strong>' + 
             text.slice(idx + query.length);
    }

    function selectOption(id, name) {
      selectedId = id;
      selectedName = name;
      input.value = name;
      closeDropdown();
      if (onSelect) onSelect(id, name);
    }

    function openDropdown() {
      if (!options.length) return;
      isOpen = true;
      dropdown.classList.add('open');
      wrapper.classList.add('open');
      renderOptions(input.value !== selectedName ? input.value : '');
    }

    function closeDropdown() {
      isOpen = false;
      dropdown.classList.remove('open');
      wrapper.classList.remove('open');
      // If typed text doesn't match selected, restore selected
      if (input.value && input.value !== selectedName) {
        // Check if typed text matches an option exactly
        const exact = options.find(o => o.name.toLowerCase() === input.value.toLowerCase());
        if (exact) {
          selectOption(exact.id, exact.name);
        } else {
          // Keep free text (for taluk-like fields) or restore
          if (selectedName) {
            input.value = selectedName;
          }
        }
      }
    }

    // Event listeners
    input.addEventListener('focus', () => {
      openDropdown();
      input.select();
    });

    input.addEventListener('input', () => {
      if (!isOpen) openDropdown();
      renderOptions(input.value);
    });

    input.addEventListener('blur', () => {
      setTimeout(closeDropdown, 150);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown();
        input.blur();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const firstOpt = dropdown.querySelector('.loc-combo-option');
        if (firstOpt) {
          selectOption(firstOpt.dataset.id, firstOpt.dataset.name);
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const active = dropdown.querySelector('.loc-combo-option.keyboard-active');
        const allOpts = dropdown.querySelectorAll('.loc-combo-option');
        if (!allOpts.length) return;
        let nextIdx = 0;
        if (active) {
          active.classList.remove('keyboard-active');
          const arr = Array.from(allOpts);
          nextIdx = Math.min(arr.indexOf(active) + 1, arr.length - 1);
        }
        allOpts[nextIdx]?.classList.add('keyboard-active');
        allOpts[nextIdx]?.scrollIntoView({ block: 'nearest' });
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const active = dropdown.querySelector('.loc-combo-option.keyboard-active');
        const allOpts = dropdown.querySelectorAll('.loc-combo-option');
        if (!allOpts.length) return;
        let prevIdx = allOpts.length - 1;
        if (active) {
          active.classList.remove('keyboard-active');
          const arr = Array.from(allOpts);
          prevIdx = Math.max(arr.indexOf(active) - 1, 0);
        }
        allOpts[prevIdx]?.classList.add('keyboard-active');
        allOpts[prevIdx]?.scrollIntoView({ block: 'nearest' });
      }
    });

    arrow.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (isOpen) closeDropdown();
      else { input.focus(); openDropdown(); }
    });

    return {
      setOptions(opts) {
        options = opts;
        selectedId = '';
        selectedName = '';
        input.value = '';
      },
      setValue(id, name) {
        selectedId = id || '';
        selectedName = name || '';
        input.value = name || '';
      },
      getValue() {
        return { id: selectedId, name: selectedName || input.value };
      },
      clear() {
        selectedId = '';
        selectedName = '';
        input.value = '';
      },
      getInput() {
        return input;
      }
    };
  }

  /**
   * Initialize cascading location dropdowns
   * @param {object} config
   * @param {string} config.stateEl - CSS selector for state element
   * @param {string} config.districtEl - CSS selector for district element
   * @param {string} config.talukEl - CSS selector for taluk element
   */
  async function init(config) {
    // Note: Fetch the new dataset with taluks
    if (!_locationData) {
      try {
        const resp = await fetch('assets/data/india-locations-taluks.json');
        _locationData = await resp.json();
      } catch (err) {
        console.error('Failed to load taluk location data:', err);
        _locationData = { states: [] };
      }
    }
    const data = _locationData;

    const stateEl = document.querySelector(config.stateEl);
    const districtEl = document.querySelector(config.districtEl);
    const talukEl = config.talukEl ? document.querySelector(config.talukEl) : null;

    if (!stateEl || !districtEl) {
      console.error('LocationDropdown: state or district element not found');
      return null;
    }

    // Build state options from JSON
    const stateOptions = data.states.map(s => ({
      id: s.state,
      name: s.state
    })).sort((a, b) => a.name.localeCompare(b.name));

    // Create searchable taluk combo
    let talukCombo = null;
    if (talukEl) {
      talukCombo = createSearchableSelect(talukEl, 'Search taluk...', () => {});
    }

    // Create searchable district combo
    const districtCombo = createSearchableSelect(districtEl, 'Search district...', (districtId, districtName) => {
      if (talukCombo) {
        // Find the selected state data
        const currentStateName = stateCombo.getValue().name;
        const stateData = data.states.find(s => s.state === currentStateName);
        if (stateData) {
          const districtData = stateData.districts.find(d => d.district === districtName);
          const talukOpts = districtData && districtData.taluks
            ? districtData.taluks.map(t => ({ id: t, name: t.trim() })).sort((a, b) => a.name.localeCompare(b.name))
            : [];
          talukCombo.setOptions(talukOpts);
          talukCombo.clear();
        }
      }
    });

    // Create searchable state combo
    const stateCombo = createSearchableSelect(stateEl, 'Search state...', (stateId, stateName) => {
      // When state changes, update district options
      const stateData = data.states.find(s => s.state === stateName);
      const districtOpts = stateData
        ? stateData.districts.map(d => ({ id: d.district, name: d.district.trim() })).sort((a, b) => a.name.localeCompare(b.name))
        : [];
      districtCombo.setOptions(districtOpts);
      districtCombo.clear();
      if (talukCombo) {
        talukCombo.setOptions([]);
        talukCombo.clear();
      }
    });
    stateCombo.setOptions(stateOptions);

    const instance = {
      state: stateCombo,
      district: districtCombo,
      taluk: talukCombo,
      setValues(stateName, districtName, talukName) {
        // Set state
        if (stateName) {
          stateCombo.setValue(stateName, stateName);
          // Load districts
          const stateData = data.states.find(s => s.state === stateName);
          const districtOpts = stateData
            ? stateData.districts.map(d => ({ id: d.district, name: d.district.trim() })).sort((a, b) => a.name.localeCompare(b.name))
            : [];
          districtCombo.setOptions(districtOpts);
        }
        if (districtName) {
          districtCombo.setValue(districtName, districtName);
          // Load taluks
          if (talukCombo) {
            const currentStateName = stateCombo.getValue().name;
            const stateData = data.states.find(s => s.state === currentStateName);
            if (stateData) {
              const districtData = stateData.districts.find(d => d.district === districtName);
              const talukOpts = districtData && districtData.taluks
                ? districtData.taluks.map(t => ({ id: t, name: t.trim() })).sort((a, b) => a.name.localeCompare(b.name))
                : [];
              talukCombo.setOptions(talukOpts);
            }
          }
        }
        if (talukName && talukCombo) {
          talukCombo.setValue(talukName, talukName);
        }
      },
      getValues() {
        return {
          state: stateCombo.getValue().name,
          district: districtCombo.getValue().name,
          taluk: talukCombo ? talukCombo.getValue().name : ''
        };
      },
      clear() {
        stateCombo.clear();
        districtCombo.setOptions([]);
        districtCombo.clear();
        if (talukCombo) {
          talukCombo.setOptions([]);
          talukCombo.clear();
        }
      }
    };

    _instances.push(instance);
    return instance;
  }

  return { init, loadData };
})();

// Make it globally available
window.LocationDropdown = LocationDropdown;
