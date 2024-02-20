calcolo del prezzo del biglietto del treno
===
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
## Svolgimento
1. prompt numero di km da percorrere
2. prompt età passeggero
3. criteri calcolo prezzo biglietto
4. const prezzoAlKm = 0,21
5. let prezzoTotale = kmDaPercorrere * prezzoAlKm 
6. calcolo sconti eventuali
7. if età < 18 prezzoTotale *= 0,8
8. esle if età > 65 prezzoTotale *= 0,6
9. else prezzoTotale *= 1
10. prezzoTotale = prezzoTotale.toFixed(2)
11. stampa prezzo biglietto