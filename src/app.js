const Dispatch = require("./dispatch")
const Bus      = require("./bus")

const dispatch = new Dispatch()

// in dispatch zit ook een addVehicle functie, dit kan natuurlijk ook geautomatiseerd
// worden dat er automatisch een bus bijkomt met een generieke naam als er te weinig bussen zijn
dispatch.addVehicle(new Bus("1211", 100, 0))
dispatch.addVehicle(new Bus("1311", 100, 0))
dispatch.addVehicle(new Bus("1411", 100, 0))
dispatch.addVehicle(new Bus("1511", 100, 0))

dispatch.start()


/** Losse aantekeningen over soc.

* Batterij vol == 100/15 => 6.7 * 5 min. => 33.3 min
* Snelst leeg == 100/11.6 =>  8.62 * 5 min. = maximale afstand is 43.1 minutes
* Langzaamst leeg == zie som hierboven ^ 86.21 min. rij tijd
* minimaalOpgeladenPercent == 69.6%
* minimaalOpgeladenTijd == 23.2 min.

Als je dus 4 bussen hebt, elk kwartier één dan heeft een bus dus altijd 30 minuten
om op te laden, en aangezien 23.2 min genoeg is om de minimaalOpgeladen hoeveelheid
te halen om een hele busrit van 30 vol te maken is dat genoeg.

#ViriCiti BusRouteCalc

totalTime = 600 = 600
routeTime = 30 = 30
laadTijd = 5*(20/3) = 33.3333
snelLeeg = 100/11.6*5 = 43.1034
langzaamLeeg = 100/5.8*5 = 86.2069
minimaalOpgeladenPercent = 11.6*30/5 = 69.6
minimaalOpgeladenTijd = (11.6*30)/(15) = 23.2

**/
