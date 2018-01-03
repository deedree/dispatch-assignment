class Dispatch {

	constructor() {
		this.vehicles = []
	}

	move(step) {
		
		// Loop met behulp van 'step' met increments van 15 zodat elke
		// 15 min er een nieuwe dispatch plaatsvindt.
		// de bus wordt hier ook elke 30 min gestopt.
		for (var i = 0; i <= 600; i += 15) {
			if (step === i) this.dispatch()
		}
		for (var i = 30; i <= 600; i += 30) {
			if (step === i) this.retain()
		}
	}

	/* Met deze functie moet aangeven worden 1 of alle bussen
	allemaal 600 min dus 10 uur hebben gemaakt en allemaal moeten stoppen

	for (var i = 0; i < this.vehicles.length; i++) {
	if (bus.totalTime === 595) {
	this.vehicles.map((i) => vehicle.stop())
}
}
}

Hint: Possible variables you can use in the process are
routeTime,
totalTime, progress (amount of minutes a bus has been driving),
onRoute (whether a bus is driving or not) and
soc (current state of charge of a bus).

* Met deze functie moet de tijd die de bus gereden heeft worden opgeteld bij zijn
totalTime property

totalTime(step) {
const bus = this.vehicles[1]
if (bus.driving) {
bus.totalTime += step
}
}
*/

start() {

	// simulate evolution of time:
	for (let step = 0; step <= 10 * 12; step += 5) {

		console.log(`Time is flowing: ${step} minutes passed.`)

		this.move(step)
	}
}
dispatch() {
	const bus = this.vehicles[1]

	bus.start()

	/* Loop door de bussen array, en pak de bus met de hoogste accu opgeladen
	dus pak het object in dit array met de hoogste soc property
	ook moet hier gechecked worden of de soc wel de minimaalOpgeladen hoeveelheid
	anders moet er een nieuw bus object worden aangemaakt.

	for (var i = 0; i < 100; i++) {
	const bus = this.vehicles[i]
}
*/
}

// Wanneer de bus moet stoppen om op te laden
// kan driving ook op false zetten
retain() {
	const bus = this.vehicles[1]

	bus.stop()
}

addVehicle(veh) {
	this.vehicles.push(veh)
}
}

module.exports = Dispatch
