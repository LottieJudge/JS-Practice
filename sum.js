// function sum(a, b) {
//   return a + b;
// }



// function multiply(a, b){
//   return a * b;
// }

// function minus(a, b){
//   return a - b;
// }

// module.exports = { sum, multiply, minus };

// const waitSeconds = (numberOFSeconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve('Time waited')
//     }, numberOFSeconds * 1000)
//   })
// }

// module.exports = waitSeconds;

(x) {
  let xToReverseNum = x.toString().split('').reverse();
  let minus = '-'
  if(xToReverseNum.match('-')){
    xToReverseNum.replace('-','')
    return xToReverseNum;
  }
  let returnToNum = Number(xToReverseNum.join(''));
  return  returnToNum;
};

