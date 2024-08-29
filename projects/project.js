 // JavaScript to handle responsive navbar toggle (if needed)
 document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.createElement('div');
    toggleButton.className = 'toggle-button';
    toggleButton.innerHTML = '☰';
    navbar.insertBefore(toggleButton, navbar.firstChild);

    toggleButton.addEventListener('click', function() {
        const navbarItems = document.querySelector('.navbar ul');
        navbarItems.classList.toggle('active');
    });
});