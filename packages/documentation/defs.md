# 



### Example

```json
{}
```


### Documentation

### `definitionsLabels`

**Labels**

Labels are key/value pairs that are attached to objects, such as BlockConfig. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system. Labels can be used to organize and to select subsets of objects. Labels can be attached to objects at creation time and subsequently added and modified at any time. Each object can have a set of key/value labels defined. Each Key must be unique for a given object.

*Type*: array

*Example*: `"release" : "stable", "release" : "canary"
"service":"meteo", "service":"cinema"`

### `definitionsLabels[]`

### `definitionsLabel`

**Label**

A label is a key/value pair intended to be used to specify identifying attributes that are meaningful and relevant to users.

*Type*: object

### `definitionsLabel.key`

### `definitionsLabel.value`

### `definitionsIdent`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

*Pattern*: `^[a-z-]+$`

### `definitionsLabelValue`

*Type*: string

*Minimum length*: 3

*Maximum length*: 50

### `definitionsBasicSemVer`

**Basic Semantic version**

MAJOR.MINOR.PATCH, see https://semver.org/

*Type*: string

*Pattern*: `^[0-9]+\.[0-9]+\.[0-9]+$`

*Examples*: `0.0.1` `1.0.0`

### `definitionsBlockName`

**Functional ID describing the Block**

The functional ID must be unique for CMS

*Type*: string

*Examples*: `editorial/article--list` `editorial/article--detail` `meteo/meteo--detail`

### `definitionsUIRepresentationPropertyConfiguration`

Extend ui configuration field with pure UserInterface representation configuration (example : specify placeholder from standard component, use slider component to set number instead simple number input, use color picker component to set string or yet use external widget).

*Type*: object

### `definitionsUIRepresentationPropertyConfigurationoneOf0`

### `definitionsUIRepresentationPropertyConfigurationoneOf0not`

### `definitionsUIRepresentationPropertyConfigurationoneOf1`

### `definitionsUIRepresentationPropertyConfigurationoneOf1not`

### `definitionsUIRepresentationPropertyConfiguration.widget`

Specify widget to use. Widget is similar to a component except it is owned by a BlockProvider and is not part of the standard components available in the platform.

### `definitionsUIRepresentationPropertyConfiguration.widget.name`

name of widget to use for this configuration field.

*Type*: string

### `definitionsUIRepresentationPropertyConfiguration.widget.version`

version of widget.

*Type*: string

### `definitionsUIRepresentationPropertyConfiguration.component`

Allow to extend component configuration with representation parameters (example: placeholder) or to use another component than the default one.

### `definitionsUIRepresentationPropertyConfiguration.component.name`

name of component to use for this configuration field (example: slider)

*Type*: string

*Allowed values*: `slider`

### `definitionsUIProperty`

*Type*: object

### `definitionsUIProperty.type`

basic type of configuration field

### `definitionsUIProperty.typeanyOf0`

### `definitionsUIProperty.title`

Label of configuration field

*Type*: string

### `definitionsUIProperty.description`

description of configuration field

*Type*: string

### `definitionsUIProperty.maximum`

*Type*: number

### `definitionsUIProperty.minimum`

*Type*: number

### `definitionsUIProperty.maxLength`

### `definitionsUIProperty.minLength`

### `definitionsUIProperty.pattern`

*Type*: string

### `definitionsUIProperty.enum`

*Type*: array

*Minimum items*: 1

### `definitionsUIProperty.enum[]`

*Type*: string,number

### `definitionsUIProperty.format`

subset of html input type to describe input behavior

### `definitionsUIProperty.formatanyOf0`

### `definitionsUIProperty.x-ui-configuration`

### `definitionsUIProperty.default`

### `definitionsUIPropertydependenciesminimum`

### `definitionsUIPropertydependenciesminimum.type`

*Allowed values*: `number`

### `definitionsUIPropertydependenciesmaximum`

### `definitionsUIPropertydependenciesmaximum.type`

*Allowed values*: `number`

### `definitionsUIPropertydependenciesmaxLength`

### `definitionsUIPropertydependenciesmaxLength.type`

*Allowed values*: `string`

### `definitionsUIPropertydependenciesformat`

### `definitionsUIPropertydependenciesformat.type`

*Allowed values*: `string`

### `definitionsUIPropertydependenciesenum`

### `definitionsUIPropertydependenciesenum.type`

*Allowed values*: `string` `number`

### `definitionsUIPropertydependenciespattern`

### `definitionsUIPropertydependenciespattern.type`

*Allowed values*: `string`

### `definitionsUIPropertydependenciesminLength`

### `definitionsUIPropertydependenciesminLength.type`

*Allowed values*: `string`

### `definitionsUIPropertyoneOf0`

### `definitionsUIPropertyoneOf0.type`

*Allowed values*: `boolean`

### `definitionsUIPropertyoneOf1`

### `definitionsUIPropertyoneOf1.type`

*Allowed values*: `string`

### `definitionsUIPropertyoneOf2`

### `definitionsUIPropertyoneOf2.type`

*Allowed values*: `number`

### `definitionsBlockType`

**Type de Block**

BlockType can be Display, Navigation or Type.
The BlockType typology is :
- Navigation : dynamic Block with user action which requires a page reloading. Example : search form, pagination for the news Block, etc.
- Display : static Block without user interaction (no state change according to the current URL, state depends only on config parameters)
- Site : Block attached to the site (Display/Navigation : attached to the page). Its role consists in providing metadata to all pages.

*Type*: string

*Allowed values*: `Navigation` `Display` `Site`

### `definitionsBlockTemplateEngine`

**Template engine**

The template engine to use to render this Block. *twig* is deprecated, always use 'mustache' instead, see: https://mustache.github.io

*Type*: string

*Allowed values*: `twig` `mustache` `php-twig`

### `definitionsUIPropertyBasicTypes`

*Allowed values*: `number` `string` `boolean`

### `definitionsUIInputFormat`

*Allowed values*: `email` `text` `date`

### `definitionsUISection`

**UI configuration contract group**

Define configuration set contract

*Type*: object

### `definitionsUISection.title`

Title of form tab to display PageBuilder

*Type*: string

### `definitionsUISection.description`

Description of form tab. Example: 'Server administration configuration'

*Type*: string

### `definitionsUISection.required`

list mandatory configuration field

### `definitionsUISection..`

*Type*: object

### `definitionsUISection..additionalProperties`

### `definitionsUISchema`

**UISchema declaration**

Specify in UISchema format how the parameters should be rendered in PageBuilder.

*Type*: object

### `definitionsUISchema.sections`

list of configuration set contract. Allows configuration to be consolidated by interest

*Type*: array

### `definitionsUISchema.sections[]`

### `definitionsBlockProviderConfig`

**BlockProviderConfig**

BlockProvider response format to declare BlockConfig

*Type*: array

*Minimum items*: 1

### `definitionsBlockProviderConfig[]`

*Type*: object

### `definitionsConfigMap`

**ConfigMap**

Key/Value dataset

*Type*: object