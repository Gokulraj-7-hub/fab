// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDataConnect } from "firebase/data-connect";
import { 
  connectorConfig, listProducts, 
  createCategory, createUnit, createSize, 
  createProduct, createCustomer, createSupplier,
  createState, createDistrict, createTaluk, listStates, listDistrictsByState, listTaluksByDistrict,
  listSuppliers, listCustomers, updateCustomer, deleteCustomer, updateSupplier, deleteSupplier
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
window.listStates = listStates;
window.listDistrictsByState = listDistrictsByState;
window.listTaluksByDistrict = listTaluksByDistrict;
window.createState = createState;
window.createDistrict = createDistrict;
window.createTaluk = createTaluk;
window.listSuppliers = listSuppliers;
window.listCustomers = listCustomers;
window.createSupplier = createSupplier;
window.updateSupplier = updateSupplier;
window.deleteSupplier = deleteSupplier;
window.createCustomer = createCustomer;
window.updateCustomer = updateCustomer;
window.deleteCustomer = deleteCustomer;

// Location Data Seeding Script
window.seedLocations = async () => {
  console.log("Starting Location Data Seeding...");
  try {
    const resp = await fetch('assets/data/india-locations-taluks.json');
    const data = await resp.json();
    
    let stateCount = 0;
    let distCount = 0;
    let talukCount = 0;

    // Load existing states
    const existingStatesRes = await listStates();
    const existingStatesMap = {};
    if (existingStatesRes && existingStatesRes.data && existingStatesRes.data.states) {
      for (const st of existingStatesRes.data.states) {
        existingStatesMap[st.name] = st.id;
      }
    }

    for (const s of data.states) {
      console.log(`Processing state: ${s.state}`);
      let stateId = existingStatesMap[s.state];
      if (!stateId) {
        const stateRes = await createState({ name: s.state, status: "active" });
        stateId = Object.values(stateRes.data.state_insert)[0];
        stateCount++;
      }

      // Load existing districts for this state
      const existingDistRes = await listDistrictsByState({ stateId });
      const existingDistMap = {};
      if (existingDistRes && existingDistRes.data && existingDistRes.data.districts) {
        for (const d of existingDistRes.data.districts) {
          existingDistMap[d.name] = d.id;
        }
      }

      for (const d of s.districts) {
        const dName = d.district.trim();
        let distId = existingDistMap[dName];
        if (!distId) {
          const distRes = await createDistrict({ name: dName, stateId: stateId, status: "active" });
          distId = Object.values(distRes.data.district_insert)[0];
          distCount++;
        }
        
        // Load existing taluks for this district
        const existingTalukRes = await listTaluksByDistrict({ districtId: distId });
        const existingTalukMap = {};
        if (existingTalukRes && existingTalukRes.data && existingTalukRes.data.taluks) {
          for (const t of existingTalukRes.data.taluks) {
            existingTalukMap[t.name] = t.id;
          }
        }

        const talukPromises = [];
        for (const t of d.taluks) {
          const tName = t.trim();
          if (!existingTalukMap[tName]) {
            talukPromises.push(
              createTaluk({ name: tName, districtId: distId, status: "active" })
                .then(() => { talukCount++; })
                .catch(err => console.error(`Error adding taluk ${tName}:`, err))
            );
          }
        }
        await Promise.all(talukPromises);
      }
    }
    console.log(`✅ SEEDING COMPLETE! Inserted ${stateCount} new states, ${distCount} new districts, and ${talukCount} new taluks.`);
  } catch (error) {
    console.error("Location Seeding failed:", error);
  }
};

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
      categoryMap[catName] = Object.values(res.data.category_insert)[0]; // Extract ID string
    }
    console.log("Categories migrated.");

    // 2. Migrate Units
    const unitMap = {};
    for (const unitName of window.Store.units) {
      const res = await createUnit({ name: unitName, status: "active" });
      unitMap[unitName] = Object.values(res.data.unit_insert)[0];
    }
    console.log("Units migrated.");

    // 3. Migrate Sizes
    const sizeMap = {};
    for (const sizeName of window.Store.sizes) {
      const res = await createSize({ name: sizeName, status: "active" });
      sizeMap[sizeName] = Object.values(res.data.size_insert)[0];
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
