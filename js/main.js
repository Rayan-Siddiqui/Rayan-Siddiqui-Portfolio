/*
Name: Rayan Siddiqui
Student ID: 953391424
Course: IST 256
Assignment: DOM Portfolio Enhancement
Submission Date: 02/07/2025
Portfolio URL: https://rayan-siddiqui.github.io/Rayan-Siddiqui-Portfolio/
*/

// Toggle button for Skills
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

// Toggle button for About
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