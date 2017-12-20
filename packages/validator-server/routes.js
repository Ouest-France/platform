const Joi = require('joi');
const Request = require('superagent');
const schemas = require('@ouest-france/schemas');

module.exports = Pack => {
  const metadata = {
    meta: {
      server_version: Pack.version,
    },
  };

  function validate(schema, body, reply) {
    const validation = schemas.validate(schema, body);

    if (validation) {
      return reply(Object.assign({}, metadata)).code(200);
    }

    reply(
      Object.assign(
        {},
        {
          errors: [
            {
              count: (schemas.errors || []).length,
              details: schemas.errors,
            },
          ],
        },
        metadata
      )
    ).code(400);
  }

  return [
    {
      method: 'GET',
      path: '/validate',
      config: {
        handler: (request, reply) => {
          Request.get(request.query.url).end(function(err, resp) {
            if (err) {
              return reply(
                Object.assign(
                  {},
                  {
                    errors: [
                      {
                        title: 'Request error to download `url`',
                        detail: err.message,
                      },
                    ],
                  },
                  metadata
                )
              ).code(500);
            }

            const { body } = resp;

            validate(request.query.schema, body, reply);
          });
        },
        description: 'Validate a schema via a URL',
        tags: ['api'],
        validate: {
          query: {
            url: Joi.string()
              .uri()
              .required()
              .example(
                'https://blockprovider-example.cleverapps.io/configurations'
              )
              .description(
                'URL of the BlockProvider configuration path or BlockJSON call'
              ),
            schema: Joi.string()
              .required()
              .valid(schemas.rawSchemas.map(x => x.$id))
              .description('Which schema to test against'),
          },
        },
      },
    },
    {
      method: 'POST',
      path: '/validate',
      config: {
        handler: (request, reply) => {
          let jsonBody;
          try {
            jsonBody = JSON.parse(request.payload.body);
          } catch (err) {
            return reply(
              Object.assign(
                {},
                {
                  errors: [
                    {
                      title: 'Could not parse HTTP POST body as json',
                      detail: err.message,
                    },
                  ],
                },
                metadata
              )
            ).code(400);
          }
          validate(request.payload.schema, jsonBody, reply);
        },
        description: 'Validate a schema via direct input',
        tags: ['api'],
        validate: {
          payload: {
            body: Joi.string()
              .required()
              .description('JSON data to validate'),
            schema: Joi.string()
              .required()
              .valid(schemas.rawSchemas.map(x => x.$id))
              .description('Which schema to test against'),
          },
        },
      },
    },
  ];
};
