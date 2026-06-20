import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: string;
  __typename?: 'Category_Key';
}

export interface CompanySetting_Key {
  id: string;
  __typename?: 'CompanySetting_Key';
}

export interface Customer_Key {
  id: string;
  __typename?: 'Customer_Key';
}

export interface District_Key {
  id: string;
  __typename?: 'District_Key';
}

export interface GetDashboardStatsData {
  products: ({
    id: string;
    name: string;
    stock: number;
  } & Product_Key)[];
}

export interface InvoiceItem_Key {
  id: string;
  __typename?: 'InvoiceItem_Key';
}

export interface Invoice_Key {
  id: string;
  __typename?: 'Invoice_Key';
}

export interface ListProductsData {
  products: ({
    id: string;
    name: string;
    rate: number;
    stock: number;
    status: string;
  } & Product_Key)[];
}

export interface ProductPriceHistory_Key {
  id: string;
  __typename?: 'ProductPriceHistory_Key';
}

export interface Product_Key {
  id: string;
  __typename?: 'Product_Key';
}

export interface ReturnItem_Key {
  id: string;
  __typename?: 'ReturnItem_Key';
}

export interface Return_Key {
  id: string;
  __typename?: 'Return_Key';
}

export interface Size_Key {
  id: string;
  __typename?: 'Size_Key';
}

export interface State_Key {
  id: string;
  __typename?: 'State_Key';
}

export interface Supplier_Key {
  id: string;
  __typename?: 'Supplier_Key';
}

export interface Unit_Key {
  id: string;
  __typename?: 'Unit_Key';
}

export interface UserPermission_Key {
  id: string;
  __typename?: 'UserPermission_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(): QueryPromise<ListProductsData, undefined>;
export function listProducts(dc: DataConnect): QueryPromise<ListProductsData, undefined>;

interface GetDashboardStatsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDashboardStatsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDashboardStatsData, undefined>;
  operationName: string;
}
export const getDashboardStatsRef: GetDashboardStatsRef;

export function getDashboardStats(): QueryPromise<GetDashboardStatsData, undefined>;
export function getDashboardStats(dc: DataConnect): QueryPromise<GetDashboardStatsData, undefined>;

