# BlockConfig

Le BlockConfig permet de spécifier au CMS les Blocks à exposer au niveau du PageBuilder.

### Example

```json
{
  "configurations": [
    {
      "endpoint": {
        "url": "",
        "method": "",
        "pure": false,
        "parameters": [
          {}
        ],
        "ui": []
      },
      "templates": [
        {
          "assets": {
            "js": [
              {}
            ],
            "css": [
              {}
            ],
            "fonts": [
              {}
            ],
            "images": [
              {}
            ]
          }
        }
      ]
    }
  ],
  "external": {
    "parameters": [
      {}
    ],
    "headers": [
      {}
    ],
    "head": {
      "links": [
        {
          "rel": ""
        }
      ],
      "meta": [
        {
          "name": ""
        }
      ]
    }
  }
}
```


### Documentation

### `.name`

### `.type`

### `.labels`

### `.configurations`

**Configurations possible du Block**

Cela définit ce qui est nécessaire pour le rendering du Block par le CMS. À tout moment il ne peut y avoir plus de `maxItems` configurations simultanément disponible pour un Block.

*Type*: array

### `.configurations[]`





*Type*: object

### `.configurations[].version`

### `.configurations[].endpoint`





*Type*: object

### `.configurations[].endpoint.url`

**The Url Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.configurations[].endpoint.method`

**The Method Schema.**

Note : pour le moment uniquement GET est supporté

*Type*: string

### `.configurations[].endpoint.pure`

**Block pureness**

An explanation about the purpose of this instance.

*Type*: boolean

### `.configurations[].endpoint.parameters`

**The parameters needed to send a valid HTTP Block call.**

Relies on OpenAPI v2.0 because v3.0 is missing official JSON Schema (https://github.com/OAI/OpenAPI-Specification/pull/1236)

*Type*: array

### `.configurations[].endpoint.parameters[]`

### `.configurations[].endpoint.ui`

Declaration des differents champs proposés à la configuration dans le Page Builder.

### `.configurations[].endpoint.ui[]`

Regroupement en section _(rattaché à un nom et un identifiant)_ pour faciliter l'organisation par groupe d'intérêt.

### `.configurations[].templates`

*Type*: array

### `.configurations[].templates[]`





*Type*: object

### `.configurations[].templates[].name`

**Theme name**

Theme name, so users will be able to differentiate them from within the PageBuilder

*Type*: string

### `.configurations[].templates[].labels`

### `.configurations[].templates[].engine`

### `.configurations[].templates[].source`

**Template source**

Inlined template content

*Type*: string

### `.configurations[].templates[].assets`





*Type*: object

### `.configurations[].templates[].assets.js`





*Type*: array

### `.configurations[].templates[].assets.js[]`

**Empty Object**

This accepts anything, as long as it's valid JSON.

### `.configurations[].templates[].assets.css`





*Type*: array

### `.configurations[].templates[].assets.css[]`

**Empty Object**

This accepts anything, as long as it's valid JSON.

### `.configurations[].templates[].assets.fonts`





*Type*: array

### `.configurations[].templates[].assets.fonts[]`

**Empty Object**

This accepts anything, as long as it's valid JSON.

### `.configurations[].templates[].assets.images`





*Type*: array

### `.configurations[].templates[].assets.images[]`

**Empty Object**

This accepts anything, as long as it's valid JSON.

### `.external`





*Type*: object

### `.external.parameters`





*Type*: array

### `.external.parameters[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.ui`

### `.external.headers`





*Type*: array

### `.external.headers[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.head`





*Type*: object

### `.external.head.links`





*Type*: array

### `.external.head.links[]`





*Type*: object

### `.external.head.links[].rel`

**The Rel Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.head.meta`





*Type*: array

### `.external.head.meta[]`





*Type*: object

### `.external.head.meta[].name`

**The Name Schema.**

An explanation about the purpose of this instance.

*Type*: string
