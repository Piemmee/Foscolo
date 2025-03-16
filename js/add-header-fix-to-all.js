// Script per aggiungere header-fix.js a tutte le pagine HTML
// Questo script deve essere eseguito manualmente una volta

const fs = require('fs');
const path = require('path');

// Directory principale del sito
const siteDir = '.';

// Trova tutti i file HTML nella directory
function findHtmlFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
            // Ricorsivamente cerca nelle sottodirectory
            results = results.concat(findHtmlFiles(filePath));
        } else if (file.endsWith('.html')) {
            results.push(filePath);
        }
    }
    
    return results;
}

// Aggiungi lo script header-fix.js a un file HTML
function addHeaderFixScript(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Controlla se lo script è già presente
        if (content.includes('header-fix.js')) {
            console.log(`Lo script è già presente in ${filePath}`);
            return;
        }
        
        // Trova la posizione di </body>
        const bodyEndPos = content.lastIndexOf('</body>');
        
        if (bodyEndPos === -1) {
            console.log(`Non è stato possibile trovare </body> in ${filePath}`);
            return;
        }
        
        // Inserisci lo script prima di </body>
        const newContent = content.slice(0, bodyEndPos) + 
                          '    <script src="js/header-fix.js"></script>\n' + 
                          content.slice(bodyEndPos);
        
        // Scrivi il nuovo contenuto nel file
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Script aggiunto a ${filePath}`);
    } catch (error) {
        console.error(`Errore nell'elaborazione di ${filePath}:`, error);
    }
}

// Trova tutti i file HTML e aggiungi lo script
const htmlFiles = findHtmlFiles(siteDir);
console.log(`Trovati ${htmlFiles.length} file HTML`);

for (const file of htmlFiles) {
    addHeaderFixScript(file);
}

console.log('Operazione completata!');