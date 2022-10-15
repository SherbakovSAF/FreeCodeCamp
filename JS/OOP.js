
// Lesson 24

// --------------------------------------------------------
// Lesson 24

// --------------------------------------------------------
// Lesson 26
// let funModule = (function () {
//     return {
//         isCuteMixin: function (obj) {
//             obj.isCute = function () {
//                 return true;
//             };
//         },
//         singMixin: function (obj) {
//             obj.sing = function () {
//                 console.log("Singing to an awesome tune");
//             };
//         },
//     };
// })();
// --------------------------------------------------------
// Lesson 25
// (function() {
//      console.log("A cozy nest is ready");
//    })()   
// --------------------------------------------------------
// Lesson 24
// function Bird() {
//      let weight = 15;
   
//      this.getWeight = function(){
//        return weight
//      }
//    }
// --------------------------------------------------------
// Lesson 23
// let bird = {
//      name: "Donald",
//      numLegs: 2
//    };
   
//    let boat = {
//      name: "Warrior",
//      type: "race-boat"
//    };
   
//    // Only change code below this line
   
//    let glideMixin = function(obj){
//      obj.glide = function() {
//        console.log('Flying, wooosh!')
//      }
//    }
   
//    glideMixin(boat)
//    glideMixin(bird)
// --------------------------------------------------------
// Lesson 22
// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird."
// }

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());
// --------------------------------------------------------
// Lesson 21
// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog
// Dog.prototype.bark = function() {
//   console.log("Woof!") 
// }

// // Only change code above this line

// let beagle = new Dog();

// --------------------------------------------------------
// Lesson 20
// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();
// --------------------------------------------------------
// Lesson 19
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// --------------------------------------------------------
// Lesson 18
// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line
// --------------------------------------------------------
// Lesson 17
// function Cat(name) {
//      this.name = name;
//    }
   
//    Cat.prototype = {
//      constructor: Cat,
//    };
   
//    function Bear(name) {
//      this.name = name;
//    }
   
//    Bear.prototype = {
//      constructor: Bear,
//    };
   
//    function Animal() { }
   
//    Animal.prototype = {
//      constructor: Animal,
//      eat: function() {
//        console.log("nom nom nom");
//      }
//    };
// --------------------------------------------------------
// Lesson 16
// function Dog(name) {
//      this.name = name;
//    }
   
//    let beagle = new Dog("Snoopy");
   
//    Dog.prototype.isPrototypeOf(beagle);  // yields true
   
//    // Fix the code below so that it evaluates to true
   
//    Object.prototype.isPrototypeOf(Dog.prototype);
// --------------------------------------------------------
// Lesson 15
// function Dog(name) {
//      this.name = name;
//    }
   
//    let beagle = new Dog("Snoopy");
   
//    // Only change code below this line
   
//    Dog.prototype.isPrototypeOf(beagle)
// --------------------------------------------------------
// Lesson 14
// function Dog(name) {
//      this.name = name;
//    }
   
//    // Only change code below this line
//    Dog.prototype = {
//      constructor: Dog,
//      numLegs: 4,
//      eat: function() {
//        console.log("nom nom nom");
//      },
//      describe: function() {
//        console.log("My name is " + this.name);
//      }
//    };
// --------------------------------------------------------
// Lesson 13
// function Dog(name) {
//      this.name = name;
//    }
   
//    Dog.prototype = {
//      // Only change code below this line
//      numLegs: 2,
//      eat: function() {
   
//      },
//      describe: function() {
       
//      }
//    };
// --------------------------------------------------------
// Lesson 12
// function Dog(name) {
//      this.name = name;
//    }
   
//    // Only change code below this line
//    function joinDogFraternity(candidate) {
//      if (candidate.constructor == Dog) {
//        return true
//      } else {
//        return false
//      }
//    }
// --------------------------------------------------------
// Lesson 11
// function Dog(name) {
//      this.name = name;
//    }
   
//    Dog.prototype.numLegs = 4;
   
//    let beagle = new Dog("Snoopy");
   
//    let ownProps = [];
//    let prototypeProps = [];
   
//    // Only change code below this line
   
//    for (let property in beagle) {
//      if(beagle.hasOwnProperty(property)){
//        ownProps.push(property)
//      } else {
//        prototypeProps.push(property)
//      }
//    }
   
//    console.log(ownProps);
//    console.log(prototypeProps);
// --------------------------------------------------------
// Lesson 10
// function Dog(name) {
//      this.name = name;
//    }
//    Dog.prototype.numLegs = 2
//    let beagle = new Dog("Snoopy");
// --------------------------------------------------------
// Lesson 9
// function Bird(name) {
//      this.name = name;
//      this.numLegs = 2;
//    }
   
//    let canary = new Bird("Tweety");
//    let ownProps = [];
//    // Only change code below this line
   
//    for (let property in canary) {
//      if(canary.hasOwnProperty(property)) {
//        ownProps.push(property);
//      }
//    }
   
// --------------------------------------------------------
// Lesson 8
// function House(numBedrooms) {
//      this.numBedrooms = numBedrooms;
//    }
//    let myHouse = new House(5)
//    myHouse instanceof House
// --------------------------------------------------------
// Lesson 7
// function Dog(name, color) {
//      this.name = name;
//      this.color = color;
//      this.numLegs = 4
//      }
     
//      let terrier = new Dog(('Boy', 'Green') )
// --------------------------------------------------------
// Lesson 6
// function Dog() {
//      this.name = "Rupert";
//      this.color = "brown";
//      this.numLegs = 4;
//    }
//    // Only change code below this line
   
//    let hound = new Dog();
// --------------------------------------------------------
// Lesson 5
// function Dog() {
//      this.name = "Albert";
//      this.color = "blue";
//      this.numLegs = 2;
//    }
// --------------------------------------------------------
// Lesson 4
// let dog = {
//      name: "Spot",
//      numLegs: 4,
//      sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//    };
   
//    dog.sayLegs();
// --------------------------------------------------------
// Lesson 3
// let dog = {
//      name: "Spot",
//      numLegs: 4,
//      sayLegs: function() {
//        return `This dog has ${dog.numLegs} legs.`
//      }
//    };
   
//    dog.sayLegs();
// --------------------------------------------------------
// Lesson 2
// let dog = {
//      name: "Spot",
//      numLegs: 4
//    };
//    // Only change code below this line
//    console.log(dog.name, dog.numLegs)
// --------------------------------------------------------
// Lesson 1
// let dog = {
//      name: 'Boy',
//      numLegs: 8
//      };
// --------------------------------------------------------