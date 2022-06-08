// *GIOCO DEI DADI*

// *DICHIARAZIONE VARIABILI*
const startBtn = document.getElementById("start-game-btn");

let randomComputerNumber;
let randomUserNumber;
let gameResult;

// *GENERO UN NUMERO RANDOM DA 1 A 6 SIA PER IL GIOCATORE CHE PER IL COMPUTER*
startBtn.addEventListener("click",
    function () {
        // *CAMBIO IL VALORE DELLE VARIABILI "randomComputerNumber" E "randomUserNumber" AL CLICK DEL BOTTONE "GIOCA!"*
        randomComputerNumber = Math.floor(Math.random() * 6) + 1;
        randomUserNumber = Math.floor(Math.random() * 6) + 1;

        // *COMPARO I NUMERI GENERATI RANDOMICAMENTE DAL PROGRAMMA PER L'UTENTE E PER IL COMPUTER E STAMPO IL RISULTATO*
        // *STABILISCO UN VINCITORE IN BASE AL PUNTEGGIO OTTENUTO*
        // *SE L'UTENTE HA UN PUNTEGGIO PIÙ ALTO DEL COMPUTER VINCE, VICEVERSA VINCE IL COMPUTER.*
        // *SE IL PUNTEGGIO È PARI NON VINCE NESSUNO*
        if (randomUserNumber > randomComputerNumber) {
            gameResult = "CONGRATS!! YOU WIN!";
        } else if (randomUserNumber < randomComputerNumber) {
            gameResult = "I'M SORRY... YOU LOSE!";
        } else {
            gameResult = "PAR";
        };

        alert(gameResult);
    }
);
