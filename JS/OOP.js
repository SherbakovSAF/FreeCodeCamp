
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