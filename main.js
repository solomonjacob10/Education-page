// main.js

// Function to enlarge or shrink the image
function enlargeImage(){
    var image = document.getElementById("enlargeImage");
    image.style.width = (image.clientWidth + 250) + "px";
    image.style.height = (image.clientHeight + 200) + "px";
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
