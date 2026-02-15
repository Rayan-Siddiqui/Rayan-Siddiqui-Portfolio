/*
Name: Rayan Siddiqui
Student ID: 953391424
Course: IST 256
Assignment: DOM Portfolio Enhancement
Submission Date: 02/07/2025
Portfolio URL: https://rayan-siddiqui.github.io/Rayan-Siddiqui-Portfolio/
*/

// -- Contact form: show Bootstrap toast on submit --
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const toastEl = document.getElementById('liveToast');
  let contactToast;

  if (toastEl) {
    contactToast = new bootstrap.Toast(toastEl);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // for demo: prevent actual submission
      if (contactForm.checkValidity()) {
        if (contactToast) contactToast.show();
        contactForm.reset();
      } else {
        contactForm.reportValidity();
      }
    });
  }
});















/* Toggle button for Skills
const toggleSkillsBtn = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

toggleSkillsBtn.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
});

// Toggle button for Projects
const toggleProjectsBtn = document.getElementById("toggle-projects");
const projectsSection = document.getElementById("projects");

toggleProjectsBtn.addEventListener("click", () => {
  if (projectsSection.style.display === "none") {
    projectsSection.style.display = "block";
  } else {
    projectsSection.style.display = "none";
  }
});

/* Toggle button for About. It is commented out because Bootstrap is conflicting
const toggleAboutBtn = document.getElementById("toggle-about");
const aboutSection = document.getElementById("about");

toggleAboutBtn.addEventListener("click", () => {
  if (aboutSection.style.display === "none") {
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
});

// Toggle button for contact
const toggleContactBtn = document.getElementById("toggle-contact");
const contactSection = document.getElementById("contact");

toggleContactBtn.addEventListener("click", () => {
  if (contactSection.style.display === "none") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "none";
  }
});

// Toggle button for multimedia
const toggleMultimediaBtn = document.getElementById("toggle-multimedia");
const multimediaSection = document.getElementById("multimedia");

toggleMultimediaBtn.addEventListener("click", () => {
  if (multimediaSection.style.display === "none") {
    multimediaSection.style.display = "block";
  } else {
    multimediaSection.style.display = "none";
  }
});

// Toggle button for quick facts
const toggleQuickFactsBtn = document.getElementById("toggle-quickfacts");
const quickFacts = document.querySelector("aside");

toggleQuickFactsBtn.addEventListener("click", () => {
  if (quickFacts.style.display === "none") {
    quickFacts.style.display = "block";
  } else {
    quickFacts.style.display = "none";
  }
});

// Contact message feedback
const contactForm = document.querySelector("#contact form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default submission (for demo/testing)
  
  // Show confirmation message
  formFeedback.style.display = "block";
  // Reset form fields
  contactForm.reset();
});*/

