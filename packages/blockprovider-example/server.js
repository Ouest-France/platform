'use strict';
const express = require('express');
const request = require('superagent');
const path = require('path');
const { readFileSync } = require('fs');

const app = express();
const config = require('common-env/withLogger')(console).getOrElseAll({
  port: 3000,

  // from where we can access this server from outside (e.g. "https://mydomain.com:8083") we access to access ti
  endpoint: 'http://localhost:3000',
});

const { toNumber } = require('lodash');

const BLOCK_BITCOIN_TEMPLATE = readFileSync(
  path.resolve(__dirname, './static/template.html'),
  'utf-8'
);
// expose BlockProviderConfig route
app.get('/configurations', (req, res) =>
  res.json([
    {
      name: 'cms-block-provider-example-bitcoin',
      type: 'Display',
      labels: ['Bitcoin'],
      configurations: [
        {
          version: '1.0.0',
          endpoint: {
            // we specify a relative url to the current blockprovider public endpoint
            // we could also specify a FQDN
            url: `/block/bitcoin`,
            method: 'GET',
            // we block depends on time so it's not pure and won't be cached for a long time
            pure: false,
            required: ['threshold'],
            parameters: [
              {
                name: 'threshold',
                in: 'query',
                schema: {
                  type: 'integer',
                  format: 'int32',
                  minimum: 0,
                  maximum: 100000,
                },
              },
            ],
            ui: [
              {
                threshold: {
                  'ui:autofocus': true,
                  'ui:emptyValue': '10200',
                  'ui:title': 'Bitcoin threshold',
                  'ui:description':
                    'At which point should the Bitcoin threshold should be defined',
                },
              },
            ],
          },
          templates: [
            {
              name: 'default-theme',
              labels: [],
              source: BLOCK_BITCOIN_TEMPLATE,
              assets: {
                js: [],
                css: [`${config.endpoint}/static/style.css`],
                fonts: [],
                images: [`${config.endpoint}/static/bitcoin.png`],
              },
            },
            {
              name: 'troll-theme',
              labels: [],
              source: BLOCK_BITCOIN_TEMPLATE,
              assets: {
                js: [],
                css: [`${config.endpoint}/static/style.css`],
                fonts: [],
                images: [`${config.endpoint}/static/bitcoin.png`],
              },
            },
          ],
          external: {
            parameters: [
              {
                name: 'bid',
                // any value will work here
                in: 'query',
                schema: {
                  type: 'integer',
                  format: 'int32',
                  minimum: 0,
                  maximum: 100000,
                },
              },
              {
                name: 'ask',
                // any value will work here
                in: 'query',
                schema: {
                  type: 'integer',
                  format: 'int32',
                  minimum: 0,
                  maximum: 100000,
                },
              },
            ],
            ui: {
              ask: {
                'ui:title': 'Bitcoin ask price',
              },
              bid: {
                'ui:title': 'Bitcoin bit price',
              },
            },
          },
        },
      ],
    },
  ])
);

app.get('/block/bitcoin', (req, res) => {
  request
    .get('https://www.bitstamp.net/api/ticker/')
    .set('accept', 'json')
    .end((err, { body }) => {
      console.log(err, body);
      err
        ? res.status(500).json(err)
        : res.json({
            internal: {
              data: {
                last: toNumber(body.last),
              },
            },
            external: {
              data: {
                bid: toNumber(body.bid),
                ask: toNumber(body.ask),
              },
            },
          });
    });
});

// expose BlockProviderConfig route
require('./route.documentation')(app);

app.use('/static', express.static(path.resolve(__dirname, 'static')));

// start to listen to http
app.listen(config.port, () =>
  console.log(`🎉  Example BlockProvider listening on port ${config.port}!`)
);
