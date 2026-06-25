import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'billing-12fda-service',
  location: 'us-east4'
};

export const createCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCategory', inputVars);
}
createCategoryRef.operationName = 'CreateCategory';

export function createCategory(dcOrVars, vars) {
  return executeMutation(createCategoryRef(dcOrVars, vars));
}

export const createUnitRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUnit', inputVars);
}
createUnitRef.operationName = 'CreateUnit';

export function createUnit(dcOrVars, vars) {
  return executeMutation(createUnitRef(dcOrVars, vars));
}

export const createSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSize', inputVars);
}
createSizeRef.operationName = 'CreateSize';

export function createSize(dcOrVars, vars) {
  return executeMutation(createSizeRef(dcOrVars, vars));
}

export const createProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProduct', inputVars);
}
createProductRef.operationName = 'CreateProduct';

export function createProduct(dcOrVars, vars) {
  return executeMutation(createProductRef(dcOrVars, vars));
}

export const createCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCustomer', inputVars);
}
createCustomerRef.operationName = 'CreateCustomer';

export function createCustomer(dcOrVars, vars) {
  return executeMutation(createCustomerRef(dcOrVars, vars));
}

export const createSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSupplier', inputVars);
}
createSupplierRef.operationName = 'CreateSupplier';

export function createSupplier(dcOrVars, vars) {
  return executeMutation(createSupplierRef(dcOrVars, vars));
}

export const createStateRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateState', inputVars);
}
createStateRef.operationName = 'CreateState';

export function createState(dcOrVars, vars) {
  return executeMutation(createStateRef(dcOrVars, vars));
}

export const createDistrictRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDistrict', inputVars);
}
createDistrictRef.operationName = 'CreateDistrict';

export function createDistrict(dcOrVars, vars) {
  return executeMutation(createDistrictRef(dcOrVars, vars));
}

export const createTalukRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTaluk', inputVars);
}
createTalukRef.operationName = 'CreateTaluk';

export function createTaluk(dcOrVars, vars) {
  return executeMutation(createTalukRef(dcOrVars, vars));
}

export const updateCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCustomer', inputVars);
}
updateCustomerRef.operationName = 'UpdateCustomer';

export function updateCustomer(dcOrVars, vars) {
  return executeMutation(updateCustomerRef(dcOrVars, vars));
}

export const deleteCustomerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteCustomer', inputVars);
}
deleteCustomerRef.operationName = 'DeleteCustomer';

export function deleteCustomer(dcOrVars, vars) {
  return executeMutation(deleteCustomerRef(dcOrVars, vars));
}

export const updateSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSupplier', inputVars);
}
updateSupplierRef.operationName = 'UpdateSupplier';

export function updateSupplier(dcOrVars, vars) {
  return executeMutation(updateSupplierRef(dcOrVars, vars));
}

export const deleteSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSupplier', inputVars);
}
deleteSupplierRef.operationName = 'DeleteSupplier';

export function deleteSupplier(dcOrVars, vars) {
  return executeMutation(deleteSupplierRef(dcOrVars, vars));
}

export const listProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts');
}
listProductsRef.operationName = 'ListProducts';

export function listProducts(dc) {
  return executeQuery(listProductsRef(dc));
}

export const getDashboardStatsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDashboardStats');
}
getDashboardStatsRef.operationName = 'GetDashboardStats';

export function getDashboardStats(dc) {
  return executeQuery(getDashboardStatsRef(dc));
}

export const listStatesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListStates');
}
listStatesRef.operationName = 'ListStates';

export function listStates(dc) {
  return executeQuery(listStatesRef(dc));
}

export const listDistrictsByStateRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDistrictsByState', inputVars);
}
listDistrictsByStateRef.operationName = 'ListDistrictsByState';

export function listDistrictsByState(dcOrVars, vars) {
  return executeQuery(listDistrictsByStateRef(dcOrVars, vars));
}

export const listTaluksByDistrictRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTaluksByDistrict', inputVars);
}
listTaluksByDistrictRef.operationName = 'ListTaluksByDistrict';

export function listTaluksByDistrict(dcOrVars, vars) {
  return executeQuery(listTaluksByDistrictRef(dcOrVars, vars));
}

export const listSuppliersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSuppliers');
}
listSuppliersRef.operationName = 'ListSuppliers';

export function listSuppliers(dc) {
  return executeQuery(listSuppliersRef(dc));
}

export const listCustomersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListCustomers');
}
listCustomersRef.operationName = 'ListCustomers';

export function listCustomers(dc) {
  return executeQuery(listCustomersRef(dc));
}

