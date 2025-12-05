# 🔐 Encriptador-Logico-SPA

**🇪🇸 Español | [🇬🇧 English](README.en.md) | [🇧🇷 Português](README.pt.md) | [🇷🇴 Română](README.ro.md)**

SPA (Single Page Application) para encriptación de texto, demostrando lógica de algoritmos y manipulación del DOM.

## 🚀 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y moderno
- **JavaScript (Vanilla)** - Lógica de encriptación y manipulación del DOM
- **Docker** - Containerización
- **Nginx** - Servidor web para producción

## 📋 Descripción

Esta aplicación web permite encriptar y desencriptar mensajes de texto utilizando un algoritmo de sustitución de vocales. Es un proyecto educativo que demuestra:

- Manipulación del DOM con JavaScript
- Lógica de algoritmos de encriptación
- Diseño responsive
- Arquitectura SPA (Single Page Application)
- Despliegue con Docker

### Reglas de Encriptación

- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

### Ejemplo

- **Texto original:** `hola mundo`
- **Texto encriptado:** `hoberlai mufatndober`

## 🏠 Desarrollo Local

### Opción 1: Abrir directamente en el navegador

La forma más simple de ejecutar la aplicación es abrir el archivo `index.html` directamente en tu navegador:

1. Clona el repositorio:
```bash
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

2. Abre `index.html` en tu navegador favorito:
```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

### Opción 2: Servidor local con Python

Si prefieres usar un servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 3: Servidor local con Node.js

Si tienes Node.js instalado, puedes usar `http-server`:

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar el servidor
http-server -p 8000

# O con npx (sin instalar)
npx http-server -p 8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🐳 Docker

### Requisitos Previos

- [Docker](https://www.docker.com/get-started) instalado en tu sistema
- [Docker Compose](https://docs.docker.com/compose/install/) (opcional, pero recomendado)

### Construcción y Ejecución

#### Con Docker Compose (Recomendado)

```bash
# Construir y ejecutar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

La aplicación estará disponible en `http://localhost:8080`

#### Con Docker directamente

```bash
# Construir la imagen
docker build -t encriptador-logico-spa .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name encriptador encriptador-logico-spa

# Ver logs
docker logs -f encriptador

# Detener el contenedor
docker stop encriptador

# Eliminar el contenedor
docker rm encriptador
```

### Comandos Útiles de Docker

```bash
# Ver contenedores en ejecución
docker ps

# Ver todas las imágenes
docker images

# Acceder al contenedor
docker exec -it encriptador sh

# Ver uso de recursos
docker stats encriptador

# Reiniciar el contenedor
docker restart encriptador
```

## ☁️ Despliegue en la Nube

### Vercel (Recomendado para SPAs)

1. Instala Vercel CLI:
```bash
npm install -g vercel
```

2. Despliega:
```bash
vercel
```

3. O conecta tu repositorio de GitHub con [Vercel](https://vercel.com) y se desplegará automáticamente.

**Configuración adicional:** No se requiere, Vercel detecta automáticamente archivos HTML estáticos.

### Netlify

1. Opción 1: Arrastra y suelta la carpeta del proyecto en [Netlify Drop](https://app.netlify.com/drop)

2. Opción 2: Conecta tu repositorio de GitHub:
   - Ve a [Netlify](https://app.netlify.com)
   - Click en "New site from Git"
   - Selecciona tu repositorio
   - Deja la configuración por defecto
   - Click en "Deploy site"

3. Opción 3: Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. Selecciona la rama `main` y la carpeta `/ (root)`
3. Click en "Save"
4. Tu sitio estará disponible en: `https://melek-eyzaguirre-dev.github.io/Encriptador-Logico-SPA/`

### AWS (con S3 + CloudFront)

1. **Crear bucket S3:**
```bash
aws s3 mb s3://encriptador-logico-spa
```

2. **Subir archivos:**
```bash
aws s3 sync . s3://encriptador-logico-spa --exclude ".git/*" --exclude "*.md"
```

3. **Habilitar hosting estático:**
```bash
aws s3 website s3://encriptador-logico-spa --index-document index.html
```

4. **Configurar permisos públicos en la consola de AWS**

### DigitalOcean App Platform

1. Conecta tu repositorio de GitHub
2. Selecciona "Static Site"
3. Configura:
   - Build command: (dejar vacío)
   - Output directory: (dejar vacío o `/`)
4. Deploy

### Heroku (con Docker)

```bash
# Instalar Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Crear app
heroku create encriptador-logico-spa

# Login al container registry
heroku container:login

# Push de la imagen
heroku container:push web

# Release
heroku container:release web

# Abrir la app
heroku open
```

## 📚 Estructura del Proyecto

```
Encriptador-Logico-SPA/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── Dockerfile          # Configuración de Docker
├── docker-compose.yml  # Orquestación de Docker
├── nginx.conf          # Configuración de Nginx
├── .dockerignore       # Archivos ignorados por Docker
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Documentación
```

## 📸 Capturas de Pantalla

### Vista de Escritorio - Estado Inicial
![Estado Inicial](https://github.com/user-attachments/assets/908f523f-7a92-413b-9f55-d79a08d92d63)

### Vista de Escritorio - Texto Encriptado
![Texto Encriptado](https://github.com/user-attachments/assets/8ad0f84d-c70e-4086-abc3-926c38c5b973)

### Vista de Escritorio - Texto Desencriptado
![Texto Desencriptado](https://github.com/user-attachments/assets/b85ad1fa-25db-4fd7-bbfc-584328b2d6ca)

### Vista Móvil
![Vista Móvil](https://github.com/user-attachments/assets/430c2ad7-aa15-4e27-91ad-a085ccec7c88)

## 🎯 Características

- ✅ Encriptación y desencriptación de texto
- ✅ Validación de entrada (solo minúsculas sin acentos)
- ✅ Interfaz intuitiva y responsive
- ✅ Copiar resultado al portapapeles
- ✅ Diseño moderno con animaciones
- ✅ Compatible con todos los navegadores modernos
- ✅ Sin dependencias externas
- ✅ Dockerizado para fácil despliegue

## 💻 Uso de la Aplicación

1. **Ingresa el texto:** Escribe o pega el texto que deseas encriptar en el área de texto principal
2. **Encriptar:** Click en el botón "🔒 Encriptar" para convertir el texto
3. **Desencriptar:** Click en el botón "🔓 Desencriptar" para revertir el texto encriptado
4. **Copiar:** Una vez obtengas el resultado, click en "📋 Copiar" para copiarlo al portapapeles

**Nota:** Solo se aceptan letras minúsculas y sin acentos.

## 🔧 Desarrollo

### Modificar estilos

Edita `styles.css` para cambiar la apariencia:
- Variables CSS en `:root` para colores
- Media queries para responsive design

### Modificar lógica

Edita `script.js` para cambiar el comportamiento:
- `encryptionRules`: Reglas de encriptación
- `decryptionRules`: Reglas de desencriptación
- Funciones `encryptText()` y `decryptText()`: Lógica de transformación

### Testing

Puedes probar la lógica de encriptación abriendo la consola del navegador:

```javascript
// Prueba de encriptación
console.log(encryptText("hola mundo"));  // "hoberlai mufatndober"

// Prueba de desencriptación
console.log(decryptText("hoberlai mufatndober"));  // "hola mundo"
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Workflow de Git/GitHub

### Configuración Inicial

```bash
# Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Clonar repositorio
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

### Flujo de Trabajo

```bash
# Verificar estado
git status

# Añadir cambios
git add .

# Commit
git commit -m "Descripción de los cambios"

# Push a GitHub
git push origin main

# Pull cambios remotos
git pull origin main
```

### Trabajar con Ramas

```bash
# Crear nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar de rama
git checkout main

# Merge de rama
git merge feature/nueva-funcionalidad

# Eliminar rama
git branch -d feature/nueva-funcionalidad
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 👥 Autor

- **Melek Eyzaguirre** - [GitHub](https://github.com/melek-eyzaguirre-dev)

## 🙏 Agradecimientos

Proyecto creado como parte de un desafío de programación para demostrar habilidades en:
- Desarrollo Frontend
- Lógica de programación
- Manipulación del DOM
- DevOps y Containerización

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
