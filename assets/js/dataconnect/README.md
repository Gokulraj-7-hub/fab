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
- [**Mutations**](#mutations)
  - [*CreateCategory*](#createcategory)
  - [*CreateUnit*](#createunit)
  - [*CreateSize*](#createsize)
  - [*CreateProduct*](#createproduct)
  - [*CreateCustomer*](#createcustomer)
  - [*CreateSupplier*](#createsupplier)

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
  email?: string | null;
  address: string;
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
  email: ..., // optional
  address: ..., 
  status: ..., 
};

// Call the `createCustomer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCustomer(createCustomerVars);
// Variables can be defined inline as well.
const { data } = await createCustomer({ name: ..., gstin: ..., mobile: ..., email: ..., address: ..., status: ..., });

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
  email: ..., // optional
  address: ..., 
  status: ..., 
};

// Call the `createCustomerRef()` function to get a reference to the mutation.
const ref = createCustomerRef(createCustomerVars);
// Variables can be defined inline as well.
const ref = createCustomerRef({ name: ..., gstin: ..., mobile: ..., email: ..., address: ..., status: ..., });

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
  email?: string | null;
  address: string;
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
  email: ..., // optional
  address: ..., 
  status: ..., 
};

// Call the `createSupplier()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSupplier(createSupplierVars);
// Variables can be defined inline as well.
const { data } = await createSupplier({ name: ..., contactPerson: ..., gstin: ..., mobile: ..., email: ..., address: ..., status: ..., });

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
  email: ..., // optional
  address: ..., 
  status: ..., 
};

// Call the `createSupplierRef()` function to get a reference to the mutation.
const ref = createSupplierRef(createSupplierVars);
// Variables can be defined inline as well.
const ref = createSupplierRef({ name: ..., contactPerson: ..., gstin: ..., mobile: ..., email: ..., address: ..., status: ..., });

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

