/**
 * BILLING SYSTEM - DATA STORE
 * Mock data and state management for Phase 1
 * Designed for easy replacement with API calls in Phase 2
 */

const Store = {
  // ---- Company Settings ----
  company: {
    name: 'Shree Textiles',
    gstin: '33AABCT1332L1ZZ',
    address: '123, Main Road, T.Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    stateCode: '33',
    pincode: '600017',
    phone: '044-2434-5678',
    mobile: '9876543210',
    email: 'info@shreetextiles.com',
    tagline: '',
    invoicePrefix: 'INV',
    bankName: 'State Bank of India',
    accountNo: '1234567890',
    ifsc: 'SBIN0001234',
    branch: 'T.Nagar Branch'
  },

  // ---- Products ----
  products: [
    { id: 1, hsn: '5208', code: 'TEX001', name: 'Cotton Saree - Kanchipuram', category: 'Sarees', unit: 'Pcs', size: '', gst: 5, rate: 2500, stock: 45, description: 'Premium handloom cotton saree', status: 'active' },
    { id: 2, hsn: '5007', code: 'TEX002', name: 'Silk Saree - Banarasi', category: 'Sarees', unit: 'Pcs', size: '', gst: 5, rate: 4500, stock: 30, description: 'Pure silk banarasi saree', status: 'active' },
    { id: 3, hsn: '6205', code: 'TEX003', name: 'Men Formal Shirt - White', category: 'Shirts', unit: 'Pcs', size: '', gst: 5, rate: 850, stock: 120, description: 'Cotton formal shirt', status: 'active' },
    { id: 4, hsn: '6204', code: 'TEX004', name: 'Ladies Churidar Set', category: 'Dress Materials', unit: 'Set', size: '', gst: 5, rate: 1200, stock: 65, description: 'Cotton churidar with dupatta', status: 'active' },
    { id: 5, hsn: '6109', code: 'TEX005', name: 'Kids T-Shirt - Printed', category: 'Kids Wear', unit: 'Pcs', size: '', gst: 5, rate: 350, stock: 200, description: 'Printed cotton t-shirt for kids', status: 'active' },
    { id: 6, hsn: '6203', code: 'TEX006', name: 'Men Denim Jeans', category: 'Trousers', unit: 'Pcs', size: '', gst: 12, rate: 1450, stock: 80, description: 'Slim fit denim jeans', status: 'active' },
    { id: 7, hsn: '6302', code: 'TEX007', name: 'Bedsheet Double - Floral', category: 'Home Textile', unit: 'Set', size: '', gst: 5, rate: 950, stock: 55, description: 'Double bedsheet with 2 pillow covers', status: 'active' },
    { id: 8, hsn: '6302', code: 'TEX008', name: 'Towel Bath - Premium', category: 'Home Textile', unit: 'Pcs', size: '', gst: 5, rate: 320, stock: 8, description: 'Premium cotton bath towel', status: 'active' },
    { id: 9, hsn: '6104', code: 'TEX009', name: 'Ladies Leggings', category: 'Bottom Wear', unit: 'Pcs', size: '', gst: 5, rate: 280, stock: 150, description: 'Stretchable cotton leggings', status: 'active' },
    { id: 10, hsn: '5007', code: 'TEX010', name: 'Silk Dhoti - Cream', category: 'Traditional', unit: 'Pcs', size: '', gst: 5, rate: 680, stock: 3, description: 'Pure silk dhoti', status: 'active' },
    { id: 11, hsn: '6201', code: 'TEX011', name: 'Winter Jacket - Men', category: 'Jackets', unit: 'Pcs', size: '', gst: 12, rate: 2200, stock: 35, description: 'Padded winter jacket', status: 'active' },
    { id: 12, hsn: '6303', code: 'TEX012', name: 'Curtain Set - Eyelet', category: 'Home Textile', unit: 'Set', size: '', gst: 12, rate: 1800, stock: 5, description: 'Eyelet curtain with lining', status: 'inactive' }
  ],

  // ---- Customers ----
  customers: [
    { id: 1, name: 'Rajesh Kumar', gstin: '33AADCR9876K1ZZ', mobile: '9876501234', email: 'rajesh@example.com', address: '45, Mount Road', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Egmore', pincode: '600032' },
    { id: 2, name: 'Lakshmi Traders', gstin: '33AABCL5432M1ZZ', mobile: '9876502345', email: 'lakshmi@traders.com', address: '78, Anna Salai', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Teynampet', pincode: '600002' },
    { id: 3, name: 'Priya Fashions', gstin: '33AABCP3210N1ZZ', mobile: '9876503456', email: 'priya@fashions.com', address: '12, Ranganathan Street', state: 'Tamil Nadu', district: 'Chennai', taluk: 'T. Nagar', pincode: '600017' },
    { id: 4, name: 'Mohammed Ismail', gstin: '', mobile: '9876504567', email: 'ismail@email.com', address: '90, George Town', state: 'Tamil Nadu', district: 'Chennai', taluk: 'George Town', pincode: '600001' },
    { id: 5, name: 'Anita Sharma', gstin: '07AADCA7654P1ZZ', mobile: '9876505678', email: 'anita@sharma.com', address: '34, Connaught Place', state: 'Delhi', district: 'New Delhi', taluk: 'Connaught Place', pincode: '110001' },
    { id: 6, name: 'Ganesh Textiles', gstin: '33AABCG2109Q1ZZ', mobile: '9876506789', email: 'ganesh@textiles.com', address: '56, Godown Street', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Parrys', pincode: '600001' },
    { id: 7, name: 'Sunita Devi', gstin: '', mobile: '9876507890', email: '', address: '23, Main Bazaar', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Avadi', pincode: '600040' },
    { id: 8, name: 'Karthik Stores', gstin: '33AABCK8765R1ZZ', mobile: '9876508901', email: 'karthik@stores.com', address: '67, Usman Road', state: 'Tamil Nadu', district: 'Chennai', taluk: 'T. Nagar', pincode: '600017' }
  ],

  // ---- Suppliers ----
  suppliers: [
    { id: 1, name: 'Supreme Fabricators', contactPerson: 'Arun Kumar', gstin: '33AABCS1234K1ZZ', mobile: '9876543210', mobile2: '9876543211', email: 'supreme@fab.com', address: 'B-24, Industrial Estate', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Guindy', pincode: '600032' },
    { id: 2, name: 'Apex Steel Industries', contactPerson: 'Vijay Verma', gstin: '27AABCA4567R1ZZ', mobile: '9123456789', mobile2: '', email: 'sales@apexsteel.com', address: '102, Wagle Estate', state: 'Maharashtra', district: 'Thane', taluk: 'Thane', pincode: '400604' }
  ],

  // ---- Invoices ----
  invoices: [
    {
      id: 1, number: 'INV-2025-001', date: '2025-05-20', customerId: 1, customerName: 'Rajesh Kumar',
      agent: 'Self', supplyType: 'Intra-State',
      items: [
        { productId: 1, hsn: '5208', name: 'Cotton Saree - Kanchipuram', qty: 2, rate: 2500, discount: 0, gst: 5, amount: 5000 },
        { productId: 3, hsn: '6205', name: 'Men Formal Shirt - White', qty: 3, rate: 850, discount: 0, gst: 5, amount: 2550 }
      ],
      subtotal: 7550, cgst: 188.75, sgst: 188.75, discount: 0, roundOff: 0.50, netTotal: 7928
    },
    {
      id: 2, number: 'INV-2025-002', date: '2025-05-21', customerId: 2, customerName: 'Lakshmi Traders',
      agent: 'Agent A', supplyType: 'Intra-State',
      items: [
        { productId: 6, hsn: '6203', name: 'Men Denim Jeans', qty: 10, rate: 1450, discount: 5, gst: 12, amount: 13775 },
        { productId: 4, hsn: '6204', name: 'Ladies Churidar Set', qty: 5, rate: 1200, discount: 0, gst: 5, amount: 6000 }
      ],
      subtotal: 19775, cgst: 1126.50, sgst: 1126.50, discount: 725, roundOff: -0.00, netTotal: 22028
    },
    {
      id: 3, number: 'INV-2025-003', date: '2025-05-22', customerId: 3, customerName: 'Priya Fashions',
      agent: 'Self', supplyType: 'Intra-State',
      items: [
        { productId: 2, hsn: '5007', name: 'Silk Saree - Banarasi', qty: 1, rate: 4500, discount: 0, gst: 5, amount: 4500 }
      ],
      subtotal: 4500, cgst: 112.50, sgst: 112.50, discount: 0, roundOff: 0, netTotal: 4725
    }
  ],

  // ---- Returns ----
  returns: [
    {
      id: 1, number: 'RET-2025-001', date: '2025-05-21', invoiceRef: 'INV-2025-001', customerId: 1, customerName: 'Rajesh Kumar',
      reason: 'Defective product',
      items: [
        { productId: 3, name: 'Men Formal Shirt - White', qty: 1, rate: 850, amount: 850 }
      ],
      refundTotal: 893 // incl GST
    }
  ],

  // ---- Users ----
  users: [
    { id: 1, username: 'admin', password: 'admin', name: 'Admin', role: 'Admin', permissions: { dashboard: true, products: true, customers: true, suppliers: true, invoices: true, returns: true, inventory: true, reports: true, settings: true } },
    { id: 2, username: 'staff', password: 'staff', name: 'Staff Member', role: 'Staff', permissions: { dashboard: true, products: true, customers: true, suppliers: false, invoices: true, returns: false, inventory: true, reports: false, settings: false } }
  ],

  // ---- Categories ----
  categories: ['Sarees', 'Shirts', 'Dress Materials', 'Kids Wear', 'Trousers', 'Home Textile', 'Bottom Wear', 'Traditional', 'Jackets', 'Accessories'],

  // ---- Units ----
  units: ['Pcs', 'Set', 'Mtr', 'Kg', 'Ltr', 'Box', 'Pair', 'Dozen'],

  // ---- Sizes ----
  sizes: ['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', 'Free Size'],

  // ---- GST Rates ----
  gstRates: [0, 5, 12, 18, 28],

  // ---- States ----
  states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],

  // ---- Counters ----
  _nextProductId: 13,
  _nextCustomerId: 9,
  _nextSupplierId: 3,
  _nextInvoiceId: 4,
  _nextReturnId: 2,
  _nextUserId: 3,
  _invoiceCounter: 4,
  _returnCounter: 2,

  // ---- CRUD Methods (simulating API) ----

  // Products
  getProducts() { return [...this.products]; },
  getProductById(id) { return this.products.find(p => p.id === id); },
  addProduct(product) {
    product.id = this._nextProductId++;
    this.products.push(product);
    this._save();
    return product;
  },
  updateProduct(id, data) {
    const idx = this.products.findIndex(p => p.id === id);
    if (idx !== -1) { this.products[idx] = { ...this.products[idx], ...data }; this._save(); }
    return this.products[idx];
  },
  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    this._save();
  },

  // Customers
  getCustomers() { return [...this.customers]; },
  getCustomerById(id) { return this.customers.find(c => c.id === id); },
  addCustomer(customer) {
    customer.id = this._nextCustomerId++;
    this.customers.push(customer);
    this._save();
    return customer;
  },
  updateCustomer(id, data) {
    const idx = this.customers.findIndex(c => c.id === id);
    if (idx !== -1) { this.customers[idx] = { ...this.customers[idx], ...data }; this._save(); }
    return this.customers[idx];
  },
  deleteCustomer(id) {
    this.customers = this.customers.filter(c => c.id !== id);
    this._save();
  },

  // Suppliers
  getSuppliers() { return [...this.suppliers]; },
  getSupplierById(id) { return this.suppliers.find(s => s.id === id); },
  addSupplier(supplier) {
    supplier.id = this._nextSupplierId++;
    this.suppliers.push(supplier);
    this._save();
    return supplier;
  },
  updateSupplier(id, data) {
    const idx = this.suppliers.findIndex(s => s.id === id);
    if (idx !== -1) { this.suppliers[idx] = { ...this.suppliers[idx], ...data }; this._save(); }
    return this.suppliers[idx];
  },
  deleteSupplier(id) {
    this.suppliers = this.suppliers.filter(s => s.id !== id);
    this._save();
  },

  // Invoices
  getInvoices() { return [...this.invoices]; },
  getInvoiceById(id) { return this.invoices.find(i => i.id === id); },
  addInvoice(invoice) {
    invoice.id = this._nextInvoiceId++;
    invoice.number = `${this.company.invoicePrefix}-2025-${String(this._invoiceCounter++).padStart(3, '0')}`;
    this.invoices.unshift(invoice);
    this._save();
    return invoice;
  },

  // Returns
  getReturns() { return [...this.returns]; },
  addReturn(ret) {
    ret.id = this._nextReturnId++;
    ret.number = `RET-2025-${String(this._returnCounter++).padStart(3, '0')}`;
    this.returns.unshift(ret);
    this._save();
    return ret;
  },

  // Generate next invoice number
  getNextInvoiceNumber() {
    return `${this.company.invoicePrefix}-2025-${String(this._invoiceCounter).padStart(3, '0')}`;
  },

  getNextReturnNumber() {
    return `RET-2025-${String(this._returnCounter).padStart(3, '0')}`;
  },

  // Dashboard stats
  getDashboardStats() {
    const totalSales = this.invoices.reduce((sum, inv) => sum + inv.netTotal, 0);
    const totalReturns = this.returns.reduce((sum, ret) => sum + ret.refundTotal, 0);
    const lowStockProducts = this.products.filter(p => p.stock <= 10 && p.status === 'active');
    return {
      totalSales,
      totalReturns,
      totalCustomers: this.customers.length,
      totalProducts: this.products.length,
      totalInvoices: this.invoices.length,
      lowStockProducts,
      recentInvoices: this.invoices.slice(0, 5),
      recentReturns: this.returns.slice(0, 5)
    };
  },

  // Persistence (localStorage)
  _save() {
    try {
      localStorage.setItem('billing_store', JSON.stringify({
        products: this.products,
        customers: this.customers,
        suppliers: this.suppliers,
        invoices: this.invoices,
        returns: this.returns,
        company: this.company,
        gstRates: this.gstRates,
        categories: this.categories,
        units: this.units,
        sizes: this.sizes,
        users: this.users,
        _nextProductId: this._nextProductId,
        _nextCustomerId: this._nextCustomerId,
        _nextSupplierId: this._nextSupplierId,
        _nextInvoiceId: this._nextInvoiceId,
        _nextReturnId: this._nextReturnId,
        _nextUserId: this._nextUserId,
        _invoiceCounter: this._invoiceCounter,
        _returnCounter: this._returnCounter
      }));
    } catch(e) { console.warn('LocalStorage save failed:', e); }
  },

  _load() {
    try {
      const data = localStorage.getItem('billing_store');
      if (data) {
        const parsed = JSON.parse(data);
        Object.assign(this, parsed);
        this._migrateBarcodeToHsn();
      }
      if (!this.categories) {
        this.categories = ['Sarees', 'Shirts', 'Dress Materials', 'Kids Wear', 'Trousers', 'Home Textile', 'Bottom Wear', 'Traditional', 'Jackets', 'Accessories'];
      }
      if (!this.units) {
        this.units = ['Pcs', 'Set', 'Mtr', 'Kg', 'Ltr', 'Box', 'Pair', 'Dozen'];
      }
      if (!this.sizes) {
        this.sizes = ['S', 'M', 'L', 'XL', 'XXL', '38', '40', '42', 'Free Size'];
      }
      if (!this.users || !Array.isArray(this.users)) {
        this.users = [
          { id: 1, username: 'admin', password: 'admin', name: 'Admin', role: 'Admin', permissions: { dashboard: true, products: true, customers: true, suppliers: true, invoices: true, returns: true, inventory: true, reports: true, settings: true } },
          { id: 2, username: 'staff', password: 'staff', name: 'Staff Member', role: 'Staff', permissions: { dashboard: true, products: true, customers: true, suppliers: false, invoices: true, returns: false, inventory: true, reports: false, settings: false } }
        ];
        this._nextUserId = 3;
      }
      if (!this.returns || !Array.isArray(this.returns)) {
        this.returns = [];
      }
      // Ensure counter is valid even on old sessions
      if (!this._nextUserId || this._nextUserId <= this.users.length) {
        this._nextUserId = Math.max(...this.users.map(u => u.id || 0)) + 1;
      }
    } catch(e) { console.warn('LocalStorage load failed:', e); }
  },

  _migrateBarcodeToHsn() {
    if (this.products) {
      this.products.forEach(p => {
        if (!p.hsn && p.barcode) { p.hsn = p.barcode; delete p.barcode; }
        if (p.size == null) p.size = '';
      });
    }
    if (this.customers) {
      this.customers.forEach(c => {
        if (c.district == null) c.district = '';
        if (c.taluk == null) c.taluk = '';
      });
    }
    if (!this.suppliers) {
      this.suppliers = [
        { id: 1, name: 'Supreme Fabricators', contactPerson: 'Arun Kumar', gstin: '33AABCS1234K1ZZ', mobile: '9876543210', mobile2: '9876543211', email: 'supreme@fab.com', address: 'B-24, Industrial Estate', state: 'Tamil Nadu', district: 'Chennai', taluk: 'Guindy', pincode: '600032' },
        { id: 2, name: 'Apex Steel Industries', contactPerson: 'Vijay Verma', gstin: '27AABCA4567R1ZZ', mobile: '9123456789', mobile2: '', email: 'sales@apexsteel.com', address: '102, Wagle Estate', state: 'Maharashtra', district: 'Thane', taluk: 'Thane', pincode: '400604' }
      ];
      this._nextSupplierId = 3;
    } else {
      this.suppliers.forEach(s => {
        if (s.district == null) s.district = '';
        if (s.taluk == null) s.taluk = '';
      });
    }
    if (this.invoices) {
      this.invoices.forEach(inv => {
        inv.items?.forEach(item => {
          if (!item.hsn && item.barcode) { item.hsn = item.barcode; delete item.barcode; }
        });
      });
    }
  },

  // ---- User Management ----
  getUsers() { return [...this.users]; },
  getUserById(id) {
    return this.users.find(u => u.id === id);
  },
  addUser(user) {
    user.id = this._nextUserId++;
    this.users.push(user);
    this._save();
    return user;
  },
  updateUser(id, data) {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx !== -1) {
      if (this.users[idx].id === 1) {
        data.role = 'Admin';
        data.username = 'admin';
      }
      this.users[idx] = { ...this.users[idx], ...data };
      this._save();
      const cur = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
      if (cur && cur.id === id) {
        sessionStorage.setItem('currentUser', JSON.stringify(this.users[idx]));
      }
    }
  },
  deleteUser(id) {
    if (id === 1) return;
    this.users = this.users.filter(u => u.id !== id);
    this._save();
  },

  _reset() {
    this.products = [];
    this.customers = [];
    this.suppliers = [];
    this.invoices = [];
    this.returns = [];
    this._nextProductId = 1;
    this._nextCustomerId = 1;
    this._nextSupplierId = 1;
    this._nextInvoiceId = 1;
    this._nextReturnId = 1;
    this._invoiceCounter = 1;
    this._returnCounter = 1;
    this.users = [
      { id: 1, username: 'admin', password: 'admin', name: 'Admin', role: 'Admin', permissions: { dashboard: true, products: true, customers: true, suppliers: true, invoices: true, returns: true, inventory: true, reports: true, settings: true } }
    ];
    this._nextUserId = 2;
    this._save();
    location.reload();
  }
};

// Load saved data on init
Store._load();
window.Store = Store;
