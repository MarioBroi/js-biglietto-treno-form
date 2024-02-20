# Instruction
- Scrivere un programma che chieda all’utente:
    - Il numero di chilometri da percorrere
    - Età del passeggero 
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

## Steps
- Collect of the client data Km and Age
- Calculate of the standard price for the ticket (km * 0.21)
- Client age verification
    - IF the client is under 18 yh i will apply a 20% discount on the standard ticket price
    - ELSE IF the client is over 65 yh i will apply a 40% discount on the standard ticket price
    - ELSE the client will pay the standard price
- Print of the ticket price in the console

### Tools
- button and input tags
- const / let
- getElementById
- querySelector
- comparation operators > <
- if / else if / else
- consol.log

# MILESTONE 2:
- Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
- Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.