// classes declarations vs classes expressions

// class declaration
class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}

	carStats() {
		return `this car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color}`;
	}
}

const cx5 = new Car(4, 'V6', 'grey');

// class expression
const Car = class {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

const cx5 = new Car(4, 'V6', 'grey');
