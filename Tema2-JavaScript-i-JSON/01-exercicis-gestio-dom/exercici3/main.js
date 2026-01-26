// ============================================
// EXERCICI 3: TAULA DE CLASSIFICACIÓ
// ============================================
// OBJECTIU: Practicar innerHTML per crear llistes HTML
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .innerHTML --> per inserir codi HTML dins un element
//
// ============================================

// TASCA 1: Seleccionar el div #ranking
// ------------------------------------------------
const ranking = document.querySelector('#ranking');

// TASCA 2: Crear la llista de jugadors amb innerHTML
// ------------------------------------------------
// EXEMPLE d'un element (li):
//   <li>
//     <span class="posicio">...</span>
//     <span class="jugador-nom">...</span>
//     <span class="punts">...</span>
//   </li>
//
// TASCA 3: Afegir un 4t jugador amb el TEU nom
// OPCIONAL: Afegir més jugadors amb diferents puntuacions

ranking.innerHTML = `
<ul>
  <li>
    <span class="posicio">1</span>
    <span class="jugador-nom">Alonso</span>
    <span class="punts">333333</span>
  </li>
  <li>
    <span class="posicio">2</span>
    <span class="jugador-nom">Risco</span>
    <span class="punts">248762</span>
  </li>
   <li>
    <span class="posicio">3</span>
    <span class="jugador-nom">Roc</span>
    <span class="punts">180245</span>
  </li>
  <li>
    <span class="posicio">4</span>
    <span class="jugador-nom">Victor</span>
    <span class="punts">100340</span>
  </li>
  <li>
    <span class="posicio">5</span>
    <span class="jugador-nom">Max</span>
    <span class="punts">90854</span>
  </li>
    <li>
    <span class="posicio">6</span>
    <span class="jugador-nom">Dani</span>
    <span class="punts">72921</span>
  </li>
</ul>
`;
