// Script per aggiungere la categoria "Giochi" al menu di navigazione
document.addEventListener('DOMContentLoaded', function() {
    // Trova il menu di navigazione
    const menuContainer = document.querySelector('.menu-container');
    
    if (!menuContainer) return;
    
    // Trova il dropdown "Home"
    const homeDropdown = Array.from(menuContainer.querySelectorAll('.dropdown')).find(
        dropdown => dropdown.querySelector('.dropbtn').textContent.trim() === 'Home'
    );
    
    if (!homeDropdown) return;
    
    // Verifica se la categoria "Giochi" è già presente
    const gamesExists = Array.from(menuContainer.querySelectorAll('.dropdown')).some(
        dropdown => dropdown.querySelector('.dropbtn').textContent.trim() === 'Giochi'
    );
    
    // Se la categoria "Giochi" non esiste, aggiungila prima del dropdown "Home"
    if (!gamesExists) {
        // Crea il nuovo dropdown "Giochi"
        const gamesDropdown = document.createElement('div');
        gamesDropdown.className = 'dropdown';
        gamesDropdown.innerHTML = `
            <button class="dropbtn">Giochi</button>
            <div class="dropdown-content">
                <a href="gioco.html">Il Labirinto di Foscolo</a>
                <a href="gioco-oca-foscolo.html">Il Viaggio di Foscolo</a>
            </div>
        `;
        
        // Inserisci il dropdown "Giochi" prima del dropdown "Home"
        menuContainer.insertBefore(gamesDropdown, homeDropdown);
    }
});