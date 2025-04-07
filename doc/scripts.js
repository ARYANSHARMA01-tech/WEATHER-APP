// Simple copy functionality for code blocks
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const code = this.parentElement.querySelector('code').textContent;
        navigator.clipboard.writeText(code);
        this.innerHTML = '<i class="bi bi-check"></i>';
        setTimeout(() => {
            this.innerHTML = '<i class="bi bi-clipboard"></i>';
        }, 2000);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});