# BlockConfig

BlockConfig determines the Block properties

### Example

```json
{
  "configurations": [
    {
      "endpoint": {
        "pure": false,
        "parameters": [
          {}
        ]
      },
      "rpc": {
        "view": {},
        "admin": {}
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
      ],
      "external": {
        "parameters": [
          {}
        ],
        "headers": [
          {}
        ],
        "head": [
          {}
        ]
      }
    }
  ]
}
```


### Documentation

### `.name`

### `.type`

### `.labels`

### `.configurations`

**Block configurations**

Block configurations

*Type*: array

### `.configurations[]`





*Type*: object

### `.configurations[].version`

### `.configurations[].endpoint`





*Type*: object

### `.configurations[].endpoint.url`

**block http url**

The HTTP(S) address the CMS will call to retrieve the BlockJSON

*Type*: string

### `.configurations[].endpoint.method`

**block http method**

Only GET is supported right now

*Type*: string

### `.configurations[].endpoint.pure`

**Block purity**

Defines the Block data cache policy : if pure=true, data are put in cache for 1 hour ; if pure=false, the endpoint is called by CMS for every rendering (ie. no cache)

*Type*: boolean

### `.configurations[].endpoint.parameters`

**The parameters needed to send a valid HTTP Block call.**

Paramètres HTTP à positionner lors des appels au endpoint

*Type*: array

### `.configurations[].endpoint.parameters[]`

### `.configurations[].endpoint.ui`

### `.configurations[].rpc`



RPC defines admin a/o rendering endpoint (please contact Ouest France for further explanations on this feature)

*Type*: object

### `.configurations[].rpc.view`





*Type*: object

### `.configurations[].rpc.view.url`

**Block RPC view HTTP url**

The HTTP(S) address the CMS will call to request the block view RPC endpoint

*Type*: string

### `.configurations[].rpc.admin`





*Type*: object

### `.configurations[].rpc.admin.url`

**Block RPC admin HTTP url**

The HTTP(S) address the CMS will call to request the block admin RPC endpoint

*Type*: string

### `.configurations[].templates`





*Type*: array

### `.configurations[].templates[]`





*Type*: object

### `.configurations[].templates[].name`

**Template name**

Template name (so users can differentiate templates in the front client)

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

**Js assets**

JS URL

### `.configurations[].templates[].assets.css`





*Type*: array

### `.configurations[].templates[].assets.css[]`

**Css assets**

CSS URL

### `.configurations[].templates[].assets.fonts`





*Type*: array

### `.configurations[].templates[].assets.fonts[]`

**Fonts assets**

Font URL

### `.configurations[].templates[].assets.images`





*Type*: array

### `.configurations[].templates[].assets.images[]`

**Images assets**

Image URL - this type of assets if deprecated - please do not use it

### `.configurations[].external`





*Type*: object

### `.configurations[].external.parameters`





*Type*: array

### `.configurations[].external.parameters[]`

**External parameter**

External parameter exposed by the Block (ie. exposed to the other Blocks of the page)

*Type*: string

### `.configurations[].external.headers`





*Type*: array

### `.configurations[].external.headers[]`

**Header**

Header to set in the HTTP Response

*Type*: string

### `.configurations[].external.head`





*Type*: array

### `.configurations[].external.head[]`

**Head HTML tag**

HTML Tag to position in the <head> section of the page

*Type*: object

### `.configurations[].external.head[].tag`

**Tag**

Tag name

*Type*: string

### `.configurations[].external.head[].attributes`

**Attributes**

Attributes

*Type*: object

### `.configurations[].external.head[].attributesadditionalProperties`





*Type*: string

### `.configurations[].external.head[].body`

**Body**

Tag body

*Type*: string