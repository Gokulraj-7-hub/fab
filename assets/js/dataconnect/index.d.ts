import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

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

export interface CreateCategoryData {
  category_insert: Category_Key;
}

export interface CreateCategoryVariables {
  name: string;
  status: string;
}

export interface CreateCustomerData {
  customer_insert: Customer_Key;
}

export interface CreateCustomerVariables {
  name: string;
  gstin?: string | null;
  mobile: string;
  email?: string | null;
  address: string;
  status: string;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  name: string;
  hsn?: string | null;
  code?: string | null;
  categoryId?: string | null;
  unitId?: string | null;
  sizeId?: string | null;
  gst: number;
  rate: number;
  stock: number;
  description?: string | null;
  status: string;
}

export interface CreateSizeData {
  size_insert: Size_Key;
}

export interface CreateSizeVariables {
  name: string;
  status: string;
}

export interface CreateSupplierData {
  supplier_insert: Supplier_Key;
}

export interface CreateSupplierVariables {
  name: string;
  contactPerson?: string | null;
  gstin?: string | null;
  mobile: string;
  email?: string | null;
  address: string;
  status: string;
}

export interface CreateUnitData {
  unit_insert: Unit_Key;
}

export interface CreateUnitVariables {
  name: string;
  status: string;
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

interface CreateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
  operationName: string;
}
export const createCategoryRef: CreateCategoryRef;

export function createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;
export function createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateUnitRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUnitVariables): MutationRef<CreateUnitData, CreateUnitVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUnitVariables): MutationRef<CreateUnitData, CreateUnitVariables>;
  operationName: string;
}
export const createUnitRef: CreateUnitRef;

export function createUnit(vars: CreateUnitVariables): MutationPromise<CreateUnitData, CreateUnitVariables>;
export function createUnit(dc: DataConnect, vars: CreateUnitVariables): MutationPromise<CreateUnitData, CreateUnitVariables>;

interface CreateSizeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSizeVariables): MutationRef<CreateSizeData, CreateSizeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSizeVariables): MutationRef<CreateSizeData, CreateSizeVariables>;
  operationName: string;
}
export const createSizeRef: CreateSizeRef;

export function createSize(vars: CreateSizeVariables): MutationPromise<CreateSizeData, CreateSizeVariables>;
export function createSize(dc: DataConnect, vars: CreateSizeVariables): MutationPromise<CreateSizeData, CreateSizeVariables>;

interface CreateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  operationName: string;
}
export const createProductRef: CreateProductRef;

export function createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;
export function createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateCustomerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCustomerVariables): MutationRef<CreateCustomerData, CreateCustomerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCustomerVariables): MutationRef<CreateCustomerData, CreateCustomerVariables>;
  operationName: string;
}
export const createCustomerRef: CreateCustomerRef;

export function createCustomer(vars: CreateCustomerVariables): MutationPromise<CreateCustomerData, CreateCustomerVariables>;
export function createCustomer(dc: DataConnect, vars: CreateCustomerVariables): MutationPromise<CreateCustomerData, CreateCustomerVariables>;

interface CreateSupplierRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
  operationName: string;
}
export const createSupplierRef: CreateSupplierRef;

export function createSupplier(vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;
export function createSupplier(dc: DataConnect, vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

