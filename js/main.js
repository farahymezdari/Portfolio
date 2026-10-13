/**
 * PORTFOLIO - FARAH MEZDARI (BTS SIO SLAM)
 * Script JavaScript interactif : Navigation, Filtres, Modales BTS, Formulaire & Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPaletteSwitcher();
  initSkillsFilter();
  initProjectsFilter();
  initProjectModals();
  initContactForm();
  initCopyEmail();
});

/* ==========================================================================
   1. Navigation & ScrollSpy
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // ScrollSpy active link detection
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  });

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   2. Filtrage des Compétences
   ========================================================================== */
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   3. Filtrage des Projets
   ========================================================================== */
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('.p-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-pfilter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-pcat');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Modales de Détails des Projets (Aligné Référentiel BTS SIO SLAM)
   ========================================================================== */
const projectData = {
  gsb: {
    title: "GSB - Portail Médical & Gestion de Frais",
    badge: "Atelier de Professionnalisation BTS SIO SLAM • Épreuve E5",
    context: "Le laboratoire Galaxy Swiss Bourdin (GSB) souhaite moderniser la gestion des frais forfaitaires et hors forfait engagés par son réseau de visiteurs médicaux répartis sur le territoire.",
    objectifs: [
      "Concevoir une architecture logicielle robuste et maintenable selon le patron MVC (Modèle - Vue - Contrôleur).",
      "Garantir la sécurité des accès : hashage des mots de passe (Argon2), protection contre les attaques CSRF et requêtes préparées PDO systématiques.",
      "Développer des interfaces utilisateur réactives en intégrant Vue.js et des formulaires avec contrôles de saisie en temps réel.",
      "Mettre en place un système de rôles distincts (Visiteur Médical vs Comptable) avec flux de validation et clôture mensuelle automatique."
    ],
    stack: ["PHP 8", "Vue.js", "MySQL / SQL", "Architecture MVC", "PDO", "HTML5/CSS3"],
    referentiel: "Compétences validées : B1.1 Gérer le patrimoine informatique • B1.2 Répondre aux incidents et demandes d'assistance • B1.4 Travailler en mode projet • B2.1 Concevoir et développer une solution applicative (POO, MVC, BDD).",
    githubLink: "https://github.com/farahymezdari"
  },
  techinterv: {
    title: "TechInterv - Planification d'Interventions",
    badge: "Application Bureau Client Lourd • Java & POO • Épreuve E4 / E5",
    context: "Application desktop destinée à une société de maintenance informatique pour assigner, planifier et suivre les interventions techniques chez les clients professionnels.",
    objectifs: [
      "Modéliser et implémenter une hiérarchie de classes orientée objet rigoureuse (Technicien, Client, Intervention, Site, Matériel).",
      "Établir la persistance des données relationnelles via le patron DAO (Data Access Object) et le connecteur JDBC sous MySQL.",
      "Concevoir une interface graphique avec JavaFX / Swing offrant un tableau de bord avec indicateurs de statut (En attente, En cours, Clôturée).",
      "Gérer les exceptions applicatives et assurer l'intégrité transactionnelle lors des modifications de planning."
    ],
    stack: ["Java", "JavaFX / Swing", "JDBC", "MySQL", "POO", "DAO Pattern"],
    referentiel: "Compétences validées : B2.1 Concevoir et développer une solution applicative • B2.2 Assurer la maintenance corrective ou évolutive d'une solution applicative • Modélisation UML (Diagrammes de classes et de cas d'utilisation).",
    githubLink: "https://github.com/farahymezdari"
  },
  medistock: {
    title: "MediStock - Gestion d'Inventaire en Temps Réel",
    badge: "Front-End Moderne • Vue.js & API REST",
    context: "Application web réactive type SPA (Single Page Application) conçue pour la gestion des stocks de réactifs et matériels sensibles, avec consultation temps réel et réapprovisionnement.",
    objectifs: [
      "Découper l'interface en composants Vue.js réutilisables (Tableau d'inventaire, Cartes de statistiques, Modal d'ajout de lot).",
      "Consommer une API RESTful via Fetch/Axios avec gestion asynchrone des états de chargement et d'erreur.",
      "Mettre en place un filtrage multicritère instantané (par catégorie, statut de stock critique, date de péremption).",
      "Optimiser l'ergonomie utilisateur grâce à une interface fluide, responsive et conforme aux standards d'accessibilité.",
    ],
    stack: ["Vue.js 3", "JavaScript (ES6+)", "REST API", "CSS3 / Flexbox", "State Management"],
    referentiel: "Compétences validées : Intégration de services web, programmation asynchrone, manipulation d'objets JSON et développement d'interfaces ergonomiques.",
    githubLink: "https://github.com/farahymezdari"
  },
  pywatch: {
    title: "PyWatch - Automatisation & Veille Énergie IA",
    badge: "Scripting Python & Données • Épreuve E6 (Veille Technologique)",
    context: "Outil développé sur mesure en Python pour optimiser et automatiser la collecte de données pour ma veille technologique sur « La consommation énergétique de l'IA ».",
    objectifs: [
      "Automatiser la collecte périodique de flux RSS spécialisés (The Shift Project, GreenIT.fr, ADEME, Hugging Face Energy, revues techniques).",
      "Filtrer et catégoriser les articles selon des critères environnementaux (consommation électrique en kWh, refroidissement datacenters, Green AI).",
      "Stocker l'historique dans une base de données locale SQLite avec détection et suppression des doublons.",
      "Générer automatiquement des fiches de synthèse prêtes pour la préparation et la soutenance orale de l'épreuve E6."
    ],
    stack: ["Python 3", "SQLite", "XML / RSS Parsing", "JSON", "Green IT"],
    referentiel: "Compétences validées : Traitement algorithmique des flux de données, automatisation de tâches, démarche méthodique de veille technologique (E6) et sensibilisation à l'éco-responsabilité logicielle.",
    githubLink: "https://github.com/farahymezdari"
  }
};

function initProjectModals() {
  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  if (!modalOverlay || !modalBody) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];

      if (data) {
        modalBody.innerHTML = `
          <span class="modal-category-badge"><i class="fa-solid fa-code"></i> ${data.badge}</span>
          <h3 id="modal-title">${data.title}</h3>
          
          <div class="modal-section-title"><i class="fa-solid fa-align-left"></i> Contexte du Projet</div>
          <p>${data.context}</p>

          <div class="modal-section-title"><i class="fa-solid fa-bullseye"></i> Objectifs & Réalisations Techniques</div>
          <ul class="modal-list">
            ${data.objectifs.map(item => `<li>${item}</li>`).join('')}
          </ul>

          <div class="modal-section-title"><i class="fa-solid fa-layer-group"></i> Technologies mobilisées</div>
          <div class="project-tech-stack" style="margin-bottom: 1.2rem;">
            ${data.stack.map(tech => `<span>${tech}</span>`).join('')}
          </div>

          <div class="modal-referentiel-box">
            <strong><i class="fa-solid fa-award"></i> Alignement Référentiel BTS SIO SLAM :</strong>
            <p style="margin: 0; font-size: 0.86rem; color: var(--text-muted);">${data.referentiel}</p>
          </div>

          <div style="display: flex; gap: 1rem; margin-top: 1.6rem;">
            <a href="${data.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fa-brands fa-github"></i> Dépôt GitHub de Farah
            </a>
            <button class="btn btn-ghost btn-sm" id="btn-close-modal-inner">
              Fermer la fiche
            </button>
          </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        const innerClose = document.getElementById('btn-close-modal-inner');
        if (innerClose) {
          innerClose.addEventListener('click', closeModal);
        }
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. Formulaire de Contact & Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    let isValid = true;

    // Validation Nom
    if (!nameInput.value.trim()) {
      showError('name-error', 'Veuillez renseigner votre nom.');
      isValid = false;
    } else {
      clearError('name-error');
    }

    // Validation Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      showError('email-error', 'Veuillez saisir une adresse email valide.');
      isValid = false;
    } else {
      clearError('email-error');
    }

    // Validation Objet
    if (!subjectInput.value.trim()) {
      showError('subject-error', 'Veuillez indiquer un objet pour votre message.');
      isValid = false;
    } else {
      clearError('subject-error');
    }

    // Validation Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError('message-error', 'Veuillez écrire un message d\'au moins 10 caractères.');
      isValid = false;
    } else {
      clearError('message-error');
    }

    if (isValid) {
      // Simulation d'envoi avec animation de chargement
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoader = submitBtn.querySelector('.btn-loader');

      btnText.style.display = 'none';
      btnLoader.style.display = 'inline-block';
      submitBtn.disabled = true;

      setTimeout(() => {
        btnText.style.display = 'inline-block';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;
        form.reset();

        showToast('Merci pour votre message ! Farah vous répondra très rapidement.');
      }, 1200);
    }
  });

  function showError(elementId, message) {
    const errorElem = document.getElementById(elementId);
    if (errorElem) errorElem.textContent = message;
  }

  function clearError(elementId) {
    const errorElem = document.getElementById(elementId);
    if (errorElem) errorElem.textContent = '';
  }
}

/* ==========================================================================
   6. Copie rapide de l'Email
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const emailText = document.getElementById('email-text');

  if (copyBtn && emailText) {
    copyBtn.addEventListener('click', () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast('Adresse email copiée dans le presse-papiers !');
      }).catch(() => {
        showToast('Email : ' + email);
      });
    });
  }
}

/* ==========================================================================
   7. Système de Notification Toast
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  }
}

// Animation CSS d'apparition
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

/* ==========================================================================
   8. Gestion des 3 Palettes Pastels (Sakura, Sauge & Moka)
   ========================================================================== */
function initPaletteSwitcher() {
  const desktopBtn = document.getElementById('palette-toggle-btn');
  const mobileBtn = document.getElementById('palette-toggle-btn-mobile');
  const buttons = [desktopBtn, mobileBtn].filter(Boolean);

  const paletteOrder = ['sakura', 'botanical', 'earth'];

  // Récupérer la préférence sauvegardée ou activer 'sakura'
  const savedPalette = localStorage.getItem('farah_palette') || 'sakura';
  applyPalette(savedPalette, false);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-palette') || 'botanical';
      const currentIndex = paletteOrder.indexOf(current);
      const nextIndex = (currentIndex + 1) % paletteOrder.length;
      const next = paletteOrder[nextIndex];
      applyPalette(next, true);
    });
  });

  function applyPalette(paletteName, triggerToast) {
    if (paletteName === 'sakura') {
      document.documentElement.setAttribute('data-palette', 'sakura');
      localStorage.setItem('farah_palette', 'sakura');
      updateButtonLabels('🌸', 'Palette Sakura');
      if (triggerToast) {
        showToast('Palette Fleur de Cerisier (Sakura & Matcha) activée !');
      }
    } else if (paletteName === 'earth') {
      document.documentElement.setAttribute('data-palette', 'earth');
      localStorage.setItem('farah_palette', 'earth');
      updateButtonLabels('☕', 'Palette Moka');
      if (triggerToast) {
        showToast('Palette Moka, Latte & Matcha activée !');
      }
    } else {
      document.documentElement.removeAttribute('data-palette');
      localStorage.setItem('farah_palette', 'botanical');
      updateButtonLabels('🌿', 'Palette Sauge');
      if (triggerToast) {
        showToast('Palette Sauge & Eucalyptus activée !');
      }
    }
  }

  function updateButtonLabels(icon, text) {
    buttons.forEach(btn => {
      const iconEl = btn.querySelector('.palette-toggle-icon');
      const textEl = btn.querySelector('.palette-toggle-label');
      if (iconEl) iconEl.textContent = icon;
      if (textEl) textEl.textContent = text;
    });
  }
}
