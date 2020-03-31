# Introduction
Ouest-France s'appuie sur un pool de partenaires pour fournir des sites webs en sous-domaine Ouest-France.
Ces partenaires ont en charge l'ensemble du site cible (gestion du contenu, infrastructure, ...) mais portent l'identité graphique Ouest-France.

Ces sites partenaires intègrent notamment le header et le footer Ouest-France :

- Exemple Header

![Header](exemple-header.png)

- Exemple Footer

![Footer](exemple-footer.png)

# Configuration
Afin de permettre aux partenaires Ouest-France d'intégrer les mises à jour de ces 2 composants, Ouest-France fournit 2 URLs :

- Header : http://cdn.sipaof.fr/partenaires/header-footer/header-of.html
- Footer : http://cdn.sipaof.fr/partenaires/header-footer/footer-of.html

Ces deux URLs contiennent le code HTML à implémenter. Ils contiennent également une balise style contenant le CSS inline à ajouter dans le projet.

# Intégration
Le principe d'intégration consiste en interroger à intervalles réguliers (tous les jours par exemple), les URLs de configuration afin de récupérer la dernière version des composants.

Une fois le contenu récupéré, le code HTML et les assets JS/CSS peuvent être intégrés au sein du site partenaire.

# Recommandations
- Le composant doit être présent dans le code HTML de la page et non ajouté dynamiquement via manipulation DOM. Cela implique que la récupération du contenu JSON doit IMPÉRATIVEMENT être faite coté serveur (il est totalement PROHIBÉ de charger le composant coté client via appel AJAX donc)
- Il est possible de stocker la version de composant fournie afin de ne mettre à jour le composant qu'en cas de montée ou de descente de version
- Les fichiers CSS doivent être positionnés dans le <head> des pages du site.
- L'adresse NE DOIT en aucun cas être utilisé au sein d'un <iframe> (ie. avec "Accept: text/html") 
