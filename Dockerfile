# Etapa de producción con Nginx
FROM nginx:alpine

# Copiar archivos estáticos al directorio de Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# El comando por defecto de la imagen nginx:alpine ya inicia el servidor
CMD ["nginx", "-g", "daemon off;"]
