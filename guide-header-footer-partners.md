# Introduction
Ouest-France s'appuie sur un pool de partenaires pour fournir des sites webs en sous-domaine Ouest-France.
Ces partenaires ont en charge l'ensemble du site cible (gestion du contenu, infrastructure, ...) mais portent l'identité graphique Ouest-France.

Ces sites partenaires intègrent notamment le header et le footer Ouest-France :

- Exemple Header

![Header](exemple-header.png)

- Exemple Footer

![Footer](exemple-footer-2.png)

# Configuration
Afin de permettre aux partenaires Ouest-France d'intégrer les mises à jour de ces 2 composants, Ouest-France fournit 2 URLs :

- Header : https://cdn.sipaof.fr/partenaires/header-footer/header.html
- Footer : https://cdn.sipaof.fr/partenaires/header-footer/footer.html

Ces deux URLs contiennent le code HTML à implémenter. Ils contiennent également une balise style contenant le CSS inline à ajouter dans le projet.

# Intégration
Le principe d'intégration consiste à récupérer le code HTML, le mettre dans le site désiré. Puis récupérer les balises style et les mettre également soit dans son CSS soit en inline dans le site à côté du HTML.
Enfin, si vous disposez de pages mentions légales, ou Données personnelles etc, vous devez changer le href dans le footer pour mettre l'url de votre site.

# Recommandations
- Le composant doit être présent dans le code HTML de la page et non ajouté dynamiquement via manipulation DOM en Javascript. Cela implique que la récupération du contenu doit IMPÉRATIVEMENT être faite coté serveur (il est totalement PROHIBÉ de charger le composant coté client via appel AJAX donc)
- Le header/footer NE DOIT en aucun cas être utilisé au sein d'un <iframe> (ie. avec "Accept: text/html")
