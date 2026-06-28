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
  mobile2?: string | null;
  email?: string | null;
  address: string;
  stateId?: string | null;
  districtId?: string | null;
  talukId?: string | null;
  pincode?: string | null;
  status: string;
}

export interface CreateDistrictData {
  district_insert: District_Key;
}

export interface CreateDistrictVariables {
  name: string;
  stateId: string;
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

export interface CreateStateData {
  state_insert: State_Key;
}

export interface CreateStateVariables {
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
  mobile2?: string | null;
  email?: string | null;
  address: string;
  stateId?: string | null;
  districtId?: string | null;
  talukId?: string | null;
  pincode?: string | null;
  status: string;
}

export interface CreateTalukData {
  taluk_insert: Taluk_Key;
}

export interface CreateTalukVariables {
  name: string;
  districtId: string;
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

export interface DeleteCustomerData {
  customer_delete?: Customer_Key | null;
}

export interface DeleteCustomerVariables {
  id: string;
}

export interface DeleteSupplierData {
  supplier_delete?: Supplier_Key | null;
}

export interface DeleteSupplierVariables {
  id: string;
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

export interface ListCustomersData {
  customers: ({
    id: string;
    name: string;
    gstin?: string | null;
    mobile: string;
    mobile2?: string | null;
    email?: string | null;
    address: string;
    state?: {
      name: string;
    };
      district?: {
        name: string;
      };
        taluk?: {
          name: string;
        };
          pincode?: string | null;
  } & Customer_Key)[];
}

export interface ListDistrictsByStateData {
  districts: ({
    id: string;
    name: string;
    status: string;
  } & District_Key)[];
}

export interface ListDistrictsByStateVariables {
  stateId: string;
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

export interface ListStatesData {
  states: ({
    id: string;
    name: string;
    status: string;
  } & State_Key)[];
}

export interface ListSuppliersData {
  suppliers: ({
    id: string;
    name: string;
    contactPerson?: string | null;
    gstin?: string | null;
    mobile: string;
    mobile2?: string | null;
    email?: string | null;
    address: string;
    state?: {
      name: string;
    };
      district?: {
        name: string;
      };
        taluk?: {
          name: string;
        };
          pincode?: string | null;
  } & Supplier_Key)[];
}

export interface ListTaluksByDistrictData {
  taluks: ({
    id: string;
    name: string;
    status: string;
  } & Taluk_Key)[];
}

export interface ListTaluksByDistrictVariables {
  districtId: string;
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

export interface Taluk_Key {
  id: string;
  __typename?: 'Taluk_Key';
}

export interface Unit_Key {
  id: string;
  __typename?: 'Unit_Key';
}

export interface UpdateCustomerData {
  customer_update?: Customer_Key | null;
}

export interface UpdateCustomerVariables {
  id: string;
  name: string;
  gstin?: string | null;
  mobile: string;
  mobile2?: string | null;
  email?: string | null;
  address: string;
  stateId?: string | null;
  districtId?: string | null;
  talukId?: string | null;
  pincode?: string | null;
  status: string;
}

export interface UpdateSupplierData {
  supplier_update?: Supplier_Key | null;
}

export interface UpdateSupplierVariables {
  id: string;
  name: string;
  contactPerson?: string | null;
  gstin?: string | null;
  mobile: string;
  mobile2?: string | null;
  email?: string | null;
  address: string;
  stateId?: string | null;
  districtId?: string | null;
  talukId?: string | null;
  pincode?: string | null;
  status: string;
}

export interface UserPermission_Key {
  id: string;
  __typename?: 'UserPermission_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

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

interface CreateStateRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStateVariables): MutationRef<CreateStateData, CreateStateVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateStateVariables): MutationRef<CreateStateData, CreateStateVariables>;
  operationName: string;
}
export const createStateRef: CreateStateRef;

export function createState(vars: CreateStateVariables): MutationPromise<CreateStateData, CreateStateVariables>;
export function createState(dc: DataConnect, vars: CreateStateVariables): MutationPromise<CreateStateData, CreateStateVariables>;

interface CreateDistrictRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDistrictVariables): MutationRef<CreateDistrictData, CreateDistrictVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDistrictVariables): MutationRef<CreateDistrictData, CreateDistrictVariables>;
  operationName: string;
}
export const createDistrictRef: CreateDistrictRef;

export function createDistrict(vars: CreateDistrictVariables): MutationPromise<CreateDistrictData, CreateDistrictVariables>;
export function createDistrict(dc: DataConnect, vars: CreateDistrictVariables): MutationPromise<CreateDistrictData, CreateDistrictVariables>;

interface CreateTalukRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTalukVariables): MutationRef<CreateTalukData, CreateTalukVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTalukVariables): MutationRef<CreateTalukData, CreateTalukVariables>;
  operationName: string;
}
export const createTalukRef: CreateTalukRef;

export function createTaluk(vars: CreateTalukVariables): MutationPromise<CreateTalukData, CreateTalukVariables>;
export function createTaluk(dc: DataConnect, vars: CreateTalukVariables): MutationPromise<CreateTalukData, CreateTalukVariables>;

interface UpdateCustomerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCustomerVariables): MutationRef<UpdateCustomerData, UpdateCustomerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCustomerVariables): MutationRef<UpdateCustomerData, UpdateCustomerVariables>;
  operationName: string;
}
export const updateCustomerRef: UpdateCustomerRef;

export function updateCustomer(vars: UpdateCustomerVariables): MutationPromise<UpdateCustomerData, UpdateCustomerVariables>;
export function updateCustomer(dc: DataConnect, vars: UpdateCustomerVariables): MutationPromise<UpdateCustomerData, UpdateCustomerVariables>;

interface DeleteCustomerRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCustomerVariables): MutationRef<DeleteCustomerData, DeleteCustomerVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCustomerVariables): MutationRef<DeleteCustomerData, DeleteCustomerVariables>;
  operationName: string;
}
export const deleteCustomerRef: DeleteCustomerRef;

export function deleteCustomer(vars: DeleteCustomerVariables): MutationPromise<DeleteCustomerData, DeleteCustomerVariables>;
export function deleteCustomer(dc: DataConnect, vars: DeleteCustomerVariables): MutationPromise<DeleteCustomerData, DeleteCustomerVariables>;

interface UpdateSupplierRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSupplierVariables): MutationRef<UpdateSupplierData, UpdateSupplierVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSupplierVariables): MutationRef<UpdateSupplierData, UpdateSupplierVariables>;
  operationName: string;
}
export const updateSupplierRef: UpdateSupplierRef;

export function updateSupplier(vars: UpdateSupplierVariables): MutationPromise<UpdateSupplierData, UpdateSupplierVariables>;
export function updateSupplier(dc: DataConnect, vars: UpdateSupplierVariables): MutationPromise<UpdateSupplierData, UpdateSupplierVariables>;

interface DeleteSupplierRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSupplierVariables): MutationRef<DeleteSupplierData, DeleteSupplierVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSupplierVariables): MutationRef<DeleteSupplierData, DeleteSupplierVariables>;
  operationName: string;
}
export const deleteSupplierRef: DeleteSupplierRef;

export function deleteSupplier(vars: DeleteSupplierVariables): MutationPromise<DeleteSupplierData, DeleteSupplierVariables>;
export function deleteSupplier(dc: DataConnect, vars: DeleteSupplierVariables): MutationPromise<DeleteSupplierData, DeleteSupplierVariables>;

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

interface ListStatesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStatesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListStatesData, undefined>;
  operationName: string;
}
export const listStatesRef: ListStatesRef;

export function listStates(): QueryPromise<ListStatesData, undefined>;
export function listStates(dc: DataConnect): QueryPromise<ListStatesData, undefined>;

interface ListDistrictsByStateRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListDistrictsByStateVariables): QueryRef<ListDistrictsByStateData, ListDistrictsByStateVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListDistrictsByStateVariables): QueryRef<ListDistrictsByStateData, ListDistrictsByStateVariables>;
  operationName: string;
}
export const listDistrictsByStateRef: ListDistrictsByStateRef;

export function listDistrictsByState(vars: ListDistrictsByStateVariables): QueryPromise<ListDistrictsByStateData, ListDistrictsByStateVariables>;
export function listDistrictsByState(dc: DataConnect, vars: ListDistrictsByStateVariables): QueryPromise<ListDistrictsByStateData, ListDistrictsByStateVariables>;

interface ListTaluksByDistrictRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTaluksByDistrictVariables): QueryRef<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListTaluksByDistrictVariables): QueryRef<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;
  operationName: string;
}
export const listTaluksByDistrictRef: ListTaluksByDistrictRef;

export function listTaluksByDistrict(vars: ListTaluksByDistrictVariables): QueryPromise<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;
export function listTaluksByDistrict(dc: DataConnect, vars: ListTaluksByDistrictVariables): QueryPromise<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;

interface ListSuppliersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSuppliersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSuppliersData, undefined>;
  operationName: string;
}
export const listSuppliersRef: ListSuppliersRef;

export function listSuppliers(): QueryPromise<ListSuppliersData, undefined>;
export function listSuppliers(dc: DataConnect): QueryPromise<ListSuppliersData, undefined>;

interface ListCustomersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCustomersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCustomersData, undefined>;
  operationName: string;
}
export const listCustomersRef: ListCustomersRef;

export function listCustomers(): QueryPromise<ListCustomersData, undefined>;
export function listCustomers(dc: DataConnect): QueryPromise<ListCustomersData, undefined>;

