// ============================================
// EXERCICI 2: STATS DE POKÉMON
// ============================================
// OBJECTIU: Practicar textContent amb TEMPLATE LITERALS
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .textContent --> per modificar text
// - Template Literals --> `Text ${variable}` (amb cometes invertides  i ${})
//
// ============================================

// VARIABLES INICIALS (Ja venen predefinides per la tasca)
let nomPokemon = 'Pikachu';
let ps = 35;
let atac = 55;
let defensa = 40;
let velocitat = 75;

// ============================================
// TASCA 1: Actualitzar el NOM del Pokémon
// ============================================
document.querySelector('#nom').textContent = 'Pikachu';

// ============================================
// TASCA 2: Actualitzar els PS (Punts de Salut)
// ============================================
document.querySelector('#ps').textContent = `❤️ PS: ${ps}`;

// ============================================
// TASCA 3: Actualitzar l'ATAC
// ============================================
document.querySelector('#atac').textContent = `⚔️ Atac: ${atac}`;

// ============================================
// TASCA 4: Actualitzar la DEFENSA
// ============================================
document.querySelector('#defensa').textContent = `🛡️ Defensa: ${defensa}`;

// ============================================
// TASCA 5: Actualitzar la VELOCITAT
// ============================================
document.querySelector('#velocitat').textContent = `⚡ Velocitat: ${velocitat}`;

// ============================================
// TASCA FINAL: Actualitza l'amplada de les barres visuals
// ============================================
// Utilitza style.setProperty per canviar l'estil 'width' de cada barra segons el valor de la variable corresponent.
// Exemple: barraPS.style.setProperty('width', `${ps}%`);

// Barra Vida
const barraPS = document.querySelector('.stat-value.ps');
barraPS.style.setProperty('width', `${ps}%`);

// Barra Atac
const barraAtac = document.querySelector('.stat-value.atac');
barraAtac.style.setProperty('width', `${atac}%`);

// Barra Defensa
const barraDefensa = document.querySelector('.stat-value.defensa');
barraDefensa.style.setProperty('width', `${defensa}%`);

// Barra Velocitat
const barraVelocitat = document.querySelector('.stat-value.velocitat');
barraVelocitat.style.setProperty('width', `${velocitat}%`);

// ============================================
// TASCA OPCIONAL: Fes que el Pikachu evolucioni a Raichu
// ============================================
// - Canvia nomPokemon a "Raichu"
document.querySelector('#nom').textContent = 'Raichu';

// - Canvia ps a 60
ps = 60;
document.querySelector('#ps').textContent = `❤️ PS: ${ps}`;

// - Canvia atac a 80
atac = 80;
document.querySelector('#atac').textContent = `⚔️ Atac: ${atac}`;

// - Canvia defensa a 70
defensa = 70;
document.querySelector('#defensa').textContent = `🛡️ Defensa: ${defensa}`;

// - Canvia velocitat a 90
velocitat = 90;
document.querySelector('#velocitat').textContent = `⚡ Velocitat: ${velocitat}`;

// - Canvia la imatge del Pokémon (amb setAttribute canvia l'src i l'alt de l'element img)
document.querySelector('img').setAttribute('src', 'img/raichu.webp');
document.querySelector('img').setAttribute('alt', 'Raichu');
