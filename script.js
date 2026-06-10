/* =============================================
   script.js — RAtech
   Auteur : Régis Amona
   Version : 5.0 — Bilingue FR/EN 100% complet
   ============================================= */


/* ========== 1. MENU MOBILE ========== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});


/* ========== 2. NAVBAR AU SCROLL ========== */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(8, 12, 16, 0.98)';
  } else {
    navbar.style.background = 'rgba(8, 12, 16, 0.8)';
  }
});


/* ========== 3. ANIMATION AU SCROLL ========== */
const elementsToAnimate = document.querySelectorAll(
  '.project-card, .skill-tag, .about-text, .section-title, .service-card, .contact-card'
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

elementsToAnimate.forEach(function (el) {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});


/* ========== 4. ANIMATION TITRE HERO ========== */
document.addEventListener('DOMContentLoaded', function () {
  const titleLines = document.querySelectorAll('.title-line');
  titleLines.forEach(function (line, index) {
    line.style.opacity = '0';
    line.style.transform = 'translateY(20px)';
    line.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    setTimeout(function () {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 200 + (index * 150));
  });
});


/* ========== 5. ANNÉE DYNAMIQUE ========== */
const yearElement = document.querySelector('.footer-copy');
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} — Tous droits réservés`;
}


/* ========== 6. SYSTÈME BILINGUE FR / EN — 100% COMPLET ========== */

const translations = {
  fr: {
    // Hero
    badge: "Disponible pour nouveaux projets",
    title1: "Ingénieur",
    title2: "Auto & Tech",
    title3: "RAtech.",
    subtitle: "Étudiant en systèmes embarqués automobile, fondateur de RAtech — je fusionne l'ingénierie et le digital pour l'Afrique.",
    btn1: "Voir mes projets",
    btn2: "Me contacter",
    // Labels navigation
    aboutLabel: "À propos",
    projectsLabel: "Projets",
    servicesLabel: "Services",
    contactLabel: "Contact",
    // À propos
    aboutSectionTitle: "Étudiant & Fondateur,",
    aboutSectionAccent: "basé au Maroc.",
    aboutText1: "Je suis Régis Amona, 19 ans, Togolais étudiant au Maroc en systèmes embarqués automobile. Mon ambition : faire de RAtech une agence digitale de référence en Afrique.",
    aboutText2: "Étudiant en systèmes embarqués automobile, je combine l'ingénierie et le web — et je partage ma passion sur YouTube à travers le diagnostic automobile.",
    aboutBtn: "Voir mes projets →",
    // Projets
    projectsTitle: "Ce que je construis<br>avec <span class='accent'>passion.</span>",
    p1Title: "Site RAtech",
    p1Text: "Mon site portfolio personnel — première brique de mon agence digitale moderne.",
    p2Title: "Chaîne YouTube",
    p2Text: "Contenu éducatif sur le diagnostic automobile pour la communauté francophone africaine.",
    p3Title: "RAtech Agency",
    p3Text: "Mon grand projet — une agence digitale moderne connectant les entreprises africaines au monde.",
    // Services
    servicesTitle: "Ce que <span class='accent'>RAtech</span><br>peut faire pour vous.",
    s1Title: "Création Web",
    s2Title: "AI Assistant",
    s3Title: "Visibilité Google SEO",
    s4Title: "Automobile & Tech",
    s1Text: "Sites vitrines, portfolios et landing pages modernes pour entreprises et entrepreneurs.",
    s2Text: "Intégration d'assistants IA sur votre site — disponible 24h/24 pour vos clients.",
    s3Text: "Optimisation de votre présence en ligne pour apparaître en premier sur Google.",
    s4Text: "Contenu éducatif et solutions digitales pour le secteur automobile africain.",
    s1li1: "Sites vitrines", s1li2: "Landing pages", s1li3: "Portfolios professionnels",
    s2li1: "Chatbot intelligent", s2li2: "Réponses automatiques", s2li3: "Support client 24h/24",
    s3li1: "SEO technique", s3li2: "Contenu optimisé", s3li3: "Visibilité locale",
    s4li1: "Contenu YouTube", s4li2: "Diagnostic automobile", s4li3: "Formations techniques",
    // Contact
    contactTitle: "Travaillons<br>ensemble. 🚀",
    contactP1: "Tu as un projet web, une idée ou une question ? Écris-moi directement — je réponds rapidement.",
    contactP2: "RAtech est disponible pour des missions de création web, intégration IA et solutions digitales.",
    // Footer
    footerText: "Construit avec passion · Afrique & Monde",
    langBtn: "🌐 EN",
  },

  en: {
    // Hero
    badge: "Available for new projects",
    title1: "Engineer",
    title2: "Auto & Tech",
    title3: "RAtech.",
    subtitle: "Automotive embedded systems student, founder of RAtech — merging engineering and digital for Africa.",
    btn1: "See my projects",
    btn2: "Contact me",
    // Labels navigation
    aboutLabel: "About",
    projectsLabel: "Projects",
    servicesLabel: "Services",
    contactLabel: "Contact",
    // About
    aboutSectionTitle: "Student & Founder,",
    aboutSectionAccent: "based in Morocco.",
    aboutText1: "I am Régis Amona, 19 years old, Togolese student in Morocco studying automotive embedded systems. My goal: make RAtech a leading digital agency in Africa.",
    aboutText2: "Automotive embedded systems student, I combine engineering and web development — and share my passion on YouTube through automotive diagnostics.",
    aboutBtn: "See my projects →",
    // Projects
    projectsTitle: "What I build<br>with <span class='accent'>passion.</span>",
    p1Title: "RAtech Site",
    p1Text: "My personal portfolio — first step of my modern digital agency.",
    p2Title: "YouTube Channel",
    p2Text: "Educational content on automotive diagnostics for the French-speaking African community.",
    p3Title: "RAtech Agency",
    p3Text: "My big project — a modern digital agency connecting African businesses to the world.",
    // Services
    servicesTitle: "What <span class='accent'>RAtech</span><br>can do for you.",
    s1Title: "Web Creation",
    s2Title: "AI Assistant",
    s3Title: "Google SEO Visibility",
    s4Title: "Automotive & Tech",
    s1Text: "Modern showcase sites, portfolios and landing pages for businesses and entrepreneurs.",
    s2Text: "AI assistant integration on your site — available 24/7 for your clients.",
    s3Text: "Optimize your online presence to appear first on Google.",
    s4Text: "Educational content and digital solutions for the African automotive sector.",
    s1li1: "Showcase sites", s1li2: "Landing pages", s1li3: "Professional portfolios",
    s2li1: "Smart chatbot", s2li2: "Automatic replies", s2li3: "24/7 client support",
    s3li1: "Technical SEO", s3li2: "Optimized content", s3li3: "Local visibility",
    s4li1: "YouTube content", s4li2: "Automotive diagnostics", s4li3: "Technical training",
    // Contact
    contactTitle: "Let's work<br>together. 🚀",
    contactP1: "Do you have a web project, an idea or a question? Write to me directly — I respond quickly.",
    contactP2: "RAtech is available for web creation, AI integration and digital solutions.",
    // Footer
    footerText: "Built with passion · Africa & World",
    langBtn: "🌐 FR",
  }
};

let currentLang = "fr";
const langBtn = document.getElementById("langSwitcher");

langBtn.addEventListener("click", function () {

  currentLang = currentLang === "fr" ? "en" : "fr";
  const t = translations[currentLang];

  // --- HERO ---
  document.querySelector(".hero-badge").innerHTML = `<span class="badge-dot"></span> ${t.badge}`;
  document.querySelectorAll(".title-line")[0].textContent = t.title1;
  document.querySelectorAll(".title-line")[1].textContent = t.title2;
  document.querySelectorAll(".title-line")[2].textContent = t.title3;
  document.querySelector(".hero-subtitle").textContent = t.subtitle;
  document.querySelectorAll(".hero-actions .btn")[0].textContent = t.btn1;
  document.querySelectorAll(".hero-actions .btn")[1].textContent = t.btn2;

  // --- LABELS ---
  document.querySelectorAll(".section-label")[0].textContent = t.aboutLabel;
  document.querySelectorAll(".section-label")[1].textContent = t.projectsLabel;
  document.querySelectorAll(".section-label")[2].textContent = t.servicesLabel;
  document.querySelectorAll(".section-label")[3].textContent = t.contactLabel;

  // --- À PROPOS ---
  document.querySelector(".about-text .section-title").innerHTML =
    `${t.aboutSectionTitle}<br>basé au <span class="accent">${t.aboutSectionAccent}</span>`;
  document.querySelectorAll(".about-text p")[0].textContent = t.aboutText1;
  document.querySelectorAll(".about-text p")[1].textContent = t.aboutText2;
  document.querySelector(".about-text .btn").textContent = t.aboutBtn;

  // --- PROJETS ---
  document.querySelector(".projects .section-title").innerHTML = t.projectsTitle;
  document.querySelectorAll(".project-card h3")[0].textContent = t.p1Title;
  document.querySelectorAll(".project-card h3")[1].textContent = t.p2Title;
  document.querySelectorAll(".project-card h3")[2].textContent = t.p3Title;
  document.querySelectorAll(".project-card p")[0].textContent = t.p1Text;
  document.querySelectorAll(".project-card p")[1].textContent = t.p2Text;
  document.querySelectorAll(".project-card p")[2].textContent = t.p3Text;

  // --- SERVICES TITRE ---
  document.querySelector(".services .section-title").innerHTML = t.servicesTitle;
  document.querySelectorAll(".service-card h3")[0].textContent = t.s1Title;
  document.querySelectorAll(".service-card h3")[1].textContent = t.s2Title;
  document.querySelectorAll(".service-card h3")[2].textContent = t.s3Title;
  document.querySelectorAll(".service-card h3")[3].textContent = t.s4Title;
  document.querySelectorAll(".service-card p")[0].textContent = t.s1Text;
  document.querySelectorAll(".service-card p")[1].textContent = t.s2Text;
  document.querySelectorAll(".service-card p")[2].textContent = t.s3Text;
  document.querySelectorAll(".service-card p")[3].textContent = t.s4Text;

  // --- SERVICES LISTES ---
  document.querySelector(".s1-li1").textContent = t.s1li1;
  document.querySelector(".s1-li2").textContent = t.s1li2;
  document.querySelector(".s1-li3").textContent = t.s1li3;
  document.querySelector(".s2-li1").textContent = t.s2li1;
  document.querySelector(".s2-li2").textContent = t.s2li2;
  document.querySelector(".s2-li3").textContent = t.s2li3;
  document.querySelector(".s3-li1").textContent = t.s3li1;
  document.querySelector(".s3-li2").textContent = t.s3li2;
  document.querySelector(".s3-li3").textContent = t.s3li3;
  document.querySelector(".s4-li1").textContent = t.s4li1;
  document.querySelector(".s4-li2").textContent = t.s4li2;
  document.querySelector(".s4-li3").textContent = t.s4li3;
// --- GUIDES ---
  document.querySelector(".blog .section-title").innerHTML = 
    currentLang === "en" 
    ? "Learn to diagnose<br>your car <span class='accent'>yourself.</span>"
    : "Apprenez à diagnostiquer<br>votre voiture <span class='accent'>vous-même.</span>";

  document.querySelector(".blog-subtitle").textContent = 
    currentLang === "en"
    ? "Simple technical guides based on my YouTube videos — to save you time and money."
    : "Des guides techniques simples basés sur mes vidéos YouTube — pour économiser du temps et de l'argent.";

  document.querySelector(".section-label")[4].textContent = 
    currentLang === "en" ? "Guides & Resources" : "Guides & Ressources";
    // Boutons des guides
  document.querySelectorAll(".guide-btn:not(.guide-btn-youtube)").forEach(btn => {
    btn.textContent = currentLang === "en" ? "▶ Watch video →" : "▶ Voir la vidéo →";
  });

  document.querySelector(".guide-btn-youtube").textContent = 
    currentLang === "en" ? "📺 See the channel →" : "📺 Voir la chaîne →";
  // --- CONTACT ---
  document.querySelector(".contact-text .section-title").innerHTML = t.contactTitle;
  document.querySelector(".contact-p1").textContent = t.contactP1;
  document.querySelector(".contact-p2").textContent = t.contactP2;

  // --- FOOTER ---
  document.querySelector(".footer-text").textContent = t.footerText;

  // --- BOUTON ---
  langBtn.textContent = t.langBtn;

});
/* ========== 7. FORMULAIRE — MESSAGE DE SUCCÈS ========== */
// Si l'URL contient "?success=true" après soumission
if (window.location.search === '?success=true') {
  
  // Cherche le formulaire
  const form = document.querySelector('.contact-form');
  
  if (form) {
    // Remplace le formulaire par un message de succès
    form.innerHTML = `
      <div style="text-align:center; padding: 2rem;">
        <div style="font-size:3rem;">🎉</div>
        <h3 style="color:#e8ff00; font-family:'Syne',sans-serif; margin: 1rem 0;">Message envoyé !</h3>
        <p style="color:#7d8590;">Merci ! Régis vous répondra rapidement.</p>
        <a href="/" class="btn btn-primary" style="margin-top:1rem; display:inline-flex;">
          ← Retour au site
        </a>
      </div>
    `;
  }
}