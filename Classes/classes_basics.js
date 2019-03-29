// classes declarations vs classes expressions

// class declaration
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `this car has ${this.doors} doors, a ${
            this.engine
        } engine and a beautiful ${this.color}`;
    }
}

const cx5 = new Car(4, "V6", "grey");

// class expression
const Car = class {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
};

const cx5 = new Car(4, "V6", "grey");

// React class component (stateful)
class Cloak extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.props.data.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// React functional component (stateless)
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// hoisting with classes

// const cx5 = new Car(4, "V6", "grey");
// console.log(cx5);
// console.log(cx5.carStats());
// Car not defined
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `this car has ${this.doors} doors, a ${
            this.engine
        } engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1 + doors2;
    }
}

const cx5 = new Car(4, "V6", "grey");

console.log(cx5);
console.log(cx5.carStats());
// Car {doors: 4, engine: "V6", color: "grey"}
// This car has 4 doors, a V6 engine and a beautiful grey color!

// hoisting with functions
sayHi();
function sayHi() {
    return console.log("Hello");
}

// static methods
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `this car has ${this.doors} doors, a ${
            this.engine
        } engine and a beautiful ${this.color} color!`;
    }

    // utility methods that are not passable to the instance
    // have to call the main class to use these static methods
    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1 + doors2;
    }
}

const cx5 = new Car(4, "V6", "grey");
const civic = new Car(4, "V4", "blue");

console.log(cx5);
console.log(cx5.carStats());
console.log(civic);
console.log(civic.carStats());
console.log(Car.totalDoors(cx5, cx6));
