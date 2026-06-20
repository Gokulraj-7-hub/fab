const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'billing-12fda-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts');
}
listProductsRef.operationName = 'ListProducts';
exports.listProductsRef = listProductsRef;

exports.listProducts = function listProducts(dc) {
  return executeQuery(listProductsRef(dc));
};

const getDashboardStatsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDashboardStats');
}
getDashboardStatsRef.operationName = 'GetDashboardStats';
exports.getDashboardStatsRef = getDashboardStatsRef;

exports.getDashboardStats = function getDashboardStats(dc) {
  return executeQuery(getDashboardStatsRef(dc));
};

const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';
exports.createCategoryRef = createCategoryRef;

exports.createCategory = function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
};

const createUnitRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUnit', inputVars);
}
createUnitRef.operationName = 'CreateUnit';
exports.createUnitRef = createUnitRef;

exports.createUnit = function createUnit(dcOrVars, vars) {
  return executeMutation(createUnitRef(dcOrVars, vars));
};

const createSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSize', inputVars);
}
createSizeRef.operationName = 'CreateSize';
exports.createSizeRef = createSizeRef;

exports.createSize = function createSize(dcOrVars, vars) {
  return executeMutation(createSizeRef(dcOrVars, vars));
};

const createProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProduct', inputVars);
}
createProductRef.operationName = 'CreateProduct';
exports.createProductRef = createProductRef;

exports.createProduct = function createProduct(dcOrVars, vars) {
  return executeMutation(createProductRef(dcOrVars, vars));
};

const createCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCustomer', inputVars);
}
createCustomerRef.operationName = 'CreateCustomer';
exports.createCustomerRef = createCustomerRef;

exports.createCustomer = function createCustomer(dcOrVars, vars) {
  return executeMutation(createCustomerRef(dcOrVars, vars));
};

const createSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSupplier', inputVars);
}
createSupplierRef.operationName = 'CreateSupplier';
exports.createSupplierRef = createSupplierRef;

exports.createSupplier = function createSupplier(dcOrVars, vars) {
  return executeMutation(createSupplierRef(dcOrVars, vars));
};
