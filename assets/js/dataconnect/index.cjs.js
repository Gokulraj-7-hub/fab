const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'billing-12fda-service',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

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

const createStateRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateState', inputVars);
}
createStateRef.operationName = 'CreateState';
exports.createStateRef = createStateRef;

exports.createState = function createState(dcOrVars, vars) {
  return executeMutation(createStateRef(dcOrVars, vars));
};

const createDistrictRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDistrict', inputVars);
}
createDistrictRef.operationName = 'CreateDistrict';
exports.createDistrictRef = createDistrictRef;

exports.createDistrict = function createDistrict(dcOrVars, vars) {
  return executeMutation(createDistrictRef(dcOrVars, vars));
};

const createTalukRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTaluk', inputVars);
}
createTalukRef.operationName = 'CreateTaluk';
exports.createTalukRef = createTalukRef;

exports.createTaluk = function createTaluk(dcOrVars, vars) {
  return executeMutation(createTalukRef(dcOrVars, vars));
};

const updateCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCustomer', inputVars);
}
updateCustomerRef.operationName = 'UpdateCustomer';
exports.updateCustomerRef = updateCustomerRef;

exports.updateCustomer = function updateCustomer(dcOrVars, vars) {
  return executeMutation(updateCustomerRef(dcOrVars, vars));
};

const deleteCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteCustomer', inputVars);
}
deleteCustomerRef.operationName = 'DeleteCustomer';
exports.deleteCustomerRef = deleteCustomerRef;

exports.deleteCustomer = function deleteCustomer(dcOrVars, vars) {
  return executeMutation(deleteCustomerRef(dcOrVars, vars));
};

const updateSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSupplier', inputVars);
}
updateSupplierRef.operationName = 'UpdateSupplier';
exports.updateSupplierRef = updateSupplierRef;

exports.updateSupplier = function updateSupplier(dcOrVars, vars) {
  return executeMutation(updateSupplierRef(dcOrVars, vars));
};

const deleteSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSupplier', inputVars);
}
deleteSupplierRef.operationName = 'DeleteSupplier';
exports.deleteSupplierRef = deleteSupplierRef;

exports.deleteSupplier = function deleteSupplier(dcOrVars, vars) {
  return executeMutation(deleteSupplierRef(dcOrVars, vars));
};

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

const listStatesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListStates');
}
listStatesRef.operationName = 'ListStates';
exports.listStatesRef = listStatesRef;

exports.listStates = function listStates(dc) {
  return executeQuery(listStatesRef(dc));
};

const listDistrictsByStateRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDistrictsByState', inputVars);
}
listDistrictsByStateRef.operationName = 'ListDistrictsByState';
exports.listDistrictsByStateRef = listDistrictsByStateRef;

exports.listDistrictsByState = function listDistrictsByState(dcOrVars, vars) {
  return executeQuery(listDistrictsByStateRef(dcOrVars, vars));
};

const listTaluksByDistrictRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTaluksByDistrict', inputVars);
}
listTaluksByDistrictRef.operationName = 'ListTaluksByDistrict';
exports.listTaluksByDistrictRef = listTaluksByDistrictRef;

exports.listTaluksByDistrict = function listTaluksByDistrict(dcOrVars, vars) {
  return executeQuery(listTaluksByDistrictRef(dcOrVars, vars));
};

const listSuppliersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSuppliers');
}
listSuppliersRef.operationName = 'ListSuppliers';
exports.listSuppliersRef = listSuppliersRef;

exports.listSuppliers = function listSuppliers(dc) {
  return executeQuery(listSuppliersRef(dc));
};

const listCustomersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCustomers');
}
listCustomersRef.operationName = 'ListCustomers';
exports.listCustomersRef = listCustomersRef;

exports.listCustomers = function listCustomers(dc) {
  return executeQuery(listCustomersRef(dc));
};
