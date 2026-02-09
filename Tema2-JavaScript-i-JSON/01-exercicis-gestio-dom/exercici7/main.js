// ============================================
// EXERCICI 7: CLASH OF CLANS - CAMP DE BATALLA
// ============================================
// OBJECTIU: Aprendre a combinar createElement, classList i append
//
// CONCEPTES QUE NECESSITARÀS:
// - document.createElement('div') --> Crea un nou element HTML (un div en aquest cas)
// - .classList.add('classe') --> Afegeix una classe CSS
// - elementPare.append(elementFill) --> Afegeix l'element al DOM
// - element.remove() --> Elimina un element del DOM
// - .textContent --> Canvia el text d'un element
//
// ============================================
// SELECCIONAR ELEMENTS DEL DOM
// ============================================

// Zones del camp de batalla
const zonaAliada = document.querySelector('#zona-aliada');
const zonaEnemiga = document.querySelector('#zona-enemiga');

// Comptadors
const comptadorAliats = document.querySelector('#contador-aliats');
const comptadorEnemics = document.querySelector('#contador-enemics');
const comptadorTotal = document.querySelector('.stat-value.yellow');

// Variables per comptar tropes
let totalAliats = 0;
let totalEnemics = 0;

// ============================================
// ZONA ALIADA - DESPLEGAR LES TEVES TROPES
// ============================================

// ============================================
// TASCA 1 - TROPA ALIADA 1: BÀRBAR
// ============================================

// PUNT 1: Crear un nou element <div> per al Bàrbar
const Barbar1 = document.createElement('div');

// PUNT 2: Afegir la classe 'tropa' i la classe 'barbarian' al Bàrbar
Barbar1.classList.add('tropa', 'barbarian');

// PUNT 3: Crea un nou element <img> per a la imatge del Bàrbar
const Barbar1IMG = document.createElement('img');

// PUNT 4: Crear un nou element <p> per al nom del Bàrbar
const Barbar1Nom = document.createElement('p');

// PUNT 5: Crear un nou element <p> per a les estadístiques del Bàrbar
const Barbar1Stats = document.createElement('p');

// PUNT 6: Modifica l'atribut src de la imatge del Bàrbar i el seu alt text
Barbar1IMG.setAttribute('src', './img/barbarian.webp');
Barbar1IMG.setAttribute('alt', 'Bàrbar');

// PUNT 7: Afegir el nom del Bàrbar a l'element nom <p>
Barbar1Nom.textContent = 'Bàrbar';
Barbar1Nom.style.fontWeight = 'bold';

// PUNT 8: Afegir les estadístiques del Bàrbar al seu element <p>
Barbar1Stats.textContent = '❤️ 78 ⚔️ 16';
Barbar1Stats.style.fontWeight = 'bold';

// PUNT 9: Afegir la imatge, el nom i les estadístiques al div del Bàrbar
// L'ordre importa: primer la imatge, després el nom i després les stats
Barbar1.append(Barbar1IMG, Barbar1Nom, Barbar1Stats);

// PUNT 10: Afegir el Bàrbar a la zonaAliada
zonaAliada.append(Barbar1);

// PUNT 11: Actualitzar el comptador d'aliats "totalAliats"
totalAliats++;

// PUNT 12: Actualitzar el div de text del comptador d'aliats amb textContent
comptadorAliats.textContent = totalAliats;

// ============================================
// TASCA 2 - TROPA ALIADA 2: ARQUERA
// ============================================
// classes: 'tropa' i 'archer'
const Arquera = document.createElement('div');
Arquera.classList.add('tropa', 'archer');
const ArqueraIMG = document.createElement('img');
const ArqueraNom = document.createElement('p');
const ArqueraStats = document.createElement('p');
ArqueraIMG.setAttribute('src', './img/archer.webp');
ArqueraIMG.setAttribute('alt', 'Arquera');
ArqueraNom.textContent = 'Arquera';
ArqueraNom.style.fontWeight = 'bold';
ArqueraStats.textContent = '❤️ 40 ⚔️ 12';
ArqueraStats.style.fontWeight = 'bold';
Arquera.append(ArqueraIMG, ArqueraNom, ArqueraStats);
zonaAliada.append(Arquera);
totalAliats++;
comptadorAliats.textContent = totalAliats;

// ============================================
// TASCA 3 - TROPA ALIADA 3: GEGANT
// ============================================
// classes: 'tropa' i 'gigant'
const Gigant1 = document.createElement('div');
Gigant1.classList.add('tropa', 'gigant');
const Gigant1IMG = document.createElement('img');
const Gigant1Nom = document.createElement('p');
const Gigant1Stats = document.createElement('p');
Gigant1IMG.setAttribute('src', './img/giant.webp');
Gigant1IMG.setAttribute('alt', 'Gigant');
Gigant1Nom.textContent = 'Gigant';
Gigant1Nom.style.fontWeight = 'bold';
Gigant1Stats.textContent = '❤️ 380 ⚔️ 25';
Gigant1Stats.style.fontWeight = 'bold';
Gigant1.append(Gigant1IMG, Gigant1Nom, Gigant1Stats);
zonaAliada.append(Gigant1);
totalAliats++;
comptadorAliats.textContent = totalAliats;

// ============================================
// ZONA ENEMIGA - GENERAR ENEMICS
// ============================================

// ============================================
// TASCA 4 - ENEMIC 1: GOBLIN
// ============================================
// classes: 'tropa' i 'goblin'
const Goblin1 = document.createElement('div');
Goblin1.classList.add('tropa', 'goblin');
const Goblin1IMG = document.createElement('img');
const Goblin1Nom = document.createElement('p');
const Goblin1Stats = document.createElement('p');
Goblin1IMG.setAttribute('src', './img/goblin.webp');
Goblin1IMG.setAttribute('alt', 'Goblin');
Goblin1Nom.textContent = 'Goblin';
Goblin1Nom.style.fontWeight = 'bold';
Goblin1Stats.textContent = '❤️ 32 ⚔️ 19';
Goblin1Stats.style.fontWeight = 'bold';
Goblin1.append(Goblin1IMG, Goblin1Nom, Goblin1Stats);
zonaEnemiga.append(Goblin1);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;

// ============================================
// TASCA 5 - ENEMIC 2: ESQUELET
// ============================================
// classes: 'tropa' i 'skeleton'
const Skeleton1 = document.createElement('div');
Skeleton1.classList.add('tropa', 'skeleton');
const Skeleton1IMG = document.createElement('img');
const Skeleton1Nom = document.createElement('p');
const Skeleton1Stats = document.createElement('p');
Skeleton1IMG.setAttribute('src', './img/skeleton.webp');
Skeleton1IMG.setAttribute('alt', 'Skeleton');
Skeleton1Nom.textContent = 'Skeleton';
Skeleton1Nom.style.fontWeight = 'bold';
Skeleton1Stats.textContent = '❤️ 35 ⚔️ 25';
Skeleton1Stats.style.fontWeight = 'bold';
Skeleton1.append(Skeleton1IMG, Skeleton1Nom, Skeleton1Stats);
zonaEnemiga.append(Skeleton1);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;

// ============================================
// TASCA 6 - ENEMIC 3: DRAC
// ============================================
// classes: 'tropa' i 'dragon'
const Dragon1 = document.createElement('div');
Dragon1.classList.add('tropa', 'Dragon');
const Dragon1IMG = document.createElement('img');
const Dragon1Nom = document.createElement('p');
const Dragon1Stats = document.createElement('p');
Dragon1IMG.setAttribute('src', './img/dragon.webp');
Dragon1IMG.setAttribute('alt', 'Dragon');
Dragon1Nom.textContent = 'Dragon';
Dragon1Nom.style.fontWeight = 'bold';
Dragon1Stats.textContent = '❤️ 1900 ⚔️ 240';
Dragon1Stats.style.fontWeight = 'bold';
Dragon1.append(Dragon1IMG, Dragon1Nom, Dragon1Stats);
zonaEnemiga.append(Dragon1);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;

// ============================================
// TASCA 7 - ENEMIC 4: P.E.K.K.A
// ============================================
// classes: 'tropa' i 'pekka'
const Pekka = document.createElement('div');
Pekka.classList.add('tropa', 'Pekka');
const PekkaIMG = document.createElement('img');
const PekkaNom = document.createElement('p');
const PekkaStats = document.createElement('p');
PekkaIMG.setAttribute('src', './img/pekka.webp');
PekkaIMG.setAttribute('alt', 'Pekka');
PekkaNom.textContent = 'P.E.K.K.A';
PekkaNom.style.fontWeight = 'bold';
PekkaStats.textContent = '❤️ 2900 ⚔️ 510';
PekkaStats.style.fontWeight = 'bold';
Pekka.append(PekkaIMG, PekkaNom, PekkaStats);
zonaEnemiga.append(Pekka);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;

// ============================================
// ACTUALITZAR COMPTADOR TOTAL
// ============================================

// TASCA 8: Actualitzar el comptador total de tropes
// Realitza la suma del número d'aliats + el número d'enemics
// Actualitza el comptador total amb textContent
comptadorTotal.textContent = totalAliats + totalEnemics;

// ============================================
// TASCA FINAL 1: Crear més tropes!
// ============================================
// Prova de crear més tropes per fer la batalla més gran:
//
// ALIATS:
// - Un segon bàrbar
// - Un Rei Bàrbar (classes: 'tropa' i 'king-barbarian')
// - Un segon Gegant
//
// ENEMICS:
// - Un segon Goblin
// - Un segon Drac
// - Un segon Esquelet
//
// Recorda actualitzar els comptadors cada vegada!

// ALIATS
const Barbar2 = document.createElement('div');
Barbar2.classList.add('tropa', 'barbarian');
const Barbar2IMG = document.createElement('img');
const Barbar2Nom = document.createElement('p');
const Barbar2Stats = document.createElement('p');
Barbar2IMG.setAttribute('src', './img/barbarian.webp');
Barbar2IMG.setAttribute('alt', 'Bàrbar');
Barbar2Nom.textContent = 'Bàrbar';
Barbar2Nom.style.fontWeight = 'bold';
Barbar2Stats.textContent = '❤️ 78 ⚔️ 16';
Barbar2Stats.style.fontWeight = 'bold';
Barbar2.append(Barbar2IMG, Barbar2Nom, Barbar2Stats);
zonaAliada.append(Barbar2);
totalAliats++;
comptadorAliats.textContent = totalAliats;
comptadorTotal.textContent = totalAliats + totalEnemics;

const ReyBarbar = document.createElement('div');
ReyBarbar.classList.add('tropa', 'barbarian');
const ReyBarbarIMG = document.createElement('img');
const ReyBarbarNom = document.createElement('p');
const ReyBarbarStats = document.createElement('p');
ReyBarbarIMG.setAttribute('src', './img/king-barbarian.webp');
ReyBarbarIMG.setAttribute('alt', 'Rey Bàrbar');
ReyBarbarNom.textContent = 'Bàrbar';
ReyBarbarNom.style.fontWeight = 'bold';
ReyBarbarStats.textContent = '❤️ 250 ⚔️ 480';
ReyBarbarStats.style.fontWeight = 'bold';
ReyBarbar.append(ReyBarbarIMG, ReyBarbarNom, ReyBarbarStats);
zonaAliada.append(ReyBarbar);
totalAliats++;
comptadorAliats.textContent = totalAliats;
comptadorTotal.textContent = totalAliats + totalEnemics;

const Gigant2 = document.createElement('div');
Gigant2.classList.add('tropa', 'gigant');
const Gigant2IMG = document.createElement('img');
const Gigant2Nom = document.createElement('p');
const Gigant2Stats = document.createElement('p');
Gigant2IMG.setAttribute('src', './img/giant.webp');
Gigant2IMG.setAttribute('alt', 'Gigant');
Gigant2Nom.textContent = 'Gigant';
Gigant2Nom.style.fontWeight = 'bold';
Gigant2Stats.textContent = '❤️ 380 ⚔️ 25';
Gigant2Stats.style.fontWeight = 'bold';
Gigant2.append(Gigant2IMG, Gigant2Nom, Gigant2Stats);
zonaAliada.append(Gigant2);
totalAliats++;
comptadorAliats.textContent = totalAliats;
comptadorTotal.textContent = totalAliats + totalEnemics;

// ENEMICS
const Goblin2 = document.createElement('div');
Goblin2.classList.add('tropa', 'goblin');
const Goblin2IMG = document.createElement('img');
const Goblin2Nom = document.createElement('p');
const Goblin2Stats = document.createElement('p');
Goblin2IMG.setAttribute('src', './img/goblin.webp');
Goblin2IMG.setAttribute('alt', 'Goblin');
Goblin2Nom.textContent = 'Goblin';
Goblin2Nom.style.fontWeight = 'bold';
Goblin2Stats.textContent = '❤️ 32 ⚔️ 19';
Goblin2Stats.style.fontWeight = 'bold';
Goblin2.append(Goblin2IMG, Goblin2Nom, Goblin2Stats);
zonaEnemiga.append(Goblin2);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;
comptadorTotal.textContent = totalAliats + totalEnemics;

const Dragon2 = document.createElement('div');
Dragon2.classList.add('tropa', 'Dragon');
const Dragon2IMG = document.createElement('img');
const Dragon2Nom = document.createElement('p');
const Dragon2Stats = document.createElement('p');
Dragon2IMG.setAttribute('src', './img/dragon.webp');
Dragon2IMG.setAttribute('alt', 'Dragon');
Dragon2Nom.textContent = 'Dragon';
Dragon2Nom.style.fontWeight = 'bold';
Dragon2Stats.textContent = '❤️ 1900 ⚔️ 240';
Dragon2Stats.style.fontWeight = 'bold';
Dragon2.append(Dragon2IMG, Dragon2Nom, Dragon2Stats);
zonaEnemiga.append(Dragon2);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;
comptadorTotal.textContent = totalAliats + totalEnemics;

const Skeleton2 = document.createElement('div');
Skeleton2.classList.add('tropa', 'skeleton');
const Skeleton2IMG = document.createElement('img');
const Skeleton2Nom = document.createElement('p');
const Skeleton2Stats = document.createElement('p');
Skeleton2IMG.setAttribute('src', './img/skeleton.webp');
Skeleton2IMG.setAttribute('alt', 'Skeleton');
Skeleton2Nom.textContent = 'Skeleton';
Skeleton2Nom.style.fontWeight = 'bold';
Skeleton2Stats.textContent = '❤️ 35 ⚔️ 25';
Skeleton2Stats.style.fontWeight = 'bold';
Skeleton2.append(Skeleton2IMG, Skeleton2Nom, Skeleton2Stats);
zonaEnemiga.append(Skeleton2);
totalEnemics++;
comptadorEnemics.textContent = totalEnemics;
comptadorTotal.textContent = totalAliats + totalEnemics;

// ============================================
// TASCA FINAL 2: Eliminar tropes del camp
// ============================================
// Simula que una tropa ha estat derrotada!
// Recorda actualitzar els comptadors després d'eliminar una tropa.
//
// Prova d'eliminar:
// - El primer Bàrbar (aliat derrotat)
// - El primer Goblin (enemic derrotat)
Barbar1.remove();
totalAliats--;
comptadorAliats.textContent = totalAliats;
comptadorTotal.textContent = totalAliats + totalEnemics;

Goblin1.remove();
totalEnemics--;
comptadorEnemics.textContent = totalEnemics;
comptadorTotal.textContent = totalAliats + totalEnemics;

// ============================================
// TASCA FINAL 3: Eliminar els missatges "empty"
// ============================================
// Quan ja tens tropes al camp, els missatges "No tens tropes" i "Encara no hi ha enemics" s'han d'eliminar.
//
// Selecciona'ls i elimina'ls (.empty-message')

const missatgesBuits = document.querySelectorAll('.empty-message');

missatgesBuits.forEach(missatge => {
  missatge.remove();
});
