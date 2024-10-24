window.addEventListener('load', function() {
    // Hide loading element
    document.getElementById('loading').style.display = 'none';

    // Initialize Typewriter effect
    typeWriter();

    // Initialize Scroll Progress Bar
    updateProgressBar();

    // Initialize Burger Menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        // Animate burger rotation
        burger.classList.toggle('toggle');
    });
});

// Typewriter effect
function typeWriter() {
    const text = "Welcome to Kvr Groups.";
    const speed = 150;
    let i = 0;
    const typewriterElement = document.getElementById('typewriter');

    function type() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Scroll Progress Bar
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
}

// Scroll Fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.6,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Google Forms Redirection
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScityZxNcVvdvSAwwqjVdkfNBvGkmB4IHqmWOFrfbaBtiBeQA/viewform?vc=0&c=0&w=1&flr=0';
});
