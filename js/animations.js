// Funzioni di animazione per il sito di Ugo Foscolo

document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi la categoria "Giochi" al menu di navigazione
    const menuContainer = document.querySelector('.menu-container');

    if (menuContainer) {
        // Trova il dropdown "Home"
        const homeDropdown = Array.from(menuContainer.querySelectorAll('.dropdown')).find(
            dropdown => dropdown.querySelector('.dropbtn').textContent.trim() === 'Home'
        );

        if (homeDropdown) {
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
        }
    }
    // Funzione per controllare se un elemento è nel viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Funzione per animare gli elementi quando entrano nel viewport
    function animateOnScroll() {
        // Animazione per le sezioni
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (isInViewport(section) && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
        
        // Animazione per gli elementi della timeline
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                // Aggiungiamo un ritardo crescente per creare un effetto a cascata
                setTimeout(() => {
                    item.classList.add('animated');
                }, index * 200);
            }
        });
        
        // Animazione per le immagini della galleria
        const galleryItems = document.querySelectorAll('.gallery-item, .gallery-image');
        galleryItems.forEach((item, index) => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                // Assicuriamoci che l'elemento sia inizialmente nascosto
                if (!item.style.opacity || item.style.opacity === '') {
                    item.style.opacity = '0';
                }

                setTimeout(() => {
                    // Utilizziamo l'animazione smoothFadeIn più graduale ma più veloce
                    item.style.animation = 'smoothFadeIn 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
                    item.classList.add('animated');
                }, index * 80); // Riduciamo il ritardo tra le immagini
            }
        });
        
        // Animazione per i manoscritti
        const manuscriptCards = document.querySelectorAll('.manuscript-card');
        manuscriptCards.forEach((item, index) => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                // Assicuriamoci che l'elemento sia inizialmente nascosto
                if (!item.style.opacity || item.style.opacity === '') {
                    item.style.opacity = '0';
                }

                setTimeout(() => {
                    // Utilizziamo l'animazione manuscriptAppear specifica per i manoscritti
                    item.style.animation = 'manuscriptAppear 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
                    item.classList.add('animated');
                }, index * 150); // Ritardo tra i manoscritti
            }
        });

        // Animazione per i container di zoom
        const zoomContainers = document.querySelectorAll('.zoom-container');
        zoomContainers.forEach((item, index) => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                // Assicuriamoci che l'elemento sia inizialmente nascosto
                if (!item.style.opacity || item.style.opacity === '') {
                    item.style.opacity = '0';
                }

                setTimeout(() => {
                    // Utilizziamo l'animazione zoomContainerAppear specifica per i container di zoom
                    item.style.animation = 'zoomContainerAppear 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
                    item.classList.add('animated');
                }, 300 + index * 150); // Ritardo aggiuntivo per far apparire i container dopo le card
            }
        });
        
        // Animazione per le caratteristiche dello stile
        const styleFeatures = document.querySelectorAll('.style-feature');
        styleFeatures.forEach((feature, index) => {
            if (isInViewport(feature) && !feature.classList.contains('visible')) {
                // Aggiungiamo un ritardo crescente per creare un effetto a cascata
                setTimeout(() => {
                    feature.classList.add('visible');
                }, index * 150);
            }
        });
        
        // Animazione per il testo originale
        const originalText = document.querySelector('.original-text');
        if (originalText && isInViewport(originalText) && !originalText.classList.contains('visible')) {
            originalText.classList.add('visible');
        }
        
        // Animazione per i versi poetici
        const poemVerses = document.querySelectorAll('.poem-verse');
        poemVerses.forEach((verse, index) => {
            if (isInViewport(verse) && !verse.classList.contains('animated')) {
                setTimeout(() => {
                    verse.classList.add('animated');
                }, index * 200);
            }
        });

        // Animazione per i sonetti
        const sonetti = document.querySelectorAll('.sonetto');
        sonetti.forEach((sonetto, index) => {
            if (isInViewport(sonetto) && !sonetto.classList.contains('visible')) {
                setTimeout(() => {
                    sonetto.classList.add('visible');
                }, index * 300);
            }
        });

        // Animazione per le lettere di Jacopo Ortis
        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            if (isInViewport(letter) && !letter.classList.contains('animated')) {
                setTimeout(() => {
                    letter.classList.add('animated');
                }, index * 300);
            }
        });
        
        // Animazione per le grazie boxes
        const graceBoxes = document.querySelectorAll('.grace-box');
        graceBoxes.forEach((box, index) => {
            if (isInViewport(box) && !box.classList.contains('animated')) {
                setTimeout(() => {
                    box.style.animation = 'fadeIn 1.5s ease forwards';
                    box.classList.add('animated');
                }, index * 200);
            }
        });
    }
    
    // Esegui l'animazione al caricamento e allo scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Lightbox per le immagini (se presente nella pagina)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    
    if (galleryItems.length > 0 && lightbox) {
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const image = this.querySelector('.gallery-image');
                const title = this.querySelector('.gallery-title').textContent;
                const description = this.querySelector('.gallery-description').textContent;
                
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightboxCaption.innerHTML = `<strong>${title}</strong><br>${description}`;
                
                lightbox.style.display = 'flex';
            });
        });
        
        // Funzione per chiudere il lightbox
        window.closeLightbox = function() {
            lightbox.style.display = 'none';
        };
        
        // Chiudi il lightbox quando si clicca fuori dall'immagine
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});