# BlockConfig

Le BlockConfig permet de spécifier au CMS les Blocks à exposer au niveau du PageBuilder.

### Example

```json
{
  "name": "",
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
  ]
}
```


### Documentation

### `.name`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `.type`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `.labels`

### `.labelsschema`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.labelsschema[]`

### `.labelsrefs`

### `.labelsroot`

### `.labelsrootschema`

### `.labelsrootschemadefinitionsLabels`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.labelsrootschemadefinitionsLabels[]`

### `.labelsrootschemadefinitionsLabel`

**Label**

A label is a key/value pair intended to be used to specify identifying attributes that are meaningful and relevant to users.

*Type*: object

### `.labelsrootschemadefinitionsLabel.key`

### `.labelsrootschemadefinitionsLabel.value`

### `.labelsrootschemadefinitionsIdent`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

*Pattern*: `^[a-z-]+$`

### `.labelsrootschemadefinitionsLabelValue`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

### `.labelsrootschemadefinitionsBasicSemVer`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `.labelsrootschemadefinitionsBlockName`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration`

Extend ui configuration field with pure UserInterface representation configuration (example : specify placeholder from standard component, use slider component to set number instead simple number input, use color picker component to set string or yet use external widget).

*Type*: object

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0`

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0not`

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1`

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1not`

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget`

Specify widget to use. Widget is similar to a component except it is owned by a BlockProvider and is not part of the standard components available in the platform.

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget.name`

name of widget to use for this configuration field.

*Type*: string

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget.version`

version of widget.

*Type*: string

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.component`

Allow to extend component configuration with representation parameters (example: placeholder) or to use another component than the default one.

### `.labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.component.name`

name of component to use for this configuration field (example: slider)

*Type*: string

*Allowed values*: `slider`

### `.labelsrootschemadefinitionsUIProperty`

*Type*: object

### `.labelsrootschemadefinitionsUIProperty.type`

basic type of configuration field

### `.labelsrootschemadefinitionsUIProperty.typeanyOf0`

### `.labelsrootschemadefinitionsUIProperty.title`

Label of configuration field

*Type*: string

### `.labelsrootschemadefinitionsUIProperty.description`

description of configuration field

*Type*: string

### `.labelsrootschemadefinitionsUIProperty.maximum`

*Type*: number

### `.labelsrootschemadefinitionsUIProperty.minimum`

*Type*: number

### `.labelsrootschemadefinitionsUIProperty.maxLength`

### `.labelsrootschemadefinitionsUIProperty.minLength`

### `.labelsrootschemadefinitionsUIProperty.pattern`

*Type*: string

### `.labelsrootschemadefinitionsUIProperty.enum`

*Type*: array

*Minimum items*: 1

### `.labelsrootschemadefinitionsUIProperty.enum[]`

*Type*: string,number

### `.labelsrootschemadefinitionsUIProperty.format`

subset of html input type to describe input behavior

### `.labelsrootschemadefinitionsUIProperty.formatanyOf0`

### `.labelsrootschemadefinitionsUIProperty.x-ui-configuration`

### `.labelsrootschemadefinitionsUIProperty.default`

### `.labelsrootschemadefinitionsUIPropertydependenciesminimum`

### `.labelsrootschemadefinitionsUIPropertydependenciesminimum.type`

*Allowed values*: `number`

### `.labelsrootschemadefinitionsUIPropertydependenciesmaximum`

### `.labelsrootschemadefinitionsUIPropertydependenciesmaximum.type`

*Allowed values*: `number`

### `.labelsrootschemadefinitionsUIPropertydependenciesmaxLength`

### `.labelsrootschemadefinitionsUIPropertydependenciesmaxLength.type`

*Allowed values*: `string`

### `.labelsrootschemadefinitionsUIPropertydependenciesformat`

### `.labelsrootschemadefinitionsUIPropertydependenciesformat.type`

*Allowed values*: `string`

### `.labelsrootschemadefinitionsUIPropertydependenciesenum`

### `.labelsrootschemadefinitionsUIPropertydependenciesenum.type`

*Allowed values*: `string` `number`

### `.labelsrootschemadefinitionsUIPropertydependenciespattern`

### `.labelsrootschemadefinitionsUIPropertydependenciespattern.type`

*Allowed values*: `string`

### `.labelsrootschemadefinitionsUIPropertydependenciesminLength`

### `.labelsrootschemadefinitionsUIPropertydependenciesminLength.type`

*Allowed values*: `string`

### `.labelsrootschemadefinitionsUIPropertyoneOf0`

### `.labelsrootschemadefinitionsUIPropertyoneOf0.type`

*Allowed values*: `boolean`

### `.labelsrootschemadefinitionsUIPropertyoneOf1`

### `.labelsrootschemadefinitionsUIPropertyoneOf1.type`

*Allowed values*: `string`

### `.labelsrootschemadefinitionsUIPropertyoneOf2`

### `.labelsrootschemadefinitionsUIPropertyoneOf2.type`

*Allowed values*: `number`

### `.labelsrootschemadefinitionsBlockType`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `.labelsrootschemadefinitionsBlockTemplateEngine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `.labelsrootschemadefinitionsUIPropertyBasicTypes`

*Allowed values*: `number` `string` `boolean`

### `.labelsrootschemadefinitionsUIInputFormat`

*Allowed values*: `email` `text` `date`

### `.labelsrootschemadefinitionsUISection`

**UI configuration contract group**

Define configuration set contract

*Type*: object

### `.labelsrootschemadefinitionsUISection.title`

Title of form tab to display PageBuilder

*Type*: string

### `.labelsrootschemadefinitionsUISection.description`

Description of form tab. Example: 'Server administration configuration'

*Type*: string

### `.labelsrootschemadefinitionsUISection.required`

list mandatory configuration field

### `.labelsrootschemadefinitionsUISection..`

*Type*: object

### `.labelsrootschemadefinitionsUISection..additionalProperties`

### `.labelsrootschemadefinitionsUISchema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.labelsrootschemadefinitionsUISchema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.labelsrootschemadefinitionsUISchema.sections[]`

### `.labelsrootschemadefinitionsBlockProviderConfig`

**BlockProviderConfig**

BlockProvider response format to declare BlockConfig

*Type*: array

*Minimum items*: 1

### `.labelsrootschemadefinitionsBlockProviderConfig[]`

*Type*: object

### `.labelsrootschemadefinitionsConfigMap`

**ConfigMap**

Key/Value dataset

*Type*: object

### `.labelsrootlocalRefs`

### `.labelsrootrefs`

### `.configurations`

**Configurations possible du Block**

Cela définit ce qui est nécessaire pour le rendering du Block par le CMS. À tout moment il ne peut y avoir plus de `maxItems` configurations simultanément disponible pour un Block.

*Type*: array

*Minimum items*: 1

*Maximum items*: 10

### `.configurations[]`

*Type*: object

### `.configurations[].version`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `.configurations[].endpoint`

*Type*: object

### `.configurations[].endpoint.url`

**block http url**

The HTTP(S) address the CMS will call to retrieve the BlockJSON

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block`

### `.configurations[].endpoint.method`

**block http method**

Only GET is supported right now

*Type*: string

*Allowed values*: `GET`

*Examples*: `GET`

### `.configurations[].endpoint.pure`

**Block pureness**

If this block pure? If yes then think we can cache it **forever**

*Type*: boolean

*Examples*: `true` `false`

### `.configurations[].endpoint.parameters`

**The parameters needed to send a valid HTTP Block call.**

Relies on OpenAPI v2.0 because v3.0 is missing official JSON Schema (https://github.com/OAI/OpenAPI-Specification/pull/1236)

*Type*: array

### `.configurations[].endpoint.parameters[]`

### `.configurations[].endpoint.parameters[]schema`

### `.configurations[].endpoint.parameters[]schemaoneOf0`

### `.configurations[].endpoint.parameters[]schemaoneOf1`

### `.configurations[].endpoint.parameters[]refs`

### `.configurations[].endpoint.parameters[]root`

### `.configurations[].endpoint.parameters[]rootschema`

**A JSON Schema for Swagger 2.0 API.**

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschema.swagger`

The Swagger version of this document.

*Type*: string

*Allowed values*: `2.0`

### `.configurations[].endpoint.parameters[]rootschema.info`

### `.configurations[].endpoint.parameters[]rootschema.host`

The host (name or ip) of the API. Example: 'swagger.io'

*Type*: string

*Pattern*: `^[^{}/ :\\]+(?::\d+)?$`

### `.configurations[].endpoint.parameters[]rootschema.basePath`

The base path to the API. Example: '/api'.

*Type*: string

*Pattern*: `^/`

### `.configurations[].endpoint.parameters[]rootschema.schemes`

### `.configurations[].endpoint.parameters[]rootschema.consumes`

A list of MIME types accepted by the API.

### `.configurations[].endpoint.parameters[]rootschema.consumesallOf0`

### `.configurations[].endpoint.parameters[]rootschema.produces`

A list of MIME types the API can produce.

### `.configurations[].endpoint.parameters[]rootschema.producesallOf0`

### `.configurations[].endpoint.parameters[]rootschema.paths`

### `.configurations[].endpoint.parameters[]rootschema.definitions`

### `.configurations[].endpoint.parameters[]rootschema.parameters`

### `.configurations[].endpoint.parameters[]rootschema.responses`

### `.configurations[].endpoint.parameters[]rootschema.security`

### `.configurations[].endpoint.parameters[]rootschema.securityDefinitions`

### `.configurations[].endpoint.parameters[]rootschema.tags`

*Type*: array

### `.configurations[].endpoint.parameters[]rootschema.tags[]`

### `.configurations[].endpoint.parameters[]rootschema.externalDocs`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo`

General information about the API.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfopatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.title`

A unique and precise title of the API.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.version`

A semantic version number of the API.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.description`

A longer description of the API. Should be different from the title.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.termsOfService`

The terms of service for the API.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.contact`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsinfo.license`

### `.configurations[].endpoint.parameters[]rootschemadefinitionscontact`

Contact information for the owners of the API.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionscontact.name`

The identifying name of the contact person/organization.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionscontact.url`

The URL pointing to the contact information.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionscontact.email`

The email address of the contact person/organization.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionscontactpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionslicense`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionslicense.name`

The name of the license type. It's encouraged to use an OSI compatible license.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionslicense.url`

The URL pointing to the license.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionslicensepatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspaths`

Relative paths to the individual endpoints. They must be relative to the 'basePath'.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathspatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathspatternProperties^~1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsdefinitions`

One or more JSON objects describing the schemas being consumed and produced by the API.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsdefinitionsadditionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparameterDefinitions`

One or more JSON representations for parameters

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparameterDefinitionsadditionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponseDefinitions`

One or more JSON representations for responses

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponseDefinitionsadditionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexternalDocs`

information about external documentation

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexternalDocs.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexternalDocs.url`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexternalDocspatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexamples`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmimeType`

The MIME type of the HTTP message.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperationpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.tags`

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.tags[]`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.summary`

A brief summary of the operation.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.description`

A longer description of the operation, GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.externalDocs`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.operationId`

A unique identifier of the operation.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.produces`

A list of MIME types the API can produce.

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.producesallOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.consumes`

A list of MIME types the API can consume.

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.consumesallOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.parameters`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.responses`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.schemes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.deprecated`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoperation.security`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItempatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.$ref`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.get`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.put`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.post`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.delete`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.options`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.head`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.patch`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathItem.parameters`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponses`

Response objects names can either be any valid HTTP status code or 'default'.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponsespatternProperties^([0-9]{3})$|^(default)$`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponsespatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponsesnot`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponsesnotpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponseValue`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponseValueoneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponseValueoneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.schema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.schemaoneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.schemaoneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.headers`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponse.examples`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsresponsepatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaders`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheadersadditionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.type`

*Type*: string

*Allowed values*: `string` `number` `integer` `boolean` `array`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheader.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsvendorExtension`

Any property starting with x- is valid.

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameterpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter.description`

A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter.name`

The name of the parameter.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter.in`

Determines the location of the parameter.

*Type*: string

*Allowed values*: `body`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter.required`

Determines whether or not this parameter is required or optional.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbodyParameter.schema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.required`

Determines whether or not this parameter is required or optional.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.in`

Determines the location of the parameter.

*Type*: string

*Allowed values*: `header`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.description`

A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.name`

The name of the parameter.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.type`

*Type*: string

*Allowed values*: `string` `number` `boolean` `integer` `array`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsheaderParameterSubSchema.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.required`

Determines whether or not this parameter is required or optional.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.in`

Determines the location of the parameter.

*Type*: string

*Allowed values*: `query`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.description`

A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.name`

The name of the parameter.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.allowEmptyValue`

allows sending a parameter by name only or with an empty value.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.type`

*Type*: string

*Allowed values*: `string` `number` `boolean` `integer` `array`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsqueryParameterSubSchema.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.required`

Determines whether or not this parameter is required or optional.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.in`

Determines the location of the parameter.

*Type*: string

*Allowed values*: `formData`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.description`

A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.name`

The name of the parameter.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.allowEmptyValue`

allows sending a parameter by name only or with an empty value.

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.type`

*Type*: string

*Allowed values*: `string` `number` `boolean` `integer` `array` `file`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsformDataParameterSubSchema.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.required`

Determines whether or not this parameter is required or optional.

*Type*: boolean

*Allowed values*: `true`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.in`

Determines the location of the parameter.

*Type*: string

*Allowed values*: `path`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.description`

A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.name`

The name of the parameter.

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.type`

*Type*: string

*Allowed values*: `string` `number` `boolean` `integer` `array`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspathParameterSubSchema.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsnonBodyParameter`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsnonBodyParameteroneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsnonBodyParameteroneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsnonBodyParameteroneOf2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsnonBodyParameteroneOf3`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparameter`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparameteroneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparameteroneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema`

A deterministic version of a JSON Schema object.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.$ref`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.title`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.description`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.maxProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.minProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.required`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.additionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.additionalPropertiesanyOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.additionalPropertiesanyOf1`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.additionalPropertiesdefault`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.type`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.[]anyOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.[]anyOf1`

*Type*: array

*Minimum items*: 1

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.[]anyOf1[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.[]default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.allOf`

*Type*: array

*Minimum items*: 1

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.allOf[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema..`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema..additionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema..default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.discriminator`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.readOnly`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.xml`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.externalDocs`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschema.example`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema`

A deterministic version of a JSON Schema object.

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchemapatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.title`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.description`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.required`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.type`

*Type*: string

*Allowed values*: `file`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.readOnly`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.externalDocs`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsfileSchema.example`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.type`

*Type*: string

*Allowed values*: `string` `number` `integer` `boolean` `array`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.format`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.collectionFormat`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.default`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.maximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.exclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.minimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.exclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.maxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.minLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.pattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.maxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.minItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.uniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.enum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItems.multipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsprimitivesItemspatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurity`

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurity[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityRequirement`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityRequirementadditionalProperties`

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityRequirementadditionalProperties[]`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml.name`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml.namespace`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml.prefix`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml.attribute`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxml.wrapped`

*Type*: boolean

### `.configurations[].endpoint.parameters[]rootschemadefinitionsxmlpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionstag`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionstag.name`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionstag.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionstag.externalDocs`

### `.configurations[].endpoint.parameters[]rootschemadefinitionstagpatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitions`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalProperties`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf3`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf4`

### `.configurations[].endpoint.parameters[]rootschemadefinitionssecurityDefinitionsadditionalPropertiesoneOf5`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbasicAuthenticationSecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbasicAuthenticationSecurity.type`

*Type*: string

*Allowed values*: `basic`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbasicAuthenticationSecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsbasicAuthenticationSecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecurity.type`

*Type*: string

*Allowed values*: `apiKey`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecurity.name`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecurity.in`

*Type*: string

*Allowed values*: `header` `query`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsapiKeySecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity.type`

*Type*: string

*Allowed values*: `oauth2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity.flow`

*Type*: string

*Allowed values*: `implicit`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity.scopes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity.authorizationUrl`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ImplicitSecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity.type`

*Type*: string

*Allowed values*: `oauth2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity.flow`

*Type*: string

*Allowed values*: `password`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity.scopes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity.tokenUrl`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2PasswordSecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity.type`

*Type*: string

*Allowed values*: `oauth2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity.flow`

*Type*: string

*Allowed values*: `application`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity.scopes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity.tokenUrl`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ApplicationSecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.type`

*Type*: string

*Allowed values*: `oauth2`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.flow`

*Type*: string

*Allowed values*: `accessCode`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.scopes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.authorizationUrl`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.tokenUrl`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecurity.description`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2AccessCodeSecuritypatternProperties^x-`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2Scopes`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsoauth2ScopesadditionalProperties`

*Type*: string

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmediaTypeList`

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmediaTypeList[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparametersList`

The parameters needed to send a valid API call.

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparametersList[]`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparametersList[]oneOf0`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsparametersList[]oneOf1`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschemesList`

The transfer protocol of the API.

*Type*: array

### `.configurations[].endpoint.parameters[]rootschemadefinitionsschemesList[]`

*Type*: string

*Allowed values*: `http` `https` `ws` `wss`

### `.configurations[].endpoint.parameters[]rootschemadefinitionscollectionFormat`

*Type*: string

*Allowed values*: `csv` `ssv` `tsv` `pipes`

### `.configurations[].endpoint.parameters[]rootschemadefinitionscollectionFormatWithMulti`

*Type*: string

*Allowed values*: `csv` `ssv` `tsv` `pipes` `multi`

### `.configurations[].endpoint.parameters[]rootschemadefinitionstitle`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsdescription`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsdefault`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmultipleOf`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexclusiveMaximum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsminimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsexclusiveMinimum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmaxLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsminLength`

### `.configurations[].endpoint.parameters[]rootschemadefinitionspattern`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsmaxItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsminItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsuniqueItems`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsenum`

### `.configurations[].endpoint.parameters[]rootschemadefinitionsjsonReference`

*Type*: object

### `.configurations[].endpoint.parameters[]rootschemadefinitionsjsonReference.$ref`

*Type*: string

### `.configurations[].endpoint.parameters[]rootlocalRefs`

### `.configurations[].endpoint.parameters[]rootrefs`

### `.configurations[].endpoint.ui`

### `.configurations[].endpoint.uischema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.configurations[].endpoint.uischema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.configurations[].endpoint.uischema.sections[]`

### `.configurations[].endpoint.uirefs`

### `.configurations[].endpoint.uiroot`

### `.configurations[].endpoint.uirootschema`

### `.configurations[].endpoint.uirootschemadefinitionsLabels`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.configurations[].endpoint.uirootschemadefinitionsLabels[]`

### `.configurations[].endpoint.uirootschemadefinitionsLabel`

**Label**

A label is a key/value pair intended to be used to specify identifying attributes that are meaningful and relevant to users.

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsLabel.key`

### `.configurations[].endpoint.uirootschemadefinitionsLabel.value`

### `.configurations[].endpoint.uirootschemadefinitionsIdent`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

*Pattern*: `^[a-z-]+$`

### `.configurations[].endpoint.uirootschemadefinitionsLabelValue`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

### `.configurations[].endpoint.uirootschemadefinitionsBasicSemVer`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `.configurations[].endpoint.uirootschemadefinitionsBlockName`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration`

Extend ui configuration field with pure UserInterface representation configuration (example : specify placeholder from standard component, use slider component to set number instead simple number input, use color picker component to set string or yet use external widget).

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0`

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0not`

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1`

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1not`

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget`

Specify widget to use. Widget is similar to a component except it is owned by a BlockProvider and is not part of the standard components available in the platform.

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget.name`

name of widget to use for this configuration field.

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget.version`

version of widget.

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration.component`

Allow to extend component configuration with representation parameters (example: placeholder) or to use another component than the default one.

### `.configurations[].endpoint.uirootschemadefinitionsUIRepresentationPropertyConfiguration.component.name`

name of component to use for this configuration field (example: slider)

*Type*: string

*Allowed values*: `slider`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty`

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.type`

basic type of configuration field

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.typeanyOf0`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.title`

Label of configuration field

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.description`

description of configuration field

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.maximum`

*Type*: number

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.minimum`

*Type*: number

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.maxLength`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.minLength`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.pattern`

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.enum`

*Type*: array

*Minimum items*: 1

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.enum[]`

*Type*: string,number

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.format`

subset of html input type to describe input behavior

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.formatanyOf0`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.x-ui-configuration`

### `.configurations[].endpoint.uirootschemadefinitionsUIProperty.default`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesminimum`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesminimum.type`

*Allowed values*: `number`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesmaximum`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesmaximum.type`

*Allowed values*: `number`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesmaxLength`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesmaxLength.type`

*Allowed values*: `string`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesformat`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesformat.type`

*Allowed values*: `string`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesenum`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesenum.type`

*Allowed values*: `string` `number`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciespattern`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciespattern.type`

*Allowed values*: `string`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesminLength`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertydependenciesminLength.type`

*Allowed values*: `string`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf0`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf0.type`

*Allowed values*: `boolean`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf1`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf1.type`

*Allowed values*: `string`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf2`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyoneOf2.type`

*Allowed values*: `number`

### `.configurations[].endpoint.uirootschemadefinitionsBlockType`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `.configurations[].endpoint.uirootschemadefinitionsBlockTemplateEngine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `.configurations[].endpoint.uirootschemadefinitionsUIPropertyBasicTypes`

*Allowed values*: `number` `string` `boolean`

### `.configurations[].endpoint.uirootschemadefinitionsUIInputFormat`

*Allowed values*: `email` `text` `date`

### `.configurations[].endpoint.uirootschemadefinitionsUISection`

**UI configuration contract group**

Define configuration set contract

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsUISection.title`

Title of form tab to display PageBuilder

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUISection.description`

Description of form tab. Example: 'Server administration configuration'

*Type*: string

### `.configurations[].endpoint.uirootschemadefinitionsUISection.required`

list mandatory configuration field

### `.configurations[].endpoint.uirootschemadefinitionsUISection..`

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsUISection..additionalProperties`

### `.configurations[].endpoint.uirootschemadefinitionsUISchema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsUISchema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.configurations[].endpoint.uirootschemadefinitionsUISchema.sections[]`

### `.configurations[].endpoint.uirootschemadefinitionsBlockProviderConfig`

**BlockProviderConfig**

BlockProvider response format to declare BlockConfig

*Type*: array

*Minimum items*: 1

### `.configurations[].endpoint.uirootschemadefinitionsBlockProviderConfig[]`

*Type*: object

### `.configurations[].endpoint.uirootschemadefinitionsConfigMap`

**ConfigMap**

Key/Value dataset

*Type*: object

### `.configurations[].endpoint.uirootlocalRefs`

### `.configurations[].endpoint.uirootrefs`

### `.configurations[].rpc`

*Type*: object

### `.configurations[].rpc.view`

*Type*: object

### `.configurations[].rpc.view.url`

**Block RPC view HTTP url**

The HTTP(S) address the CMS will call to request the block view RPC endpoint

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block/rpc/view`

### `.configurations[].rpc.admin`

*Type*: object

### `.configurations[].rpc.admin.url`

**Block RPC admin HTTP url**

The HTTP(S) address the CMS will call to request the block admin RPC endpoint

*Type*: string

*Examples*: `http://my.domain.com/blockprovider/block/rpc/admin`

### `.configurations[].templates`

*Type*: array

### `.configurations[].templates[]`

*Type*: object

### `.configurations[].templates[].name`

**Theme name**

Theme name, so users will be able to differentiate them in the PageBuilder app

*Type*: string

*Examples*: `default` `christmas`

### `.configurations[].templates[].labels`

### `.configurations[].templates[].labelsschema`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.configurations[].templates[].labelsschema[]`

### `.configurations[].templates[].labelsrefs`

### `.configurations[].templates[].labelsroot`

### `.configurations[].templates[].labelsrootschema`

### `.configurations[].templates[].labelsrootschemadefinitionsLabels`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.configurations[].templates[].labelsrootschemadefinitionsLabels[]`

### `.configurations[].templates[].labelsrootschemadefinitionsLabel`

**Label**

A label is a key/value pair intended to be used to specify identifying attributes that are meaningful and relevant to users.

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsLabel.key`

### `.configurations[].templates[].labelsrootschemadefinitionsLabel.value`

### `.configurations[].templates[].labelsrootschemadefinitionsIdent`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

*Pattern*: `^[a-z-]+$`

### `.configurations[].templates[].labelsrootschemadefinitionsLabelValue`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

### `.configurations[].templates[].labelsrootschemadefinitionsBasicSemVer`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `.configurations[].templates[].labelsrootschemadefinitionsBlockName`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration`

Extend ui configuration field with pure UserInterface representation configuration (example : specify placeholder from standard component, use slider component to set number instead simple number input, use color picker component to set string or yet use external widget).

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0`

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0not`

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1`

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1not`

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget`

Specify widget to use. Widget is similar to a component except it is owned by a BlockProvider and is not part of the standard components available in the platform.

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget.name`

name of widget to use for this configuration field.

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.widget.version`

version of widget.

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.component`

Allow to extend component configuration with representation parameters (example: placeholder) or to use another component than the default one.

### `.configurations[].templates[].labelsrootschemadefinitionsUIRepresentationPropertyConfiguration.component.name`

name of component to use for this configuration field (example: slider)

*Type*: string

*Allowed values*: `slider`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty`

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.type`

basic type of configuration field

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.typeanyOf0`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.title`

Label of configuration field

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.description`

description of configuration field

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.maximum`

*Type*: number

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.minimum`

*Type*: number

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.maxLength`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.minLength`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.pattern`

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.enum`

*Type*: array

*Minimum items*: 1

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.enum[]`

*Type*: string,number

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.format`

subset of html input type to describe input behavior

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.formatanyOf0`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.x-ui-configuration`

### `.configurations[].templates[].labelsrootschemadefinitionsUIProperty.default`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesminimum`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesminimum.type`

*Allowed values*: `number`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesmaximum`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesmaximum.type`

*Allowed values*: `number`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesmaxLength`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesmaxLength.type`

*Allowed values*: `string`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesformat`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesformat.type`

*Allowed values*: `string`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesenum`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesenum.type`

*Allowed values*: `string` `number`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciespattern`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciespattern.type`

*Allowed values*: `string`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesminLength`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertydependenciesminLength.type`

*Allowed values*: `string`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf0`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf0.type`

*Allowed values*: `boolean`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf1`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf1.type`

*Allowed values*: `string`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf2`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyoneOf2.type`

*Allowed values*: `number`

### `.configurations[].templates[].labelsrootschemadefinitionsBlockType`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `.configurations[].templates[].labelsrootschemadefinitionsBlockTemplateEngine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `.configurations[].templates[].labelsrootschemadefinitionsUIPropertyBasicTypes`

*Allowed values*: `number` `string` `boolean`

### `.configurations[].templates[].labelsrootschemadefinitionsUIInputFormat`

*Allowed values*: `email` `text` `date`

### `.configurations[].templates[].labelsrootschemadefinitionsUISection`

**UI configuration contract group**

Define configuration set contract

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsUISection.title`

Title of form tab to display PageBuilder

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUISection.description`

Description of form tab. Example: 'Server administration configuration'

*Type*: string

### `.configurations[].templates[].labelsrootschemadefinitionsUISection.required`

list mandatory configuration field

### `.configurations[].templates[].labelsrootschemadefinitionsUISection..`

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsUISection..additionalProperties`

### `.configurations[].templates[].labelsrootschemadefinitionsUISchema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsUISchema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.configurations[].templates[].labelsrootschemadefinitionsUISchema.sections[]`

### `.configurations[].templates[].labelsrootschemadefinitionsBlockProviderConfig`

**BlockProviderConfig**

BlockProvider response format to declare BlockConfig

*Type*: array

*Minimum items*: 1

### `.configurations[].templates[].labelsrootschemadefinitionsBlockProviderConfig[]`

*Type*: object

### `.configurations[].templates[].labelsrootschemadefinitionsConfigMap`

**ConfigMap**

Key/Value dataset

*Type*: object

### `.configurations[].templates[].labelsrootlocalRefs`

### `.configurations[].templates[].labelsrootrefs`

### `.configurations[].templates[].engine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `.configurations[].templates[].source`

**Template source**

Inlined template content

*Type*: string

*Examples*: `<section>Hello {{ name }}</section>`

### `.configurations[].templates[].assets`

*Type*: object

### `.configurations[].templates[].assets.js`

*Type*: array

### `.configurations[].templates[].assets.js[]`

**Js assets**

-

### `.configurations[].templates[].assets.css`

*Type*: array

### `.configurations[].templates[].assets.css[]`

**Css assets**

This accepts anything, as long as it's valid JSON.

### `.configurations[].templates[].assets.fonts`

*Type*: array

### `.configurations[].templates[].assets.fonts[]`

**Fonts assets**

This accepts anything, as long as it's valid JSON.

### `.configurations[].templates[].assets.images`

*Type*: array

### `.configurations[].templates[].assets.images[]`

**Images assets**

This accepts anything, as long as it's valid JSON.

### `.configurations[].external`

*Type*: object

### `.configurations[].external.parameters`

*Type*: array

### `.configurations[].external.parameters[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `see OpenAPI Parameters / JSON Schema Specification Wright Draft 00 (aka Draft 5)`

### `.configurations[].external.ui`

### `.configurations[].external.uischema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.configurations[].external.uischema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.configurations[].external.uischema.sections[]`

### `.configurations[].external.uirefs`

### `.configurations[].external.uiroot`

### `.configurations[].external.uirootschema`

### `.configurations[].external.uirootschemadefinitionsLabels`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `.configurations[].external.uirootschemadefinitionsLabels[]`

### `.configurations[].external.uirootschemadefinitionsLabel`

**Label**

A label is a key/value pair intended to be used to specify identifying attributes that are meaningful and relevant to users.

*Type*: object

### `.configurations[].external.uirootschemadefinitionsLabel.key`

### `.configurations[].external.uirootschemadefinitionsLabel.value`

### `.configurations[].external.uirootschemadefinitionsIdent`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

*Pattern*: `^[a-z-]+$`

### `.configurations[].external.uirootschemadefinitionsLabelValue`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

### `.configurations[].external.uirootschemadefinitionsBasicSemVer`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `.configurations[].external.uirootschemadefinitionsBlockName`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration`

Extend ui configuration field with pure UserInterface representation configuration (example : specify placeholder from standard component, use slider component to set number instead simple number input, use color picker component to set string or yet use external widget).

*Type*: object

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0`

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf0not`

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1`

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfigurationoneOf1not`

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget`

Specify widget to use. Widget is similar to a component except it is owned by a BlockProvider and is not part of the standard components available in the platform.

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget.name`

name of widget to use for this configuration field.

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration.widget.version`

version of widget.

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration.component`

Allow to extend component configuration with representation parameters (example: placeholder) or to use another component than the default one.

### `.configurations[].external.uirootschemadefinitionsUIRepresentationPropertyConfiguration.component.name`

name of component to use for this configuration field (example: slider)

*Type*: string

*Allowed values*: `slider`

### `.configurations[].external.uirootschemadefinitionsUIProperty`

*Type*: object

### `.configurations[].external.uirootschemadefinitionsUIProperty.type`

basic type of configuration field

### `.configurations[].external.uirootschemadefinitionsUIProperty.typeanyOf0`

### `.configurations[].external.uirootschemadefinitionsUIProperty.title`

Label of configuration field

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUIProperty.description`

description of configuration field

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUIProperty.maximum`

*Type*: number

### `.configurations[].external.uirootschemadefinitionsUIProperty.minimum`

*Type*: number

### `.configurations[].external.uirootschemadefinitionsUIProperty.maxLength`

### `.configurations[].external.uirootschemadefinitionsUIProperty.minLength`

### `.configurations[].external.uirootschemadefinitionsUIProperty.pattern`

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUIProperty.enum`

*Type*: array

*Minimum items*: 1

### `.configurations[].external.uirootschemadefinitionsUIProperty.enum[]`

*Type*: string,number

### `.configurations[].external.uirootschemadefinitionsUIProperty.format`

subset of html input type to describe input behavior

### `.configurations[].external.uirootschemadefinitionsUIProperty.formatanyOf0`

### `.configurations[].external.uirootschemadefinitionsUIProperty.x-ui-configuration`

### `.configurations[].external.uirootschemadefinitionsUIProperty.default`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesminimum`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesminimum.type`

*Allowed values*: `number`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesmaximum`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesmaximum.type`

*Allowed values*: `number`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesmaxLength`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesmaxLength.type`

*Allowed values*: `string`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesformat`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesformat.type`

*Allowed values*: `string`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesenum`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesenum.type`

*Allowed values*: `string` `number`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciespattern`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciespattern.type`

*Allowed values*: `string`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesminLength`

### `.configurations[].external.uirootschemadefinitionsUIPropertydependenciesminLength.type`

*Allowed values*: `string`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf0`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf0.type`

*Allowed values*: `boolean`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf1`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf1.type`

*Allowed values*: `string`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf2`

### `.configurations[].external.uirootschemadefinitionsUIPropertyoneOf2.type`

*Allowed values*: `number`

### `.configurations[].external.uirootschemadefinitionsBlockType`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `.configurations[].external.uirootschemadefinitionsBlockTemplateEngine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `.configurations[].external.uirootschemadefinitionsUIPropertyBasicTypes`

*Allowed values*: `number` `string` `boolean`

### `.configurations[].external.uirootschemadefinitionsUIInputFormat`

*Allowed values*: `email` `text` `date`

### `.configurations[].external.uirootschemadefinitionsUISection`

**UI configuration contract group**

Define configuration set contract

*Type*: object

### `.configurations[].external.uirootschemadefinitionsUISection.title`

Title of form tab to display PageBuilder

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUISection.description`

Description of form tab. Example: 'Server administration configuration'

*Type*: string

### `.configurations[].external.uirootschemadefinitionsUISection.required`

list mandatory configuration field

### `.configurations[].external.uirootschemadefinitionsUISection..`

*Type*: object

### `.configurations[].external.uirootschemadefinitionsUISection..additionalProperties`

### `.configurations[].external.uirootschemadefinitionsUISchema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `.configurations[].external.uirootschemadefinitionsUISchema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `.configurations[].external.uirootschemadefinitionsUISchema.sections[]`

### `.configurations[].external.uirootschemadefinitionsBlockProviderConfig`

**BlockProviderConfig**

BlockProvider response format to declare BlockConfig

*Type*: array

*Minimum items*: 1

### `.configurations[].external.uirootschemadefinitionsBlockProviderConfig[]`

*Type*: object

### `.configurations[].external.uirootschemadefinitionsConfigMap`

**ConfigMap**

Key/Value dataset

*Type*: object

### `.configurations[].external.uirootlocalRefs`

### `.configurations[].external.uirootrefs`

### `.configurations[].external.headers`

*Type*: array

### `.configurations[].external.headers[]`

**The 0 Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`

### `.configurations[].external.head`

*Type*: object

### `.configurations[].external.head.links`

*Type*: array

### `.configurations[].external.head.links[]`

*Type*: object

### `.configurations[].external.head.links[].rel`

**The Rel Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`

### `.configurations[].external.head.meta`

*Type*: array

### `.configurations[].external.head.meta[]`

*Type*: object

### `.configurations[].external.head.meta[].name`

**The Name Schema.**

An explanation about the purpose of this instance.

*Type*: string

*Examples*: `String`