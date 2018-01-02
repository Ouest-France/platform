const path = require('path');
const generator = require('json-schema-documentation-generator');

generator({
  input: {
    // (required) json-schemas object list
    schemas: require('@ouest-france/schemas').rawSchemas,

    filter: schema => schema.$id.toLowerCase().includes('ouest-france'),

    // (required) schema sample generator
    samples: {
      generator: require('json-schema-documentation-sample-generator'),
    },
  },
  output: {
    // (required) visual theme
    theme: require('json-schema-documentation-theme-default'),

    // (optional) theme option
    options: {
      // (required) override this to specify another generator
      directory: {
        path: __dirname,
        mapFilename: schema => {
          console.log(schema.$id);
          return path.basename(schema.$id, '.json');
        },
      },
    },
  },
}).then(
  () => {
    console.log('Documentation generated');
  },
  err => {
    console.error('Could not generate documentation %s', err);
    process.exit(1);
  }
);
