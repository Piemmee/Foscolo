// Script per aggiungere il fix dell'header a tutte le pagine
document.addEventListener('DOMContentLoaded', function() {
    // Crea un elemento link per il CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/header-fix.css';

    // Aggiungi il link all'head del documento
    document.head.appendChild(link);

    // Determina se siamo nella home page
    const path = window.location.pathname;
    const isHomePage = path.endsWith('index.html') ||
                       path.endsWith('/') ||
                       path === '' ||
                       path.split('/').pop() === '';

    // Non applicare l'effetto alla home page
    if (isHomePage) {
        console.log('Home page detected, not applying overlay');
        return;
    }

    // Trova l'header
    const header = document.querySelector('header');
    if (!header) {
        console.log('Header not found');
        return;
    }

    // Rimuovi qualsiasi background-color esistente
    header.style.backgroundColor = 'transparent';

    // Crea un nuovo elemento per l'overlay
    const overlay = document.createElement('div');
    overlay.className = 'header-overlay';
    overlay.style.backgroundColor = 'rgba(93, 64, 55, 0)';

    // Inserisci l'overlay come primo figlio dell'header
    header.insertBefore(overlay, header.firstChild);

    // Funzione per l'animazione ultra-smooth
    function animateOverlay() {
        const startTime = performance.now();
        const duration = 8000; // 8 secondi per un'animazione ancora più graduale
        const targetOpacity = 0.8;

        // Funzione di easing personalizzata per una transizione estremamente graduale
        function customEasing(t) {
            // Combiniamo diverse funzioni di easing per un effetto ultra-smooth
            // Inizia molto lentamente e accelera gradualmente
            return Math.pow(Math.sin(t * Math.PI / 2), 3);
        }

        function updateOverlay(currentTime) {
            const elapsed = currentTime - startTime;

            if (elapsed < duration) {
                // Calcola il progresso con la funzione di easing
                const progress = elapsed / duration;
                const easedProgress = customEasing(progress);
                const opacity = targetOpacity * easedProgress;

                // Aggiorna il colore di sfondo con la nuova opacità
                overlay.style.backgroundColor = `rgba(93, 64, 55, ${opacity})`;

                // Continua l'animazione
                requestAnimationFrame(updateOverlay);
            } else {
                // Imposta l'opacità finale
                overlay.style.backgroundColor = `rgba(93, 64, 55, ${targetOpacity})`;
            }
        }

        // Avvia l'animazione
        requestAnimationFrame(updateOverlay);
    }

    // Avvia l'animazione dopo un breve ritardo per assicurarsi che tutto sia caricato
    setTimeout(animateOverlay, 100);
});