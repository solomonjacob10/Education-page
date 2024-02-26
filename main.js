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
    var image = document.getElementById("myImage");
    image.style.width = "200px"; // Adjust the width for enlargement
    image.style.height = "auto"; // Maintain aspect ratio
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
