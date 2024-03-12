// Prompting user's name


document.addEventListener("DOMContentLoaded", function() {
    let name = JSON.parse(localStorage.getItem('name')) || "";
    let nameButton = document.getElementById("nameButton");
    let nameOutput = document.getElementById("nameOutput");

    nameButton.addEventListener("click", function(name) {
        
        if (name !== null && name !== "") {
            let name = prompt("Please enter your name:");
            nameOutput.innerText = "Hello, " + name + "!";
            localStorage.setItem('name', JSON.stringify(name));
        }
        document.getElementById("nameButton").style.display='none';
        document.getElementById("nameButtonLogOff").style.display='flex';
    });

    nameButtonLogOff.addEventListener("click", function(name) {
        localStorage.removeItem('name');
        document.getElementById("nameButtonLogOff").style.display='none';
        document.getElementById("nameButton").style.display='flex';
        location.reload()
    });

    if (name !== null && name !== "") {
        nameOutput.innerText = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display='none';
        document.getElementById("nameButtonLogOff").style.display='flex';
    }
});



// Navigation menu
document.addEventListener("DOMContentLoaded", function() {
    let navItems = document.querySelectorAll("nav ul li");

    navItems.forEach(function(navItem) {
        navItem.addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        navItem.addEventListener("mouseout", function() {
            this.style.color = ""; // Reset to default color
        });
    });
});

let enlarged = false; 

function setEnlarged() {
    console.log("hi")
    
    if (enlarged === false) {
        document.getElementById("anna-face").classList.remove("anna-face-small");
        document.getElementById("anna-face").classList.add("anna-face-enlarged");
        
        enlarged = true;
    } else if(enlarged === true) {
        document.getElementById("anna-face").classList.remove("anna-face-enlarged");
        document.getElementById("anna-face").classList.add("anna-face-small");
        
        enlarged = false;
    }
}

