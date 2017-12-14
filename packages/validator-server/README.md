# Validator Server (Work In Progress - Do not use)

## Use it online

Validator server is available at https://validator-server.cleverapps.io/

### Validate a BlockProviderConfig from a CI job

Let say we want to validate the configuration (BlockProviderConfig) of our
sample BlockProvider currently deployed at
https://blockprovider-example.cleverapps.io

We would use:

https://validator-server.cleverapps.io/validate?schema=BlockProviderConfig&url=https://blockprovider-example.cleverapps.io/configurations

### Validate a BlockProviderConfig from a CI job

Let say we want to validate our local BlockProvider
(`http://localhost:8081/configurations`) in our CI process (using
[jq.node](https://github.com/FGRibreau/jq.node/))

```
curl --silent https://validator-server.cleverapps.io/validate\?schema\=BlockProviderConfig\&url\=http://localhost:8081/configurations | jqn -r process 'tap(console.log) | thru(x => process.exit(!x.is_valid+0))'
```

This line will first print the validation output and then yield an exitcode=1 if
the validation failed.

## Use it locally

### Setup

```
npm install npm start
```

```

```
