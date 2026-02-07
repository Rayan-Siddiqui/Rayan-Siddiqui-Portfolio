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
