// main.js

// Global variable to track image size state
var enlarged = false;

// Function to enlarge or shrink the image
function toggleImageSize() {
    var image = document.getElementById("myImage");
    if (!enlarged) {
        image.style.width = "200px"; // Enlarge the image
        image.style.height = "auto"; // Maintain aspect ratio
    } else {
        image.style.width = "50px"; // Shrink the image back to original size
        image.style.height = "100px";
    }
    enlarged = !enlarged; // Toggle the state
}

// Function to handle click event on the image
function handleImageClick() {
    toggleImageSize();
}

// Prompting user's name
document.addEventListener("DOMContentLoaded", function() {
    var nameButton = document.getElementById("nameButton");
    var nameOutput = document.getElementById("nameOutput");

    nameButton.addEventListener("click", function() {
        var name = prompt("Please enter your name:");
        if (name !== null && name !== "") {
            nameOutput.innerText = "Hello, " + name + "!";
        }
    });
});

// Navigation menu
document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll("nav ul li");

    navItems.forEach(function(navItem) {
        navItem.addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        navItem.addEventListener("mouseout", function() {
            this.style.color = ""; // Reset to default color
        });
    });
});
