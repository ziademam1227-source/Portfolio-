/* ==================================================================
   PROJECT DATA
   ------------------------------------------------------------------
   This is the ONLY place you need to edit to add, remove, or change
   a project. Each project is one object in the array below.

   HOW TO ADD MORE IMAGES TO AN EXISTING PROJECT:
     1. Put the image file inside that project's folder, e.g.
        assets/projects/project-1/image-5.jpg
     2. Add "assets/projects/project-1/image-5.jpg" to that
        project's "gallery" array below.

   COVER vs GALLERY:
     - "cover" is the single image shown on the project card in the
       Projects grid. It is never shown inside the project's gallery.
     - "gallery" is the list of images shown inside the project detail
       view when the card is clicked. Do not add the cover image to
       this array.

   HOW TO ADD A COMPLETELY NEW PROJECT:
     1. Create a new folder: assets/projects/project-5/
     2. Put a cover.jpg plus its gallery images inside that folder.
     3. Copy one of the objects below, paste it at the end of the
        array, and edit the text + "cover" + "gallery" array.
     4. Give it a unique "code" (e.g. "P-05") — nothing else in the
        code needs to change, the grid and modal build themselves
        from this array automatically.
================================================================== */
const projects = [
  {
    code: "P-01",
    title: "Administrative Building",
    location: "Egypt",
    system: "HVAC — Concealed DX System",
    summary: "HVAC system design for an administrative building using a concealed DX system.",
    objective:
      "Design an HVAC system for an administrative building using a concealed DX system that meets cooling requirements and space constraints.",
    process: [
      "Calculated cooling loads using HAP.",
      "Selected suitable DX units based on calculated loads.",
      "Designed ductwork layout for all spaces.",
      "Determined diffuser locations and quantities for proper air distribution.",
      "Ensured system matches building layout and usage.",
    ],
    outcome: [
      "Complete HVAC design with accurate load calculations.",
      "Optimized duct layout with balanced air distribution.",
      "Proper equipment selection that meets project requirements.",
    ],
    standoutFeatures: [
      "Used concealed units for better space use and low noise.",
      "Calculated cooling load for each area.",
      "Distributed diffusers for balanced airflow.",
      "Reduced duct length to lower pressure loss.",
    ],
    // Cover image — shown ONLY on the project card, never in the gallery.
    cover: "assets/projects/project-1/cover.jpg",
    // Gallery images — shown ONLY inside the project detail view.
    gallery: [
      "assets/projects/project-1/image-1.jpg",
      "assets/projects/project-1/image-2.jpg",
      "assets/projects/project-1/image-3.jpg",
      "assets/projects/project-1/image-4.jpg",
      "assets/projects/project-1/image-5.jpg",
      "assets/projects/project-1/image-6.jpg",
      "assets/projects/project-1/image-7.jpg",
    ],
  },
  {
    code: "P-02",
    title: "Residential Tower",
    location: "Egypt",
    system: "HVAC — Chilled Water System",
    summary: "Chilled water HVAC system for a residential tower with efficient cooling and air distribution.",
    objective:
      "Develop a chilled water HVAC system for a residential tower with efficient cooling and proper air distribution.",
    process: [
      "Calculated cooling loads for all zones.",
      "Selected FCUs based on required capacity.",
      "Designed chilled water piping layout.",
      "Designed duct system and sized diffusers.",
      "Integrated fresh air system into the design.",
    ],
    outcome: [
      "Full chilled water system design with piping and ductwork.",
      "Balanced air distribution across all spaces.",
      "Efficient system suitable for large-scale residential use.",
    ],
    standoutFeatures: [
      "Selected chilled water system for high rise use.",
      "Designed balanced piping network for FCUs.",
      "Sized pipes based on flow rate and pressure.",
      "Placed FCUs based on space function.",
      "Added fresh air system to improve air quality.",
    ],
    // Cover image — shown ONLY on the project card, never in the gallery.
    cover: "assets/projects/project-2/cover.jpg",
    // Gallery images — shown ONLY inside the project detail view.
    gallery: [
      "assets/projects/project-2/image-1.jpg",
      "assets/projects/project-2/image-2.jpg",
      "assets/projects/project-2/image-3.jpg",
      "assets/projects/project-2/image-4.jpg",
      "assets/projects/project-2/image-5.jpg",
      "assets/projects/project-2/image-6.jpg",
      "assets/projects/project-2/image-7.jpg",
      "assets/projects/project-2/image-8.jpg",
      "assets/projects/project-2/image-9.jpg",
      "assets/projects/project-2/image-10.jpg",
      "assets/projects/project-2/image-11.jpg",
      "assets/projects/project-2/image-12.jpg",
    ],
  },
  {
    code: "P-03",
    title: "Call Center",
    location: "Kuwait",
    system: "HVAC — AHU System",
    summary: "Centralized HVAC system using AHUs for a high-occupancy, continuously operating call center.",
    objective:
      "Design a centralized HVAC system using AHUs for a call center with high occupancy and continuous operation.",
    process: [
      "Calculated cooling loads considering occupancy and equipment.",
      "Selected AHUs based on load requirements.",
      "Designed ductwork system for uniform air distribution.",
      "Determined diffuser placement for comfort and efficiency.",
    ],
    outcome: [
      "Centralized HVAC system design tailored for high-load environment.",
      "Stable and uniform indoor conditions.",
    ],
    standoutFeatures: [
      "Selected AHU for large load and dense occupancy.",
      "Designed duct system for open office layout.",
      "Calculated air changes based on standards.",
      "Achieved uniform air distribution.",
      "Optimized duct routing to reduce pressure loss.",
    ],
    // Cover image — shown ONLY on the project card, never in the gallery.
    cover: "assets/projects/project-3/cover.jpg",
    // Gallery images — shown ONLY inside the project detail view.
    gallery: [
      "assets/projects/project-3/image-1.jpg",
      "assets/projects/project-3/image-2.jpg",
      "assets/projects/project-3/image-3.jpg",
      "assets/projects/project-3/image-4.jpg",
      "assets/projects/project-3/image-5.jpg",
      "assets/projects/project-3/image-6.jpg",
      "assets/projects/project-3/image-7.jpg",
      "assets/projects/project-3/image-8.jpg",
    ],
  },
  {
    code: "P-04",
    title: "Commercial Shops Complex",
    location: "Egypt",
    system: "Full MEP — HVAC, Drainage, Water Supply, Firefighting",
    summary: "Full MEP scope covering HVAC, drainage, domestic water supply, firefighting and infrastructure.",
    objective:
      "Deliver a complete MEP design for a commercial shops complex, covering HVAC, drainage, domestic water supply, firefighting and site infrastructure.",
    process: [
      "HVAC: Designed and modeled a Fan Coil Unit (FCU) system, with a dedicated outdoor condensing unit for each FCU, covering the individual retail units across the project.",
      "Drainage: Modeled the complete drainage network, covering both the condensate drainage from the FCU units and the bathroom drainage system, with proper routing and connection to the main drainage line.",
      "Domestic Water Supply: Developed the water supply network serving both the shops and the bathrooms throughout the complex.",
      "Firefighting: Modeled a full firefighting system including fire hose cabinets, an FM200 clean agent fire suppression system, and a CO2 fire extinguishing system.",
      "Infrastructure: Contributed to the site infrastructure design supporting the overall project.",
    ],
    outcome: [
      "Complete, coordinated MEP design covering HVAC, drainage, water supply and firefighting.",
      "Dedicated cooling and condensate drainage for each individual retail unit.",
      "Full fire protection strategy combining hose cabinets, clean agent and CO2 systems.",
    ],
    standoutFeatures: [
      "Dedicated outdoor condensing unit per FCU for independent retail-unit control.",
      "Combined condensate and bathroom drainage into one coordinated network.",
      "Multi-layered firefighting strategy: hose cabinets, FM200 and CO2 systems.",
    ],
    // Cover image — shown ONLY on the project card, never in the gallery.
    cover: "assets/projects/project-4/cover.jpg",
    // Gallery images — shown ONLY inside the project detail view.
    gallery: [
      "assets/projects/project-4/image-1.jpg",
      "assets/projects/project-4/image-2.jpg",
      "assets/projects/project-4/image-3.jpg",
      "assets/projects/project-4/image-4.jpg",
      "assets/projects/project-4/image-5.jpg",
      "assets/projects/project-4/image-6.jpg",
      "assets/projects/project-4/image-7.jpg",
      "assets/projects/project-4/image-8.jpg",
    ],
  },

  // Add new projects below this line — copy an object above as a starting point.
];

/* ==================================================================
   RENDER PROJECT CARDS
================================================================== */
const projectsGrid = document.getElementById("projectsGrid");

function renderProjectCards() {
  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
      <button class="project-card" data-project-index="${index}" aria-haspopup="dialog">
        <div class="project-card__image-wrap">
          <span class="project-card__code">${project.code}</span>
          <img
            class="project-card__image"
            src="${project.cover}"
            alt="${project.title} — cover image"
            loading="lazy"
          />
        </div>
        <div class="project-card__body">
          <span class="project-card__meta">${project.system}</span>
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__summary">${project.summary}</p>
          <span class="project-card__link">
            View project details
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </button>
    `
    )
    .join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      openProjectModal(Number(card.dataset.projectIndex));
    });
  });
}

/* ==================================================================
   PROJECT MODAL
================================================================== */
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
let activeProject = null;

function listToHtml(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function openProjectModal(index) {
  const project = projects[index];
  activeProject = project;

  modalContent.innerHTML = `
    <div class="modal__body modal__body--no-hero">
      <span class="modal__meta">${project.code} &middot; ${project.location} &middot; ${project.system}</span>
      <h3 class="modal__title" id="modalTitle">${project.title}</h3>

      <div class="modal__section">
        <h4 class="modal__section-title">Objective</h4>
        <p>${project.objective}</p>
      </div>

      <div class="modal__section">
        <h4 class="modal__section-title">Process</h4>
        ${listToHtml(project.process)}
      </div>

      <div class="modal__section">
        <h4 class="modal__section-title">Outcome</h4>
        ${listToHtml(project.outcome)}
      </div>

      <div class="modal__section">
        <h4 class="modal__section-title">Standout Features</h4>
        ${listToHtml(project.standoutFeatures)}
      </div>

      <h4 class="modal__gallery-title">Gallery</h4>
      <div class="modal__gallery">
        ${project.gallery
          .map(
            (src, i) => `
          <button class="modal__gallery-item" data-image-index="${i}" aria-label="View image ${i + 1} of ${project.title}">
            <img src="${src}" alt="${project.title} — image ${i + 1}" loading="lazy" />
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  modalContent.querySelectorAll(".modal__gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      openLightbox(project.gallery, Number(btn.dataset.imageIndex));
    });
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeProjectModal);
});

/* ==================================================================
   LIGHTBOX (image enlarge + prev/next)
================================================================== */
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentGallery = [];
let currentImageIndex = 0;

function openLightbox(images, index) {
  currentGallery = images;
  currentImageIndex = index;
  updateLightboxImage();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function updateLightboxImage() {
  const src = currentGallery[currentImageIndex];
  lightboxImage.src = src;
  lightboxImage.alt = `${activeProject ? activeProject.title : "Project"} — image ${currentImageIndex + 1}`;
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGallery.length}`;
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
  updateLightboxImage();
}
function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
  updateLightboxImage();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-close-lightbox]").forEach((el) => {
  el.addEventListener("click", closeLightbox);
});
lightboxNext.addEventListener("click", showNextImage);
lightboxPrev.addEventListener("click", showPrevImage);

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("is-open")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
  } else if (modal.classList.contains("is-open") && e.key === "Escape") {
    closeProjectModal();
  }
});

/* ==================================================================
   NAVIGATION: scroll shadow, smooth scroll close, mobile menu
================================================================== */
const header = document.getElementById("site-header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function onScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ==================================================================
   SCROLL REVEAL for section content
================================================================== */
function initScrollReveal() {
  const revealTargets = document.querySelectorAll(
    ".section__title, .section__lede, .about__text, .skills__group, .education-card, .language-item, .project-card, .contact-cta__text, .contact-card, .contact-location, .section--dark .btn--outline"
  );
  revealTargets.forEach((el) => el.classList.add("reveal-up"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

/* ==================================================================
   BACK TO TOP
================================================================== */
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==================================================================
   INIT
================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();
renderProjectCards();
initScrollReveal();
