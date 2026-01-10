function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Call the function for both
loadComponent('header-placeholder', 'header.html');
loadComponent('footer-placeholder', 'footer.html');

// Hamburger menu toggle function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        
    } else {
        console.error("Sidebar element not found!");
    }
}

// Language switching functionality
let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-en and data-bn attributes
    document.querySelectorAll('[data-en][data-bn]').forEach(element => {
        if (lang === 'bn') {
            element.textContent = element.getAttribute('data-bn');
            element.dir = 'ltr';
        } else {
            element.textContent = element.getAttribute('data-en');
            element.dir = 'ltr';
        }
    });
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-${lang}`).classList.add('active');
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        switchLanguage(currentLanguage);
    }, 100);
});