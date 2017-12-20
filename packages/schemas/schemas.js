const Ajv = require('ajv');
const path = require('path');

const ajv = new Ajv({
  // check all rules collecting all errors. Default is to return after the first error.
  allErrors: true,
  // clude the reference to the part of the schema (schema and parentSchema) and validated data in errors (false by default).
  verbose: true,
  // for more correct and slow validation
  format: 'full',

  // formats: an object with custom formats. Keys and values will be passed to addFormat method.
  //
  validateSchema: true,
  logger: console,

  // replace missing properties and items with the values from corresponding default keywords
  useDefaults: true,

  // change data type of data to match type keyword
  // false (default) - no type coercion.
  coerceTypes: false,
});

const schemaNames = ['BlockJSON', 'BlockProviderConfig', 'BlockConfig'];

const rawSchemas = schemaNames.map(schemaName =>
  require(path.resolve(__dirname, `${schemaName}.json`))
);

const schemas = new Ajv({
  verbose: true,

  // validation of other keywords when $ref is present in the schema
  extendRefs: 'fail',

  // check all rules collecting all errors. Default is to return after the first error.
  allErrors: true,

  // change data type of data to match type keyword
  coerceTypes: false,

  schemas: [
    require('./vendors/json-schema-draft-04.json'),
    require('./vendors/openapi-v2-schema.json'),
    require('./defs.json'),
  ].concat(rawSchemas),
});

module.exports = schemas;

schemas.rawSchemas = rawSchemas;
