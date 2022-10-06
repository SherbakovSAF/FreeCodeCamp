// Lesson 24
// import subtract from "./math_functions.js";
// subtract(7,4);
// --------------------------------------------------------
// Lesson 23
// export default function subtract(x, y) {
//      return x - y;
//    }   
// --------------------------------------------------------
// Lesson 22
// import * as stringFunctions from "./string_functions.js"
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");
// --------------------------------------------------------
// Lesson 21
// import {uppercaseString , lowercaseString} from './string_functions.js';
// uppercaseString("hello");
// lowercaseString("WORLD!");
// --------------------------------------------------------
// Lesson 20
// const uppercaseString = (string) => {
//      return string.toUpperCase();
//    }
   
//    const lowercaseString = (string) => {
//      return string.toLowerCase()
//    }
   
//    export {uppercaseString, lowercaseString}
// --------------------------------------------------------
// Lesson 19
/* <html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */
// --------------------------------------------------------
// Lesson 18
// class Thermostat {
//      constructor(fahrenheit) {
//        this.fahrenheit = fahrenheit;
//      }
     
//      get temperature() {
//        return (5 / 9) * (this.fahrenheit - 32);
//      }
     
//      set temperature(celsius) {
//        this.fahrenheit = (celsius * 9.0) / 5 + 32;
//      }
//    }
// --------------------------------------------------------
// Lesson 17
// // Only change code below this line
// class Vegetable{
//      constructor(name){
//    this.name = name
//      }
//    }
//    // Only change code above this line
   
//    const carrot = new Vegetable('carrot');
//    console.log(carrot.name); // Should display 'carrot'
// --------------------------------------------------------
// Lesson 16
// const bicycle = {
//      gear: 2,
//      setGear(newGear) {
//        this.gear = newGear;
//      }
//    };
//    // Only change code above this line
//    bicycle.setGear(3);
//    console.log(bicycle.gear);
// --------------------------------------------------------
// Lesson 15
// const createPerson = (name, age, gender) => {
//      return {
//        name,
//        age,
//        gender
//      };
//    };
// --------------------------------------------------------
// Lesson 14
// const result = {
//      success: ["max-length", "no-amd", "prefer-arrow-functions"],
//      failure: ["no-var", "var-on-top", "linebreak"],
//      skipped: ["no-extra-semi", "no-dup-keys"]
//    };
//    function makeList(arr) {
//   
//      const failureItems = [];
//      for(let i = 0; i < arr.length; i++) {
//           failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//      }
//      return failureItems;
//    }
   
//    const failuresList = makeList(result.failure);
// --------------------------------------------------------
// Lesson 13
// const stats = {
//      max: 56.78,
//      standard_deviation: 4.34,
//      median: 34.54,
//      mode: 23.87,
//      min: -0.75,
//      average: 35.85
//    };
//    const half = ({max, min}) => {
//      return (max+min) / 2
//    }
// --------------------------------------------------------
// Lesson 12
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   // change code below this line
//   const [,,...arr] = list;
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// --------------------------------------------------------
// Lesson 11
// let a = 8, b = 6;
// [a,b] = [b, a]
// --------------------------------------------------------
// Lesson 10
// const LOCAL_FORECAST = {
//      yesterday: { low: 61, high: 75 },
//      today: { low: 64, high: 77 },
//      tomorrow: { low: 68, high: 80 }
//    };
//    const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
// --------------------------------------------------------
// Lesson 9
// const HIGH_TEMPERATURES = {
//      yesterday: 75,
//      today: 77,
//      tomorrow: 80
//    };
   
// const {today, tomorrow} = HIGH_TEMPERATURES;
// --------------------------------------------------------
// Lesson 8
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// arr2 = [...arr1];  // Change this line
// console.log(arr2);
// --------------------------------------------------------
// Lesson 7
// const sum = (...args) => {
//      const aa = [...args];
//      return aa.reduce((a, b) => a + b, 0);
//    }
// --------------------------------------------------------
// Lesson 6
// const increment = (number, value= 1) => number + value;
// --------------------------------------------------------
// Lesson 5
// const myConcat = (arr1, arr2) => arr1.concat(arr2)
// console.log(myConcat([1, 2], [3, 4, 5]));
// --------------------------------------------------------
// Lesson 4
// const magic = () => new Date();
// --------------------------------------------------------
// Lesson 3
// function freezeObj() {
//      const MATH_CONSTANTS = {
//        PI: 3.14
//      };
//      // Only change code below this line
//    Object.freeze(MATH_CONSTANTS)
   
//      // Only change code above this line
//      try {
//        MATH_CONSTANTS.PI = 99;
//      } catch(ex) {
//        console.log(ex);
//      }
//      return MATH_CONSTANTS.PI;
//    }
//    const PI = freezeObj();
// --------------------------------------------------------
// Lesson 2
// const s = [5, 7, 2];
// function editInPlace() {
// s[0] = 2
// s[1] = 5
// s[2] = 7
// }
// --------------------------------------------------------
// Lesson 1
// function checkScope() {
//      let i = 'function scope';
//      if (true) {
//        let i = 'block scope';
//        console.log('Block scope i is: ', i);
//      }
//      console.log('Function scope i is: ', i);
//      return i;
//    }
// --------------------------------------------------------