
// Lesson 16
// function chunkArrayInGroups(arr, size) {
//      let localArray = [];
//      for(let i =0; i <arr.length ; i+=size) {
//           localArray.push(arr.slice(i, i + size))
//      }
//      return localArray;
//    }
   
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
// --------------------------------------------------------
// Lesson 15
// function mutation(arr) {
//      let arrayMain = arr[0].toLowerCase();
//      let arrayTest = arr[1].toLowerCase();
//      for (let i = 0; i< arrayTest.length; i++){
//           if (arrayMain.indexOf(arrayTest[i]) < 0){
//           return false
//      }
//      }
//      return true
//    }
// console.log(mutation(["Mary", "Army"]))
// --------------------------------------------------------
// Lesson 14
// function getIndexToIns(arr, num) {
//      return arr.filter(x => x < num).length
//    }
//    console.log(getIndexToIns([2, 20, 10], 19))
// --------------------------------------------------------
// Lesson 13
// function bouncer(arr) {
//      let newArray = [];
//      for (let i = 0; i < arr.length; i++) {
//        if (arr[i]) newArray.push(arr[i]);
//      }
//      return newArray;
//    }

//    console.log(bouncer([7, "ate", "", false, 9]))
// --------------------------------------------------------

// Lesson 12
// function frankenSplice(arr1, arr2, n) {
//      let localArray = [...arr1]
//      let piece = arr2.slice(0, n)
//      localArray.unshift(...piece)
//      let piece2 = arr2.slice(n, arr2.length)
//      localArray.push(...piece2)
//      return localArray;
//    }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
// --------------------------------------------------------
// Lesson 11
// function titleCase(str) {
//      return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
// }

// titleCase("I'm a little tea pot");
// --------------------------------------------------------

// Lesson 10
// function booWho(bool) {
//      return typeof bool == "boolean"
//     }
// --------------------------------------------------------
// Lesson 9
// Не понял
// --------------------------------------------------------
// Lesson 8
// function truncateString(str, num) {
     
//      if (typeof num != 'number' || num >= str.length) {
//           return str
//      } else {
//           return str.slice(0, num) + '...';
//      }
//    }

//    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// --------------------------------------------------------
// Lesson 7
// function repeatStringNumTimes(str, num) {
//      let stroke = ''
//      for(let i=1; i<=num; i++){
//        stroke = stroke + str
//      }
//      return stroke;
//    }
   
//    repeatStringNumTimes("abc", 3);
// --------------------------------------------------------
// Lesson 6
// function confirmEnding(str, target) {
//      return str.slice(-target.length) == target
//    }
//    console.log(confirmEnding("Bastian", "an"))
// --------------------------------------------------------
// Lesson 5
// function largestOfFour(arr) {
//      let array = []
//      for(let i = 0; i < arr.length; i++) {
//           array.push(Math.max(...arr[i]))
//      }
//      return array
//    }
   
//    console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
// --------------------------------------------------------
// Lesson 4
// function findLongestWordLength(str) {
//      let count = 0;
//      let stroke = str.split(" ")

//      for (let i = 0; i < stroke.length; i) {
//           if (stroke[i].length > count) {
//                count = stroke[i].length
//           } else {
//                i++
//           }
//      }
//      return count;
//    }
   
//    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
// --------------------------------------------------------
// Lesson 3
// function factorialize(num) {
//      let factorial = 1;
//      for (let i = 1; i <= num; i++){
//           factorial = factorial * i
//      }
//      return factorial;
//    }
//    console.log(factorialize(5));
// --------------------------------------------------------
// Lesson 2
// function reverseString(str) {
//      let arr = [];
//      let stroke = '';
//      for(let i = 0; i < str.length; i++){
//           arr.unshift(str[i])
          
//      }
//      for(let i = 0; i < arr.length; i++){
//           stroke = stroke + arr[i]
//      }
//      return stroke;
//    }
   
// console.log(reverseString("hello"));
// Да, я знаю что можно сделать код в разы меньше помощью join и splite, но на codeCamp ещё это не проходили
// --------------------------------------------------------
// Lesson 1
// function convertCtoF(celsius) {
//     let fahrenheit = celsius * (9 / 5) + 32;
//     return fahrenheit;
// }
   
// console.log(convertCtoF(30))
// --------------------------------------------------------
