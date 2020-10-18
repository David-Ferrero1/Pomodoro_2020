// Je récupère les éléments d'affichages et bouttons

const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2')

// Les paramètres initiaux

let checkInterval = false; // pour éviter de spammer le chiffter < 0
let tempsInitial = 3; // 30min
let tempsDeRepos = 3;  //  5min
let pause = false; // car on ne commence pas avec une pause
let nbDeCycles = 0;
cycles.innerText = `Nombre de Cycles: ${nbDeCycles}.`; // infos utilisateur

// Affichage dans bloc travail et pause

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`; //Template litteral
affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`; //Template litteral

// Activation des bouttons

btnGo.addEventListener('click', () => {

    //check interval ici
    if(checkInterval === false) {
        checkInterval = true;
    

        // initialitasation du timer 30 min
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        let timer = setInterval(() => {
            
            if(pause === false && tempsInitial > 0) {
                tempsInitial--;
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
                tempsInitial = 3;
                tempsDeRepos = 3;
                nbDeCycles = nbDeCycles + 1;
                console.log(nbDeCycles);
                affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

            } else if (pause === false && tempsInitial === 0) {
                tempsDeRepos--;
                affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;
            }

        }, 1000)


 // boutton reset
    btnReset.addEventListener('click', () => {
        clearInterval(timer);
        checkInterval = false;
        tempsInitial = 1800;
        tempsDeRepos = 300;
        affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos/60)} : ${(tempsDeRepos % 60 < 10) ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60}`;

    })

    } else {
        return;
    }

   
});

btnPause.addEventListener('click', () => {

    if (pause === false){
        btnPause.innerText = "Play";
    } else if (pause === true ){
        btnPause.innerText = "Pause";
    }
    pause = !pause;
})