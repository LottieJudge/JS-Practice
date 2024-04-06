// console.log('Hello, Lottie')

// /* This is a multi
//  line comment */

//  let hobby = 'drinking';
//  let message = `we all love ${hobby}`

//  console.log(message)

//  let newLine = 'New \nline';
//  let backSlash = '\nI contain a : \\'

//  console.log(newLine, backSlash)

// let testVariable = 1;
// let variableTest = typeof(testVariable);
// console.log(variableTest);

// // or 

// let testVariableTwo = 'a string';
// console.log(testVariableTwo, typeof testVariableTwo);

// converting data types 

/* JS will try it's best to convert variable types into compatible data types so they can work together*/

// let varOne = 1;
// let varTwo = '2'
// console.log(varOne * varTwo);
// // this will convert varTwo into an integer HOWEVER 
// console.log(varOne + varTwo);
// // this will concatenate the variables instead of adding them together. 

// //but 
// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// // so 

// console.log(varOne + Number(varTwo));

// //success...

// let str1 = 'Laurence';
// let str2 = 'svekis';
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof val1);
// console.log(typeof val2);
// console.log(typeof myNum);

// let firstName = 'Lottie';
// let age = 30;
// let canCode = true;
// let message = `Hi my name is ${firstName}. I am ${age} years old. Can I code JavaScript? That'd be ${canCode}, friend!`;

//  console.log(message)

//  let nmr1 = 3;
//  let nmr2 = 3;

//  console.log(nmr1 ** nmr2); // exponention is timesing a number by it's self a number amount of times so if x=2 and y =3 you would times 2 by 2, 3 times. it's x to the power of y 

//  console.log(6*6*6*6*6*6);
//  console.log(6**6);

//  let num1 = 4
//  num1 ++;
//  console.log(num1);

//  let num2 = 5;
//  num2 --;
//  console.log(num2); //Unary operators: Increment and decrement 

// let num3 = 3;
// let num4 = 4;
// console.log(num3++);
// console.log(++num3);

// let a = 2;
// let b = 3;
// let pythag = ((a**2) + (b**2))**0.5;
// console.log(pythag);

// let x = 4;
// x /= 2;
// console.log(x)

// let a = 2;
// let b = 3;
// let c = 4;
// let d = 3
// let e = '3';
//  console.log( a < b || b > a);
//  console.log( a !== b);
//  console.log(d == e);

// let miles = 13;
// const milesToKm = miles * 1.60934;
// console.log(`The distance of ${milesToKm} kms is equal to ${miles} miles`);

// let heightInches = 66;
// let weightPounds = 126;
// const heightCM = heightInches * 2.54;
// const weightKG = weightPounds / 2.2046;
// console.log(heightCM, weightKG);
// let bmi = weightKG / (heightCM/100*heightCM/100);
// console.log(`Your BMI is ${bmi}`)

// const firstName = 'Lottie';

// for (const element of firstName){
//   console.log(element);
// };

// for (let i = 0; i < firstName.length; i++){
//   console.log(firstName[i])
// };

// let songs = ['Gorilla', 'Paprika', '505', 'Uncanny Valley'];

// for ( let song = 0; song < songs.length; song++){
//   console.log(`Now playing ${songs[song]}`);
// }



// const add = (a,b) => {
//   const sum = a+b;
//   console.log(sum)
// };

// console.log(add(8,59));

// const details = {
//   name: 'Lottie',
//   age: '30',
//   greet: function(){
//     console.log(`Hello ${this.name} you are ${this.age}!`);
//   }
// };
// details.greet();

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const Lottie = new person('Lottie', 30);

// console.log(Lottie);

// const nums = [0, 1, 2, 3, 4];

// const numsDbl = nums.map((num) => {
//   return num * 2;
// });

// console.log(numsDbl);

// function greet(name){
//   return `Hello ${name}`
// };

// // console.log(greet('Scott'));

// let arr = ['watson', 6, true, 3.6];
// arr[1] = 'Chewie';
// console.log(arr[1]);

//Practice Exercise 3.1

// const myShop = ['Milk', 'Bread', 'Apples', 'Chocolate', 'Rice'];
// console.log(myShop.length);
// myShop[1] = 'Bananas';
// myShop.splice(2, 0, 'Apple pie');
// myShop.splice(3, 1, 'Wine');

// myShop.push('Dog Treats');
// console.log(myShop);

// let myGals = ['Molly', 'Kay', 'Abi', 'Dianne'];
// let moreOfMyGals = ['Jessie', 'Franny', 'Elaine'];
// let allGals = myGals.concat(moreOfMyGals);
// console.log(allGals)
// myGals.pop();
// console.log(myGals);

// let findValue = allGals.find(e => e === 'Franny');
// console.log(findValue);

// let books = ['Dune', 'Lord of the rings', 'Dirk Gentleys Holistic Detective Agency', 'Saga', '50 shades of grey'];
// let valueToDel = books.indexOf('Hell Boy');
// console.log(valueToDel);

// let shoppingList = [];
// shoppingList.push('Milk', 'Bread', 'apples');
// shoppingList.splice(1, 1, 'Bananas',  'eggs');
// shoppingList.pop();
// shoppingList.sort()
// let milkVal = shoppingList.indexOf('Milk');
// shoppingList.splice(2, 0, 'Carrots', 'Lettuce');
// let newList =[ 'Juice', 'pop'];
// let bigList = shoppingList.concat(newList, newList);
// console.log(bigList);

// let arr1 = ['words', 'are', 'good']
// let arr2 = ['here\'s some more', 'one more']
// let arr3 = ['and numbers', 1, 2, 3]
// let multidimensionalArray = [arr1, arr2, arr3];
// let indexArr = multidimensionalArray[0][1];
// console.log(multidimensionalArray);
// console.log(indexArr);

let arr1 = [1, 2, 3];
let arrNest = [arr1, arr1, arr1];
let val1 = arrNest [1][1];
console.log(val1);