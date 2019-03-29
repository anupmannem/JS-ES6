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
