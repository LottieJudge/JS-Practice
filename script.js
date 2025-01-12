// console.log('Hello, Lottie')

// /* This is a multi
//  line comment */

// declaring variables, using interpolation via a template literal
//  let hobby = 'drinking';
//  let message = `we all love ${hobby}`
//  console.log(message)


//  let newLine = 'New \nline';
//  let backSlash = '\nI contain a : \\'

//  console.log(newLine, backSlash)

//using typeof to tell you the type of data held (also used in API's for Data Validation)
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

// let arr1 = [1, 2, 3];
// let arrNest = [arr1, arr1, arr1];
// let val1 = arrNest [1][1];
// // console.log(val1);

// let me = {
//   firstName: 'Lottie',
//   lastName: 'Judge',
//   age: 30,
//   faveColour: 'Blue', 
//   bestQuality: 'Candor',
//   likesCoriander: false,
//   address: {
//     flat: 18,
//     block: 'block d',
//     street: 'Farringdon Lane'
//   }
// }

// me.address.flat = 18;
// console.log(me.address.flat);

// let myCar = {
//   make: 'Ferari',
//   model: 'the best one',
//   horsePower: 17,
//   works: true
// };
// let newValue = myCar.colour = 'blue';
// // newValue = myCar['forSale'] = false;
// // // console.log(myCar.make + ' ' + myCar.model);

// // //objects in array

// // let addresses = [{
// //   street: 'first street',
// //   number: 12,
// //   postCode: 'PE18 1AX',
// //   city: 'London'
// // },
// // {
// //   street: 'Second Street',
// //   number: 2,
// //   postCode: 'PE18 1AX',
// //   city: 'London'
// // }]

// // console.log(addresses[1].street);

// // let people = {
// //   friends: [],
// // }

// // let scott = {
// //   firstName: 'Scott',
// //   lastName: 'Godfrey',
// //   id: '#001'
// // }

// // let kay = {
// //   firstName: 'Kay',
// //   lastName: 'Judge',
// //   id: '#002'
// // }

// // let molly = {
// //   firstName: 'Molly',
// //   lastName: 'Judge',
// //   id: '#003'
// // }
// // people.friends.push(scott, kay, molly);
// // console.log(people);

// // const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
// // theList.shift()
// // theList.pop()
// // theList.unshift('FIRST');
// // theList[2] = 'MIDDLE';
// // theList.splice(3, 4, 'Hello World!')
// // theList.push('LAST');
// // console.log(theList);

// let inventory = [];
// let productOne = {
//   name: 'Product One',
//   model: '1203',
//   cost: "£399",
//   quantity: 700
// }

// let productTwo= {
//   name: 'Product Two',
//   model: '1204',
//   cost: "£399",
//   quantity: 5
// }

// let productThree = {
//   name: 'Product Three',
//   model: '1205',
//   cost: "£399",
//   quantity: 700
// }

// inventory.push(productOne, productTwo, productThree)
// let quantityThree = inventory[2].quantity;
// console.log(quantityThree);

// for(let product = 0; product < inventory.length; product++){
//   inventory[product].quantity += 5;
// }

// console.log(inventory)

// let raining = true;

// if (raining === true){
//   console.log('Bring a brolly bitch')
// } else {
//   console.log('Stay sunny baby!')
// }

// const oldEnough= (age, movieRating) =>{
//   if (age >= 18 && movieRating <= 18){
//     console.log('Enjoy your movie')
//   }
//   else if (age >= 16 && movieRating <= 16){
//     console.log('Enjoy your movie!')
//   } 
//   else if (age >= 12 && movieRating <= 'PG'){
//     console.log('Enjoy your movie')
//   }
//   else if (age >=0 && movieRating <= 'U'){
//     console.log('enjoy your movie!')
//   } else {
//     console.log('sorry you can\'t watch this')
//   }
// };

// console.log(oldEnough(0, 'U'))

// let needToPee = false;


// if(needToPee){
//   console.log('go piss girl')
// };

// if(!needToPee){
//   console.log('bladder health is important but you\'re good rn girlie')
// };


// let userAge = 80;

// switch(userAge){
//   case 19:
//   case 18: 
//     console.log('come on in, and enjoy a drink');
//     break;
//   case 16:
//   case 17: 
//     console.log('Come on in but stay away from the bar. kid!');
//     break;
//   case 15:
//     console.log('soon but not now')
//   break;
//   default:
//     console.log('go home kid!')
// }



// let age = 17;

// let access = age >= 18 ? 'Come on in' : 'Go home kid';
// console.log(access);
  

// let prize = Math.floor(Math.random()*10);
// let message = 'My Selection: ';
// let answer = '';
// let response;
//   switch(prize){
//     case 0:
//     case 5:
//       message += 'gold';
//       break;
//     case 1:
//     case 6:
//       message += 'coin';
//       break;
//     case 2:
//     case 7:
//       message += 'Watch';
//       break;
//     case 3:
//     case 8:
//       message += 'Jewels';
//       break;
//     case 4:
//     case 9:
//       message += 'Money';
//       break;
//     default: 
//       message += 'no dice!';
//       break;
//   }
//   console.log(message)

// let number = Math.floor(Math.random()*700);
// let numComp = 100;
// if (number === numComp){
//   console.log(`Your number: ${number}. My number: ${numComp} - the numbers are the same!`);
// } else if (number > numComp){
//   console.log(`Your number: ${number}. My number: ${numComp} - your number is bigger!`)
// } else if(number < numComp){
//   console.log(`Your number: ${number}. My number: ${numComp} - your number is smaller!`)
// } else(
//   console.log('Your numbers not a number!')
// )

// let friends = ['abi', 'kay', 'daisy'];
// let message = '';
//  for( var friend = 0; friend < friends.length; friend++) {
//   let message = `You have a friend named ${friends[friend]}`;
// switch(friends[friend]){
//   case 'Scott':
//     console.log(message);
//     break;
//   case 'Chewie':
//     console.log(message);
//     break;
//   case 'Watson':
//     console.log(message)
//     break;
// //   default:
// //     console.log('Sorry I can\'t find that friend')
// // }
// //  }



// let array = ['Rock', 'Paper', 'Scissors'];
// let randNum = Math.floor(Math.random()*3);
// if (randNum === 0){
//   randNum = array[0];
// } else if (randNum === 1){
//   randNum = array[1]
// } else if (randNum === 2){
//   randNum = array [2]
// }
// let randCompNum = Math.floor(Math.random()*3);
// if (randCompNum === 0){
//   randCompNum =  array[0];
// } else if (randCompNum === 1){
//   randCompNum =  array[1]
// } else if (randCompNum === 2){
//   randCompNum = array [2]
// }

// let message = `You chose: ${randNum}. The computer chose: ${randCompNum}. `
// if(randNum === randCompNum){
//   message += `You drew!`;
// } else if (randNum > randCompNum) {
//   if(randCompNum == 0 && randNum == 2){
//     message += `You lose`;
//    } else {
//     message += `You win!`;
//    }
//   } else { 
//     if(randCompNum == 0 && randNum == 1){
//       message += `You win!`;
//   } else {
//       message += 'You lose!';
//   }
// }; 
// console.log(message);


// let loop = ['A', 'for', 'loop', 'is', 'a', 'tool', 'used', 'to', 'repeat', 'a', 'specific', 'set', 'of', 'instructions'];

// // for (let i = 2; i < loop.length; i++){
// //   console.log(loop[i])
// // };

// // While loops 

// // let array = ['mike', 'Molly', 'Fran', 'scott'];
// // let notFound = true;

// // while (notFound && array.length > 0){
// //   if (array[0] === 'Molly'){
// //      console.log('found her!');
// //      notFound = false;
// //   } else {
// //     array.shift()
// //   }
// // }

// //fibonacci

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];

// while (fibonacciArray.length < 25){
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }

// console.log(fibonacciArray)



// let maxVal = 90;
// let val = Math.floor(Math.random()*maxVal+1);
// console.log(val)
// let answerCorrect = false;


// while (!answerCorrect){
//   let guess = console.log(`Guess a number between 1 and ${maxVal}: ${input}`)
//   guess = Number(guess);
// if (guess == val){
//   answerCorrect = true;
//   console.log(`You got it! ${val}`)
// } else if (guess > val){
//   console.log('too high')
// } else {
//   console.log('too low')
// }
// }

// let dog = 'Chewie';

// dog == 'Chewie' ? console.log('A Handsome man has appeared!') : console.log('It must be Watson - another handsome man!')



// let playlist = ['a song', 'my song', 'your song'];
// let nowPlaying = []
// for(let i = 0; i < playlist.length; i++){
//    console.log(`currently listening to ${playlist[i]}`)
// };

// let smartyPants = "Einstein";
// smartyPants = "Genteleschi";

// console.log(smartyPants)


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Pick a number between 1-100: ', (input) => {
//   // console.log(`Your Number is : ${input}`);
//   input > 70 ? console.log("Excellent") : console.log("Do better") //ternary operator - if sucks 
//   rl.close();
// });



// rl.question('Enter Your Name: ', (input) => {
//   console.log(`Your Name is : ${input}`);
//   rl.close();
// });


// async function sleep(millis) {
//   let t = Date.now();
//   sleep(millis).then(() => {
//       console.log(Date.now() -t );
//   });
// };

// sleep(10)

// let moduloOne = 700 % 8;

// console.log(moduloOne)

// let moduloTwo = 8000 % 17;

// moduloOne = moduloOne * moduloTwo;

// console.log(`Your sum is ${moduloOne}`);

//Comparison operators 

// let nonStrict = 100 == '100';
// console.log(nonStrict);

// let strict = 100 === '100';
// console.log(strict)

// const money = 400;
// const trip = 200;
// const food = 300;

// const cost = trip + food;

// let budget = money >= cost ? console.log(`You have enough budget to go on holiday. Savings: ${money}. Total cost of trip: ${trip + food}`) : console.log('Womp Womp - no cash!');


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Pick a number between 1-100: ', (input) => {
//   console.log(`Your Number is : ${input}`);
//   const cpuNum = Math.floor(Math.random()*100);
//   input > cpuNum ? console.log("Excellent") : console.log("Do better") //ternary operator - if sucks 
//   rl.close();
// });

// rl.question('Do you like movies, books or games?: ', (input) => {
//   i
// });


// const hearts = (name) => {
//   console.log(`I <3 ${name}`)
//  name = 'Myself'
// }

// console.log(hearts());

// let myArray = ['Apple', 'Orange', 'Pineapple' ];

// // console.log(myArray[0]);
// // console.log(myArray[1]);
// // console.log(myArray[2])
// // console.log(myArray.length);
// // myArray.push('Cherry');
// // console.log(myArray.length);

// myArray.push('Cherry', 'Raspberry', 'Blueberries');
// // console.log(myArray);

// myArray.splice(1,0, 'Kiwi');
// console.log(myArray);
// let newArray = myArray.pop();
// console.log(myArray);
// console.log(newArray);
// let shiftArray = myArray.shift();
// // console.log(myArray, shiftArray);

// // const book = {
// //   title: "Neverwhere",
// //   author: "Neil Gaiman",
// //   releaseDate: {
// //     book: 1996,
// //     tv: 1997,
// //   },
// //   hasSequel: false,
// // }

// // book.pop()

// // // console.log(`${book.author} released ${book.title} in ${book.releaseDate.book}. Has it had a sequel? ${book.hasSequel}`);

// // let importantDogs = ['Watson', 'Chewie', 'Harry', 'Tug', 'Tortuga', 'Roger', 'Spike', 'Ziggy', 'Kergen'];

// // for (let i = 0; i < importantDogs.length; i++){
// //   console.log(importantDogs[i])
// // }

// // importantDogs[i] = importantDogs[i]+ 's';
// // console.log(array)

// // let count = 0; 


// // const button = document.getElementById('button')
// // const counter = document.getElementById('counter')
// // const antiChrist = document.getElementById('buttonReset')

// // button.addEventListener('click', () => {
// //   count++
// //   counter.innerText = count;
// // } )

// // antiChrist.addEventListener('click', () => {
// //   count=0;
// //   counter.innerText = count;
// // })

// // antiChrist.style.backgroundColor = "brown";




// // let count = 0;
// // let step = count + 10;

// // let count = '';
// // let i = 0; 

// // do {
// //   i = i +10 
// //   count = count + i;
// // } while (i < 100)

// // console.log(count);

// // let counter = 0;
// // let step =  5;
// // do {
// //   console.log(counter);
// //   counter += step
// // } while( counter <= 100)

// // for (let i =0; i <= 100; i++){
// //   console.log(i);
// // }

// // let arr= [];
// // for ( let i = 2; i < 101; i = i + 5){
// //   arr.push(i)
// // }

// // console.log(arr)

// // let myWork = [];

// // for (let i = 0; i <= 10; i++){
// //   let 
// // }

// // let paragraph = document.getElementsByTagName("p");
// // console.log(paragraph);
// //   for(let i=0; i < paragraph.length; i++){
// //     paragraph[i].style.color = 'blue';
// //     paragraph[i].append('. Who\'s that?');
// //   }

// // console.log('Hello World')

// // let className = document.getElementsByClassName('name');
// // console.log(className)

// //     for(let i = 0; i < className.length; i++){
// //       className[i].style.fontSize = '200px';
// //     }


// // const languagesKnown = ['HTML', 'CSS', 'JavaScript', 'Python'];
// // const languagesShift = languagesKnown.shift();
// // console.log(languagesKnown);
// // console.log(languagesShift);

// // let parent = document.getElementById('love');
// // let child = document.getElementsByTagName('li');
// // console.log(child)
// //  for(let i=0; i < child; i++){
// //    child[i].append('<3');
// //  }

// const cfgDegrees = ['Full-Stack', 'Product Management', 'Data Science'];

// const cfgDegreesShift = cfgDegrees.shift();
// console.log(cfgDegrees);
// console.log(cfgDegreesShift);


// const codeFirstGirls = 'Code First Girls is an education and employment provider giving women a fair advantage within the tech world!'

// let cfgSplit = codeFirstGirls.split(' ', 3);
// console.log(codeFirstGirls);
// console.log(cfgSplit);

// const progLanguages = {
//   languageOne:{
//     name: 'JavaScript',
//     releaseDate: 1995,
//     learned: true,
//     details: function(){
//       return `${this.name} was developed in ${this.releaseDate}.`
//     },
//     userLearned: function(){
//       if(this.learned === true){
//         console.log(`You know this language - great job!`)
//         } else {
//           console.log(`You haven't learned this one yet - get out there and explore more!`)
//         }
//       }
//   },
//   languageTwo:{
//     name: 'Python',
//     releaseDate: 1994,
//     learned: false,
//     details: function(){
//       return `${this.name} was developed in ${this.releaseDate}.`
//     },
//     userLearned: function(){
//       if(this.learned === true){
//         console.log(`You know this language - great job!`)
//         } else {
//           console.log(`You haven't learned this one yet - get out there and explore more!`)
//         }
//       }
//   }, 
// };
// console.log(progLanguages.languageTwo.details());
// console.log(progLanguages.languageTwo.userLearned());

// const isNumber = (value) =>{
//  return typeof value === 'number';
// };

// console.log(isNumber(42));
// console.log(isNumber('42'));
// console.log(isNumber(NaN));
// console.log(Number(undefined));
// console.log(isNumber(null));
// console.log(isNumber({}));
// console.log(isNumber([]));
// console.log(isNumber('Hello!'));

// let button = document.getElementById('button');

// let timeout = setTimeout(() => {
//   button.innerHTML = 'You can press again in ten seconds'
// } 10000 );

// 1.7   Looking at the following code, describe a case where this function
//            could throw an error when called. Describe this case and talk about
//            what exception handling you could use to handle this scenario. 

// function canPay(price, cashGiven){
//   if (cashGiven >= price){
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(canPay(ten, 0));

//The above could throw an error if the user inputs a NaN into either of the parameters. To avoid this you could use TypeScript in order to make the code more stable setting a specific type for both arguments or you could extend the function to throw an error to the user that states 'invalid type please enter a number. Lastly you could use a method to convert the string into an integer. 

// // console.log('5'-2);

// console.log(2 + '3');
// console.log(2 + 3);
// console.log('2' + '3');
// console.log('5' - 2);

// try {
// let obj = null;
// console.log(obj.name);
// } catch(error) {
//   console.log(error);
//   console.error('Caught an exception', error.message)
// }

// let safeDivide = (numerator, denominator) => {

//   try {
//     if(denominator === 0){
//       throw new Error('Cannot divide by zero')
//       };
   
//   let result = numerator/denominator;
//   return result;

//   } catch (error){
//     console.error('error', error.message)
//   }
// }


// console.log('Result:',safeDivide(4,2));


// function checkAge(age){

//   if (age < 18) {
//    throw new Error('YOu must be 18 yrs old.')
//    debugger;
//   }
//   return 'access granted';
//   }
  
//   try {
//   console.log(checkAge(16)); 
//   } catch (error){
//   console.error('caught an exception:', error.message)
//   }

// const waitSeconds = (numberOFSeconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve('Time waited')
//     }, numberOFSeconds * 1000)
//   })
// }

// // module.exports = waitSeconds;
// waitSeconds(6)

// OOP - Object-orientated programming

// function Dog(dogName, weight, color, breed){
//   this.dogName = dogName,
//   this.weight = weight,
//   this.color = color};

// let watson = new Dog('Watson', 2.4, 'brown');

// console.log(watson);

// function student(first_name, last_name, student_id){
//   this.first_name = first_name,
//   this.last_name = last_name,
//   this.student_id = student_id
//   this.display_student = function () {
//     return `${this.first_name} ${this.last_name}. Student ID ${this.student_id}`
//   }
// };

// const studentOne = new student('Lottie', 'Judge', 69);
// console.log(studentOne.display_student())


// class Student{
//   constructor(first_name, last_name, student_id){
//     this.first_name = first_name,
//     this.last_name = last_name,
//     this.student_id = student_id }

//     display_student = function () {
//       return `${this.first_name} ${this.last_name}. Student ID ${this.student_id}`
//     }
//   };
  
//   const studentOne = new Student('Lottie', 'Judge', 69);
//   console.log(studentOne.display_student())
  


  // class Car{
  //   constructor(make, model, year){
  //     this.make = make,
  //     this.model = model,
  //     this.year = year }
  
  //     display_car = function () {
  //       return `Car Name: ${this.make}. Model: ${this.model}. Year: ${this.year}`
  //     }
  //   };
    

  //   class ElectricCar extends Car {
  //     constructor(make, model, year, batteryCapacity) {
  //       // Call the parent class constructor
  //       super(make, model, year);

  //       this.batteryCapacity = batteryCapacity;
  //     }
  //     rangeEstimate() {
  //       const rangeKWH = 5;
  //       return this.batterCapacity * rangeKWH
  //     }
  //   }
    
  //   const carOne = new Car('Mandalorian', '001', 1969);
  //   console.log(carOne.display_car());
  //   const carTwo = new Car('JetSki', 'RealFast', 1981)
  //   console.log(carTwo.display_car());

  // end of OOP 

  // let minTime = [7, 8, 9, 10];
  // function minWaitingTime(array){
  //   let waitTime = 0 ;
  //   for(let i = 0; i < array.length; ++i){
  //     waitTime += array[i]+1;
  //   }; 
  //   console.log(waitTime)
  // }

  // minWaitingTime(minTime);


    
  // function XO(string) {
  //   string = string.toLowerCase();
  //   let countO = 0;
  //   let countX = 0;
  //     for(let i = 0; i < string.length; i++){
  //       if (string.charAt(i) === 'o'){
  //         countO++;
  //       }
  //     }
  //     for(let j = 0; j < string.length; j++){
  //       if (string.charAt(j) === 'x'){
  //         countX++;
  //       }
  //     }
  //   if(countO === countX){
  //     return true;
  //   } else if (countO !== countX){
  //     return false;
  //   } else {
  //     return false;
  //   }
  //   }

  //   console.log(XO('Xo'));

// function isPalandrome(str) {
//     let specialChar = str.split("");
//     let j = 0;
//     for(let i = 0; i < str.length; i++){

//     }
//     let reverseS = str.split("").reverse().join("");
//     return reverseS;
//     };

//     console.log(isPalandrome('race:cars'));

//  memory limit - 1GB 
//  execution time limit - 4s
//  input - number of seconds the call last 
//  output - cost in pennies 
// 4p pre min for first 5 mins 
// 3p per min after that 

// let phoneTariff = (callTime) => {
//   let cost = 0;
//   let firstFive = 4;
//   let perMin = 3;
//     if(callTime < 60){
//       cost += firstFive
//     } else if(callTime < 120){
//       cost += firstFive * 2
//     } else if(callTime < 180){
//       cost += firstFive * 3
//     } else if(callTime < 240){
//      cost += firstFive * 4 
//     } 
//     return cost;
//   }


// console.log(phoneTariff(120));

// function maskify(cc) {
//   if (cc.length <= 1){
//     return cc;
//   }
//   let maskedPart = '*'.repeat(cc.length -4);
//   let unMaskedPart = cc.slice(-4);
//   return maskedPart + unMaskedPart;
// }

//  console.log(maskify('gallopingdonkeys'));

// function isPangram(string){
//   let onlyLetters = string.replace(/[^A-Za-z]/g, "").toLowerCase();
//   let letterSet = new Set(onlyLetters); // Use a Set to store unique letters
//   for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//     if (!letterSet.has(char)) {
//       return false;
//     }
//   }
  
//   return true;
// }

// console.log(isPangram('abcdefghijklnopqrstuvwxyz'))

// function sizeToNumber(size) {
  
//   switch (size.toLowerCase()) {
//     case 'xs':
//       return 34;
//       break;
//     case 's':
//       return 36;
//       break;
//     case 'm':
//       return 38;
//       break;
//     case 'l':
//       return 40;
//       break;
//     case 'xl':
//       return 42;
//       break;
//     default:
//       return null;
//       break;
//   }
  
//   }

// //   console.log(sizeToNumber('s'));

// let x = 10; 
// function myFunction(){
//   console.log(x);
//   let x = 20;
// }

// console.log(myFunction());



// function addTwoNumbers(l1, l2) {
//     let l1Sum = Number(l1.join(''))
//     let l2Sum = Number(l2.join(''));
//     let total = l1Sum + l2Sum;

//   let reversed = total.toString().split('').map(Number).reverse()
//   return reversed;
// };

// console.log(addTwoNumbers([3,5,6],[5,7,9]));

// let counter = (int) => {
//   return ++int;
// }


// console.log(counter(4));

// async function sleep(millis){
//   return new Promise((resolve) => setTimeout(resolve, millis));
//   let t = Date.now();
//       sleep(millis).then(() => {
//   console.log(Date.now() - t); 
// });
// }

// console.log(sleep(7))

// function reverse(x) {
  
//   let xToString = x.toString()
//   let xToReverseNum;
//   let returnToNum;
//     if(xToString === NaN){
//       return 0;
//     }else if(xToString.includes('-')){
//     xToReverseNum = xToString.replace('-','').split('').reverse();
//     returnToNum = '-' + Number(xToReverseNum.join(''));
//     return returnToNum;
//     } else {
//       xToReverseNum = x.toString().split('').reverse();
//       returnToNum = Number(xToReverseNum.join(''));
//       return  returnToNum;
//     }
//   }

// ;

// console.log(reverse(123839082930472903849208493208430928349283982903849203))
// let minus = '-'
// if(xToReverseNum.match(minus)){
//   xToReverseNum.replace('-','')
//   return xToReverseNum;
// }

// function isPalandrome(x) {
//   let xToString = x.toString()
//   let reverse = xToString.split("").reverse().join('')
//   console.log(reverse);
//   const isPal = xToString === reverse ? true : false;
//   return isPal;

//   };

//   console.log(isPalandrome(10));

// function expect(x) {  
  
//   function toBe(y){ 
//      if(x === y){
//         return true
//      }else {
//         return "Not Equal"
//      }
//     }

// }

// console.log(expect(5).toBe(5))


// function createCounter(x) {
// let count = x
// function increment() {
//      count = count + 1
//      return count;
    
//   }


// function decrement(count){
//    count  = count -1
//    return count;
//   }
  
// function reset(count){
//       let reset = x
//       return reset;
//      ;
//   }

//   let all = increment(); decrement(); reset();  

// //   return all;

  
// //   };

//   console.log(createCounter(5));

//   let array = [1, 2, 3, 4, 5, 6]

//   let arrayN = (n) =>{

//   }

// binary search o(logn) - time complexity increases logaratimicahlly with the input size (if the input is bigger the algorithm is slower)

// const array = [1,2,3,4,5,6,7,8];
// let left = 0;
// let right = array.length -1;

// while( left <= right){
//   let middle = Math.floor((left + right) /2 );
//   if(array[middle] === 3){
//     console.log(middle)
//     break;
//   } else if(array[middle] < 3){
//     left = middle -1
//     console.log(left)
//     break;
//   } else {
//     right = middle -1;
//     console.log(right)
//     break;
//   }
// }

// var mergeAlternately = function(word1, word2) {
//   let merged = word1 + word2
// let sorted = merged.split('').sort().join('')
// return sorted;
// };

// let word1 = 'bum'
// let word2 = 'shitting'

// console.log(mergeAlternately(word1, word2));

// NODES 

class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = head
  }
  

  add(value){
    let newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next !== null){
      current = current.next
    }
    current.next = newNode
    }
  

  find(value, x){
    let current = this.head;
    while(current !== null){
      if(current.data === x){
        return true;
        current = current.next
      }
      return false;
    }
  }
  
    remove(value, x){
      let current = this.head
      if(current)
    }
  }





const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

console.log(list.find(20)); 
console.log(list.find(40)); 

list.remove(20); 
console.log(list.find(20)); /