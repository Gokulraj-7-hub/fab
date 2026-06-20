// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDataConnect } from "firebase/data-connect";
import { connectorConfig, listProducts } from "./dataconnect/esm/index.esm.js";

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
console.log("Firebase and Data Connect initialized successfully!");
