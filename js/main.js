/*
Name: Rayan Siddiqui
Student ID: 953391424
Course: IST 256
Assignment: DOM Portfolio Enhancement
Submission Date: 02/07/2025
Portfolio URL: https://rayan-siddiqui.github.io/Rayan-Siddiqui-Portfolio/
*/

// Toggle Skills section visibility
const toggleSkillsBtn = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

toggleSkillsBtn.addEventListener("click", () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
  } else {
    skillsSection.style.display = "none";
  }
});

