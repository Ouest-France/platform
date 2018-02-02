'use strict';
const express = require('express');
const path = require('path');
const { readFileSync } = require('fs');

const app = express();
const config = require('common-env/withLogger')(console).getOrElseAll({
  port: 3000,
});
const { find } = require('lodash/fp');
const Mustache = require('mustache');
const request = require('superagent');
const urlResolver = require('./urlResolver');

app.get('/', (req, res) => {
  // @todo do a GUI for this
  res.redirect('/block');
});

app.get('/block', (req, res) => {
  if (!req.query.config) {
    return res.status(500).json({
      error:
        '`config` query parameter is required, it should point to your BlockProvider configuration path, e.g. http://localhost:8081/configurations',
    });
  }

  const BlockProviderConfigEndpoint = req.query.config;

  if (!req.query.name || !req.query.name.includes('@')) {
    return res.status(500).json({
      error:
        '`name` query parameter is required, it should refer to the Block name to test and contains versionn number, e.g. cms-block-provider-example-bitcoin@1.0.0',
    });
  }

  const [blockName, blockVersion] = req.query.name.split('@');

  if (!req.query.parameters) {
    return res.status(500).json({
      error:
        '`parameters` query parameter is required, it should refer to the Block endpoint parameters, e.g. ?threshold=1989',
    });
  }

  const BlockJSONRequestParameters = req.query.parameters;

  request.get(BlockProviderConfigEndpoint).end(function(err, resp) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const block = find ({name : blockName}, resp.body);
    const blockConfig = find({ version: blockVersion }, block.configurations);
    
    if (!blockConfig) {
      return res.status(500).json({
        error: `Could not find version "${blockVersion}" in Block "${blockName}" configuration from BlockProvider at ${BlockProviderConfigEndpoint}`,
      });
    }

    const url = urlResolver(
      BlockProviderConfigEndpoint,
      blockConfig,
      BlockJSONRequestParameters
    );

    const method = blockConfig.endpoint.method.toLowerCase();

    request[method](url).end(function(err, resp) {
      const call = {
        method: method,
        url: url,
      };
      if (err) {
        return res.status(500).json({
          error: `An error occured while calling the Block: ${err.message}`,
          blockConfigUsed: blockConfig,
          blockNameUsed: blockName,
          blockVersionUsed: blockVersion,
          call: call,
        });
      }

      const blockJSON = resp.body;

      // @todo validate blockJSON schema here instead of a dirty check
      if (
        typeof blockJSON !== 'object' ||
        typeof blockJSON.internal !== 'object'
      ) {
        return res.status(500).json({
          error: `Invalid BlockJSON format, check out https://github.com/Ouest-France/platform/tree/master/packages/schemas`,
          blockJSON: blockJSON,
          call: call,
        });
      }

      res.send(
        wrapHTML(
          blockConfig.templates[0],
          Mustache.render(
            blockConfig.templates[0].source,
            blockJSON.internal.data
          )
        )
      );
    });
  });
});

// Object => String => String
function wrapHTML(templateConfig, renderedBlock) {
  return `
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/static/bootstrap.css"></link>
    ${templateConfig.assets.css
      .map(css => `<link rel="stylesheet" href="${css}"></link>`)
      .join('\n')}
  </head>
  <body>
    ${renderedBlock}

    ${templateConfig.assets.js
      .map(js => `<script src="${js}"></script>`)
      .join('\n')}
  </body>
</html>`;
}

app.use('/static', express.static(path.resolve(__dirname, 'static')));

// start to listen to http
app.listen(config.port, () => {
  console.log(`🎉  BlockProvider Runner listening on port ${config.port}!`);
  console.log(`Check out blockprovider-runner readme for usage 😉`);
});
