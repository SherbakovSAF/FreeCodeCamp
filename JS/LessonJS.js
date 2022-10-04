// Lesson 112
// function rangeOfNumbers(startNum, endNum) {
//   if(endNum < startNum) {
//     return []
//   } else {
//     let countArray = rangeOfNumbers(startNum + 1, endNum )
//     countArray.unshift(startNum)
//     return countArray
//   }
// };
// // -----------------------------------------------------------------
// Lesson 111
// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// // -----------------------------------------------------------------
// Lesson 110
// function checkSign(num) {
//   return (num < 0) ? "negative" : (num > 0) ? "positive" : "zero" 
//   }
  
//   checkSign(10);
// // -----------------------------------------------------------------
// Lesson 109
// function checkEqual(a, b) {
//   return a == b ? 'Equal' : 'Not Equal'
// }

// checkEqual(1, 2);
// // -----------------------------------------------------------------
// Lesson 108
// function convertToInteger(str) {
//   return parseInt(str, 2)
//   }
  
//   convertToInteger("10011");
// // -----------------------------------------------------------------
// Lesson 107
// function convertToInteger(str) {
//   return parseInt(str)
// }
// // -----------------------------------------------------------------
// Lesson 106
// function randomRange(myMin, myMax) {
//   // Only change code below this line
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
//   // Only change code above this line
// }
// // -----------------------------------------------------------------
// Lesson 105
// function randomWholeNum() {
//   return Math.floor( Math.random()*10);
// }
// // -----------------------------------------------------------------
// Lesson 104
// function randomFraction() {
//   return Math.random();
// }
// // -----------------------------------------------------------------
// Lesson 103
// Я был бы рад увидеть более короткое решение
// const contacts = [
//      {
//        firstName: "Akira",
//        lastName: "Laine",
//        number: "0543236543",
//        likes: ["Pizza", "Coding", "Brownie Points"],
//      },
//      {
//        firstName: "Harry",
//        lastName: "Potter",
//        number: "0994372684",
//        likes: ["Hogwarts", "Magic", "Hagrid"],
//      },
//      {
//        firstName: "Sherlock",
//        lastName: "Holmes",
//        number: "0487345643",
//        likes: ["Intriguing Cases", "Violin"],
//      },
//      {
//        firstName: "Kristian",
//        lastName: "Vos",
//        number: "unknown",
//        likes: ["JavaScript", "Gaming", "Foxes"],
//      },
//    ];
   
//    function lookUpProfile(name, prop) {
//     for (let i = 0; i <= contacts.length; i) {
//       if (i >= contacts.length) {
//         return "No such contact"
//       } else {
//         if (contacts[i].firstName == name) {
//           if (contacts[i].hasOwnProperty(prop)) {
//             let gaga = prop
            
//             return contacts[i][gaga]
            
//           } else {
//             return "No such property"
//           }
//         } else {
//           i++
//         }
//       }
//     }
//    }
//    console.log(lookUpProfile("Kristian", "s"))
//    console.log(contacts[1].firstName)
// // -----------------------------------------------------------------
// Lesson 102
// function sum(arr, n) {
//      // Only change code below this line
//        if (n <= 0) {
//          return 0;
//        } else {
//          return sum(arr, n - 1) + arr[n - 1];
//        }
     // Only change code above this line
//    }
// // -----------------------------------------------------------------
// Lesson 101
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 0) {  
// }
// // -----------------------------------------------------------------
// Lesson 100
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     product = product * arr[i][j]
//     console.log(product);
//   }
// }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// // -----------------------------------------------------------------
// Lesson 99
// const myArr = [2, 3, 4, 5, 6];
// let total = 0
// for (let i = 0; i < myArr.length; i++) {
//   total = total + myArr[i]
//    console.log(total);
// }
// // -----------------------------------------------------------------
// // Lesson 98
// const myArray = [];
// for (let i = 9; i >= 1; i -= 2) {
//   myArray.push(i);
// }
// -----------------------------------------------------------------
// const myArray = [];
// for (let i = 9; i <1; i = i - 2) {
//   myArray.push(i)
// }
// Only change code below this line

// Only change code below this line

// Lesson 97
// // Setup
// const myArray = [];

// // Only change code below this line
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i)
// }

// -----------------------------------------------------------------
// Lesson 96
// Setup
// const myArray = [];
// let i = 5;
// while (i>=0) {
//   myArray.push(i);
//   i--
// }
// // Only change code below this line
// -----------------------------------------------------------------
// Lesson 95
// Я не смог понять что там говорят эти англичяне
// -----------------------------------------------------------------
// Lesson 94
// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];
// -----------------------------------------------------------------
// Lesson 93
// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside["glove box"];
// -----------------------------------------------------------------
// Lesson 92
// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//   }
// ];
// -----------------------------------------------------------------
// Lesson 91
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     debugger;
//     return obj[checkProp];
    
//   } else {
//     return "Not Found"
//   }
  
//   // Only change code above this line
// }

// -----------------------------------------------------------------
// Lesson 90
// Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   let lookup = {
//        alpha: "Adams",
//        bravo: "Boston",
//        charlie: "Chicago",
//        delta: "Denver",
//        echo: "Easy",
//        foxtrot: "Frank",
//      }
//      result = lookup[val]

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");
// -----------------------------------------------------------------
// Lesson 89
// Setup
// const myDog = {
//      "name": "Happy Coder",
//      "legs": 4,
//      "tails": 1,
//      "friends": ["freeCodeCamp Campers"],
//      "bark": "woof"
//    };
   
//    // Only change code below this line
   
//    delete myDog.tails
// -----------------------------------------------------------------
// Lesson 88
// const myDog = {
//      "name": "Happy Coder",
//      "legs": 4,
//      "tails": 1,
//      "friends": ["freeCodeCamp Campers"]
//    };
   
//    myDog.bark = 'gaw'
   
// -----------------------------------------------------------------
// Lesson 87
// // Setup
// const myDog = {
//      "name": "Coder",
//      "legs": 4,
//      "tails": 1,
//      "friends": ["freeCodeCamp Campers"]
//    };
   
//    // Only change code below this line
//    myDog.name = "Happy Coder"
   
// -----------------------------------------------------------------
// Lesson 86
// Setup
// const testObj = {
//      12: "Namath",
//      16: "Montana",
//      19: "Unitas"
//    };
   
//    // Only change code below this line
//    const playerNumber = 16;  // Change this line
//    const player = testObj[playerNumber];   // Change this line
// -----------------------------------------------------------------
// Lesson 85
// Setup
// const testObj = {
//      "an entree": "hamburger",
//      "my side": "veggies",
//      "the drink": "water"
//    };
   
//    // Only change code below this line
//    const entreeValue = testObj["an entree"];   // Change this line
//    const drinkValue = testObj["the drink"];    // Change this line
// -----------------------------------------------------------------
// Lesson 84
// Setup
// const testObj = {
//      "hat": "ballcap",
//      "shirt": "jersey",
//      "shoes": "cleats"
//    };
   
//    // Only change code below this line
//    const hatValue = testObj.hat;      // Change this line
//    const shirtValue = testObj.shirt;    // Change this line
// -----------------------------------------------------------------
// Lesson 83
// const myDog = {
//      // Only change code below this line
//      name: 'Boy',
//      legs: 4,
//      tails: 4,
//      friends: [],
   
//      // Only change code above this line
//    };
// -----------------------------------------------------------------
// Lesson 82
// const myDog = {
//      // Only change code below this line
//      name: 'Boy',
//      legs: 4,
//      tails: 4,
//      friends: [],
   
//      // Only change code above this line
//    };
// -----------------------------------------------------------------
// Lesson 81
// let count = 0;

// function cc(card) {
//   // Only change code below this line
// switch(card) {
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6: {
//     count++;
//     break;
//   }
//   case 7:
//   case 8:
//   case 9:{
//     count = count;
//     break;
//   }
//   case 10:
//   case "J":
//   case "Q":
//   case "K":
//   case "A":{
//     count--;
//     break;
//   }
// }
// if (count > 0) {
//   return count + " Bet"
// } else {
//   return count + " Hold"
// }

 
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');
// Lesson 80
// Setup
// function abTest(a, b) {
//      // Only change code below this line
//    if (a < 0 || b <0) {
//      return undefined;
//    }
   
   
//      // Only change code above this line
   
//      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//    }
   
//    abTest(2,2);
// -----------------------------------------------------------------
// Lesson 79
// function isLess(a, b) {
//      // Only change code below this line
//        return a < b;
//      // Only change code above this line
//    }
   
//    isLess(10, 15);
// -----------------------------------------------------------------
// Lesson 78
// function chainToSwitch(val) {
//      let answer = "";
//      // Only change code below this line
//    switch (val) {
//      case "bob":
//      answer = "Marley";
//      break;
//      case 42:
//      answer = "The Answer";
//      break;
//      case 1:
//      answer = "There is no #1";
//      break;
//      case 99:
//      answer = "Missed me by this much!";
//      break;
//      case 7:
//      answer = "Ate Nine";
//      break;
   
//    }
//      // Only change code above this line
//      return answer;
//    }
   
//    chainToSwitch(7);
// -----------------------------------------------------------------
// Lesson 77
// function sequentialSizes(val) {
//      let answer = "";
//      // Only change code below this line
   
//    switch (val) {
//      case 1:
//      case 2:
//      case 3:
//        answer = "Low";
//        break;
//      case 4:
//      case 5:
//      case 6:
//      answer = "Mid";
//        break;
//      case 7:
//      case 8:
//      case 9:
//      answer = "High";
//        break;
//    }
   
//      // Only change code above this line
//      return answer;
//    }
   
//    sequentialSizes(1);
// -----------------------------------------------------------------
// Lesson 76
// function switchOfStuff(val) {
//      let answer = "";
//      // Only change code below this line
//    switch (val) {
//      case 'a':
//        answer = 'apple';
//        break;
//      case 'b':
//        answer = 'bird';
//        break;
//    case 'c':
//        answer = 'cat';
//        break;
//      default:
//        answer = 'stuff';
//        break;
//    }
   
   
//      // Only change code above this line
//      return answer;
//    }
   
//    switchOfStuff(1);
// -----------------------------------------------------------------
// Lesson 75
// function caseInSwitch(val) {
//      let answer = "";
//      // Only change code below this line
//    switch(val){
//      case 1:
//      answer = "alpha";
//      break
//      case 2:
//      answer = "beta";
//      break
//      case 3:
//      answer = "gamma";
//      break
//      case 4:
//      answer = "delta";
//      break;
//    }
   
   
//      // Only change code above this line
//      return answer;
//    }
   
//    caseInSwitch(1);
// -----------------------------------------------------------------
// Lesson 74
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
// if (strokes == 1) {
//   return names[0]
// } else if (strokes <= par - 2){
// return names[1]
// } else if (strokes <= par - 1){
// return names[2]
// } 
// else if (strokes == par){
// return names[3]
// } else if (strokes == par + 1){
// return names[4]
// } 
// else if (strokes == par + 2){
// return names[5]
// } else if (strokes >= par + 3){
// return names[6]
// } 

//   return "Change Me";
//   // Only change code above this line
// }

// golfScore(5, 4);
// -----------------------------------------------------------------
// Lesson 73
// function testSize(num) {
//      // Only change code below this line
//      if (num < 5) {
//      return "Tiny"
//    } else if (num < 10) {
//      return "Small"
//    } else if (num < 15) {
//      return "Medium"
//    }
//    else if (num < 20) {
//      return "Large"
//    }
//    else {
//      return "Huge"
//    }
//      // Only change code above this line
//    }
   
//    testSize(7);
// -----------------------------------------------------------------
// Lesson 72
// function orderMyLogic(val) {
//      if (val < 5) {
//            return "Less than 5";
//      } else if (val < 10) {
   
//        return "Less than 10";
//      } else {
//        return "Greater than or equal to 10";
//      }
//    }
   
//    orderMyLogic(7);
// -----------------------------------------------------------------
// Lesson 71
// function testElseIf(val) {
//      if (val > 10) {
//        return "Greater than 10";
//      } else if (val < 5) {
//        return "Smaller than 5";
//      } else {
//        return "Between 5 and 10";
//      }
//    }
     
//      testElseIf(7)
// -----------------------------------------------------------------
// Lesson 70
// function testElse(val) {
//      let result = "";
//      // Only change code below this line
   
//      if (val > 5) {
//        result = "Bigger than 5";
//      } else {
//    result = "5 or Smaller";
//      }
//      // Only change code above this line
//      return result;
//    }
   
//    testElse(4);
// -----------------------------------------------------------------
// Lesson 69
// function testLogicalOr(val) {
//      // Only change code below this line
   
//      if (val < 10 || val > 20) {
//        return "Outside";
//      }
   
//      // Only change code above this line
//      return "Inside";
//    }
   
//    testLogicalOr(15);
// -----------------------------------------------------------------
// Lesson 68
// function testLogicalAnd(val) {
//      // Only change code below this line
   
//      if (val <= 50 && val >=25) {
//          return "Yes";
//      }
   
//      // Only change code above this line
//      return "No";
//    }
   
//    testLogicalAnd(10);
// -----------------------------------------------------------------
// Lesson 67
// function testLessOrEqual(val) {
//      if (val <= 12) {  // Change this line
//        return "Smaller Than or Equal to 12";
//      }
   
//      if (val <= 24) {  // Change this line
//        return "Smaller Than or Equal to 24";
//      }
   
//      return "More Than 24";
//    }
   
//    testLessOrEqual(10);
// -----------------------------------------------------------------
// Lesson 66
// function testLessThan(val) {
//      if (val < 25) {  // Change this line
//        return "Under 25";
//      }
   
//      if (val < 55) {  // Change this line
//        return "Under 55";
//      }
   
//      return "55 or Over";
//    }
   
//    testLessThan(10);
// -----------------------------------------------------------------
// Lesson 65
// function testGreaterOrEqual(val) {
//      if (val >= 20) {  // Change this line
//        return "20 or Over";
//      }
   
//      if (val >= 10) {  // Change this line
//        return "10 or Over";
//      }
   
//      return "Less than 10";
//    }
   
//    testGreaterOrEqual(10);
// -----------------------------------------------------------------
// Lesson 64
// function testGreaterThan(val) {
//      if (val > 100) {  // Change this line
//        return "Over 100";
//      }
   
//      if (val > 10) {  // Change this line
//        return "Over 10";
//      }
   
//      return "10 or Under";
//    }
   
//    testGreaterThan(10);
// -----------------------------------------------------------------
// Lesson 63
// Setup
// function testStrictNotEqual(val) {
//      if (val !== 17) { // Change this line
//        return "Not Equal";
//      }
//      return "Equal";
//    }
   
//    testStrictNotEqual(10);
// -----------------------------------------------------------------
// Lesson 62
// Setup
// function testNotEqual(val) {
//      if (val != 99) { // Change this line
//        return "Not Equal";
//      }
//      return "Equal";
//    }
   
//    testNotEqual(10);
// -----------------------------------------------------------------
// Lesson 61
// Setup
// function compareEquality(a, b) {
//      if (a === b) { // Change this line
//        return "Equal";
//      }
//      return "Not Equal";
//    }
   
//    compareEquality(10, "10");
// -----------------------------------------------------------------
// Lesson 60
// Setup
// function testStrict(val) {
//      if (val ===7) { // Change this line
//        return "Equal";
//      }
//      return "Not Equal";
//    }
   
//    testStrict(10);
// -----------------------------------------------------------------
// Lesson 59
// Setup
// function testEqual(val) {
//      if (val == 12) { // Change this line
//        return "Equal";
//      }
//      return "Not Equal";
//    }
   
//    testEqual(10);
// -----------------------------------------------------------------
// Lesson 58
// function trueOrFalse(wasThatTrue) {
//      // Only change code below this line
//    if(wasThatTrue) {
//      return 'Yes, that was true'
//    } else {
//    return 'No, that was false'
//    }
//    }
// -----------------------------------------------------------------
// Lesson 57
// function nextInLine(arr, item) {
//      // Only change code below this line
//      arr.push(item)
//      let delItem = arr.shift() 
//      return delItem;
//      // Only change code above this line
//    }
   
//    // Setup
//    const testArr = [1, 2, 3, 4, 5];
   
//    // Display code
//    console.log("Before: " + JSON.stringify(testArr));
//    console.log(nextInLine(testArr, 6));
//    console.log("After: " + JSON.stringify(testArr));
// -----------------------------------------------------------------
// Lesson 56
// let processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed = processArg(7);
// Only change code below this line
// -----------------------------------------------------------------
// Lesson 55
// Setup
// let sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// // Only change code below this line
// function addFive() {
//   sum += 5;
// }
// // Only change code above this line
// addThree();
// addFive();
// -----------------------------------------------------------------
// Lesson 54
// Setup
// const outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line
// const outerWear = "sweater";
//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();
// -----------------------------------------------------------------
// Lesson 53
// function myLocalScope() {
//      // Only change code below this line
//    let myVar = 1;
//      console.log('inside myLocalScope', myVar);
//    }
//    myLocalScope();
   
//    // Run and check the console
//    // myVar is not defined outside of myLocalScope
//    console.log('outside myLocalScope', myVar);
// -----------------------------------------------------------------
// Lesson 52
// Declare the myGlobal variable below this line
// const myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal Here
// oopsGlobal = 5
// }

// // Only change code above this line

// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// -----------------------------------------------------------------
// Lesson 51
// function timesFive(num) {
//      return num * 5;
// }
// -----------------------------------------------------------------
// Lesson 50
// function functionWithArgs(a, b) {
//      console.log(a + b);
//    }
   
//    functionWithArgs(5,1)
// -----------------------------------------------------------------
// Lesson 49
// function reusableFunction() {
//     console.log("Hi World");
// }
// reusableFunction();
// -----------------------------------------------------------------
// Lesson 48
// const myList = [["Banana", 1], ["Manana", 2], ["Panana", 14], ["Aanana", 15], ["Ganana", 12]];
// -----------------------------------------------------------------
// Lesson 47
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);
// -----------------------------------------------------------------
// Lesson 46
// const myArray = [["John", 23], ["dog", 3]];
// let removedFromMyArray = myArray.shift()
// -----------------------------------------------------------------
// Lesson 45
// const myArray = [["John", 23], ["cat", 2]];
// const removedFromMyArray = myArray.pop()
// -----------------------------------------------------------------
// Lesson 44
// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3])
// -----------------------------------------------------------------
// Lesson 43
// const myArray = [
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9],
//      [[10, 11, 12], 13, 14],
//    ];
//    const myData = myArray[2][1];
// -----------------------------------------------------------------
// Lesson 42
// const myArray = [18, 64, 99];
// myArray[0] = 45;
// -----------------------------------------------------------------
// Lesson 41
// const myArray = [50, 60, 70];
// let myData = myArray[0];
// -----------------------------------------------------------------
// Lesson 40
// Only change code below this line
// const myArray = [[]];
// -----------------------------------------------------------------
// Lesson 39
// Only change code below this line
// const myArray = ['sFdsfsd', 1];
// -----------------------------------------------------------------
// Lesson 38
// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// Only change code below this line
// const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line
// -----------------------------------------------------------------
// Lesson 37
// const lastName = "Lovelace";
// Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
// -----------------------------------------------------------------
// Lesson 36
// const lastName = "Lovelace";
// // Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
// -----------------------------------------------------------------
// Lesson 35
// const lastName = "Lovelace";
// Only change code below this line
// const thirdLetterOfLastName = lastName[2]; // Change this line
// -----------------------------------------------------------------
// Lesson 34
// Setup
// let myStr = "Jello World";
// Only change code below this line
// myStr = myStr = "Hello World";
// Only change code above this line
// -----------------------------------------------------------------
// Lesson 33
// Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line
// -----------------------------------------------------------------
// Lesson 32
// Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";
// Only change code below this line
// lastNameLength = lastName.length;v
// -----------------------------------------------------------------
// Lesson 31
// Change code below this line
// const someAdjective = "Hello World";
// let myStr = "Learning to code is ";
// myStr += someAdjective
// -----------------------------------------------------------------
// Lesson 30
// Only change code below this line
// const myName = "Sergey ";
// const myStr = "My name is " + myName + "I am well!";
// -----------------------------------------------------------------
// Lesson 29
// let myStr = 'This is the first sentence. ';
// myStr += 'This is the second sentence.'
// -----------------------------------------------------------------
// Lesson 28
// const myStr = "This is the start. " + "This is the end."; // Change this line
// -----------------------------------------------------------------
// Lesson 27
// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
// -----------------------------------------------------------------
// Lesson 26
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// -----------------------------------------------------------------
// Lesson 25
// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line'
// -----------------------------------------------------------------
// Lesson 24
// let a = 48;
// let b = 108;
// let c = 33;
// Only change code below this line
// a /= 12;
// b /= 4;
// c /= 11;
// -----------------------------------------------------------------
// Lesson 23
// let a = 5;
// let b = 12;
// let c = 4.6;
// Only change code below this line
// a *= 5;
// b *= 3;
// c *= 10;
// -----------------------------------------------------------------
// Lesson 22
// let a = 11;
// let b = 9;
// let c = 3;
// -----------------------------------------------------------------
// Only change code below this line
// a -= 6;
// b -= 15;
// c -= 1;
// Lesson 21
// let a = 3;
// let b = 17;
// let c = 12;
// // Only change code below this line
// a += 12;
// b += 9;
// c += 7;
// -----------------------------------------------------------------
// Lesson 20
// const remainder = 11 % 3;
// -----------------------------------------------------------------
// Lesson 19
// const quotient = 4.4 / 2.0; // Change this line
// -----------------------------------------------------------------
// Lesson 18
// const product = 2.0 * 2.5;
// -----------------------------------------------------------------
// Lesson 17
// const ourDecimal = 5.7;
// Only change code below this line
// const myDecimal = 5.7;
// -----------------------------------------------------------------
// Lesson 16
// let myVar = 11;
// Only change code below this line
// myVar--
// -----------------------------------------------------------------
// Lesson 15
// let myVar = 87;
// Only change code below this line
// myVar++
// -----------------------------------------------------------------
// Lesson 14
// onst quotient = 66 / 33;
// -----------------------------------------------------------------
// Lesson 13
// const product = 8 * 10;
// -----------------------------------------------------------------
// Lesson 12
// const difference = 45 - 33;
// -----------------------------------------------------------------
// Lesson 11
// const sum = 10 + 10;
// -----------------------------------------------------------------
// Lesson 10
// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(FCC, fact); // Change this line
// -----------------------------------------------------------------
// Lesson 9
// let catName = "Oliver";
// let catSound = "Meow!";
// -----------------------------------------------------------------
// Lesson 8
// Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;
// -----------------------------------------------------------------
// Variable assignments
// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;
// -----------------------------------------------------------------
// Lesson 7
// Only change code below this line
// var a = 5;
// var b = 10;
// var c = "I am a";
// Only change code above this line
// -----------------------------------------------------------------
// a = a + 1;
// b = b + 5;
// c = c + " String!";
// -----------------------------------------------------------------
// Lesson 6
// var myFirstName = "Sergey";
// var myLastName = "Sherbakov"
// -----------------------------------------------------------------
// Lesson 5
// var a = 9;
// -----------------------------------------------------------------
// Lesson 4
// var a;
// a = 7;
// var b;
// b = a;
// -----------------------------------------------------------------
// Lesson 3
// var a;
// a = 7;
// -----------------------------------------------------------------
// Lesson 2
// var myName;
// -----------------------------------------------------------------
// Lesson 1
// This is an in-line comment.
// This is a
// multi-line comment
