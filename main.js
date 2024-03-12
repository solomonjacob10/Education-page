// Listen for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the stored name or set it to an empty string
    let name = JSON.parse(localStorage.getItem('name')) || "";
    // Get the elements for the name button and output
    let nameButton = document.getElementById("nameButton");
    let nameOutput = document.getElementById("nameOutput");

    // Add an event listener for the name button
    nameButton.addEventListener("click", function(name) {
        // Prompt the user for their name
        if (name !== null && name !== "") {
            let name = prompt("Please enter your name:");
            nameOutput.innerText = "Hello, " + name + "!";
            localStorage.setItem('name', JSON.stringify(name));
        }
        // Hide the name button and show the logoff button
        document.getElementById("nameButton").style.display='none';
        document.getElementById("nameButtonLogOff").style.display='flex';
    });

    // Add an event listener for the logoff button
    nameButtonLogOff.addEventListener("click", function(name) {
        // Remove the stored name
        localStorage.removeItem('name');
        // Hide the logoff button and show the name button
        document.getElementById("nameButtonLogOff").style.display='none';
        document.getElementById("nameButton").style.display='flex';
        // Reload the page
        location.reload()
    });

    // Check if a name is stored and update the output accordingly
    if (name !== null && name !== "") {
        nameOutput.innerText = "Hello, " + name + "!";
        document.getElementById("nameButton").style.display='none';
        document.getElementById("nameButtonLogOff").style.display='flex';
    }
});

// Navigation menu interaction
document.addEventListener("DOMContentLoaded", function() {
    let navItems = document.querySelectorAll("nav ul li");

    // Add mouseover and mouseout events for each navigation item
    navItems.forEach(function(navItem) {
        navItem.addEventListener("mouseover", function() {
            this.style.color = "red";
        });

        navItem.addEventListener("mouseout", function() {
            this.style.color = ""; // Reset to default color
        });
    });
});

// Toggle the enlarged state of the profile image
let enlarged = false; 
function setEnlarged() {
    if (enlarged === false) {
        document.getElementById("solomon-face").classList.remove("solomon-face-small");
        document.getElementById("solomon-face").classList.add("solomon-face-enlarged");
        enlarged = true;
    } else if(enlarged === true) {
        document.getElementById("solomon-face").classList.remove("solomon-face-enlarged");
        document.getElementById("solomon-face").classList.add("solomon-face-small");
        enlarged = false;
    }
}

// Handle the survey form submission
window.onload = function() {
    function submitResults() {
        let fname = document.getElementById("fname").value;
        let lname = document.getElementById("lname").value;

        let vehicle1 = document.getElementById("vehicle1").value;
        let vehicle2 = document.getElementById("vehicle2").value;
        let vehicle3 = document.getElementById("vehicle3").value;

        let html = document.getElementById("html").value;
        let css = document.getElementById("css").value;
        let javascript = document.getElementById("javascript").value;

        let autobio = document.getElementById("autobio").value;

        let carbrand = document.getElementById("carbrand").value;

        document.getElementById("~fname").innerHTML = fname;
        document.getElementById("~lname").innerText = lname;
    }
}

// Show the survey form when the survey button is clicked
survey.addEventListener("click", function() {
    document.getElementById("survey-stuff").style.display = 'flex';
    document.getElementById("survey").style.display = 'none';
});
