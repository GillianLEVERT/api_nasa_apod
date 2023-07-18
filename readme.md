Exercice API APOD de la NASA
Cet exercice a pour objectif de tester l'API APOD (Astronomy Picture of the Day) de la NASA. L'API APOD permet d'afficher une image astronomique différente chaque jour, accompagnée de quelques informations supplémentaires.

Description
Ce projet est une application React qui utilise l'API APOD de la NASA pour afficher l'image astronomique du jour, ainsi que son titre, sa date et une brève explication. L'image est mise à jour quotidiennement par la NASA.

Instructions
Pour tester cette application localement, suivez ces étapes :

Clonez ce dépôt GitHub :

1/
git clone https://github.com/votre-utilisateur/votre-repo.git

2/
Accédez au répertoire du projet :
cd nom-du-repertoire

3/
Installez les dépendances avec PNPM (assurez-vous de l'avoir installé au préalable) :
pnpm install

4/
Créez un fichier .env à la racine du projet et ajoutez votre clé d'API de la NASA :
VITE_TOKEN=votre-clé-api
4.1/
dans votre fichier vite.config.js 
`import dotenv from 'dotenv';

dotenv.config();
`

5/ 
Démarrez l'application en mode développement :
pnpm dev
Ouvrez votre navigateur et accédez à l'URL http://localhost:3000 pour voir l'application.

Amusez-vous à explorer les différentes images astronomiques fournies par l'API APOD de la NASA !

