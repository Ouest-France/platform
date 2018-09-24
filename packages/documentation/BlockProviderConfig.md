# BlockProviderConfig

BlockProviderConfig is a list of exposed BlockConfig from the BlockProvider

### Example

```json
[
  {}
]
```


### Documentation

### `[]`

### `[]schema`

**BlockConfig**

Le BlockConfig permet de spécifier au CMS les Blocks à exposer au niveau du PageBuilder.

*Type*: object

### `[]schema.name`

### `[]schema.type`

### `[]schema.labels`

### `[]schema.configurations`

**Configurations possible du Block**

Cela définit ce qui est nécessaire pour le rendering du Block par le CMS. À tout moment il ne peut y avoir plus de `maxItems` configurations simultanément disponible pour un Block.

*Type*: array

*Minimum items*: 1

*Maximum items*: 10

### `[]schema.configurations[]`

*Type*: object

### `[]schema.configurations[].version`

### `[]schema.configurations[].endpoint`

*Type*: object

### `[]schema.configurations[].endpoint.url`

**block http url**

The HTTP(S) address the CMS will call to retrieve the BlockJSON

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block`

### `[]schema.configurations[].endpoint.method`

**block http method**

Only GET is supported right now

*Type*: string

*Allowed values*: `GET`

*Examples*: `GET`

### `[]schema.configurations[].endpoint.pure`

**Block pureness**

If this block pure? If yes then think we can cache it **forever**

*Type*: boolean

*Examples*: `true` `false`

### `[]schema.configurations[].endpoint.parameters`

**The parameters needed to send a valid HTTP Block call.**

Relies on OpenAPI v2.0 because v3.0 is missing official JSON Schema (https://github.com/OAI/OpenAPI-Specification/pull/1236)

*Type*: array

### `[]schema.configurations[].endpoint.parameters[]`

### `[]schema.configurations[].endpoint.ui`

### `[]schema.configurations[].rpc`

*Type*: object

### `[]schema.configurations[].rpc.view`

*Type*: object

### `[]schema.configurations[].rpc.view.url`

**Block RPC view HTTP url**

The HTTP(S) address the CMS will call to request the block view RPC endpoint

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block/rpc/view`

### `[]schema.configurations[].rpc.admin`

*Type*: object

### `[]schema.configurations[].rpc.admin.url`

**Block RPC admin HTTP url**

The HTTP(S) address the CMS will call to request the block admin RPC endpoint

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block/rpc/admin`

### `[]schema.configurations[].templates`

*Type*: array

### `[]schema.configurations[].templates[]`

*Type*: object

### `[]schema.configurations[].templates[].name`

**Theme name**

Theme name, so users will be able to differentiate them in the PageBuilder app

*Type*: string

*Examples*: `default` `christmas`

### `[]schema.configurations[].templates[].labels`

### `[]schema.configurations[].templates[].engine`

### `[]schema.configurations[].templates[].source`

**Template source**

Inlined template content

*Type*: string

*Examples*: `<section>Hello {{ name }}</section>`

### `[]schema.configurations[].templates[].assets`

*Type*: object

### `[]schema.configurations[].templates[].assets.js`

*Type*: array

### `[]schema.configurations[].templates[].assets.js[]`

**Js assets**

-

### `[]schema.configurations[].templates[].assets.css`

*Type*: array

### `[]schema.configurations[].templates[].assets.css[]`

**Css assets**

This accepts anything, as long as it's valid JSON.

### `[]schema.configurations[].templates[].assets.fonts`

*Type*: array

### `[]schema.configurations[].templates[].assets.fonts[]`

**Fonts assets**

This accepts anything, as long as it's valid JSON.

### `[]schema.configurations[].templates[].assets.images`

*Type*: array

### `[]schema.configurations[].templates[].assets.images[]`

**Images assets**

This accepts anything, as long as it's valid JSON.

### `[]schema.configurations[].external`

*Type*: object

### `[]schema.configurations[].external.parameters`

*Type*: array

### `[]schema.configurations[].external.parameters[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `see OpenAPI Parameters / JSON Schema Specification Wright Draft 00 (aka Draft 5)`

### `[]schema.configurations[].external.ui`

### `[]schema.configurations[].external.headers`

*Type*: array

### `[]schema.configurations[].external.headers[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`

### `[]schema.configurations[].external.head`

*Type*: object

### `[]schema.configurations[].external.head.links`

*Type*: array

### `[]schema.configurations[].external.head.links[]`

*Type*: object

### `[]schema.configurations[].external.head.links[].rel`

**The Rel Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`

### `[]schema.configurations[].external.head.meta`

*Type*: array

### `[]schema.configurations[].external.head.meta[]`

*Type*: object

### `[]schema.configurations[].external.head.meta[].name`

**The Name Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`

### `[]refs`