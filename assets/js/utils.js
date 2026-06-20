/**
 * BILLING SYSTEM - UTILITY FUNCTIONS
 */

const Utils = {
  // Format currency (INR)
  currency(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  // Format number
  num(val, decimals = 2) {
    return Number(val).toFixed(decimals);
  },

  // Format date
  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  },

  // Today's date in YYYY-MM-DD
  today() {
    return new Date().toISOString().split('T')[0];
  },

  // Current date-time display
  currentDateTime() {
    const now = new Date();
    return now.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }) +
      ' | ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  },

  // Number to words (Indian system)
  numberToWords(num) {
    if (num === 0) return 'Zero';
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function convertGroup(n) {
      if (n === 0) return '';
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
      return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + convertGroup(n % 100) : '');
    }

    const intPart = Math.floor(Math.abs(num));
    const decimal = Math.round((Math.abs(num) - intPart) * 100);

    let result = '';
    if (intPart >= 10000000) {
      result += convertGroup(Math.floor(intPart / 10000000)) + ' Crore ';
    }
    if (intPart >= 100000) {
      result += convertGroup(Math.floor((intPart % 10000000) / 100000)) + ' Lakh ';
    }
    if (intPart >= 1000) {
      result += convertGroup(Math.floor((intPart % 100000) / 1000)) + ' Thousand ';
    }
    result += convertGroup(intPart % 1000);

    result = result.trim() + ' Rupees';
    if (decimal > 0) {
      result += ' and ' + convertGroup(decimal) + ' Paise';
    }
    return result + ' Only';
  },

  // GST calculation
  calculateGST(amount, gstPercent) {
    const halfGST = gstPercent / 2;
    const cgst = (amount * halfGST) / 100;
    const sgst = (amount * halfGST) / 100;
    return { cgst, sgst, total: cgst + sgst };
  },

  // Calculate line item
  calculateLineItem(qty, rate, discount, gstPercent) {
    const gross = qty * rate;
    const discountAmount = (gross * discount) / 100;
    const taxableAmount = gross - discountAmount;
    const gst = Utils.calculateGST(taxableAmount, gstPercent);
    return {
      gross,
      discountAmount,
      taxableAmount,
      cgst: gst.cgst,
      sgst: gst.sgst,
      totalGST: gst.total,
      netAmount: taxableAmount + gst.total
    };
  },

  // Show toast notification
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-circle-fill';
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="bi ${icon}" style="color:var(--${type === 'success' ? 'success' : 'danger'})"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
  },

  // Debounce
  debounce(fn, delay = 300) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Search filter
  searchFilter(items, query, keys) {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter(item => keys.some(key => String(item[key] || '').toLowerCase().includes(q)));
  },

  // Generate ID
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
};
