# Utiliser l'image Node officielle pour builder l'application Angular
FROM node:16 as build-stage

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Construire l'application Angular
RUN npm run build -- --output-path=dist

# Utiliser une image Nginx officielle pour servir l'application Angular
FROM nginx:alpine as production-stage

# Copier les fichiers construits de l'application Angular du build-stage vers le répertoire Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port sur lequel l'application va tourner
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
