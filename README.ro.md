# 🔐 Encriptador-Logico-SPA

**[🇪🇸 Español](README.es.md) | [🇬🇧 English](README.en.md) | [🇧🇷 Português](README.pt.md) | 🇷🇴 Română**

SPA (Single Page Application) pentru criptarea textului, demonstrând logica algoritmilor și manipularea DOM.

## 🚀 Tehnologii

- **HTML5** - Structură semantică
- **CSS3** - Design responsiv și modern
- **JavaScript (Vanilla)** - Logică de criptare și manipulare DOM
- **Docker** - Containerizare
- **Nginx** - Server web pentru producție

## 📋 Descriere

Această aplicație web permite criptarea și decriptarea mesajelor text folosind un algoritm de substituție a vocalelor. Este un proiect educațional care demonstrează:

- Manipularea DOM cu JavaScript
- Logica algoritmilor de criptare
- Design responsiv
- Arhitectură SPA (Single Page Application)
- Implementare cu Docker

### Reguli de Criptare

- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

### Exemplu

- **Text original:** `salut lume`
- **Text criptat:** `sailiufatt lufatmenter`

## 🏠 Dezvoltare Locală

### Opțiunea 1: Deschide direct în browser

Cea mai simplă metodă de a rula aplicația este să deschizi fișierul `index.html` direct în browser:

1. Clonează repository-ul:
```bash
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

2. Deschide `index.html` în browserul tău preferat:
```bash
# Pe Windows
start index.html

# Pe macOS
open index.html

# Pe Linux
xdg-open index.html
```

### Opțiunea 2: Server local cu Python

Dacă preferi să folosești un server local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Apoi deschide `http://localhost:8000` în browserul tău.

### Opțiunea 3: Server local cu Node.js

Dacă ai Node.js instalat, poți folosi `http-server`:

```bash
# Instalează http-server global
npm install -g http-server

# Rulează serverul
http-server -p 8000

# Sau cu npx (fără instalare)
npx http-server -p 8000
```

Apoi deschide `http://localhost:8000` în browserul tău.

## 🐳 Docker

### Cerințe Prealabile

- [Docker](https://www.docker.com/get-started) instalat pe sistemul tău
- [Docker Compose](https://docs.docker.com/compose/install/) (opțional, dar recomandat)

### Construire și Rulare

#### Cu Docker Compose (Recomandat)

```bash
# Construiește și rulează
docker-compose up -d

# Vezi logurile
docker-compose logs -f

# Oprește
docker-compose down
```

Aplicația va fi disponibilă la `http://localhost:8080`

#### Cu Docker direct

```bash
# Construiește imaginea
docker build -t encriptador-logico-spa .

# Rulează containerul
docker run -d -p 8080:80 --name encriptador encriptador-logico-spa

# Vezi logurile
docker logs -f encriptador

# Oprește containerul
docker stop encriptador

# Șterge containerul
docker rm encriptador
```

### Comenzi Utile Docker

```bash
# Vezi containere în execuție
docker ps

# Vezi toate imaginile
docker images

# Accesează containerul
docker exec -it encriptador sh

# Vezi utilizarea resurselor
docker stats encriptador

# Repornește containerul
docker restart encriptador
```

## ☁️ Implementare în Cloud

### Vercel (Recomandat pentru SPA-uri)

1. Instalează Vercel CLI:
```bash
npm install -g vercel
```

2. Implementează:
```bash
vercel
```

3. Sau conectează repository-ul tău GitHub cu [Vercel](https://vercel.com) pentru implementare automată.

**Configurație suplimentară:** Nu este necesară, Vercel detectează automat fișierele HTML statice.

### Netlify

1. Opțiunea 1: Trage și plasează folderul proiectului pe [Netlify Drop](https://app.netlify.com/drop)

2. Opțiunea 2: Conectează repository-ul tău GitHub:
   - Mergi la [Netlify](https://app.netlify.com)
   - Click pe "New site from Git"
   - Selectează repository-ul tău
   - Lasă configurația implicită
   - Click pe "Deploy site"

3. Opțiunea 3: Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Mergi la Settings → Pages în repository-ul tău
2. Selectează branch-ul `main` și folderul `/ (root)`
3. Click pe "Save"
4. Site-ul tău va fi disponibil la: `https://melek-eyzaguirre-dev.github.io/Encriptador-Logico-SPA/`

### AWS (cu S3 + CloudFront)

1. **Creează bucket S3:**
```bash
aws s3 mb s3://encriptador-logico-spa
```

2. **Încarcă fișierele:**
```bash
aws s3 sync . s3://encriptador-logico-spa --exclude ".git/*" --exclude "*.md"
```

3. **Activează hosting static:**
```bash
aws s3 website s3://encriptador-logico-spa --index-document index.html
```

4. **Configurează permisiuni publice în consola AWS**

### DigitalOcean App Platform

1. Conectează repository-ul tău GitHub
2. Selectează "Static Site"
3. Configurează:
   - Build command: (lasă gol)
   - Output directory: (lasă gol sau `/`)
4. Deploy

### Heroku (cu Docker)

```bash
# Instalează Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Creează app
heroku create encriptador-logico-spa

# Login la container registry
heroku container:login

# Push imagine
heroku container:push web

# Release
heroku container:release web

# Deschide app
heroku open
```

## 📚 Structura Proiectului

```
Encriptador-Logico-SPA/
├── index.html          # Structură HTML principală
├── styles.css          # Stiluri CSS
├── script.js           # Logică JavaScript
├── Dockerfile          # Configurație Docker
├── docker-compose.yml  # Orchestrare Docker
├── nginx.conf          # Configurație Nginx
├── .dockerignore       # Fișiere ignorate de Docker
├── .gitignore          # Fișiere ignorate de Git
└── README.md           # Documentație
```

## 📸 Capturi de Ecran

### Vizualizare Desktop - Stare Inițială
![Stare Inițială](https://github.com/user-attachments/assets/908f523f-7a92-413b-9f55-d79a08d92d63)

### Vizualizare Desktop - Text Criptat
![Text Criptat](https://github.com/user-attachments/assets/8ad0f84d-c70e-4086-abc3-926c38c5b973)

### Vizualizare Desktop - Text Decriptat
![Text Decriptat](https://github.com/user-attachments/assets/b85ad1fa-25db-4fd7-bbfc-584328b2d6ca)

### Vizualizare Mobilă
![Vizualizare Mobilă](https://github.com/user-attachments/assets/430c2ad7-aa15-4e27-91ad-a085ccec7c88)

## 🎯 Caracteristici

- ✅ Criptare și decriptare text
- ✅ Validare input (doar litere mici fără accente)
- ✅ Interfață intuitivă și responsivă
- ✅ Copiază rezultatul în clipboard
- ✅ Design modern cu animații
- ✅ Compatibil cu toate browserele moderne
- ✅ Fără dependențe externe
- ✅ Dockerizat pentru implementare ușoară

## 💻 Utilizarea Aplicației

1. **Introdu text:** Scrie sau lipește textul pe care dorești să-l criptezi în zona de text principală
2. **Criptează:** Click pe butonul "🔒 Encriptar" pentru a converti textul
3. **Decriptează:** Click pe butonul "🔓 Desencriptar" pentru a reveni la textul criptat
4. **Copiază:** Odată ce obții rezultatul, click pe "📋 Copiar" pentru a-l copia în clipboard

**Notă:** Sunt acceptate doar litere mici fără accente.

## 🔧 Dezvoltare

### Modifică stilurile

Editează `styles.css` pentru a schimba aspectul:
- Variabile CSS în `:root` pentru culori
- Media queries pentru design responsiv

### Modifică logica

Editează `script.js` pentru a schimba comportamentul:
- `encryptionRules`: Reguli de criptare
- `decryptionRules`: Reguli de decriptare
- Funcții `encryptText()` și `decryptText()`: Logica de transformare

### Testare

Poți testa logica de criptare deschizând consola browserului:

```javascript
// Test criptare
console.log(encryptText("salut lume"));  // "sailiufatt lufatmenter"

// Test decriptare
console.log(decryptText("sailiufatt lufatmenter"));  // "salut lume"
```

## 🤝 Contribuții

Contribuțiile sunt binevenite. Pentru a contribui:

1. Fă fork la proiect
2. Creează un branch pentru feature-ul tău (`git checkout -b feature/FeatureMinunat`)
3. Commit-ează schimbările (`git commit -m 'Adaugă un FeatureMinunat'`)
4. Push la branch (`git push origin feature/FeatureMinunat`)
5. Deschide un Pull Request

## 📝 Workflow Git/GitHub

### Configurare Inițială

```bash
# Configurează utilizator
git config --global user.name "Numele Tău"
git config --global user.email "email@tău.com"

# Clonează repository
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

### Workflow

```bash
# Verifică status
git status

# Adaugă schimbări
git add .

# Commit
git commit -m "Descrierea schimbărilor"

# Push la GitHub
git push origin main

# Pull schimbări remote
git pull origin main
```

### Lucrul cu Branch-uri

```bash
# Creează branch nou
git checkout -b feature/functionalitate-noua

# Schimbă branch
git checkout main

# Merge branch
git merge feature/functionalitate-noua

# Șterge branch
git branch -d feature/functionalitate-noua
```

## 📄 Licență

Acest proiect este sub Licența MIT - vezi fișierul LICENSE pentru mai multe detalii.

## 👥 Autor

- **Melek Eyzaguirre** - [GitHub](https://github.com/melek-eyzaguirre-dev)

## 🙏 Mulțumiri

Proiect creat ca parte a unei provocări de programare pentru a demonstra abilități în:
- Dezvoltare Frontend
- Logică de Programare
- Manipulare DOM
- DevOps și Containerizare

---

⭐ Dacă acest proiect ți-a fost util, consideră să-i dai o stea pe GitHub!
