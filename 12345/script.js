// Skill bar animation
const skillBars = document.querySelectorAll('.skill-level');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.getAttribute('data-skill');
            entry.target.style.width = value + '%';
        }
    });
});
skillBars.forEach(bar => observer.observe(bar));


// Project click redirect
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', () => {
        const link = project.getAttribute('data-link');
        window.location.href = link;
    });
});





const backToTop = document.getElementById("backToTop");

// Show button when scrolling down 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Smooth scroll to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




