# BlockJSON response format

Response format when the CMS calls a BlockProvider. Le BlockJSON est la réponse que reçoit le CMS lorsqu'il interroge un Block, il utilise ces données pour hydrater le template et donc rendre le Block.

### Example

```json
{
  "internal": {},
  "external": {
    "data": {},
    "headers": [
      {}
    ],
    "head": {
      "links": [
        {
          "rel": "",
          "href": ""
        }
      ],
      "meta": [
        {
          "name": "",
          "content": ""
        }
      ]
    }
  }
}
```


### Documentation

### `.internal`

**internal data**

Data exposed for the corresponding specified BlockConfig template. Définit ce qui est nécessaire pour le rendering du block par le CMS.

*Type*: object

### `.internal.data`

**Les données sous format clé/valeur permettant d’alimenter les placeholders du template.**

Les données sous format clé/valeur nécessaires à l’alimentation des placeholders du template. Chaque clé et valeur doit correspondre au format défini dans le BlockConfig.

*Type*: object

### `.external`

**external data**

Définit ce qui est disponible pour d’autres composants du CMS (doit contenir tous les éléments exposés dans le BlockData en externe).

*Type*: object

### `.external.data`

**Les données sous format clé/valeur disponibles aux autres composants du CMS.**

Les données sous format clé/valeur rendus disponible par le Block à d’autres composants du CMS. Chaque clé et valeur doit correspondre au format défini dans le BlockConfig.

*Type*: object

### `.external.headers`

**Ensemble de clé/valeur des headers HTTP à ajouter au retour de la page finale. **

Les headers HTTP à exposer au CMS qui seront fusionnés avec les autres. Uniquement un subset de headers est autorisé à être exposé.

*Type*: array

### `.external.headers[]`





*Type*: object

### `.external.head`

**Les éléments à ajouter à la balise head de la page finale.**

Cela contient les éléments qui seront à ajouter à la section head de l'html (ex : link et meta pour l'instant).

*Type*: object

### `.external.head.links`



Ensemble des éléments links à ajouter à la balise head de la page finale.

*Type*: array

### `.external.head.links[]`





*Type*: object

### `.external.head.links[].rel`

**The Rel Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.head.links[].href`

**The Href Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.head.meta`

**meta**

Ensemble des éléments meta à ajouter à la balise head de la page finale.

*Type*: array

### `.external.head.meta[]`





*Type*: object

### `.external.head.meta[].name`

**The Name Schema.**

An explanation about the purpose of this instance.

*Type*: string

### `.external.head.meta[].content`

**The Content Schema.**

An explanation about the purpose of this instance.

*Type*: string