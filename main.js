// main.js

// prompting user's name
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

// enlarging image
function enlargeImage() {
    // Add functionality to enlarge the image when clicked
    // You need to add an onclick attribute to the image in your HTML
}

// navigation menu
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