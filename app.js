class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'beep';
    }
    toString(){
        return `This is a ${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle){
        if(vehicle instanceof Vehicle){
            if(vehicles.length<capacity){
                vehicles.add(vehicle);
                return 'Vehicle added';
            }
            else{
                return 'Sorry, no more spaces';
            }
        }
        else{
            return 'Only vehicles allowed';
        }
    }
}