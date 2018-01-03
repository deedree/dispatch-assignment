class Bus {

// Extra property totalTime toegevoegd zodat die opgeteld kan worden tot de bus moet stoppen.
	constructor(name, soc, totalTime) {
		this.name = name
		this.soc = soc
		this.totalTime = totalTime
		this.driving = false
	}

// Als de bus rijdt dan verbruikt hij de hoeveelheid energie in deze formule.
	energyConsumed() {
		if (this.driving) {
			var b = this.soc - ((5.8 + Math.random() * 5.8)*6)
			return b.toFixed(2);
		}
	}

// Als de bus stilstaat laadt hij met deze snelheid op.
	energyCharged() {
		if (this.driving === false) {

			var a = this.soc + (1*15)
			//	if (a >= 100) {
			//	 var a = 100
			//}
			return a.toFixed(2)
		}
	}

	// Tijd gereden counter, verplaatst naar andere Class omdat hij afhankelijk is van 'step'?
	// Kan ook fixd time doen maar het leuker/beter als het flexibel is.
	timeCounter(step) {
		if (this.driving) {
			this.totalTime += step
			return this.totalTime
		}
	}

// Als een bus stop logt hij energyConsumed en timeCounter naar het console.
// Ook wordt de property driving weer op false gezet. Zodat je weet dat deze bust stilstaat.
	stop() {
		console.log(`Bus ${this.name} stopped`)
		console.log(`Soc has ${this.energyConsumed()} % left`)
		console.log(`Bus has driven for: ${this.timeCounter()} hours`)

		this.driving = false
	}

// Het percentage dat de batterij is opgeladen wordt gelogd naar console.
	start() {
		console.log(`Bus ${this.name} started`)
		console.log(`Soc is at: ${this.energyCharged()} %`)

		this.driving = true
	}
}

module.exports = Bus
