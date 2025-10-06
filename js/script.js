/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80,
100km, 70 anni => prezzo corretto: €12.60,


PRO TIP:
prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la consegna e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso di lavoro ed il codice evitandoti di restare li a fissare una pagina vuota.
*/

//chiedere all'utente il numero di chilometri che vuole percorrere

/*tools:

const / let
operatore di comparazione (< > = %)

PRIMA TASK

inserire variabili per definire 10 anni, 70 anni, 100km, prezzi per km 
chiedere chilomentri da percorrere
chiedere età utente

SECONDA TASK

calcolare grazie alle prime variabili

*/

const first_limit_age = 18
const last_limit_age = 65
const price_km = 0.21

console.log(first_limit_age, last_limit_age, price_km)

const km_runs = Number(prompt ("inserisci km"))

const age_utent = Number(prompt ("inserisci l'età"))

let sales = 0

let ticket = km_runs * price_km

if (age_utent < first_limit_age){
    sales = 20
    ticket = ticket - (ticket * sales / 100)
    
} else if (age_utent > last_limit_age){
    sales = 40
     ticket = ticket - (ticket * sales / 100)
}

const num = ticket.toFixed(2)
console.log(num)







   










