// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDataConnect } from "firebase/data-connect";
import { 
  connectorConfig, listProducts, 
  createCategory, createUnit, createSize, 
  createProduct, createCustomer, createSupplier 
} from "./dataconnect/esm/index.esm.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIDgoOJeLrYRMv9aUBNcMRvGOpHn7HOo4",
  authDomain: "billing-12fda.firebaseapp.com",
  projectId: "billing-12fda",
  storageBucket: "billing-12fda.firebasestorage.app",
  messagingSenderId: "5241602780",
  appId: "1:5241602780:web:aa74814f2f51a98282aa19",
  measurementId: "G-2V3GSLD7QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Data Connect
const dataConnect = getDataConnect(app, connectorConfig);

// Expose globally so vanilla JS can use it
window.firebaseApp = app;
window.dataConnect = dataConnect;
window.listProducts = listProducts;

// Data Migration Script
window.runMigration = async () => {
  console.log("Starting Data Migration...");
  
  if (!window.Store) {
    console.error("Store not found! Make sure you are on a page that loads store.js");
    return;
  }

  try {
    // 1. Migrate Categories
    const categoryMap = {};
    for (const catName of window.Store.categories) {
      const res = await createCategory({ name: catName, status: "active" });
      categoryMap[catName] = res.data.category_insert; // get the new ID
    }
    console.log("Categories migrated.");

    // 2. Migrate Units
    const unitMap = {};
    for (const unitName of window.Store.units) {
      const res = await createUnit({ name: unitName, status: "active" });
      unitMap[unitName] = res.data.unit_insert;
    }
    console.log("Units migrated.");

    // 3. Migrate Sizes
    const sizeMap = {};
    for (const sizeName of window.Store.sizes) {
      const res = await createSize({ name: sizeName, status: "active" });
      sizeMap[sizeName] = res.data.size_insert;
    }
    console.log("Sizes migrated.");

    // 4. Migrate Products
    for (const p of window.Store.products) {
      await createProduct({
        name: p.name,
        hsn: p.hsn || "",
        code: p.code || "",
        categoryId: categoryMap[p.category] || null,
        unitId: unitMap[p.unit] || null,
        sizeId: sizeMap[p.size] || null,
        gst: Number(p.gst) || 0,
        rate: Number(p.rate) || 0,
        stock: Number(p.stock) || 0,
        description: p.description || "",
        status: p.status || "active"
      });
    }
    console.log("Products migrated.");

    // 5. Migrate Customers
    for (const c of window.Store.customers) {
      await createCustomer({
        name: c.name,
        gstin: c.gstin || "",
        mobile: c.mobile || "",
        email: c.email || "",
        address: c.address || "",
        status: "active"
      });
    }
    console.log("Customers migrated.");

    // 6. Migrate Suppliers
    for (const s of window.Store.suppliers) {
      await createSupplier({
        name: s.name,
        contactPerson: s.contactPerson || "",
        gstin: s.gstin || "",
        mobile: s.mobile || "",
        email: s.email || "",
        address: s.address || "",
        status: "active"
      });
    }
    console.log("Suppliers migrated.");
    
    console.log("✅ MIGRATION COMPLETE! All static data is now in your Cloud SQL database!");

  } catch (error) {
    console.error("Migration failed:", error);
  }
};

console.log("Firebase and Data Connect initialized successfully!");
