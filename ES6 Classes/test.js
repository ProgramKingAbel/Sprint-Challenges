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

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this._brand = 'No brand yet';
        //default values
        this.wheels = 4;
        this.ac = true;
    }
    
    //getter
    get getBrand() {
        return this._brand;
    }

    //setter
    set setBrand(newBrand) {
        this._brand = newBrand;
    }

    myBrand() {
        return `this car is an SUV of brand ${this.getBrand} with ${this.wheels} wheels and color ${this.color} and has ${this.engine} engine`;
    }
}

const cx5 = new SUV(4, 'V6', 'RED', 'MAZDA');
console.log(cx5.getBrand);
console.log(cx5);
cx5.setBrand = 'Mazda';
console.log(cx5.getBrand);
console.log(cx5.myBrand());
