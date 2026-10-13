# Portfolio Professionnel - Farah Mezdari (BTS SIO SLAM)

Bienvenue sur le code source du portfolio moderne et responsive de **Farah Mezdari**, étudiante en **BTS SIO (Services Informatiques aux Organisations)**, option **SLAM (Solutions Logicielles et Applications Métiers)**.

Ce site a été conçu pour valoriser son profil, ses compétences et ses projets aussi bien auprès des recruteurs (recherche de stage ou d'alternance) que des jurys d'examen du BTS SIO (épreuves E4, E5 et E6).

---

## 🌟 Sections Incluses

1. **Accueil (Hero)** : Présentation percutante, statut de recherche, console TypeScript animée, boutons d'action rapide et badges LinkedIn / GitHub.
2. **À propos** : Présentation du parcours, explication du BTS SIO SLAM, atouts clés (POO, MVC, modélisation SQL, méthodes Agiles) et chiffres clés.
3. **Compétences** : Grille filtrable par catégorie mettant en valeur les technologies demandées :
   - **HTML5** & **CSS3** (Flexbox / CSS Grid, responsive design)
   - **JavaScript** (ES6+, DOM, programmation asynchrone)
   - **Vue.js** (Composants réactifs, SPA, Vue Router)
   - **PHP** (Architecture MVC, PDO, programmation orientée objet)
   - **Java** (POO, JDBC, interfaces Swing/JavaFX)
   - **Python** (Scripting, algorithmique, automatisation)
   - **SQL** (Conception MCD/MLD, requêtes complexes sous MySQL et PostgreSQL)
   - **Outils transversaux** : Git & GitHub, Postman, VS Code, Scrum.
4. **Projets** : Réalisations d'Ateliers de Professionnalisation (AP) et projets personnels avec filtres interactifs et modales détaillées alignées sur le référentiel BTS SIO (épreuves E4/E5/E6).
5. **Expériences & Formation** : Frise chronologique retraçant le BTS SIO SLAM, les stages en entreprise, les ateliers métiers et le Baccalauréat.
6. **Veille Technologique** : Section dédiée indispensable pour l'épreuve E6, présentant la méthodologie, les outils de veille (Feedly, Google Alerts, GitHub Trending) et des fiches d'analyse sur l'impact de l'IA générative dans le développement web et logiciel.
7. **Contact** : 
   - **Logos officiels LinkedIn et GitHub** avec redirection directe vers les profils de Farah.
   - Formulaire de contact avec contrôles de validation interactifs et notifications toast.
   - Coordonnées directes avec bouton de copie d'email en un clic.

---

## 📂 Structure du Répertoire

```text
portfolio-farah/
├── index.html            # Structure sémantique HTML5 & métadonnées SEO/OpenGraph
├── css/
│   └── style.css         # Thème sombre moderne, variables CSS, glassmorphism & responsive
├── js/
│   └── main.js           # ScrollSpy, menu mobile, filtres dynamiques, modales BTS & validation
├── assets/
│   └── icons/
│       ├── linkedin.svg  # Logo vectoriel officiel LinkedIn
│       └── github.svg    # Logo vectoriel officiel GitHub
└── README.md             # Guide d'utilisation et de déploiement
```

---

## 🚀 Comment visualiser et tester le portfolio

### Méthode 1 : Ouverture directe
Double-cliquez simplement sur le fichier `index.html` ou ouvrez-le dans votre navigateur favori (Chrome, Edge, Firefox).

### Méthode 2 : Avec l'extension Live Server (VS Code)
1. Ouvrez le dossier `portfolio-farah` dans VS Code :
   ```bash
   code C:\Users\farou\.gemini\antigravity\scratch\portfolio-farah
   ```
2. Faites un clic droit sur `index.html` puis cliquez sur **"Open with Live Server"**.

---

## 🌐 Déploiement gratuit en ligne (GitHub Pages)

Pour héberger gratuitement votre portfolio avec une adresse web personnalisée (ex: `https://farahymezdari.github.io/portfolio`) :

1. Créez un nouveau dépôt public sur votre compte GitHub (ex: `portfolio-bts-sio`).
2. Dans le dossier `portfolio-farah`, initialisez Git et publiez vos fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio BTS SIO SLAM Farah Mezdari"
   git branch -M main
   git remote add origin https://github.com/farahymezdari/portfolio-bts-sio.git
   git push -u origin main
   ```
3. Sur GitHub, rendez-vous dans **Settings** > **Pages** :
   - Sous **Branch**, sélectionnez `main` puis `/ (root)`.
   - Cliquez sur **Save**. Votre portfolio sera en ligne en moins d'une minute !

---

## ✍️ Personnalisation

- **Liens de réseaux sociaux** : Les boutons pointent directement vers `https://www.linkedin.com/in/farah-mezdari-b2598538a/` et `https://github.com/farahymezdari`.
- **Email** : Votre adresse `farah.y.mezdari@gmail.com` est configurée avec bouton de copie rapide et lien `mailto:`.
- **Ajout de projets** : Les données des modales peuvent être personnalisées ou étendues directement dans le fichier `js/main.js` (objet `projectData`).
