# Utilizar una imagen oficial de Node como imagen base
FROM node:16 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Utilizar Nginx para servir la aplicación
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para correr el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
