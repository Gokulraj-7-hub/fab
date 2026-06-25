# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createCategory, createUnit, createSize, createProduct, createCustomer, createSupplier, createState, createDistrict, createTaluk, updateCustomer } from 'billflow-dataconnect';


// Operation CreateCategory:  For variables, look at type CreateCategoryVars in ../index.d.ts
const { data } = await CreateCategory(dataConnect, createCategoryVars);

// Operation CreateUnit:  For variables, look at type CreateUnitVars in ../index.d.ts
const { data } = await CreateUnit(dataConnect, createUnitVars);

// Operation CreateSize:  For variables, look at type CreateSizeVars in ../index.d.ts
const { data } = await CreateSize(dataConnect, createSizeVars);

// Operation CreateProduct:  For variables, look at type CreateProductVars in ../index.d.ts
const { data } = await CreateProduct(dataConnect, createProductVars);

// Operation CreateCustomer:  For variables, look at type CreateCustomerVars in ../index.d.ts
const { data } = await CreateCustomer(dataConnect, createCustomerVars);

// Operation CreateSupplier:  For variables, look at type CreateSupplierVars in ../index.d.ts
const { data } = await CreateSupplier(dataConnect, createSupplierVars);

// Operation CreateState:  For variables, look at type CreateStateVars in ../index.d.ts
const { data } = await CreateState(dataConnect, createStateVars);

// Operation CreateDistrict:  For variables, look at type CreateDistrictVars in ../index.d.ts
const { data } = await CreateDistrict(dataConnect, createDistrictVars);

// Operation CreateTaluk:  For variables, look at type CreateTalukVars in ../index.d.ts
const { data } = await CreateTaluk(dataConnect, createTalukVars);

// Operation UpdateCustomer:  For variables, look at type UpdateCustomerVars in ../index.d.ts
const { data } = await UpdateCustomer(dataConnect, updateCustomerVars);


```