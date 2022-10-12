// Lesson 12
// let myNestedArray = [
//   // Only change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested', ['deep',['deeper',['deepest']]]],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array'],
//   ['mutate', 1327.98, 'splice', 'slice', 'push'],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
//   // Only change code above this line
// ];
// --------------------------------------------------------
// Lesson 11
// function filteredArray(arr, elem) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i){
//     if (arr[i].indexOf(elem) == -1) {
//       newArr.push(arr[i])
//       i++
//     } else {
//       newArr = newArr
//       i++
//     };
//   }
//   return newArr;
// }

// console.log(filteredArray([[1, 2, 3], [3, 2, 1], [2, 4, 6]], 3))
// --------------------------------------------------------
// Lesson 10
// function quickCheck(arr, elem) {
//   if (arr.indexOf(elem)>=0){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// --------------------------------------------------------
// Lesson 9
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
//   return sentence;
// }
// console.log(spreadOut());
// --------------------------------------------------------
// Lesson 8
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     newArr.push([...arr])
//     num--;
//   }
//   return newArr;
// }
// console.log(copyMachine([true, false, true], 2));
// --------------------------------------------------------
// Lesson 7
// function forecast(arr) {
//   return arr.slice(2,4);
// }
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// --------------------------------------------------------
// Lesson 6
// function htmlColorNames(arr) {
//    arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
//      return arr;
//    }
//    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// --------------------------------------------------------
// Lesson 5
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// arr.splice(1, 4)
// console.log(arr);
// --------------------------------------------------------
// Lesson 4
// function popShift(arr) {
//      let popped = arr.pop(); // Change this line
//      let shifted = arr.shift(); // Change this line
//      return [shifted, popped];
//    }
//    console.log(popShift(['challenge', 'is', 'not', 'complete']));
// --------------------------------------------------------
// Lesson 3
// function mixedNumbers(arr) {
//      arr.unshift('I', 2, 'three')
//      arr.push(7, 'VIII', 9)
//      return arr;
//    }
//    console.log(mixedNumbers(['IV', 5, 'six']));
// --------------------------------------------------------
// Lesson 2
// let myArray = ["a", "b", "c", "d"];
// myArray[1] = 'fdf'
// console.log(myArray);
// --------------------------------------------------------
// Lesson 1
// let yourArray = ["fdsf", true, 32 , 23, 23]; // Change this line
// --------------------------------------------------------
