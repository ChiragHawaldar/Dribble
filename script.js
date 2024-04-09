

console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function() {
    let usernameInput = document.getElementById("usernameInput");
    let usernameNotAvailable = document.getElementById("usernameNotAvailable");
    let warningIcon = document.getElementById("warningIcon");


    usernameInput.addEventListener("input", function() {
        let inputValue = usernameInput.value.trim().toLowerCase();

        if (inputValue === 'john') {
            usernameNotAvailable.classList.remove("hidden");
            warningIcon.classList.remove("hidden");
        } else {
            usernameNotAvailable.classList.add("hidden");
            warningIcon.classList.add("hidden");
        }
    });
});

