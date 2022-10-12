// Lesson 20
// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
// let add = userObj.data.friends.push(friend)
// return userObj.data.friends
//   // Only change code above this line
// }

// console.log(addFriend(user, 'Pete'));
// --------------------------------------------------------
// Lesson 19
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
// return Object.keys(obj)
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));
// --------------------------------------------------------
// Lesson 18
// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(usersObj) {
//   let count = 0;
//   for (let user in usersObj) {
//    if (usersObj[user].online === true) {
//      count++
//    } 
// }
// return count
// }
// console.log(countOnline(users));
// --------------------------------------------------------
// Lesson 17
// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if ('Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj) {
//     return true
//   } else {
//     return false
//   }
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));
// --------------------------------------------------------
// Lesson 16
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// delete foods.oranges
// delete foods.plums
// delete foods.strawberries

// console.log(foods);
// --------------------------------------------------------
// Lesson 15
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };
// function checkInventory(scannedItem) {
// return scannedItem = foods[scannedItem]
// }
// console.log(checkInventory("apples"));
// --------------------------------------------------------
// Lesson 14
// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42
//   }
// };

// // Only change code below this line
// userActivity.data.online = 45
// // Only change code above this line

// console.log(userActivity);
// --------------------------------------------------------
// Lesson 13
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Only change code below this line
// foods.bananas = 13;
// foods.grapes = 35;
// foods.strawberries = 27;
// // Only change code above this line

// console.log(foods);
// --------------------------------------------------------
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
