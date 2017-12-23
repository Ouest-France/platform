'use strict';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const HapiRequireHTTPS = require('hapi-require-https');
const Pack = require('./package');

const config = require('common-env/withLogger')(console).getOrElseAll({
  connection: {
    host: 'localhost',
    port: 3000,
  },
});

const server = new Hapi.Server();
server.connection(config.connection);

server.register(
  [
    Inert,
    Vision,
    HapiRequireHTTPS,
    {
      register: HapiSwagger,
      options: {
        info: {
          title: Pack.description,
          version: Pack.version,
          // contact:{
          //   name: 'Ouest-France/SIPA tech team',
          //   url: // slack url
          //   email: 'tech@ouest-france.fr'
          // }
        },
        documentationPath: '/',
        expanded: 'full',
      },
    },
  ],
  err => {
    server.start(err => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(`🎉  Validator server is running at ${server.info.uri}!`);
        console.log(`Check out validator-server readme for usage 😉`);
      }
    });
  }
);

server.route(require('./routes')(Pack));
