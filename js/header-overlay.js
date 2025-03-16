// Script per aggiungere l'overlay graduale all'header
window.addEventListener('DOMContentLoaded', function() {
    // Determina se siamo nella home page
    const path = window.location.pathname;
    const isHomePage = path.endsWith('index.html') ||
                       path.endsWith('/') ||
                       path === '' ||
                       path.split('/').pop() === '';

    // Non applicare l'effetto alla home page
    if (isHomePage) {
        return;
    }

    // Trova l'header
    const header = document.querySelector('header');
    if (!header) {
        return;
    }

    // Trova l'immagine di sfondo
    const headerBg = header.querySelector('.header-bg');
    if (!headerBg) {
        return;
    }

    // Rimuovi qualsiasi animazione esistente dall'immagine di sfondo
    headerBg.style.animation = 'none';

    // Nascondi inizialmente l'immagine di sfondo
    headerBg.style.opacity = '0';

    // Imposta il colore di sfondo dell'header a marrone trasparente
    // Questo previene il flash bianco
    header.style.backgroundColor = 'rgba(93, 64, 55, 0)';

    // Crea un nuovo elemento per l'overlay
    const overlay = document.createElement('div');
    overlay.id = 'header-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(93, 64, 55, 0)'; // Marrone scuro con opacità 0
    overlay.style.zIndex = '1';
    overlay.style.pointerEvents = 'none';

    // Inserisci l'overlay come primo figlio dell'header
    header.insertBefore(overlay, header.firstChild);

    // Assicurati che l'header abbia position: relative
    header.style.position = 'relative';

    // Assicurati che l'header abbia overflow: hidden
    header.style.overflow = 'hidden';

    // Assicurati che il titolo e il sottotitolo siano sopra l'overlay
    const headerElements = header.querySelectorAll('h1, .subtitle, p.subtitle');
    headerElements.forEach(element => {
        element.style.position = 'relative';
        element.style.zIndex = '2';
    });

    // Funzione per l'animazione veloce ma smooth
    function animateOverlay() {
        const startTime = performance.now();
        const duration = 1500; // 1.5 secondi per un'animazione più veloce
        const targetOpacity = 0.8;
        const targetImageOpacity = 0.5; // Opacità finale dell'immagine

        function updateOverlay(currentTime) {
            const elapsed = currentTime - startTime;

            if (elapsed < duration) {
                // Calcola il progresso con la funzione di easing
                const progress = elapsed / duration;

                // Funzione di easing cubica per una transizione più naturale
                const easedProgress = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                const overlayOpacity = targetOpacity * easedProgress;
                const imageOpacity = targetImageOpacity * easedProgress;

                // Aggiorna il colore di sfondo dell'overlay con la nuova opacità
                overlay.style.backgroundColor = `rgba(93, 64, 55, ${overlayOpacity})`;

                // Aggiorna l'opacità dell'immagine di sfondo
                headerBg.style.opacity = imageOpacity.toString();

                // Continua l'animazione
                requestAnimationFrame(updateOverlay);
            } else {
                // Imposta le opacità finali
                overlay.style.backgroundColor = `rgba(93, 64, 55, ${targetOpacity})`;
                headerBg.style.opacity = targetImageOpacity.toString();
            }
        }

        // Avvia l'animazione
        requestAnimationFrame(updateOverlay);
    }

    // Avvia l'animazione immediatamente
    animateOverlay();
});