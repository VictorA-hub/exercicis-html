// ============================================
// ⚔️ EXERCICI 2: CALCULADORA DE COMBAT
// ============================================

// ============================================
// PART 1: ESTADÍSTIQUES DELS COMBATENTS
// ============================================

// ✅ TASCA 1: Establir stats del jugador
const nomJugador = 'Mewtwo';
const atacJugador = 130;
const defensaJugador = 70;
const velocitatJugador = 140;
const vidaMaximaJugador = 200;
let vidaActualJugador = 200;
let percentatgeVidaJugador = (vidaActualJugador / vidaMaximaJugador) * 100;

// ✅ TASCA 2: Establir stats de l'enemic
const nomEnemic = 'Charizard';
const atacEnemic = 120;
const defensaEnemic = 65;
const velocitatEnemic = 95;
const vidaMaximaEnemic = 180;
let vidaActualEnemic = 180;
let percentatgeVidaEnemic = (vidaActualEnemic / vidaMaximaEnemic) * 100;

// ✅ TASCA 3: Actualitzar stats al DOM
const spanAtacJugador = document.getElementById('atac-jugador');
const spanDefensaJugador = document.getElementById('defensa-jugador');
const spanVelocitatJugador = document.getElementById('velocitat-jugador');
const spanVidaJugador = document.getElementById('vida-jugador-text');
const divBarraVidaJugador = document.getElementById('barra-vida-jugador');

const spanAtacEnemic = document.getElementById('atac-enemic');
const spanDefensaEnemic = document.getElementById('defensa-enemic');
const spanVelocitatEnemic = document.getElementById('velocitat-enemic');
const spanVidaEnemic = document.getElementById('vida-enemic-text');
const divBarraVidaEnemic = document.getElementById('barra-vida-enemic');

spanAtacJugador.textContent = atacJugador;
spanDefensaJugador.textContent = defensaJugador;
spanVelocitatJugador.textContent = velocitatJugador;
spanVidaJugador.textContent = vidaActualJugador + '/' + vidaMaximaJugador;
divBarraVidaJugador.style.width = percentatgeVidaJugador + '%';

spanAtacEnemic.textContent = atacEnemic;
spanDefensaEnemic.textContent = defensaEnemic;
spanVelocitatEnemic.textContent = velocitatEnemic;
spanVidaEnemic.textContent = vidaActualEnemic + '/' + vidaMaximaEnemic;
divBarraVidaEnemic.style.width = percentatgeVidaEnemic + '%';

// ============================================
// PART 2: CÀLCULS DE DANY
// ============================================

// ✅ TASCA 4: Calcular dany normal del jugador
let danyJugadorNormal = atacJugador - defensaEnemic;
if (danyJugadorNormal <= 0) danyJugadorNormal = 1;

// ✅ TASCA 5: Calcular el dany crític del jugador (x2)
let danyJugadorCritic = danyJugadorNormal * 2;

// ✅ TASCA 6: Calcular dany normal de l'enemic
let danyEnemicNormal = atacEnemic - defensaJugador;
if (danyEnemicNormal <= 0) danyEnemicNormal = 1;

// ✅ TASCA 7: Calcular el dany crític de l'enemic (x2)
let danyEnemicCritic = danyEnemicNormal * 2;

// ✅ TASCA 8: Actualitzar dany al DOM
const divDanyJugadorNormal = document.getElementById('dany-jugador-normal');
const divDanyJugadorCritic = document.getElementById('dany-jugador-critic');
const divDanyEnemicNormal = document.getElementById('dany-enemic-normal');
const divDanyEnemicCritic = document.getElementById('dany-enemic-critic');

divDanyJugadorNormal.textContent = danyJugadorNormal;
divDanyJugadorCritic.textContent = danyJugadorCritic;
divDanyEnemicNormal.textContent = danyEnemicNormal;
divDanyEnemicCritic.textContent = danyEnemicCritic;

// ============================================
// PART 3: PROBABILITATS
// ============================================

// ✅ TASCA 9: Probabilitat d'atac crític
let probCriticJugador = Math.min(velocitatJugador / 5, 30);
let probCriticEnemic = Math.min(velocitatEnemic / 5, 30);

const divProbCriticJugador = document.getElementById('prob-critic-jugador');
const divProbCriticEnemic = document.getElementById('prob-critic-enemic');

divProbCriticJugador.textContent = probCriticJugador + '%';
divProbCriticEnemic.textContent = probCriticEnemic + '%';

// ✅ TASCA 10: Probabilitat d'esquivar
let probEsquivaJugador = Math.round(Math.min(velocitatJugador / 6, 20) * 100) / 100;
let probEsquivaEnemic = Math.round(Math.min(velocitatEnemic / 6, 20) * 100) / 100;

const divProbEsquivaJugador = document.getElementById('prob-esquiva-jugador');
const divProbEsquivaEnemic = document.getElementById('prob-esquiva-enemic');

divProbEsquivaJugador.textContent = probEsquivaJugador + '%';
divProbEsquivaEnemic.textContent = probEsquivaEnemic + '%';

// ============================================
// PART 4: PREDICCIONS
// ============================================

// ✅ TASCA 11: Qui ataca primer
let quiAtacaPrimer;
if (velocitatJugador > velocitatEnemic) {
  quiAtacaPrimer = nomJugador;
} else if (velocitatEnemic > velocitatJugador) {
  quiAtacaPrimer = nomEnemic;
} else {
  quiAtacaPrimer = 'Empat';
}

const divQuiPrimer = document.getElementById('qui-primer');
divQuiPrimer.textContent = quiAtacaPrimer;

// ✅ TASCA 12: Torns necessaris per guanyar
let tornsNecessarisJugador = Math.ceil(vidaMaximaEnemic / danyJugadorNormal);

const divTornsGuanyar = document.getElementById('torns-guanyar');
divTornsGuanyar.textContent = tornsNecessarisJugador;

// ✅ TASCA 13: Vida restant del jugador després del combat
let danyTotalRebut = danyEnemicNormal * tornsNecessarisJugador;
let vidaRestant = vidaMaximaJugador - danyTotalRebut;
if (vidaRestant < 0) vidaRestant = 0;

const divVidaRestant = document.getElementById('vida-restant');
divVidaRestant.textContent = vidaRestant;

// ✅ TASCA 14: Probabilitat de victòria
let probVictoria = 0;
const percentatgeVidaRestant = (vidaRestant / vidaMaximaJugador) * 100;

if (percentatgeVidaRestant >= 75) {
  probVictoria = 100;
} else if (percentatgeVidaRestant >= 50) {
  probVictoria = 75;
} else if (percentatgeVidaRestant >= 25) {
  probVictoria = 55;
} else {
  probVictoria = 10;
}

const divProbVictoria = document.getElementById('prob-victoria');
divProbVictoria.textContent = probVictoria + '%';

// ============================================
// PART 5: SIMULACIÓ D'UN TORN
// ============================================

const logCombat = document.getElementById('log-combat');
logCombat.innerHTML = '';

// Funció auxiliar per crear una línia al log
// tipus: '' (jugador/blau), 'enemic' (vermell), 'info' (taronja/destacat), 'crític' (vermell fort)
function afegirLog(missatge, tipus = '') {
  const p = document.createElement('p');
  p.classList.add('log-linia');
  if (tipus) p.classList.add(tipus);
  p.textContent = missatge;
  logCombat.appendChild(p);
}

function simularTorn(numTorn) {
  // Capçalera del torn (fons taronja destacat)
  afegirLog(`🔮 TORN ${numTorn} - Inici del combat`, 'info');

  // Determinar ordre d'atac per velocitat
  const ordre = velocitatJugador >= velocitatEnemic ? ['jugador', 'enemic'] : ['enemic', 'jugador'];

  for (const torn of ordre) {
    const esJugador = torn === 'jugador';
    const nomAtacant = esJugador ? nomJugador : nomEnemic;
    const nomDefensor = esJugador ? nomEnemic : nomJugador;

    // Comprovar si el defensor esquiva
    const probEsquiva = esJugador ? probEsquivaEnemic : probEsquivaJugador;
    const esquiva = Math.random() * 100 < probEsquiva;

    if (esquiva) {
      afegirLog(
        `💨 ${nomDefensor} ha esquivat l'atac de ${nomAtacant}!`,
        esJugador ? '' : 'enemic'
      );
      continue;
    }

    // Missatge d'atac (blau si jugador, vermell si enemic)
    afegirLog(
      `⚔️ ${esJugador ? 'Jugador' : 'Enemic'}: ${nomAtacant} ataca!`,
      esJugador ? '' : 'enemic'
    );

    // Comprovar si és crític
    const probCritic = esJugador ? probCriticJugador : probCriticEnemic;
    const esCritic = Math.random() * 100 < probCritic;

    let dany;
    if (esCritic) {
      dany = esJugador ? danyJugadorCritic : danyEnemicCritic;
      afegirLog(`💥 Dany crític: ${dany}`, 'crític');
    } else {
      dany = esJugador ? danyJugadorNormal : danyEnemicNormal;
      afegirLog(`🎯 Dany normal: ${dany}`, esJugador ? '' : 'enemic');
    }

    // Aplicar dany i actualitzar barres de vida al DOM
    if (esJugador) {
      vidaActualEnemic = Math.max(0, vidaActualEnemic - dany);
      percentatgeVidaEnemic = (vidaActualEnemic / vidaMaximaEnemic) * 100;
      spanVidaEnemic.textContent = vidaActualEnemic + '/' + vidaMaximaEnemic;
      divBarraVidaEnemic.style.width = percentatgeVidaEnemic + '%';
      afegirLog(`👹 ${nomEnemic} - Vida: ${vidaActualEnemic}/${vidaMaximaEnemic}`, 'enemic');
    } else {
      vidaActualJugador = Math.max(0, vidaActualJugador - dany);
      percentatgeVidaJugador = (vidaActualJugador / vidaMaximaJugador) * 100;
      spanVidaJugador.textContent = vidaActualJugador + '/' + vidaMaximaJugador;
      divBarraVidaJugador.style.width = percentatgeVidaJugador + '%';
      afegirLog(`🛡️ ${nomJugador} - Vida: ${vidaActualJugador}/${vidaMaximaJugador}`, '');
    }

    // Comprovar fi del combat
    if (vidaActualEnemic <= 0) {
      afegirLog(`🏆 ${nomJugador} ha guanyat el combat!`, 'info');
      return true;
    }
    if (vidaActualJugador <= 0) {
      afegirLog(`💀 ${nomEnemic} ha guanyat el combat!`, 'info');
      return true;
    }
  }

  // Peu del torn
  afegirLog(`—— Final del Torn ——`, 'info');
  return false;
}

// Simular el primer torn
simularTorn(1);
