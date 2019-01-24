# Introduction
Ouest-France s'appuie sur un pool de partenaires pour fournir des sites webs en sous-domaine Ouest-France.
Ces partenaires ont en charge l'ensemble du site cible (gestion du contenu, infrastructure, ...) mais porte l'identité graphique Ouest-France.

Ces sites partenaires intègrent notamment le header et le footer Ouest-France :

- Exemple Header

![Header](exemple-header.png)

- Exemple Footer

![Footer](exemple-footer.png)

# Configuration
Afin de permettre aux partenaires Ouest-France d'intégrer automatiquement les mises à jour de ces 2 composants, Ouest-France fournit 2 URLs :

- Header : https://platform.sipaof.fr/api/blocks/of-partenaires-header@latest?__config__=https://apiblocktopus.sipaof.fr/blockconfigs?blocks=of-partenaires-header&__template__=default&libelle=[TEXT]&__isPageOF__=false&__hasAssetsOF__=false
- Footer : https://platform.sipaof.fr/api/blocks/of-partenaires-footer@latest?__config__=https://apiblocktopus.sipaof.fr/blockconfigs?blocks=of-partenaires-footer&__template__=default&lien_donnees_personnelles=[URL]&lien_mentions_legales=[URL]&__isPageOF__=false&__hasAssetsOF__=false  
 
Les paramètres suivants doivent être modifiés sur chacun des sites partenaires :

- libelle (header) : un texte court du type « En partenariat avec <nom-partenaire> ». Ce texte apparait au scroll en mode mobile.
- lien_donnees_personnelles (footer) : l'adresse de la page "données personnelles" du site partenaire
- lien_mentions_legales (footer) : l'adresse de la page "mentions légales" du site partenaire

Les URLs de configuration s'appuient sur le principe de [négotiation de contenu](https://fr.wikipedia.org/wiki/N%C3%A9gociation_de_contenu) afin de :
- afficher un aperçu HTML du composant (Accept : text/html)
- afficher un objet JSON contenant toutes les informations nécessaires à l'intégration du composant chez un site partenaire (Accept : application/json)

Exemple Header + "application/json" : curl --header "Content-Type: application/json" --request GET https://platform.sipaof.fr/api/blocks/of-partenaires-header@latest?__config__=https://apiblocktopus.sipaof.fr/blockconfigs?blocks=of-partenaires-header&__template__=default&libelle=exemple&__isPageOF__=false&__hasAssetsOF__=false 

```
{
    "html": "<div class=\"of-header-footer\">\n    <header class=\"header header-new clearfix hidden-xs hidden-sm\"> ... </header>\n</div>",
    "assets": {
        "js": [],
        "css": [
            "https://apiblocktopus.sipaof.fr/assets/3b08d82e-d2d4-4155-8ea7-ea74ed77e7eb/version/1",
            "https://apiblocktopus.sipaof.fr/assets/d0893477-27e6-4dbb-a855-d7144d9e9838/version/1",
            "https://apiblocktopus.sipaof.fr/assets/daf0fb22-fa8b-45db-85da-edbd8c216edc/version/1"
        ],
        "fonts": [],
        "images": []
    },
    "version": "2.0.0"
}
```

Ce format fournit :

- "html" : contenu HTML du composant
- "assets.js" : fichiers Javascript du composant
- "assets.css" : fichiers Javascript du composant
- "version" : version du composant

Remarque : les champs "images" et "fonts" sont toujours vides.


# Intégration
Le principe d'intégration consiste en interroger à intervalles réguliers (tous les jours par exemple), les URLs de configuration afin de récupérer la dernière version des composants.

Une fois le contenu récupéré, le code HTML et les assets JS/CSS peuvent être intégrés au sein du site partenaire.

# Recommandations
- Le composant doit être présent dans le code HTML de la page et non ajouté dynamiquement via manipulation DOM. Cela implique que la récupération du contenu JSON doit IMPERATIVEMENT être faite coté serveur (il est totalement PROHIBE de charger le composant coté client via appel AJAX donc)
- Il est possible de se stocker la version de composant fournie afin de ne mettre à jour le composant qu'en cas de montée ou de descente de version
- Les fichiers CSS doivent être positionnés dans le <head> des pages du site.
- Les fichiers JS doivent être positionnés après le code HTML au sein du <body> (en fin de body par exemple)
- L'adresse NE DOIT en aucun cas être utilisé au sein d'un <iframe> (ie. avec "Accept: text/html") 
