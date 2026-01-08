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