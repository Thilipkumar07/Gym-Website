// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// BMI Calculator
function calculateBMI() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("bmi-result");

    if (height <= 0 || weight <= 0) {
        result.innerText = "Enter valid values.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    result.innerText = `BMI: ${bmi} (${category})`;
}

// Membership Form
document.getElementById("membershipForm")
.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("form-message");

    if (name.length < 3) {
        message.innerText = "Name must be at least 3 characters.";
        return;
    }

    message.innerText = "Successfully Registered!";
    this.reset();
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});