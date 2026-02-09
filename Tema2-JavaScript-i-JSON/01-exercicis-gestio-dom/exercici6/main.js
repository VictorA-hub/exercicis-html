// ============================================
// EXERCICI 6: GALERIA DE PERSONATGES
// ============================================
// OBJECTIU: Practicar setAttribute() i removeAttribute()
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .setAttribute('atribut', 'valor') --> per AFEGIR/MODIFICAR atributs
// - .removeAttribute('atribut') --> per ELIMINAR atributs
//
// ATRIBUTS HTML PRINCIPALS:
// - src: ruta de la imatge
// - alt: text alternatiu (accessibilitat)
// - title: text que apareix al passar el ratolí
// - disabled: desactiva un botó/input
//
// ============================================

// ============================================
// TASCA 1: LINK (The Legend of Zelda)
// ============================================

// PUNT 1: Seleccionar la imatge de Link
const LinkIMG = document.querySelector('#link-img');

// PUNT 2: Canviar la imatge a la versió amb Master Sword
LinkIMG.setAttribute('src', './img/link-master-sword.webp');

// PUNT 3: Actualitzar l'atribut alt per 'Link amb Master Sword'
LinkIMG.setAttribute('alt', 'Link amb Master Sword');

// PUNT 4: Actualitzar l'atribut title per 'Link - Heroi amb Master Sword'
LinkIMG.setAttribute('title', 'Link - Heroi amb Master Sword');

// PUNT 5: Canvia els noms del personatge (h3) amb textContent i afegeix (Powered Up!)
const LinkNom = document.querySelector('#link-nom');
LinkNom.textContent = 'Link Powered Up!';

// PUNT 6: Canvia el text de Mode: Normal a Mode: Master Sword
const LinkEstat = document.querySelector('#link-card .estat');
LinkEstat.textContent = 'Mode: Master Sword';

// PUNT 7: Activar el botó de transformació (seleccionar el botó i eliminar atribut disabled)
const LinkBoto = document.querySelector('#btn-link');
LinkBoto.removeAttribute('disabled');

// ============================================
// TASCA 2: MARIO (Super Mario Bros)
// ============================================

// PUNT 1: Seleccionar la imatge de Mario
const MarioIMG = document.querySelector('#mario-img');

// PUNT 2: Canviar la imatge a la versió Fire Mario
MarioIMG.setAttribute('src', './img/mario-power.webp');

// PUNT 3: Actualitzar l'atribut alt per 'Mario amb poder de foc'
MarioIMG.setAttribute('alt', 'Mario amb poder de foc');

// PUNT 4: Actualitzar l'atribut title per 'Mario - Fire Mario'
MarioIMG.setAttribute('title', 'Mario - Fire Mario');

// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
const MarioNom = document.querySelector('#mario-nom');
MarioNom.textContent = 'Mario (Powered Up!)';

// PUNT 6: Canvia el text de Mode: Normal a Mode: Fire Mario
const MarioEstat = document.querySelector('#mario-card .estat');
MarioEstat.textContent = 'Mode: Fire Mario';

// PUNT 7: Activar el botó del Mario
const MarioBoto = document.querySelector('#btn-mario');
MarioBoto.removeAttribute('disabled');

// ============================================
// TASCA 3: SONIC (Sonic the Hedgehog)
// ============================================

// PUNT 1: Seleccionar la imatge del Sonic
const SonicIMG = document.querySelector('#sonic-img');

// PUNT 2: Canviar la imatge a la versió Super Sonic
SonicIMG.setAttribute('src', './img/sonic-super.webp');

// PUNT 3: Actualitzar l'atribut alt per 'Super Sonic daurat'
SonicIMG.setAttribute('alt', 'Super Sonic daurat');

// PUNT 4: Actualitzar l'atribut title per 'Sonic - Super Sonic (forma daurada)'
SonicIMG.setAttribute('title', 'Sonic - Super Sonic');

// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
const SonicNom = document.querySelector('#sonic-nom');
SonicNom.textContent = 'Sonic (Powered Up!)';

// PUNT 6: Canvia el text de Mode: Normal a Mode: Super Sonic
const SonicEstat = document.querySelector('#sonic-card .estat');
SonicEstat.textContent = 'Mode: Super Sonic';

// PUNT 7: Activar el botó de Sonic
const SonicBoto = document.querySelector('#btn-sonic');
SonicBoto.removeAttribute('disabled');
