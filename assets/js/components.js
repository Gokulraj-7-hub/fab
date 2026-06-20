/**
 * BILLING SYSTEM - COMPONENT LOADER
 * Loads sidebar and navbar into each page
 */

const Components = {
  currentPage: '',

  init(pageName) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
      location.href = 'login.html';
      return;
    }

    const pageMap = {
      dashboard: 'dashboard.html', products: 'products.html', customers: 'customers.html',
      suppliers: 'suppliers.html', invoices: 'invoice.html', returns: 'returns.html',
      inventory: 'inventory.html', reports: 'reports.html', settings: 'settings.html'
    };
    const modulesList = ['dashboard','products','customers','suppliers','invoices','returns','inventory','reports','settings'];

    const pageKey = pageName.toLowerCase();
    // 'users' page is Admin-only; all other pages check permission key
    const effectiveKey = pageKey;
    const isAllowed = currentUser.role === 'Admin'
      || (pageKey !== 'users' && currentUser.permissions && currentUser.permissions[effectiveKey] === true);

    if (!isAllowed) {
      // Find first allowed page to give the user a useful back button
      const firstAllowed = modulesList.find(m => currentUser.permissions && currentUser.permissions[m] !== false);
      const backPage = firstAllowed ? (pageMap[firstAllowed] || 'login.html') : 'login.html';

      // Scripts run at end of body, DOM is ready — replace immediately
      document.body.innerHTML = `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;background:#f4f5f7;color:#333;text-align:center;padding:24px">
          <i class="bi bi-shield-lock" style="font-size:5rem;color:#dc3545;margin-bottom:16px"></i>
          <h2 style="margin:0 0 8px 0;font-size:1.8rem;font-weight:700">Access Denied</h2>
          <p style="color:#666;margin:0 0 8px 0;font-size:1rem">You don't have permission to access <strong>${pageName}</strong>.</p>
          <p style="color:#999;margin:0 0 28px 0;font-size:0.85rem">Contact your Admin to request access.</p>
          <div style="display:flex;gap:12px">
            <button style="border:1px solid #ccc;background:#fff;padding:10px 20px;border-radius:6px;cursor:pointer;font-size:0.9rem" onclick="sessionStorage.clear();location.href='login.html'">
              <i class="bi bi-box-arrow-left"></i> Logout
            </button>
            <button style="background:#0066cc;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;font-size:0.9rem" onclick="location.href='${backPage}'">
              <i class="bi bi-arrow-left"></i> Go Back
            </button>
          </div>
        </div>
      `;
      return;
    }

    this.currentPage = pageName;
    this.renderSidebar();
    this.renderNavbar(pageName);
    this.setupMobileMenu();
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 60000);
  },

  renderSidebar() {
    const sidebarEl = document.getElementById('sidebar');
    if (!sidebarEl) return;

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{"role":"Admin"}');

    const menuItems = [
      { name: 'Dashboard', icon: 'bi-grid-1x2-fill', href: 'dashboard.html', key: 'dashboard' },
      { name: 'Products', icon: 'bi-box-seam-fill', href: 'products.html', key: 'products' },
      { name: 'Customers', icon: 'bi-people-fill', href: 'customers.html', key: 'customers' },
      { name: 'Suppliers', icon: 'bi-truck', href: 'suppliers.html', key: 'suppliers' },
      { name: 'Invoices', icon: 'bi-receipt', href: 'invoice.html', key: 'invoices' },
      { name: 'Product Return', icon: 'bi-arrow-return-left', href: 'returns.html', key: 'returns' },
      { name: 'Inventory', icon: 'bi-clipboard-data-fill', href: 'inventory.html', key: 'inventory' },
      { name: 'Reports', icon: 'bi-bar-chart-line-fill', href: 'reports.html', key: 'reports' },
      { name: 'Settings', icon: 'bi-gear-fill', href: 'settings.html', key: 'settings' }
    ];

    let allowedItems = menuItems.filter(item => {
      if (currentUser.role === 'Admin') return true;
      return currentUser.permissions && currentUser.permissions[item.key] === true;
    });

    if (currentUser.role === 'Admin') {
      allowedItems.push({ name: 'Users', icon: 'bi-people', href: 'users.html', key: 'users' });
    }

    sidebarEl.innerHTML = `
      <div class="sidebar-brand">
        <div class="brand-icon"><i class="bi bi-receipt-cutoff"></i></div>
        <div>
          <div class="brand-text">BillFlow</div>
          <div class="brand-sub">Billing & Inventory</div>
        </div>
      </div>
      <nav class="sidebar-menu">
        <div class="menu-label">Main Menu</div>
        ${allowedItems.map(item => `
          <a href="${item.href}" class="menu-item ${this.currentPage === item.name ? 'active' : ''}" id="nav-${item.name.toLowerCase()}">
            <i class="bi ${item.icon}"></i>
            <span>${item.name}</span>
          </a>
        `).join('')}
      </nav>
      <div class="sidebar-footer">
        <a href="#" class="menu-item" id="nav-logout" onclick="sessionStorage.clear(); location.href='login.html'; return false;">
          <i class="bi bi-box-arrow-left"></i>
          <span>Logout</span>
        </a>
      </div>
    `;
  },

  renderNavbar(pageName) {
    const navbarEl = document.getElementById('top-navbar');
    if (!navbarEl) return;

    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{"name":"Admin","role":"Admin"}');
    const initials = currentUser.name ? currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'AD';

    const hasSettingsAccess = currentUser.role === 'Admin' || (currentUser.permissions && currentUser.permissions.settings !== false);
    const settingsBtnHTML = hasSettingsAccess ? `
        <button class="nav-icon-btn" title="Settings" id="btn-nav-settings" onclick="location.href='settings.html'">
          <i class="bi bi-gear"></i>
        </button>
    ` : '';

    navbarEl.innerHTML = `
      <div class="navbar-left">
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
          <i class="bi bi-list"></i>
        </button>
        <div class="navbar-breadcrumb">
          <span>Home</span>
          <i class="bi bi-chevron-right" style="font-size:0.7rem"></i>
          <span class="current">${pageName}</span>
        </div>
        <div class="navbar-search">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Search..." id="global-search">
        </div>
      </div>
      <div class="navbar-right">
        <span class="nav-datetime" id="nav-datetime"></span>
        <button class="nav-icon-btn" title="Notifications" id="btn-notifications">
          <i class="bi bi-bell"></i>
          <span class="badge-dot"></span>
        </button>
        ${settingsBtnHTML}
        <div class="user-profile" id="user-profile">
          <div class="avatar">${initials}</div>
          <div class="user-info">
            <div class="user-name">${currentUser.name}</div>
            <div class="user-role">${currentUser.role}</div>
          </div>
        </div>
      </div>
    `;
  },

  setupMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Create overlay
    let overlay = document.getElementById('sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'sidebar-overlay';
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    if (toggle && sidebar) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  },

  updateDateTime() {
    const el = document.getElementById('nav-datetime');
    if (el) el.textContent = Utils.currentDateTime();
  }
};
