// BIG O 
// O(1) Constant time and space, it's execution does not change based on input size. e.g any variables etc added within the function will be temporary. 

function getFirstElement(arr){
  return arr[0] /*return lhe first element in the array*/
}

let myArr = [6,6,6];
console.log(getFirstElement(myArr));


// O(log n) Logarithmic time - the time and space complexity increases with the input size. e.g binary search

// Space - the below is O(1) for space as it takes up no more room on output.

let binaryArr = [1,2,3,4,5,6,7,8]

function findArrayNum(num){
let array = binaryArr
let left = 0; /*left var at start of the array */
let right = array.length -1 /* right var at the end */
while (left <= right){
  let middle = Math.floor((left + right) /2) /* calculating the very mid of the array*/
if (array[middle] === num){
  return middle;
} else if(array[middle] < num){
  left = middle+1;
}else{
  right = middle -1
}
}

let err = 'No number fam'
return err;
};

console.log(findArrayNum(20));



// Linear time O(n) - an algo that's complexity (time taken) increases with the size of an input. e.g traversing all elements of an array. The below tells you the index of a number in an array

// space for below is o(1) as it takes up no more space
let onArr = [1,2,3,4,5,6,7,];

const onAlgo = (num) => {
  let arr = onArr;
  
  for(i=0; i <= arr.length; i++){
    if(arr[i] === num){
      return i;
    }
  }
  let err = 'nae number scalllllly'
  return err;
}

console.log(onAlgo(4));



// Linearithmic Time o(n log n) n === input and log n === the logarithm of the input size, reflecting the number of times you can divide input n by 2 until you reach 1. E.g Merge Sort 

// this is the merge function that takes two arrays and returns a third array - it's space complexit is o(n)
const merge = (arr1, arr2) => {
  let i =0;
  let j =0;
  let results = [];

  while(i < arr1.length && j < arr2.length){
    if (arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i ++;
    }else {
      results.push(arr2[j])
      j++
    }
  }

  while(i< arr1.length){
    results.push(arr1[i]);
    i++
  }

  while(j < arr2.length){
    results.push(arr2[j]);
    j++
  }
  return results;
}

// mergeSort code 
const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle));

  return merge(left, right)

}

const msArr = [4,3,3,1,7,23,6];
console.log(`OG arr: ${msArr}`);

const sortMsArr = mergeSort(msArr);
console.log(`Sorted arr: ${sortMsArr}`);



// Quadratic Time O(n2)/O(n*n) the time complexity increases quadratically with the input size. Typically seen in algos with nested loops over the input. e.g Bubble Sort/Insertion sort (bub sort below)

let arr2sort = [4,5,6,9,300,8,1, -12];
const bubSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    // then the nested for loop
    for(let j = 0; j < (arr.length - i -1); j++ ){

      // then checking the item at current iteration is greater than the next one
      if (arr[j] > arr[j+1]){
        // if it is greater than the next one then swap them round and keep going until the bub sort has sorted
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr; 
}
let bubSortedArr = bubSort(arr2sort)
console.log(`Here's your bubble sorted array: ${bubSortedArr} `)



// Cubic time O(n3)/O(n*n*n) represent an algo that's time increases cubically with the input size. Generally seen with 3 nested loops. E.G Matrix Multiplication which is where you take a matrix and times Matrix 1 row 1 [0] * Matrix 2 column 1 [0] + Matrix 1 row 1 [1] * Matrix 2 column 1 [1] add them together and form the new matrix 

const multiplyMatrix = (mat1, mat2) => {
  const n = mat1.length 
  let mat3 = [];

  // this bit inits the mat3 matrix which is the result of mat1 and mat2 
  for(let i = 0; i < n; i++){
    mat3[i] = [];
    for(let j = 0; j < n; j++){
      mat3[i][j] = 0;
    }
  }
// this bit performs the multiplication of the matrix 
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n ; j++){
      for (let k = 0; k < n; k++){
        mat3[i][j] += mat1[i][k] * mat2[k][j];
      }
    }
  }

  return mat3;
}

let mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let mat2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
]

let result = multiplyMatrix(mat1, mat2)
console.log(result)
// make it look like a matrix in the temrinal 
result.forEach(row => console.log(row))




// Exponential time o(2n) the time complexity doubles with each additional element in the input. e.g 3 disks would be a minimum of 7 moves but 4 disks is a minimum of 15 disks. 

const hanoi = (discs, source, target, spare) => {
  if(discs > 0){
    hanoi(discs - 1, source, spare, target)
    console.log(`Move disk ${discs} from ${source} to ${target}`)
    hanoi(discs - 1, spare, target, source)
  }
}

console.log(hanoi(3, 'Source', 'target', 'spare'));

// O(n!) this grows factoirally with the input size. If you need to examine all possible arrangements such as job scheduling or the Traveling Salesman Problem. It tells you every possible solution for that set of tasks and you can then schedule based on optimisation e.g 

const getAllArrangements = (arr) => {
  const result = [];

  const arrange = (current, remaining) => {
    if (remaining.length === 0){
      result.push(current);
    } else {
      for( let i = 0; i < remaining.length; i++){
        let newRemaining = remaining.slice(0,i).concat(remaining.slice(i +1));
        arrange(current.concat(remaining[i]), newRemaining);
      }
    }
  }

  arrange([], arr);
  return result
}

let tasks = ['debugging', 'testing', 'functionality of button', 'media queries'];
let arrangements = getAllArrangements(tasks);


arrangements.forEach(p => console.log(p));


// Space complexity practice 





// LINKED LISTS
// LINKED LISTS 

  // Linked lists are a data structure consisting of a sequence of elements where each element points to the next one (until the end)

  // const linkedListInfo = [
  //   'A linked list consists of',
  //   '1. nodes; these contain the data and the links to the next node',
  //   '2. head: this is the first node in the linked list',
  //   '3. tail: the last element, typically the link ref will be null unless a circular linked list',
  //   '4. Traversal - the process of visiting each node within the LL',
  //   '5. insertion: adding a new node ',
  //   '6. deletion: removing a node and updating the link references for the rest.'
  // ]

  // const LinkedListTypes = {
  //   type: 'Linked List',
  //   subType:{
  //     Single: 'each node points only to the next node',
  //     Double: 'each node points to the node before and after it',
  //     Circle: 'The last node points back to first node'
  //   },
  // } 

// example of a linked list 


// stacks and queues 

// a stack in JavaScript follows the LIFO principal (last in first out), so the last element added to a stack will be the first one removed. 

class Stack {
  constructor(){
    this.items = [];
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    if (this.items ) return "Stack is empty";
    return this.items.pop();
  }

  peek(){
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
  }

  printStack(){
    console.log(this.items.join(" "))
  }
}

let stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.pop());
console.log(stack.peek());
stack.printStack();

// queues queues follow the FIFO operation instead, first in, first out. 