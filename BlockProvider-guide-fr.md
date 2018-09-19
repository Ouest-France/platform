# Block

Les Blocks sont les éléments atomiques du CMS Ouest France. Un Block est un composant Web (HTML/CSS/JS) présent au sein
d'une ou de plusieurs pages Ouest France.

Exemple :

- Block Détail article
- Block Météo
- Block Header de page

Un Block peut être mise en œuvre par tout partenaire Ouest France afin de fournir de nouveaux services au sein des
pages du groupe Ouest France.

Pour ce faire, un Block doit fournir un contrat d'interface standard (ie. contrat du Block) permettant l'enregistrement de ce dernier au sein
de la plateforme Ouest France.

## Cycle de vie d'un Block

### Administration du Block

1. Enregistrement du contrat de Block au sein du CMS
2. Positionnement du Block au sein des pages du site
3. Configuration du Block (ie. template cible + paramètres fournis par le Block) 

### Affichage d'une page contenant le Block

1. Lancement de l'affichage d'une page (ie. rendu de page)
2. Lancement du rendu du Block (ie. rendu de Block)
3. Valorisation des paramètres du Block par le CMS
4. Appel du endpoint BlockData du Block (si présent au sein du contrat de Block)
5. Intégration de la réponse BlockData au sein du contexte de rendu

    - Remarque : le contexte de rendu d'un Block contient ses paramètres d'entrée, la réponse BlockData ou encore les informations
utilisateur)
    - Exemple : Block Meteo

      - Paramètres d'entrée du Block : latitude=45 - longitude=-12 - date=12/06/2018
      - Réponse BlockData : meteo=Ensoleillé - city=Rennes
  
6. Rendu du template Mustache

    - Remarque : si le template contient des paramètres entrée et/ou sortie, ces derniers sont remplacés par le moteur Mustache
    - Exemple : Block Meteo   

- Avant rendu

~~~
<div>
  <h1>Meteo de {{city}} du {{ date }}</h1>
  <p>{{meteo}}</p>
</div>
~~~

- Après rendu
      
~~~
<div>
  <h1>Meteo de Rennes du 12/06/2018</h1>
  <p>Ensoleillé</p>
</div>
~~~

## Contrat de Block

Le contrat de Block est défini dans le JSON Schema [suivant](https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockConfig.json).

Ce contrat définit les éléments suivants :

- Nom du contrat
- Type du contrat
- Labels du contrat (permettant de catégoriser finement le Block)
- Un ou plusieurs templates [Mustache](https://mustache.github.io/) (ie. moteur de template HTML)

Exemple Mustache :

~~~
<div>
{{#items}}
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <p>{{link}}</p>
  <p>{{guid}}</p>
{{/items}}
</div>
~~~

- Endpoint HTTP permettant d'accéder à des informations contextuelles lors du rendu du Block
- Formulaire de paramétrage permettant de fournir des données d'entrée au Block (ces données peuvent être à destination des templates)

Exemple : [Block Meteo](blockprovider-example-meteo/BlockProviderConfig.json)

Remarque : l'ensemble des propriétés du contrat Block sont présentées [ici](documentation/BlockConfig.md)

## UI

Le contrat de Block contient notamment un élément "ui". Cet élément décrit le formulaire HTML, affiché au sein de l'éditeur de pages Ouest France, destiné
à la configuration du Block.

Ce formulaire doit respecter la [spécification suivante](https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/defs.json#/definitions/UISchema).

Remarque : l'item "section" modèlise un onglet. Il est possible d'en fournir plusieurs si vous désirez fournir plusieurs familles de paramètres.

## BlockData

La réponse BlockData (ie. réponse du Endpoint Block) doit respecter le format suivant [BlockJSON](https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockJSON.json) :

- la section "internal" contient toutes des données utilisées au sein du template
- la section "external" contient toutes des données utilisées au sein du template ET exposées aux autres Blocks de la page courante du Block

# BlockProvider

Un BlockProvider est le nom donné aux partenaires Ouest France fournissant des Blocks. Un BlockProvider doit fournir un 
endpoint fournissant l'ensemble des contrats de Blocks dont il a la charge.

La définition d'un BlockProvider est définie dans le [JSON Schema suivant](https://raw.githubusercontent.com/Ouest-France/platform/master/packages/schemas/BlockProviderConfig.json).

Exemple : Block Meteo

~~~
[
{
"name": "Meteo",
"type": "Navigation",
...
},
{
"name": "Marées",
"type": "Navigation",
...
}
]
~~~

En tant que BlockProvider, vous devez fournir un endpoint HTTP(S) fournissant au CMS Ouest France la défintion complète
de vos Blocks : c'est le point de liaison entre vous et Ouest France.

# Validation d'un Block

Pour valider et tester un Block, Ouest France vous fournit le [Block Runner](https://platform.sipaof.fr/) :

- Onglet "Runner" : permet de tester le rendu d'un Block

  - Config URL : Endpoint fournissant la définition du BlockProvider
  - Nom : Nom du Block à rendre
  - Version : Version du Block
  - Paramètres : Paramètres du endpoint BlockDate
  - Template : Template
  
- Onglet "Info" : permet d'inspecter la définition d'un BlockProvider et de fournir la liste des Blocks (nom + version)

  - Config URL : Endpoint fournissant la définition du BlockProvider
    
- Onglet "Validation" : permet de valider syntaxiquement et sémantiquement la définition d'un BlockProvider

  - Config URL : Endpoint fournissant la définition du BlockProvider
    
# Versionning des Blocks

Les Blocks sont immuables (incluant paramètres de configuration, templates, CSS, JS et Fonts) : après enregistrement 
de la version d'un Block, toute modification de cette dernière ne serait pris en compte par le CMS Ouest France. 

Aussi, pour mettre à jour le Block, il est nécessaire de fournir une nouvelle version et de la soumettre à la validation 
plateforme Ouest France.


Le versionning des Blocks doit s'appuyer sur SemVer (Semantic Versioning) :

~~~
Étant donné un numéro de version MAJEUR.MINEUR.CORRECTIF, il faut incrémenter :

le numéro de version MAJEUR quand il y a des changements non rétrocompatibles,
le numéro de version MINEUR quand il y a des changements rétrocompatibles,
le numéro de version de CORRECTIF quand il y a des corrections d’anomalies rétrocompatibles
Des libellés supplémentaires peuvent être ajoutés pour les versions de pré-livraison et pour des méta-données de construction sous forme d’extension du format MAJEURE.MINEURE.CORRECTIF.
~~~

# Principes de développement

## Prérequis

- Développement Web (HTML / CSS / Javascript)
- Templating Mustache
- Endpoint Block (si nécessaire) : développement backend au choix du BlockProvider (Java, C#, PHP, NodeJS ...)

## Consignes

Un Block ne devrait pas fournir ses propres CSS, Javascript ou Fonts mais devrait plutôt tirer parti des [Composants SipaUI](https://github.com/Ouest-France/SipaUI) ... si vous le devez vraiment (et pensez passer la validation de notre équipe plateforme) :

- Chaque sélecteur CSS doit être préfixé par "bp-<nom_block>"

Exemple : .bp-meteo .moteur-recherche{position:relative}

- Les fichiers JS sont concaténés et chargés de manière asynchrone (ie. <script async ...>)
- Chaque fichier JS est isolé (afin de bloquer toute variable globale) au sein de notre page :

~~~
(function(){
<VOTRE CODE JS>
}());
~~~

- Un BlockProvider doit répondre en moins de 150 ms lors de la phase de rendu, si vous ne répondez pas assez vite, votre Block ne sera pas rendu 
- Un Block doit être responsive

