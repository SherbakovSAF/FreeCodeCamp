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