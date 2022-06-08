// *MAIL*

// *DICHIARAZIONE VARIABILI*
// *CHIEDO ALL'UTENTE LA SUA E-MAIL E LA SALVO IN UNA VARIABILE*
const userEmail = prompt("Type your e-mail.");

// *INSERISCO IL MIO ARRAY IN UNA VARIABILE*
const emailLists = ["edoardo@gmail.com", "mattia@gmail.com", "federico@gmail.com", "marco@gmail.com", "yuri@gmail.com", "alex@gmail.com", "carlo@gmail.com"];

let singleEmail;

let emailCheck = false;

// *INIZIO UN CICLO "for" PER SCORRERE LA LISTA DI EMAIL (emailLists)*
for (let i = 0; i < emailLists.length; i++) {
    singleEmail = emailLists[i];

    // *CONTROLLO CHE L'EMAIL DELL'UTENTE SIA UGUALE AD UNA DELLE EMAIL PRESENTI NEL MIO ARRAY*
    if (userEmail === singleEmail) {
        // *SE LA MAIL È PRESENTE NELL'ARRAY ALLORA IL RISULTATO DI "emailCheck" SARÀ "true"*
        // *ALTRIMENTI RESTERÀ "false" COME DI DEFAULT*
        emailCheck = true;
    };
};

// *STAMPO UN MESSAGGIO IN BASE AL RISULTATO OTTENUTO NELLA CONDIZIONE "if" DEL CICLO "for"*
if (emailCheck) {
    alert("your email is correct");
} else {
    alert("Your email is not correct. Please check if you have typed your email correctly!");
};