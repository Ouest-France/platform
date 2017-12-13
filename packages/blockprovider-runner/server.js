'use strict';
const express = require('express');
const { readFileSync } = require('fs');

const app = express();
const config = require('common-env/withLogger')(console).getOrElseAll({
  port: 3000,
});
const { find } = require('lodash/fp');
const Mustache = require('mustache');
const Url = require('url');
const request = require('superagent');

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

    const { body: [{ configurations }] } = resp;

    const blockConfig = find({ version: blockVersion }, configurations);

    if (!blockConfig) {
      return res.status(500).json({
        error: `Could not find version "${blockVersion}" in Block "${
          blockName
        }" configuration from BlockProvider at ${BlockProviderConfigEndpoint}`,
      });
    }

    request[blockConfig.endpoint.method.toLowerCase()](
      getBlockURL(BlockProviderConfigEndpoint, blockConfig.endpoint.url)
    ).end(function(err, resp) {
      if (err) {
        return res.status(500).json({
          error: `An error occured while calling the Block: ${err.message}`,
          blockConfigUsed: blockConfig,
          blockNameUsed: blockName,
          blockVersionUsed: blockVersion,
        });
      }

      const blockJSON = resp.body;

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
function getBlockURL(BlockProviderConfigEndpoint, blockUrl) {
  if (blockUrl.includes('://')) {
    return blockUrl;
  }

  return Url.resolve(BlockProviderConfigEndpoint, blockUrl);
}

// Object => String => String
function wrapHTML(templateConfig, renderedBlock) {
  return `
<html>
  <head>
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
