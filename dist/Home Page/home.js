document.addEventListener("DOMContentLoaded", function () {
let profilePicPath = localStorage.getItem("uploadedImage");

// Check if a profile picture path exists in localStorage
if (profilePicPath) {
    // Create an img element and set its src attribute to the profile picture path
    let profilePicElement = document.getElementById("profile-pic");
    profilePicElement.src = profilePicPath;
} else {
    // If no profile picture path is found, use a default image path
    let defaultImagePath = "default-profile-pic.jpg"; // Set your default image path here
    let profilePicElement = document.getElementById("profile-pic");
    profilePicElement.src = defaultImagePath;
}

const toggleNav = document.getElementById("toggleNav");
const mobileNav = document.querySelector(".mobile-nav");

toggleNav.addEventListener("click", function () {
  mobileNav.classList.toggle("hidden");
});
});