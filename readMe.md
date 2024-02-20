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