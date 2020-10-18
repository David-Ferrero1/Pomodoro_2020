// Je récupère les éléments d'affichages et bouttons

const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2')

// Les paramètres initiaux

let tempsInitial = 3; // 30min
let tempsDeRepos = 3;  //  5min
let pause = false; // car on ne commence pas avec une pause
let nbDeCycles= 0;
cycles.innerText = `Nombre de Cycles: ${nbDeCycles}.`; // infos utilisateur

// Affichage dans bloc travail et pause

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`; //Template litteral
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`; //Template litteral

// Activation des bouttons

btnGo.addEventListener('click', () => {

    // initialitasation du timer 30 min
    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
    console.log(nbDeCycles);
    let timer = setInterval(() => {
        
        if(tempsInitial > 0) {
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        } else if (tempsDeRepos === 0 && tempsInitial === 0) {
            tempsInitial = 3;
            tempsDeRepos = 3;
            nbDeCycles = nbDeCycles + 1;
            console.log(nbDeCycles);
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

        } else if (tempsInitial === 0) {
            tempsDeRepos--;
            affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
        }

    }, 1000)
})