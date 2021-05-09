// Get all the classes of panel
const panels = document.querySelectorAll(".panel");

// Removes all the clases active
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
};

// Loop through all the panels, listen for a click, remove all "active" classes and add the class "active" to the clicked panel
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

