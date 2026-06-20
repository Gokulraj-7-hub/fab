const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

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
