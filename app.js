// Je récupère les éléments d'affichages et bouttons

const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2')

// Les paramètres initiaux

let tempsInitial = 1800; // 30min
let tempsDeRepos = 300;  // 05min
let pause = false; // car on ne commence pas avec une pause
let nbDeCycles = 0;
cycles.innerText = `Nombre de Cycle: ${nbDeCycles}.`; // infos utilisateur

// Affichage dans bloc travail et pause

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`; //Template litteral
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`; //Template litteral