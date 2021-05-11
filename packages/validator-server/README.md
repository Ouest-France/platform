# Validator Server

## Use it online

Validator server is available at https://validator-server.cleverapps.io/

### Validate a BlockProviderConfig from a CI job

Let's say we want to validate the configuration (BlockProviderConfig) of our
sample BlockProvider currently deployed at
https://blockprovider-example.cleverapps.io

We would use:

https://validator-server.cleverapps.io/validate?schema=https%3A%2F%2Fraw.githubusercontent.com%2FOuest-France%2Fplatform%2Fmaster%2Fpackages%2Fschemas%2FBlockProviderConfig.json&url=https://blockprovider-example.cleverapps.io/configurations

If it yields `HTTP 200` it passes, otherwise it does not and will display why.

### Validate a BlockProviderConfig from a CI job

Let's say we want to validate our local BlockProvider
(`http://localhost:8081/configurations`) in our CI process (using
[jq.node](https://github.com/FGRibreau/jq.node/))

```
curl --silent https://validator-server.cleverapps.io/validate\?schema\=https%3A%2F%2Fraw.githubusercontent.com%2FOuest-France%2Fplatform%2Fmaster%2Fpackages%2Fschemas%2FBlockProviderConfig.json\&url\=http://localhost:8081/configurations | jqn -r process 'tap(console.log) | thru(x => process.exit(!!x.errors+0))'
```

This line will first print the validation output and then yield an exitcode=1 if the validation failed.

## Use it locally

```shell
npm install
npm start
```

### Use it locally (development)

```shell
npm install
npm run start:dev
```
