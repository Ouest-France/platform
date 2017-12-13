'use strict';
const schemas = require('@ouest-france/schemas');

const express = require('express');
const { readFileSync } = require('fs');

const app = express();
const config = require('common-env/withLogger')(console).getOrElseAll({
  port: 3000,
});
const { find } = require('lodash/fp');
const Url = require('url');
const request = require('superagent');

app.get('/', (req, res) => {
  // @todo do a GUI for this
  res.redirect('/validate');
});

// In get mode, we ask for a schema and a url
app.get('/validate', (req, res) => {
  if (!req.query.schema) {
    return res.status(500).json({
      error: `\`schema\` query parameter is required, it should reference a schema name, valid values are ${JSON.stringify(
        Object.keys(schemas.schema.definitions)
      )}`,
    });
  }

  if (!req.query.url) {
    return res.status(500).json({
      error:
        '`url` query parameter is required. In case of a schema=BlockProviderConfig, url should point to a configuration endpoint.',
    });
  }

  request.get(req.query.url).end(function(err, resp) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const { body: output } = resp;

    const validation = schemas(output);

    res.status(!validation ? 400 : 200).json({
      current_validator_status:
        'do not consider this response as a valid one, yep, we know. We are working on it ;)',
      is_valid: validation,
    });
  });
});

// start to listen to http
app.listen(config.port, () => {
  console.log(`🎉  Validator server is listening on port ${config.port}!`);
  console.log(`Check out validator-server readme for usage 😉`);
});
