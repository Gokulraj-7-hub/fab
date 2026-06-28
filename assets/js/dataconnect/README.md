# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProducts*](#listproducts)
  - [*GetDashboardStats*](#getdashboardstats)
  - [*ListStates*](#liststates)
  - [*ListDistrictsByState*](#listdistrictsbystate)
  - [*ListTaluksByDistrict*](#listtaluksbydistrict)
  - [*ListSuppliers*](#listsuppliers)
  - [*ListCustomers*](#listcustomers)
- [**Mutations**](#mutations)
  - [*CreateCategory*](#createcategory)
  - [*CreateUnit*](#createunit)
  - [*CreateSize*](#createsize)
  - [*CreateProduct*](#createproduct)
  - [*CreateCustomer*](#createcustomer)
  - [*CreateSupplier*](#createsupplier)
  - [*CreateState*](#createstate)
  - [*CreateDistrict*](#createdistrict)
  - [*CreateTaluk*](#createtaluk)
  - [*UpdateCustomer*](#updatecustomer)
  - [*DeleteCustomer*](#deletecustomer)
  - [*UpdateSupplier*](#updatesupplier)
  - [*DeleteSupplier*](#deletesupplier)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `billflow-dataconnect` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from 'billflow-dataconnect';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from 'billflow-dataconnect';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listProducts(): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has no variables.
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsData {
  products: ({
    id: string;
    name: string;
    rate: number;
    stock: number;
    status: string;
  } & Product_Key)[];
}
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts } from 'billflow-dataconnect';


// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef } from 'billflow-dataconnect';


// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## GetDashboardStats
You can execute the `GetDashboardStats` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
getDashboardStats(): QueryPromise<GetDashboardStatsData, undefined>;

interface GetDashboardStatsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDashboardStatsData, undefined>;
}
export const getDashboardStatsRef: GetDashboardStatsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDashboardStats(dc: DataConnect): QueryPromise<GetDashboardStatsData, undefined>;

interface GetDashboardStatsRef {
  ...
  (dc: DataConnect): QueryRef<GetDashboardStatsData, undefined>;
}
export const getDashboardStatsRef: GetDashboardStatsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDashboardStatsRef:
```typescript
const name = getDashboardStatsRef.operationName;
console.log(name);
```

### Variables
The `GetDashboardStats` query has no variables.
### Return Type
Recall that executing the `GetDashboardStats` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDashboardStatsData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDashboardStatsData {
  products: ({
    id: string;
    name: string;
    stock: number;
  } & Product_Key)[];
}
```
### Using `GetDashboardStats`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDashboardStats } from 'billflow-dataconnect';


// Call the `getDashboardStats()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDashboardStats();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDashboardStats(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
getDashboardStats().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `GetDashboardStats`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDashboardStatsRef } from 'billflow-dataconnect';


// Call the `getDashboardStatsRef()` function to get a reference to the query.
const ref = getDashboardStatsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDashboardStatsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## ListStates
You can execute the `ListStates` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listStates(): QueryPromise<ListStatesData, undefined>;

interface ListStatesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListStatesData, undefined>;
}
export const listStatesRef: ListStatesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listStates(dc: DataConnect): QueryPromise<ListStatesData, undefined>;

interface ListStatesRef {
  ...
  (dc: DataConnect): QueryRef<ListStatesData, undefined>;
}
export const listStatesRef: ListStatesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listStatesRef:
```typescript
const name = listStatesRef.operationName;
console.log(name);
```

### Variables
The `ListStates` query has no variables.
### Return Type
Recall that executing the `ListStates` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListStatesData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListStatesData {
  states: ({
    id: string;
    name: string;
    status: string;
  } & State_Key)[];
}
```
### Using `ListStates`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listStates } from 'billflow-dataconnect';


// Call the `listStates()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listStates();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listStates(dataConnect);

console.log(data.states);

// Or, you can use the `Promise` API.
listStates().then((response) => {
  const data = response.data;
  console.log(data.states);
});
```

### Using `ListStates`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listStatesRef } from 'billflow-dataconnect';


// Call the `listStatesRef()` function to get a reference to the query.
const ref = listStatesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listStatesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.states);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.states);
});
```

## ListDistrictsByState
You can execute the `ListDistrictsByState` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listDistrictsByState(vars: ListDistrictsByStateVariables): QueryPromise<ListDistrictsByStateData, ListDistrictsByStateVariables>;

interface ListDistrictsByStateRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListDistrictsByStateVariables): QueryRef<ListDistrictsByStateData, ListDistrictsByStateVariables>;
}
export const listDistrictsByStateRef: ListDistrictsByStateRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDistrictsByState(dc: DataConnect, vars: ListDistrictsByStateVariables): QueryPromise<ListDistrictsByStateData, ListDistrictsByStateVariables>;

interface ListDistrictsByStateRef {
  ...
  (dc: DataConnect, vars: ListDistrictsByStateVariables): QueryRef<ListDistrictsByStateData, ListDistrictsByStateVariables>;
}
export const listDistrictsByStateRef: ListDistrictsByStateRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDistrictsByStateRef:
```typescript
const name = listDistrictsByStateRef.operationName;
console.log(name);
```

### Variables
The `ListDistrictsByState` query requires an argument of type `ListDistrictsByStateVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListDistrictsByStateVariables {
  stateId: string;
}
```
### Return Type
Recall that executing the `ListDistrictsByState` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDistrictsByStateData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDistrictsByStateData {
  districts: ({
    id: string;
    name: string;
    status: string;
  } & District_Key)[];
}
```
### Using `ListDistrictsByState`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDistrictsByState, ListDistrictsByStateVariables } from 'billflow-dataconnect';

// The `ListDistrictsByState` query requires an argument of type `ListDistrictsByStateVariables`:
const listDistrictsByStateVars: ListDistrictsByStateVariables = {
  stateId: ..., 
};

// Call the `listDistrictsByState()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDistrictsByState(listDistrictsByStateVars);
// Variables can be defined inline as well.
const { data } = await listDistrictsByState({ stateId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDistrictsByState(dataConnect, listDistrictsByStateVars);

console.log(data.districts);

// Or, you can use the `Promise` API.
listDistrictsByState(listDistrictsByStateVars).then((response) => {
  const data = response.data;
  console.log(data.districts);
});
```

### Using `ListDistrictsByState`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDistrictsByStateRef, ListDistrictsByStateVariables } from 'billflow-dataconnect';

// The `ListDistrictsByState` query requires an argument of type `ListDistrictsByStateVariables`:
const listDistrictsByStateVars: ListDistrictsByStateVariables = {
  stateId: ..., 
};

// Call the `listDistrictsByStateRef()` function to get a reference to the query.
const ref = listDistrictsByStateRef(listDistrictsByStateVars);
// Variables can be defined inline as well.
const ref = listDistrictsByStateRef({ stateId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDistrictsByStateRef(dataConnect, listDistrictsByStateVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.districts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.districts);
});
```

## ListTaluksByDistrict
You can execute the `ListTaluksByDistrict` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listTaluksByDistrict(vars: ListTaluksByDistrictVariables): QueryPromise<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;

interface ListTaluksByDistrictRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTaluksByDistrictVariables): QueryRef<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;
}
export const listTaluksByDistrictRef: ListTaluksByDistrictRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listTaluksByDistrict(dc: DataConnect, vars: ListTaluksByDistrictVariables): QueryPromise<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;

interface ListTaluksByDistrictRef {
  ...
  (dc: DataConnect, vars: ListTaluksByDistrictVariables): QueryRef<ListTaluksByDistrictData, ListTaluksByDistrictVariables>;
}
export const listTaluksByDistrictRef: ListTaluksByDistrictRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listTaluksByDistrictRef:
```typescript
const name = listTaluksByDistrictRef.operationName;
console.log(name);
```

### Variables
The `ListTaluksByDistrict` query requires an argument of type `ListTaluksByDistrictVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListTaluksByDistrictVariables {
  districtId: string;
}
```
### Return Type
Recall that executing the `ListTaluksByDistrict` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListTaluksByDistrictData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListTaluksByDistrictData {
  taluks: ({
    id: string;
    name: string;
    status: string;
  } & Taluk_Key)[];
}
```
### Using `ListTaluksByDistrict`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listTaluksByDistrict, ListTaluksByDistrictVariables } from 'billflow-dataconnect';

// The `ListTaluksByDistrict` query requires an argument of type `ListTaluksByDistrictVariables`:
const listTaluksByDistrictVars: ListTaluksByDistrictVariables = {
  districtId: ..., 
};

// Call the `listTaluksByDistrict()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listTaluksByDistrict(listTaluksByDistrictVars);
// Variables can be defined inline as well.
const { data } = await listTaluksByDistrict({ districtId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listTaluksByDistrict(dataConnect, listTaluksByDistrictVars);

console.log(data.taluks);

// Or, you can use the `Promise` API.
listTaluksByDistrict(listTaluksByDistrictVars).then((response) => {
  const data = response.data;
  console.log(data.taluks);
});
```

### Using `ListTaluksByDistrict`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listTaluksByDistrictRef, ListTaluksByDistrictVariables } from 'billflow-dataconnect';

// The `ListTaluksByDistrict` query requires an argument of type `ListTaluksByDistrictVariables`:
const listTaluksByDistrictVars: ListTaluksByDistrictVariables = {
  districtId: ..., 
};

// Call the `listTaluksByDistrictRef()` function to get a reference to the query.
const ref = listTaluksByDistrictRef(listTaluksByDistrictVars);
// Variables can be defined inline as well.
const ref = listTaluksByDistrictRef({ districtId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listTaluksByDistrictRef(dataConnect, listTaluksByDistrictVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.taluks);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.taluks);
});
```

## ListSuppliers
You can execute the `ListSuppliers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listSuppliers(): QueryPromise<ListSuppliersData, undefined>;

interface ListSuppliersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSuppliersData, undefined>;
}
export const listSuppliersRef: ListSuppliersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSuppliers(dc: DataConnect): QueryPromise<ListSuppliersData, undefined>;

interface ListSuppliersRef {
  ...
  (dc: DataConnect): QueryRef<ListSuppliersData, undefined>;
}
export const listSuppliersRef: ListSuppliersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSuppliersRef:
```typescript
const name = listSuppliersRef.operationName;
console.log(name);
```

### Variables
The `ListSuppliers` query has no variables.
### Return Type
Recall that executing the `ListSuppliers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSuppliersData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListSuppliers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSuppliers } from 'billflow-dataconnect';


// Call the `listSuppliers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSuppliers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSuppliers(dataConnect);

console.log(data.suppliers);

// Or, you can use the `Promise` API.
listSuppliers().then((response) => {
  const data = response.data;
  console.log(data.suppliers);
});
```

### Using `ListSuppliers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSuppliersRef } from 'billflow-dataconnect';


// Call the `listSuppliersRef()` function to get a reference to the query.
const ref = listSuppliersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSuppliersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.suppliers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.suppliers);
});
```

## ListCustomers
You can execute the `ListCustomers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
listCustomers(): QueryPromise<ListCustomersData, undefined>;

interface ListCustomersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCustomersData, undefined>;
}
export const listCustomersRef: ListCustomersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listCustomers(dc: DataConnect): QueryPromise<ListCustomersData, undefined>;

interface ListCustomersRef {
  ...
  (dc: DataConnect): QueryRef<ListCustomersData, undefined>;
}
export const listCustomersRef: ListCustomersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listCustomersRef:
```typescript
const name = listCustomersRef.operationName;
console.log(name);
```

### Variables
The `ListCustomers` query has no variables.
### Return Type
Recall that executing the `ListCustomers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListCustomersData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListCustomers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listCustomers } from 'billflow-dataconnect';


// Call the `listCustomers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listCustomers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listCustomers(dataConnect);

console.log(data.customers);

// Or, you can use the `Promise` API.
listCustomers().then((response) => {
  const data = response.data;
  console.log(data.customers);
});
```

### Using `ListCustomers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listCustomersRef } from 'billflow-dataconnect';


// Call the `listCustomersRef()` function to get a reference to the query.
const ref = listCustomersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listCustomersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.customers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.customers);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateCategory
You can execute the `CreateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createCategory(vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
}
export const createCategoryRef: CreateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCategory(dc: DataConnect, vars: CreateCategoryVariables): MutationPromise<CreateCategoryData, CreateCategoryVariables>;

interface CreateCategoryRef {
  ...
  (dc: DataConnect, vars: CreateCategoryVariables): MutationRef<CreateCategoryData, CreateCategoryVariables>;
}
export const createCategoryRef: CreateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCategoryRef:
```typescript
const name = createCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateCategoryVariables {
  name: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCategoryData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCategoryData {
  category_insert: Category_Key;
}
```
### Using `CreateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCategory, CreateCategoryVariables } from 'billflow-dataconnect';

// The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`:
const createCategoryVars: CreateCategoryVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCategory(createCategoryVars);
// Variables can be defined inline as well.
const { data } = await createCategory({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCategory(dataConnect, createCategoryVars);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
createCategory(createCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

### Using `CreateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCategoryRef, CreateCategoryVariables } from 'billflow-dataconnect';

// The `CreateCategory` mutation requires an argument of type `CreateCategoryVariables`:
const createCategoryVars: CreateCategoryVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createCategoryRef()` function to get a reference to the mutation.
const ref = createCategoryRef(createCategoryVars);
// Variables can be defined inline as well.
const ref = createCategoryRef({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCategoryRef(dataConnect, createCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_insert);
});
```

## CreateUnit
You can execute the `CreateUnit` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createUnit(vars: CreateUnitVariables): MutationPromise<CreateUnitData, CreateUnitVariables>;

interface CreateUnitRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUnitVariables): MutationRef<CreateUnitData, CreateUnitVariables>;
}
export const createUnitRef: CreateUnitRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUnit(dc: DataConnect, vars: CreateUnitVariables): MutationPromise<CreateUnitData, CreateUnitVariables>;

interface CreateUnitRef {
  ...
  (dc: DataConnect, vars: CreateUnitVariables): MutationRef<CreateUnitData, CreateUnitVariables>;
}
export const createUnitRef: CreateUnitRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUnitRef:
```typescript
const name = createUnitRef.operationName;
console.log(name);
```

### Variables
The `CreateUnit` mutation requires an argument of type `CreateUnitVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUnitVariables {
  name: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateUnit` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUnitData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUnitData {
  unit_insert: Unit_Key;
}
```
### Using `CreateUnit`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUnit, CreateUnitVariables } from 'billflow-dataconnect';

// The `CreateUnit` mutation requires an argument of type `CreateUnitVariables`:
const createUnitVars: CreateUnitVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createUnit()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUnit(createUnitVars);
// Variables can be defined inline as well.
const { data } = await createUnit({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUnit(dataConnect, createUnitVars);

console.log(data.unit_insert);

// Or, you can use the `Promise` API.
createUnit(createUnitVars).then((response) => {
  const data = response.data;
  console.log(data.unit_insert);
});
```

### Using `CreateUnit`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUnitRef, CreateUnitVariables } from 'billflow-dataconnect';

// The `CreateUnit` mutation requires an argument of type `CreateUnitVariables`:
const createUnitVars: CreateUnitVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createUnitRef()` function to get a reference to the mutation.
const ref = createUnitRef(createUnitVars);
// Variables can be defined inline as well.
const ref = createUnitRef({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUnitRef(dataConnect, createUnitVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.unit_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.unit_insert);
});
```

## CreateSize
You can execute the `CreateSize` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createSize(vars: CreateSizeVariables): MutationPromise<CreateSizeData, CreateSizeVariables>;

interface CreateSizeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSizeVariables): MutationRef<CreateSizeData, CreateSizeVariables>;
}
export const createSizeRef: CreateSizeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSize(dc: DataConnect, vars: CreateSizeVariables): MutationPromise<CreateSizeData, CreateSizeVariables>;

interface CreateSizeRef {
  ...
  (dc: DataConnect, vars: CreateSizeVariables): MutationRef<CreateSizeData, CreateSizeVariables>;
}
export const createSizeRef: CreateSizeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSizeRef:
```typescript
const name = createSizeRef.operationName;
console.log(name);
```

### Variables
The `CreateSize` mutation requires an argument of type `CreateSizeVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSizeVariables {
  name: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateSize` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSizeData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSizeData {
  size_insert: Size_Key;
}
```
### Using `CreateSize`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSize, CreateSizeVariables } from 'billflow-dataconnect';

// The `CreateSize` mutation requires an argument of type `CreateSizeVariables`:
const createSizeVars: CreateSizeVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createSize()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSize(createSizeVars);
// Variables can be defined inline as well.
const { data } = await createSize({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSize(dataConnect, createSizeVars);

console.log(data.size_insert);

// Or, you can use the `Promise` API.
createSize(createSizeVars).then((response) => {
  const data = response.data;
  console.log(data.size_insert);
});
```

### Using `CreateSize`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSizeRef, CreateSizeVariables } from 'billflow-dataconnect';

// The `CreateSize` mutation requires an argument of type `CreateSizeVariables`:
const createSizeVars: CreateSizeVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createSizeRef()` function to get a reference to the mutation.
const ref = createSizeRef(createSizeVars);
// Variables can be defined inline as well.
const ref = createSizeRef({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSizeRef(dataConnect, createSizeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.size_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.size_insert);
});
```

## CreateProduct
You can execute the `CreateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductRef:
```typescript
const name = createProductRef.operationName;
console.log(name);
```

### Variables
The `CreateProduct` mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductData {
  product_insert: Product_Key;
}
```
### Using `CreateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProduct, CreateProductVariables } from 'billflow-dataconnect';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  hsn: ..., // optional
  code: ..., // optional
  categoryId: ..., // optional
  unitId: ..., // optional
  sizeId: ..., // optional
  gst: ..., 
  rate: ..., 
  stock: ..., 
  description: ..., // optional
  status: ..., 
};

// Call the `createProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProduct(createProductVars);
// Variables can be defined inline as well.
const { data } = await createProduct({ name: ..., hsn: ..., code: ..., categoryId: ..., unitId: ..., sizeId: ..., gst: ..., rate: ..., stock: ..., description: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProduct(dataConnect, createProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
createProduct(createProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `CreateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductRef, CreateProductVariables } from 'billflow-dataconnect';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  hsn: ..., // optional
  code: ..., // optional
  categoryId: ..., // optional
  unitId: ..., // optional
  sizeId: ..., // optional
  gst: ..., 
  rate: ..., 
  stock: ..., 
  description: ..., // optional
  status: ..., 
};

// Call the `createProductRef()` function to get a reference to the mutation.
const ref = createProductRef(createProductVars);
// Variables can be defined inline as well.
const ref = createProductRef({ name: ..., hsn: ..., code: ..., categoryId: ..., unitId: ..., sizeId: ..., gst: ..., rate: ..., stock: ..., description: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductRef(dataConnect, createProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## CreateCustomer
You can execute the `CreateCustomer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createCustomer(vars: CreateCustomerVariables): MutationPromise<CreateCustomerData, CreateCustomerVariables>;

interface CreateCustomerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCustomerVariables): MutationRef<CreateCustomerData, CreateCustomerVariables>;
}
export const createCustomerRef: CreateCustomerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCustomer(dc: DataConnect, vars: CreateCustomerVariables): MutationPromise<CreateCustomerData, CreateCustomerVariables>;

interface CreateCustomerRef {
  ...
  (dc: DataConnect, vars: CreateCustomerVariables): MutationRef<CreateCustomerData, CreateCustomerVariables>;
}
export const createCustomerRef: CreateCustomerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCustomerRef:
```typescript
const name = createCustomerRef.operationName;
console.log(name);
```

### Variables
The `CreateCustomer` mutation requires an argument of type `CreateCustomerVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateCustomer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCustomerData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCustomerData {
  customer_insert: Customer_Key;
}
```
### Using `CreateCustomer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCustomer, CreateCustomerVariables } from 'billflow-dataconnect';

// The `CreateCustomer` mutation requires an argument of type `CreateCustomerVariables`:
const createCustomerVars: CreateCustomerVariables = {
  name: ..., 
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `createCustomer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCustomer(createCustomerVars);
// Variables can be defined inline as well.
const { data } = await createCustomer({ name: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCustomer(dataConnect, createCustomerVars);

console.log(data.customer_insert);

// Or, you can use the `Promise` API.
createCustomer(createCustomerVars).then((response) => {
  const data = response.data;
  console.log(data.customer_insert);
});
```

### Using `CreateCustomer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCustomerRef, CreateCustomerVariables } from 'billflow-dataconnect';

// The `CreateCustomer` mutation requires an argument of type `CreateCustomerVariables`:
const createCustomerVars: CreateCustomerVariables = {
  name: ..., 
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `createCustomerRef()` function to get a reference to the mutation.
const ref = createCustomerRef(createCustomerVars);
// Variables can be defined inline as well.
const ref = createCustomerRef({ name: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCustomerRef(dataConnect, createCustomerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.customer_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.customer_insert);
});
```

## CreateSupplier
You can execute the `CreateSupplier` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createSupplier(vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

interface CreateSupplierRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
}
export const createSupplierRef: CreateSupplierRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSupplier(dc: DataConnect, vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

interface CreateSupplierRef {
  ...
  (dc: DataConnect, vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
}
export const createSupplierRef: CreateSupplierRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSupplierRef:
```typescript
const name = createSupplierRef.operationName;
console.log(name);
```

### Variables
The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateSupplier` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSupplierData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSupplierData {
  supplier_insert: Supplier_Key;
}
```
### Using `CreateSupplier`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSupplier, CreateSupplierVariables } from 'billflow-dataconnect';

// The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`:
const createSupplierVars: CreateSupplierVariables = {
  name: ..., 
  contactPerson: ..., // optional
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `createSupplier()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSupplier(createSupplierVars);
// Variables can be defined inline as well.
const { data } = await createSupplier({ name: ..., contactPerson: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSupplier(dataConnect, createSupplierVars);

console.log(data.supplier_insert);

// Or, you can use the `Promise` API.
createSupplier(createSupplierVars).then((response) => {
  const data = response.data;
  console.log(data.supplier_insert);
});
```

### Using `CreateSupplier`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSupplierRef, CreateSupplierVariables } from 'billflow-dataconnect';

// The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`:
const createSupplierVars: CreateSupplierVariables = {
  name: ..., 
  contactPerson: ..., // optional
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `createSupplierRef()` function to get a reference to the mutation.
const ref = createSupplierRef(createSupplierVars);
// Variables can be defined inline as well.
const ref = createSupplierRef({ name: ..., contactPerson: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSupplierRef(dataConnect, createSupplierVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.supplier_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.supplier_insert);
});
```

## CreateState
You can execute the `CreateState` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createState(vars: CreateStateVariables): MutationPromise<CreateStateData, CreateStateVariables>;

interface CreateStateRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateStateVariables): MutationRef<CreateStateData, CreateStateVariables>;
}
export const createStateRef: CreateStateRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createState(dc: DataConnect, vars: CreateStateVariables): MutationPromise<CreateStateData, CreateStateVariables>;

interface CreateStateRef {
  ...
  (dc: DataConnect, vars: CreateStateVariables): MutationRef<CreateStateData, CreateStateVariables>;
}
export const createStateRef: CreateStateRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createStateRef:
```typescript
const name = createStateRef.operationName;
console.log(name);
```

### Variables
The `CreateState` mutation requires an argument of type `CreateStateVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateStateVariables {
  name: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateState` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateStateData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateStateData {
  state_insert: State_Key;
}
```
### Using `CreateState`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createState, CreateStateVariables } from 'billflow-dataconnect';

// The `CreateState` mutation requires an argument of type `CreateStateVariables`:
const createStateVars: CreateStateVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createState()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createState(createStateVars);
// Variables can be defined inline as well.
const { data } = await createState({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createState(dataConnect, createStateVars);

console.log(data.state_insert);

// Or, you can use the `Promise` API.
createState(createStateVars).then((response) => {
  const data = response.data;
  console.log(data.state_insert);
});
```

### Using `CreateState`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createStateRef, CreateStateVariables } from 'billflow-dataconnect';

// The `CreateState` mutation requires an argument of type `CreateStateVariables`:
const createStateVars: CreateStateVariables = {
  name: ..., 
  status: ..., 
};

// Call the `createStateRef()` function to get a reference to the mutation.
const ref = createStateRef(createStateVars);
// Variables can be defined inline as well.
const ref = createStateRef({ name: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createStateRef(dataConnect, createStateVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.state_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.state_insert);
});
```

## CreateDistrict
You can execute the `CreateDistrict` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createDistrict(vars: CreateDistrictVariables): MutationPromise<CreateDistrictData, CreateDistrictVariables>;

interface CreateDistrictRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDistrictVariables): MutationRef<CreateDistrictData, CreateDistrictVariables>;
}
export const createDistrictRef: CreateDistrictRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDistrict(dc: DataConnect, vars: CreateDistrictVariables): MutationPromise<CreateDistrictData, CreateDistrictVariables>;

interface CreateDistrictRef {
  ...
  (dc: DataConnect, vars: CreateDistrictVariables): MutationRef<CreateDistrictData, CreateDistrictVariables>;
}
export const createDistrictRef: CreateDistrictRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDistrictRef:
```typescript
const name = createDistrictRef.operationName;
console.log(name);
```

### Variables
The `CreateDistrict` mutation requires an argument of type `CreateDistrictVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDistrictVariables {
  name: string;
  stateId: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateDistrict` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDistrictData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDistrictData {
  district_insert: District_Key;
}
```
### Using `CreateDistrict`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDistrict, CreateDistrictVariables } from 'billflow-dataconnect';

// The `CreateDistrict` mutation requires an argument of type `CreateDistrictVariables`:
const createDistrictVars: CreateDistrictVariables = {
  name: ..., 
  stateId: ..., 
  status: ..., 
};

// Call the `createDistrict()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDistrict(createDistrictVars);
// Variables can be defined inline as well.
const { data } = await createDistrict({ name: ..., stateId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDistrict(dataConnect, createDistrictVars);

console.log(data.district_insert);

// Or, you can use the `Promise` API.
createDistrict(createDistrictVars).then((response) => {
  const data = response.data;
  console.log(data.district_insert);
});
```

### Using `CreateDistrict`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDistrictRef, CreateDistrictVariables } from 'billflow-dataconnect';

// The `CreateDistrict` mutation requires an argument of type `CreateDistrictVariables`:
const createDistrictVars: CreateDistrictVariables = {
  name: ..., 
  stateId: ..., 
  status: ..., 
};

// Call the `createDistrictRef()` function to get a reference to the mutation.
const ref = createDistrictRef(createDistrictVars);
// Variables can be defined inline as well.
const ref = createDistrictRef({ name: ..., stateId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDistrictRef(dataConnect, createDistrictVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.district_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.district_insert);
});
```

## CreateTaluk
You can execute the `CreateTaluk` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
createTaluk(vars: CreateTalukVariables): MutationPromise<CreateTalukData, CreateTalukVariables>;

interface CreateTalukRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTalukVariables): MutationRef<CreateTalukData, CreateTalukVariables>;
}
export const createTalukRef: CreateTalukRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTaluk(dc: DataConnect, vars: CreateTalukVariables): MutationPromise<CreateTalukData, CreateTalukVariables>;

interface CreateTalukRef {
  ...
  (dc: DataConnect, vars: CreateTalukVariables): MutationRef<CreateTalukData, CreateTalukVariables>;
}
export const createTalukRef: CreateTalukRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTalukRef:
```typescript
const name = createTalukRef.operationName;
console.log(name);
```

### Variables
The `CreateTaluk` mutation requires an argument of type `CreateTalukVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTalukVariables {
  name: string;
  districtId: string;
  status: string;
}
```
### Return Type
Recall that executing the `CreateTaluk` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTalukData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTalukData {
  taluk_insert: Taluk_Key;
}
```
### Using `CreateTaluk`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTaluk, CreateTalukVariables } from 'billflow-dataconnect';

// The `CreateTaluk` mutation requires an argument of type `CreateTalukVariables`:
const createTalukVars: CreateTalukVariables = {
  name: ..., 
  districtId: ..., 
  status: ..., 
};

// Call the `createTaluk()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTaluk(createTalukVars);
// Variables can be defined inline as well.
const { data } = await createTaluk({ name: ..., districtId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTaluk(dataConnect, createTalukVars);

console.log(data.taluk_insert);

// Or, you can use the `Promise` API.
createTaluk(createTalukVars).then((response) => {
  const data = response.data;
  console.log(data.taluk_insert);
});
```

### Using `CreateTaluk`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTalukRef, CreateTalukVariables } from 'billflow-dataconnect';

// The `CreateTaluk` mutation requires an argument of type `CreateTalukVariables`:
const createTalukVars: CreateTalukVariables = {
  name: ..., 
  districtId: ..., 
  status: ..., 
};

// Call the `createTalukRef()` function to get a reference to the mutation.
const ref = createTalukRef(createTalukVars);
// Variables can be defined inline as well.
const ref = createTalukRef({ name: ..., districtId: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTalukRef(dataConnect, createTalukVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.taluk_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.taluk_insert);
});
```

## UpdateCustomer
You can execute the `UpdateCustomer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updateCustomer(vars: UpdateCustomerVariables): MutationPromise<UpdateCustomerData, UpdateCustomerVariables>;

interface UpdateCustomerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCustomerVariables): MutationRef<UpdateCustomerData, UpdateCustomerVariables>;
}
export const updateCustomerRef: UpdateCustomerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCustomer(dc: DataConnect, vars: UpdateCustomerVariables): MutationPromise<UpdateCustomerData, UpdateCustomerVariables>;

interface UpdateCustomerRef {
  ...
  (dc: DataConnect, vars: UpdateCustomerVariables): MutationRef<UpdateCustomerData, UpdateCustomerVariables>;
}
export const updateCustomerRef: UpdateCustomerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCustomerRef:
```typescript
const name = updateCustomerRef.operationName;
console.log(name);
```

### Variables
The `UpdateCustomer` mutation requires an argument of type `UpdateCustomerVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpdateCustomer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCustomerData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCustomerData {
  customer_update?: Customer_Key | null;
}
```
### Using `UpdateCustomer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCustomer, UpdateCustomerVariables } from 'billflow-dataconnect';

// The `UpdateCustomer` mutation requires an argument of type `UpdateCustomerVariables`:
const updateCustomerVars: UpdateCustomerVariables = {
  id: ..., 
  name: ..., 
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `updateCustomer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCustomer(updateCustomerVars);
// Variables can be defined inline as well.
const { data } = await updateCustomer({ id: ..., name: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCustomer(dataConnect, updateCustomerVars);

console.log(data.customer_update);

// Or, you can use the `Promise` API.
updateCustomer(updateCustomerVars).then((response) => {
  const data = response.data;
  console.log(data.customer_update);
});
```

### Using `UpdateCustomer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCustomerRef, UpdateCustomerVariables } from 'billflow-dataconnect';

// The `UpdateCustomer` mutation requires an argument of type `UpdateCustomerVariables`:
const updateCustomerVars: UpdateCustomerVariables = {
  id: ..., 
  name: ..., 
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `updateCustomerRef()` function to get a reference to the mutation.
const ref = updateCustomerRef(updateCustomerVars);
// Variables can be defined inline as well.
const ref = updateCustomerRef({ id: ..., name: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCustomerRef(dataConnect, updateCustomerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.customer_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.customer_update);
});
```

## DeleteCustomer
You can execute the `DeleteCustomer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deleteCustomer(vars: DeleteCustomerVariables): MutationPromise<DeleteCustomerData, DeleteCustomerVariables>;

interface DeleteCustomerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCustomerVariables): MutationRef<DeleteCustomerData, DeleteCustomerVariables>;
}
export const deleteCustomerRef: DeleteCustomerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCustomer(dc: DataConnect, vars: DeleteCustomerVariables): MutationPromise<DeleteCustomerData, DeleteCustomerVariables>;

interface DeleteCustomerRef {
  ...
  (dc: DataConnect, vars: DeleteCustomerVariables): MutationRef<DeleteCustomerData, DeleteCustomerVariables>;
}
export const deleteCustomerRef: DeleteCustomerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCustomerRef:
```typescript
const name = deleteCustomerRef.operationName;
console.log(name);
```

### Variables
The `DeleteCustomer` mutation requires an argument of type `DeleteCustomerVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteCustomerVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteCustomer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCustomerData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCustomerData {
  customer_delete?: Customer_Key | null;
}
```
### Using `DeleteCustomer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCustomer, DeleteCustomerVariables } from 'billflow-dataconnect';

// The `DeleteCustomer` mutation requires an argument of type `DeleteCustomerVariables`:
const deleteCustomerVars: DeleteCustomerVariables = {
  id: ..., 
};

// Call the `deleteCustomer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCustomer(deleteCustomerVars);
// Variables can be defined inline as well.
const { data } = await deleteCustomer({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCustomer(dataConnect, deleteCustomerVars);

console.log(data.customer_delete);

// Or, you can use the `Promise` API.
deleteCustomer(deleteCustomerVars).then((response) => {
  const data = response.data;
  console.log(data.customer_delete);
});
```

### Using `DeleteCustomer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCustomerRef, DeleteCustomerVariables } from 'billflow-dataconnect';

// The `DeleteCustomer` mutation requires an argument of type `DeleteCustomerVariables`:
const deleteCustomerVars: DeleteCustomerVariables = {
  id: ..., 
};

// Call the `deleteCustomerRef()` function to get a reference to the mutation.
const ref = deleteCustomerRef(deleteCustomerVars);
// Variables can be defined inline as well.
const ref = deleteCustomerRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCustomerRef(dataConnect, deleteCustomerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.customer_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.customer_delete);
});
```

## UpdateSupplier
You can execute the `UpdateSupplier` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
updateSupplier(vars: UpdateSupplierVariables): MutationPromise<UpdateSupplierData, UpdateSupplierVariables>;

interface UpdateSupplierRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSupplierVariables): MutationRef<UpdateSupplierData, UpdateSupplierVariables>;
}
export const updateSupplierRef: UpdateSupplierRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSupplier(dc: DataConnect, vars: UpdateSupplierVariables): MutationPromise<UpdateSupplierData, UpdateSupplierVariables>;

interface UpdateSupplierRef {
  ...
  (dc: DataConnect, vars: UpdateSupplierVariables): MutationRef<UpdateSupplierData, UpdateSupplierVariables>;
}
export const updateSupplierRef: UpdateSupplierRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSupplierRef:
```typescript
const name = updateSupplierRef.operationName;
console.log(name);
```

### Variables
The `UpdateSupplier` mutation requires an argument of type `UpdateSupplierVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpdateSupplier` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSupplierData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSupplierData {
  supplier_update?: Supplier_Key | null;
}
```
### Using `UpdateSupplier`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSupplier, UpdateSupplierVariables } from 'billflow-dataconnect';

// The `UpdateSupplier` mutation requires an argument of type `UpdateSupplierVariables`:
const updateSupplierVars: UpdateSupplierVariables = {
  id: ..., 
  name: ..., 
  contactPerson: ..., // optional
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `updateSupplier()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSupplier(updateSupplierVars);
// Variables can be defined inline as well.
const { data } = await updateSupplier({ id: ..., name: ..., contactPerson: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSupplier(dataConnect, updateSupplierVars);

console.log(data.supplier_update);

// Or, you can use the `Promise` API.
updateSupplier(updateSupplierVars).then((response) => {
  const data = response.data;
  console.log(data.supplier_update);
});
```

### Using `UpdateSupplier`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSupplierRef, UpdateSupplierVariables } from 'billflow-dataconnect';

// The `UpdateSupplier` mutation requires an argument of type `UpdateSupplierVariables`:
const updateSupplierVars: UpdateSupplierVariables = {
  id: ..., 
  name: ..., 
  contactPerson: ..., // optional
  gstin: ..., // optional
  mobile: ..., 
  mobile2: ..., // optional
  email: ..., // optional
  address: ..., 
  stateId: ..., // optional
  districtId: ..., // optional
  talukId: ..., // optional
  pincode: ..., // optional
  status: ..., 
};

// Call the `updateSupplierRef()` function to get a reference to the mutation.
const ref = updateSupplierRef(updateSupplierVars);
// Variables can be defined inline as well.
const ref = updateSupplierRef({ id: ..., name: ..., contactPerson: ..., gstin: ..., mobile: ..., mobile2: ..., email: ..., address: ..., stateId: ..., districtId: ..., talukId: ..., pincode: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSupplierRef(dataConnect, updateSupplierVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.supplier_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.supplier_update);
});
```

## DeleteSupplier
You can execute the `DeleteSupplier` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect/index.d.ts](./index.d.ts):
```typescript
deleteSupplier(vars: DeleteSupplierVariables): MutationPromise<DeleteSupplierData, DeleteSupplierVariables>;

interface DeleteSupplierRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSupplierVariables): MutationRef<DeleteSupplierData, DeleteSupplierVariables>;
}
export const deleteSupplierRef: DeleteSupplierRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSupplier(dc: DataConnect, vars: DeleteSupplierVariables): MutationPromise<DeleteSupplierData, DeleteSupplierVariables>;

interface DeleteSupplierRef {
  ...
  (dc: DataConnect, vars: DeleteSupplierVariables): MutationRef<DeleteSupplierData, DeleteSupplierVariables>;
}
export const deleteSupplierRef: DeleteSupplierRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSupplierRef:
```typescript
const name = deleteSupplierRef.operationName;
console.log(name);
```

### Variables
The `DeleteSupplier` mutation requires an argument of type `DeleteSupplierVariables`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSupplierVariables {
  id: string;
}
```
### Return Type
Recall that executing the `DeleteSupplier` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSupplierData`, which is defined in [dataconnect/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSupplierData {
  supplier_delete?: Supplier_Key | null;
}
```
### Using `DeleteSupplier`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSupplier, DeleteSupplierVariables } from 'billflow-dataconnect';

// The `DeleteSupplier` mutation requires an argument of type `DeleteSupplierVariables`:
const deleteSupplierVars: DeleteSupplierVariables = {
  id: ..., 
};

// Call the `deleteSupplier()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSupplier(deleteSupplierVars);
// Variables can be defined inline as well.
const { data } = await deleteSupplier({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSupplier(dataConnect, deleteSupplierVars);

console.log(data.supplier_delete);

// Or, you can use the `Promise` API.
deleteSupplier(deleteSupplierVars).then((response) => {
  const data = response.data;
  console.log(data.supplier_delete);
});
```

### Using `DeleteSupplier`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSupplierRef, DeleteSupplierVariables } from 'billflow-dataconnect';

// The `DeleteSupplier` mutation requires an argument of type `DeleteSupplierVariables`:
const deleteSupplierVars: DeleteSupplierVariables = {
  id: ..., 
};

// Call the `deleteSupplierRef()` function to get a reference to the mutation.
const ref = deleteSupplierRef(deleteSupplierVars);
// Variables can be defined inline as well.
const ref = deleteSupplierRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSupplierRef(dataConnect, deleteSupplierVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.supplier_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.supplier_delete);
});
```

