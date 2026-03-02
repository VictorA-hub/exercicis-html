// ============================================
// 🎰 EXERCICI 3: MÀQUINA DE LOOTS AMB RARESES
// ============================================
// 🎯 OBJECTIU: Dominar Math.random(), condicionals (if/else) i switch
//
// 📚 CONCEPTES:
// - Math.random() per generar números aleatoris
// - Math.floor() per arrodonir cap avall
// - Condicionals if/else per determinar rareses
// - switch per diferents tipus de cofre
// - Operadors relacionals (>, <, >=, <=)
// - Manipulació del DOM
//
// 📦 SISTEMA DE RARESES (Cofre Bàsic):
// - Comú: 0-60 (60%)
// - Poc Comú: 61-94 (34%)
// - Rar: 95-99 (5%)
// - Èpic: 100 (1%)
//
// 🎁 SISTEMA DE RARESES (Cofre Plata):
// - Poc Comú: 0-50 (50%)
// - Rar: 51-85 (35%)
// - Èpic: 86-95 (10%)
// - Llegendari: 96-100 (5%)
//
// 💎 SISTEMA DE RARESES (Cofre d'Or):
// - Rar: 0-40 (40%)
// - Èpic: 41-80 (40%)
// - Llegendari: 81-100 (20%)
//
// ============================================

// ============================================
// ✅ TASCA 0: COMPTADORS
// ============================================
// Crea les variables per comptar el número total de cofres oberts, el total d'or guanyat i el número total de cofres oberts de cada raresa

let cofresOberts = 0;
let totalComuns = 0;
let totalPocComuns = 0;
let totalRars = 0;
let totalEpics = 0;
let totalLlegendaris = 0;
let orTotal = 0;

// ============================================
// ✅ TASCA 1: Generar número aleatori entre 0 i 100 (amb 2 decimals)
// ============================================
// Utilitza Math.random() per generar un número aleatori entre 0 i 100

let numeroAleatori1 = Math.floor(Math.random() * 101);

// ============================================
// ✅ TASCA 2: Determinar la raresa amb if/else
// ============================================
// Utilitza condicionals per determinar la raresa segons el número aleatori generat
// Fixa't en el sistema de rareses descrit a l'enunciat
// Exemple: Si el número es troba entre 0 i 60 la raresa és "Comú", entre 61 i 94 "Poc Comú", etc.
//          A un cofre "Comú" pots guanyar entre 50 i 100 d'or de manera aleatòria
//          Per generar l'or guanyat, pots utilitzar: Math.floor(Math.random() * (max - min + 1)) + min
//          S'ha d'incrementar el comptador corresponent segons la raresa que hagi sortit
//          S'ha d'assignar la icona corresponent segons la raresa que hagi sortit

let raresa1; //Comú / Poc Comú / Rar / Èpic / Llegendari
let iconRaresa1; //⚪ / 🟢 / 🔵 / 🟣 / 🟡
let orGuanyat1; // Random entre 50-100, 100-250, etc segons la raresa

if (numeroAleatori1 >= 0 && numeroAleatori1 < 61) {
  raresa1 = 'Comú';
  iconRaresa1 = '⚪';
  orGuanyat1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
} else if (numeroAleatori1 > 60 && numeroAleatori1 < 95) {
  raresa1 = 'Poc Comú';
  iconRaresa1 = '🟢';
  orGuanyat1 = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
} else if (numeroAleatori1 > 94 && numeroAleatori1 < 100) {
  raresa1 = 'Rar';
  iconRaresa1 = '🔵';
  orGuanyat1 = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
} else if ((numeroAleatori1 = 100)) {
  raresa1 = 'Èpic';
  iconRaresa1 = '🟣';
  orGuanyat1 = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
}
// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

console.log(`Cofre Fusta #1 - Número Aleatori: ${numeroAleatori1}`);
console.log(`Cofre Fusta #1 - Raresa: ${raresa1}`);
console.log(`Cofre Fusta #1 - Icon: ${iconRaresa1}`);
console.log(`Cofre Fusta #1 - Or Guanyat: ${orGuanyat1}`);

// ============================================
// ✅ TASCA 3: Incrementar comptadors
// ============================================
// Incrementa el comptador de cofres oberts i el total d'or guanyat

cofresOberts++;
orTotal += orGuanyat1;

switch (raresa1) {
  case 'Comú':
    totalComuns++;
    break;
  case 'Poc Comú':
    totalPocComuns++;
    break;
  case 'Rar':
    totalRars++;
    break;
  case 'Èpic':
    totalEpics++;
    break;
  case 'Llegendari':
    totalLlegendaris++;
    break;
}

// ============================================
// ✅ TASCA 4: Actualitzar DOM
// ============================================
// Selecciona els elements (cofres-oberts, comuns, poc-comuns, rars, epics i llegendaris) i actualitza'ls

const divCofresOberts = document.querySelector('#cofres-oberts');
const divCofresComuns = document.querySelector('#comuns');
const divCofresPocComuns = document.querySelector('#poc-comuns');
const divCofresRars = document.querySelector('#rars');
const divCofresEpics = document.querySelector('#epics');
const divCofresLlegendaris = document.querySelector('#llegendaris');

divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;

// ============================================
// PART 3: OBRIR MÉS COFRES BÀSICS (DE FUSTA)
// ============================================
if (numeroAleatori1 >= 0 && numeroAleatori1 < 61) {
  raresa1 = 'Comú';
  iconRaresa1 = '⚪';
  orGuanyat1 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
  totalComuns++;
} else if (numeroAleatori1 > 60 && numeroAleatori1 < 95) {
  raresa1 = 'Poc Comú';
  iconRaresa1 = '🟢';
  orGuanyat1 = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
  totalPocComuns++;
} else if (numeroAleatori1 > 94 && numeroAleatori1 < 100) {
  raresa1 = 'Rar';
  iconRaresa1 = '🔵';
  orGuanyat1 = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
  totalRars++;
} else if ((numeroAleatori1 = 100)) {
  raresa1 = 'Èpic';
  iconRaresa1 = '🟣';
  orGuanyat1 = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  totalEpics++;
}

console.log(`Cofre Fusta #2 - Número Aleatori: ${numeroAleatori1}`);
console.log(`Cofre Fusta #2 - Raresa: ${raresa1}`);
console.log(`Cofre Fusta #2 - Icon: ${iconRaresa1}`);
console.log(`Cofre Fusta #2 - Or Guanyat: ${orGuanyat1}`);

cofresOberts++;
divCofresOberts.textContent = cofresOberts;
divCofresComuns.textContent = totalComuns;
divCofresPocComuns.textContent = totalPocComuns;
divCofresRars.textContent = totalRars;
divCofresEpics.textContent = totalEpics;
divCofresLlegendaris.textContent = totalLlegendaris;
// ============================================
// ✅ TASCA 5: Obrir cofre bàsic #2
// ============================================

let numeroAleatori2;
let raresa2;
let iconRaresa2;
let orGuanyat2;

// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que el cofre #1

if (numeroAleatori2 >= 0 && numeroAleatori2 < 61) {
  raresa2 = 'Comú';
  iconRaresa2 = '⚪';
  orGuanyat2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
} else if (numeroAleatori2 > 60 && numeroAleatori2 < 95) {
  raresa2 = 'Poc Comú';
  iconRaresa2 = '🟢';
  orGuanyat2 = Math.floor(Math.random() * (250 - 100 + 1)) + 100;
} else if (numeroAleatori2 > 94 && numeroAleatori2 < 100) {
  raresa2 = 'Rar';
  iconRaresa2 = '🔵';
  orGuanyat2 = Math.floor(Math.random() * (500 - 250 + 1)) + 250;
} else if ((numeroAleatori2 = 100)) {
  raresa2 = 'Èpic';
  iconRaresa2 = '🟣';
  orGuanyat2 = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
}

console.log(`Cofre Bàsic #1 - Número Aleatori: ${numeroAleatori2}`);
console.log(`Cofre Bàsic #1 - Raresa: ${raresa2}`);
console.log(`Cofre Bàsic #1 - Icon: ${iconRaresa2}`);
console.log(`Cofre Bàsic #1 - Or Guanyat: ${orGuanyat2}`);

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

// ============================================
// ✅ TASCA 6: Obrir cofre bàsic #3
// ============================================

let numeroAleatori3;
let raresa3;
let iconRaresa3;
let orGuanyat3;

// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

// ============================================
// ✅ TASCA 7: Cofre de Plata #1
// ============================================
// Cofre de Plata: 0-50 = Poc Comú, 51-85 = Rar, 86-100 = Èpic

let numeroPlata1;
let raresaPlata1;
let iconPlata1;
let orGuanyatPlata1;

// Tingues en compte les noves probabilitats (cofres de plata)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

// ============================================
// ✅ TASCA 8: Cofre de Plata #2
// ============================================

let numeroPlata2;
let raresaPlata2;
let iconPlata2;
let orGuanyatPlata2;

// Tingues en compte les noves probabilitats (cofres de plata)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

// ============================================
// ✅ TASCA 9: Cofre d'Or #1
// ============================================
// Cofre d'Or: 0-40 = Rar, 41-80 = Èpic, 81-100 = Llegendari

let numeroOr1;
let raresaOr1;
let iconOr1;
let orGuanyatOr1;

// Tingues en compte les noves probabilitats (cofres d'or)
// Determina raresa, la icona, l'or guanyat i incrementa el comptador de raresa amb el mateix sistema que els cofres anteriors

// Incrementa el comptador de cofres oberts i el total d'or guanyat

// Actualitza el DOM

// Mostra per consola el número aleatori, la raresa, l'icona i l'or guanyat per comprovar que tot funciona correctament

// ============================================
// ✅ TASCA 10: Crear les cartes de loot al DOM
// ============================================
// Afegeix visualment els loots obtinguts al contenidor "#resultats"

const resultats = document.querySelector('#resultats');

// Afegeix totes les recompenses (exemple amb el primer cofre bàsic - cofre de fusta)
//
// <div class="loot-card ${raresa1.toLowerCase()}">
//  <div class="loot-icon">${iconRaresa1}</div>
//  <div class="loot-nom">Cofre Bàsic #1</div>
//  <div class="loot-raresa">${raresa1}</div>
//  <div class="loot-img"><img src="./img/cofre-fusta.webp" alt="Cofre Fusta"></div>
//  <div class="loot-or">💰 ${orGuanyat1} or</div>
// </div>

// ============================================
// ESTADÍSTIQUES FINALS
// ============================================
// Calcula i Actualitza les estadístiques finals al DOM

const divOrTotal = document.querySelector('#or-total');
const divMillorRaresa = document.querySelector('#millor-raresa');
const divMaximOr = document.querySelector('#maxim-or');

// ============================================
// ✅ TASCA 11: Actualitza el DOM amb el total d'or guanyat
// ============================================

// ============================================
// ✅ TASCA 12: Actualitza el DOM amb la millor raresa obtinguda
// ============================================

// ============================================
// ✅ TASCA 13: Actualitza el DOM amb el cofre que ha donat més or
// ============================================
