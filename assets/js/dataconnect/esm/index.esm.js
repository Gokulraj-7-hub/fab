import { queryRef, executeQuery, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'billing-12fda-service',
  location: 'us-east4'
};

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

