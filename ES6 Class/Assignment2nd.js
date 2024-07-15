// In this assignment, you will implement factory function,constructor function, ES6 class and also .call() , .apply()
// define an animal factory function that takes input as


// problem1st
// Write a factory function that can be used to create animal objects in bulk quantity.
// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."



function animals(noOfLegs, vegetarian) {
    let obj = {}

    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian;

    obj.eat = function () {
        return "eating..."
    }

    obj.greet = function () {
        return `Hi, I have ${noOfLegs} legs.`
    }
    return obj;
}

let a1 = animals(4, true);
console.log(a1.eat());
console.log(a1.greet());



//Problem2:
//factory function to a constructor function
//Write a constructor function that can be used to create animal objects in bulk quantity."AnimalCF"

// define an AnimalCF constructor function that takes input as

// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."


function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;

    this.eat = function () {
        return "eating..."
    }

    this.greet = function () {
        return `Hi, I have ${noOfLegs} legs.`
    }
}

let x = new AnimalCF(4, true);
console.log(x);
console.log(x.eat());
console.log(x.greet());


//Problem3:
//factory function to an ES6 class
// define an AnimalES6 factory function that takes input as

// noOfLegs (number)
// vegetarian (boolean)
// Every animal object it creates has the following

// properties: noOfLegs, vegetarian
// methods:
// eat - return "eating..."
// greet - return "Hi, I have ${noOfLegs} legs."


class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }
    eat() {
        return "eating..";
    }

    greet() {
        return `Hi, I have ${this.noOfLegs} legs`;
    }
}

let newAnimalES6 = new AnimalES6(4, false);
console.log(newAnimalES6);
console.log(newAnimalES6.eat());
console.log(newAnimalES6.greet());






