# 🔐 Encriptador-Logico-SPA

**[🇪🇸 Español](README.es.md) | 🇬🇧 English | [🇧🇷 Português](README.pt.md) | [🇷🇴 Română](README.ro.md)**

SPA (Single Page Application) for text encryption, demonstrating algorithm logic and DOM manipulation.

## 🚀 Technologies

- **HTML5** - Semantic structure
- **CSS3** - Responsive and modern design
- **JavaScript (Vanilla)** - Encryption logic and DOM manipulation
- **Docker** - Containerization
- **Nginx** - Production web server

## 📋 Description

This web application allows you to encrypt and decrypt text messages using a vowel substitution algorithm. It's an educational project that demonstrates:

- DOM manipulation with JavaScript
- Encryption algorithm logic
- Responsive design
- SPA (Single Page Application) architecture
- Docker deployment

### Encryption Rules

- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

### Example

- **Original text:** `hello world`
- **Encrypted text:** `henterllober woberldrld`

## 🏠 Local Development

### Option 1: Open directly in browser

The simplest way to run the application is to open the `index.html` file directly in your browser:

1. Clone the repository:
```bash
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

2. Open `index.html` in your favorite browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

### Option 2: Local server with Python

If you prefer to use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Local server with Node.js

If you have Node.js installed, you can use `http-server`:

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000

# Or with npx (without installing)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 🐳 Docker

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your system
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, but recommended)

### Build and Run

#### With Docker Compose (Recommended)

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The application will be available at `http://localhost:8080`

#### With Docker directly

```bash
# Build the image
docker build -t encriptador-logico-spa .

# Run the container
docker run -d -p 8080:80 --name encriptador encriptador-logico-spa

# View logs
docker logs -f encriptador

# Stop the container
docker stop encriptador

# Remove the container
docker rm encriptador
```

### Useful Docker Commands

```bash
# View running containers
docker ps

# View all images
docker images

# Access the container
docker exec -it encriptador sh

# View resource usage
docker stats encriptador

# Restart the container
docker restart encriptador
```

## ☁️ Cloud Deployment

### Vercel (Recommended for SPAs)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Or connect your GitHub repository with [Vercel](https://vercel.com) for automatic deployment.

**Additional configuration:** Not required, Vercel automatically detects static HTML files.

### Netlify

1. Option 1: Drag and drop the project folder on [Netlify Drop](https://app.netlify.com/drop)

2. Option 2: Connect your GitHub repository:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Leave default configuration
   - Click "Deploy site"

3. Option 3: Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Go to Settings → Pages in your repository
2. Select the `main` branch and the `/ (root)` folder
3. Click "Save"
4. Your site will be available at: `https://melek-eyzaguirre-dev.github.io/Encriptador-Logico-SPA/`

### AWS (with S3 + CloudFront)

1. **Create S3 bucket:**
```bash
aws s3 mb s3://encriptador-logico-spa
```

2. **Upload files:**
```bash
aws s3 sync . s3://encriptador-logico-spa --exclude ".git/*" --exclude "*.md"
```

3. **Enable static hosting:**
```bash
aws s3 website s3://encriptador-logico-spa --index-document index.html
```

4. **Configure public permissions in AWS console**

### DigitalOcean App Platform

1. Connect your GitHub repository
2. Select "Static Site"
3. Configure:
   - Build command: (leave empty)
   - Output directory: (leave empty or `/`)
4. Deploy

### Heroku (with Docker)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create encriptador-logico-spa

# Login to container registry
heroku container:login

# Push image
heroku container:push web

# Release
heroku container:release web

# Open app
heroku open
```

## 📚 Project Structure

```
Encriptador-Logico-SPA/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles
├── script.js           # JavaScript logic
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker orchestration
├── nginx.conf          # Nginx configuration
├── .dockerignore       # Files ignored by Docker
├── .gitignore          # Files ignored by Git
└── README.md           # Documentation
```

## 📸 Screenshots

### Desktop View - Initial State
![Initial State](https://github.com/user-attachments/assets/908f523f-7a92-413b-9f55-d79a08d92d63)

### Desktop View - Encrypted Text
![Encrypted Text](https://github.com/user-attachments/assets/8ad0f84d-c70e-4086-abc3-926c38c5b973)

### Desktop View - Decrypted Text
![Decrypted Text](https://github.com/user-attachments/assets/b85ad1fa-25db-4fd7-bbfc-584328b2d6ca)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/430c2ad7-aa15-4e27-91ad-a085ccec7c88)

## 🎯 Features

- ✅ Text encryption and decryption
- ✅ Input validation (lowercase only, no accents)
- ✅ Intuitive and responsive interface
- ✅ Copy result to clipboard
- ✅ Modern design with animations
- ✅ Compatible with all modern browsers
- ✅ No external dependencies
- ✅ Dockerized for easy deployment

## 💻 Application Usage

1. **Enter text:** Type or paste the text you want to encrypt in the main text area
2. **Encrypt:** Click the "🔒 Encrypt" button to convert the text
3. **Decrypt:** Click the "🔓 Decrypt" button to revert the encrypted text
4. **Copy:** Once you get the result, click "📋 Copy" to copy it to clipboard

**Note:** Only lowercase letters without accents are accepted.

## 🔧 Development

### Modify styles

Edit `styles.css` to change the appearance:
- CSS variables in `:root` for colors
- Media queries for responsive design

### Modify logic

Edit `script.js` to change behavior:
- `encryptionRules`: Encryption rules
- `decryptionRules`: Decryption rules
- `encryptText()` and `decryptText()` functions: Transformation logic

### Testing

You can test the encryption logic by opening the browser console:

```javascript
// Encryption test
console.log(encryptText("hello world"));  // "henterllober woberldrld"

// Decryption test
console.log(decryptText("henterllober woberldrld"));  // "hello world"
```

## 🤝 Contributions

Contributions are welcome. To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Git/GitHub Workflow

### Initial Setup

```bash
# Configure user
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Clone repository
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

### Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull remote changes
git pull origin main
```

### Working with Branches

```bash
# Create new branch
git checkout -b feature/new-feature

# Switch branch
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

## 📄 License

This project is under the MIT License - see the LICENSE file for more details.

## 👥 Author

- **Melek Eyzaguirre** - [GitHub](https://github.com/melek-eyzaguirre-dev)

## 🙏 Acknowledgments

Project created as part of a programming challenge to demonstrate skills in:
- Frontend Development
- Programming Logic
- DOM Manipulation
- DevOps and Containerization

---

⭐ If this project was useful to you, consider giving it a star on GitHub!
