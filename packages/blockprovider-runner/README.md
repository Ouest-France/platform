# BlockProvider-Runner - Render a BlockProvider locally

### Online demo

The above link asks BlockProvider Runner to render our [BlockProvider example](../blockprovider-example) project:

https://blockprovider-runner.cleverapps.io/block?config=https%3A//blockprovider-example.cleverapps.io/configurations&name=cms-block-provider-example-bitcoin@1.0.0&parameters=%3Fthreshold%3D1989

### Setup locally

```sh
npm install @ouest-france/blockprovider-runner --global
```

### Usage

Start server:

```sh
PORT=8080 blockprovider-runner
```

Let's consider your BlockProvider is running on `http://localhost:3000` (see our
[blockprovider-example](../blockprovider-example)) with two path :

* BlockProviderConfig is at : `http://localhost:3000/configurations`
* Block name to test `cms-block-provider-example-bitcoin` with configuration
  version `1.0.0`
* Accepting one parameter `?threshold=1989`

To debug it, open your browser:

```
http://localhost:8080/block?config=http%3A//localhost%3A3000/configurations&name=cms-block-provider-example-bitcoin@1.0.0&parameters=%3Fthreshold%3D1989
```
