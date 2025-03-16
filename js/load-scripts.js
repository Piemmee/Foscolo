// Script per caricare dinamicamente gli script necessari
document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi lo script add-games-menu.js
    const script = document.createElement('script');
    script.src = 'js/add-games-menu.js';
    document.body.appendChild(script);
});