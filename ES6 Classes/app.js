//declaring the class

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    
    carStats() {
        return `this car has ${this.doors} doors, a ${this.engine} engine and is of color ${this.color}`;
    }

    static totalDoors(car1, car2) {
        const sum = car1.doors + car2.doors

        return sum;
    }
}

const cx5 = new Car(2, 'v6', 'red');
const lambo = new Car(5, 'V12', 'BLUE');
console.log(cx5);
console.log(cx5.carStats());
console.log(lambo);
console.log(lambo.carStats());
console.log(Car.totalDoors(cx5, lambo));