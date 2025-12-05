# 🔐 Encriptador-Logico-SPA

**[🇪🇸 Español](README.es.md) | [🇬🇧 English](README.en.md) | 🇧🇷 Português | [🇷🇴 Română](README.ro.md)**

SPA (Single Page Application) para criptografia de texto, demonstrando lógica de algoritmos e manipulação do DOM.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo e moderno
- **JavaScript (Vanilla)** - Lógica de criptografia e manipulação do DOM
- **Docker** - Containerização
- **Nginx** - Servidor web para produção

## 📋 Descrição

Esta aplicação web permite criptografar e descriptografar mensagens de texto usando um algoritmo de substituição de vogais. É um projeto educacional que demonstra:

- Manipulação do DOM com JavaScript
- Lógica de algoritmos de criptografia
- Design responsivo
- Arquitetura SPA (Single Page Application)
- Implantação com Docker

### Regras de Criptografia

- `e` → `enter`
- `i` → `imes`
- `a` → `ai`
- `o` → `ober`
- `u` → `ufat`

### Exemplo

- **Texto original:** `ola mundo`
- **Texto criptografado:** `oberlai mufatndober`

## 🏠 Desenvolvimento Local

### Opção 1: Abrir diretamente no navegador

A forma mais simples de executar a aplicação é abrir o arquivo `index.html` diretamente no seu navegador:

1. Clone o repositório:
```bash
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

2. Abra `index.html` no seu navegador favorito:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

### Opção 2: Servidor local com Python

Se preferir usar um servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois abra `http://localhost:8000` no seu navegador.

### Opção 3: Servidor local com Node.js

Se você tem Node.js instalado, pode usar `http-server`:

```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar o servidor
http-server -p 8000

# Ou com npx (sem instalar)
npx http-server -p 8000
```

Depois abra `http://localhost:8000` no seu navegador.

## 🐳 Docker

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado no seu sistema
- [Docker Compose](https://docs.docker.com/compose/install/) (opcional, mas recomendado)

### Construir e Executar

#### Com Docker Compose (Recomendado)

```bash
# Construir e executar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar
docker-compose down
```

A aplicação estará disponível em `http://localhost:8080`

#### Com Docker diretamente

```bash
# Construir a imagem
docker build -t encriptador-logico-spa .

# Executar o container
docker run -d -p 8080:80 --name encriptador encriptador-logico-spa

# Ver logs
docker logs -f encriptador

# Parar o container
docker stop encriptador

# Remover o container
docker rm encriptador
```

### Comandos Úteis do Docker

```bash
# Ver containers em execução
docker ps

# Ver todas as imagens
docker images

# Acessar o container
docker exec -it encriptador sh

# Ver uso de recursos
docker stats encriptador

# Reiniciar o container
docker restart encriptador
```

## ☁️ Implantação na Nuvem

### Vercel (Recomendado para SPAs)

1. Instale Vercel CLI:
```bash
npm install -g vercel
```

2. Implante:
```bash
vercel
```

3. Ou conecte seu repositório GitHub com [Vercel](https://vercel.com) para implantação automática.

**Configuração adicional:** Não é necessária, Vercel detecta automaticamente arquivos HTML estáticos.

### Netlify

1. Opção 1: Arraste e solte a pasta do projeto em [Netlify Drop](https://app.netlify.com/drop)

2. Opção 2: Conecte seu repositório GitHub:
   - Vá para [Netlify](https://app.netlify.com)
   - Clique em "New site from Git"
   - Selecione seu repositório
   - Deixe a configuração padrão
   - Clique em "Deploy site"

3. Opção 3: Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Vá para Settings → Pages no seu repositório
2. Selecione o branch `main` e a pasta `/ (root)`
3. Clique em "Save"
4. Seu site estará disponível em: `https://melek-eyzaguirre-dev.github.io/Encriptador-Logico-SPA/`

### AWS (com S3 + CloudFront)

1. **Criar bucket S3:**
```bash
aws s3 mb s3://encriptador-logico-spa
```

2. **Fazer upload dos arquivos:**
```bash
aws s3 sync . s3://encriptador-logico-spa --exclude ".git/*" --exclude "*.md"
```

3. **Habilitar hospedagem estática:**
```bash
aws s3 website s3://encriptador-logico-spa --index-document index.html
```

4. **Configurar permissões públicas no console AWS**

### DigitalOcean App Platform

1. Conecte seu repositório GitHub
2. Selecione "Static Site"
3. Configure:
   - Build command: (deixe vazio)
   - Output directory: (deixe vazio ou `/`)
4. Deploy

### Heroku (com Docker)

```bash
# Instalar Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Criar app
heroku create encriptador-logico-spa

# Login no container registry
heroku container:login

# Push da imagem
heroku container:push web

# Release
heroku container:release web

# Abrir o app
heroku open
```

## 📚 Estrutura do Projeto

```
Encriptador-Logico-SPA/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── Dockerfile          # Configuração Docker
├── docker-compose.yml  # Orquestração Docker
├── nginx.conf          # Configuração Nginx
├── .dockerignore       # Arquivos ignorados pelo Docker
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Documentação
```

## 📸 Capturas de Tela

### Vista Desktop - Estado Inicial
![Estado Inicial](https://github.com/user-attachments/assets/908f523f-7a92-413b-9f55-d79a08d92d63)

### Vista Desktop - Texto Criptografado
![Texto Criptografado](https://github.com/user-attachments/assets/8ad0f84d-c70e-4086-abc3-926c38c5b973)

### Vista Desktop - Texto Descriptografado
![Texto Descriptografado](https://github.com/user-attachments/assets/b85ad1fa-25db-4fd7-bbfc-584328b2d6ca)

### Vista Móvel
![Vista Móvel](https://github.com/user-attachments/assets/430c2ad7-aa15-4e27-91ad-a085ccec7c88)

## 🎯 Características

- ✅ Criptografia e descriptografia de texto
- ✅ Validação de entrada (apenas minúsculas sem acentos)
- ✅ Interface intuitiva e responsiva
- ✅ Copiar resultado para a área de transferência
- ✅ Design moderno com animações
- ✅ Compatível com todos os navegadores modernos
- ✅ Sem dependências externas
- ✅ Dockerizado para fácil implantação

## 💻 Uso da Aplicação

1. **Digite o texto:** Escreva ou cole o texto que deseja criptografar na área de texto principal
2. **Criptografar:** Clique no botão "🔒 Encriptar" para converter o texto
3. **Descriptografar:** Clique no botão "🔓 Desencriptar" para reverter o texto criptografado
4. **Copiar:** Depois de obter o resultado, clique em "📋 Copiar" para copiá-lo para a área de transferência

**Nota:** Apenas letras minúsculas sem acentos são aceitas.

## 🔧 Desenvolvimento

### Modificar estilos

Edite `styles.css` para mudar a aparência:
- Variáveis CSS em `:root` para cores
- Media queries para design responsivo

### Modificar lógica

Edite `script.js` para mudar o comportamento:
- `encryptionRules`: Regras de criptografia
- `decryptionRules`: Regras de descriptografia
- Funções `encryptText()` e `decryptText()`: Lógica de transformação

### Testes

Você pode testar a lógica de criptografia abrindo o console do navegador:

```javascript
// Teste de criptografia
console.log(encryptText("ola mundo"));  // "oberlai mufatndober"

// Teste de descriptografia
console.log(decryptText("oberlai mufatndober"));  // "ola mundo"
```

## 🤝 Contribuições

Contribuições são bem-vindas. Para contribuir:

1. Faça um fork do projeto
2. Crie um branch para sua feature (`git checkout -b feature/RecursoIncrivel`)
3. Faça commit de suas mudanças (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Faça push para o branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

## 📝 Fluxo de Trabalho Git/GitHub

### Configuração Inicial

```bash
# Configurar usuário
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Clonar repositório
git clone https://github.com/melek-eyzaguirre-dev/Encriptador-Logico-SPA.git
cd Encriptador-Logico-SPA
```

### Fluxo de Trabalho

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "Descrição das mudanças"

# Push para GitHub
git push origin main

# Pull de mudanças remotas
git pull origin main
```

### Trabalhando com Branches

```bash
# Criar novo branch
git checkout -b feature/nova-funcionalidade

# Mudar de branch
git checkout main

# Merge de branch
git merge feature/nova-funcionalidade

# Deletar branch
git branch -d feature/nova-funcionalidade
```

## 📄 Licença

Este projeto está sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## 👥 Autor

- **Melek Eyzaguirre** - [GitHub](https://github.com/melek-eyzaguirre-dev)

## 🙏 Agradecimentos

Projeto criado como parte de um desafio de programação para demonstrar habilidades em:
- Desenvolvimento Frontend
- Lógica de Programação
- Manipulação do DOM
- DevOps e Containerização

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!
