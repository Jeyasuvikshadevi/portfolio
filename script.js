const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    const result = document.getElementById("result");


    if (name === "" || email === "" || message === "") {

        result.textContent = "Please fill all fields";

        result.style.color = "red";

    } else {

        result.textContent = "Thank you! Form submitted successfully.";

        result.style.color = "lightgreen";

        contactForm.reset();

    }

});