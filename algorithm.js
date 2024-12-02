// class constructor 
class Movie {
  constructor(title, director, releaseDate){
      this.title = title;
      this.director = director;
      this.releaseDate = releaseDate;
      this.next = null;
  }

  // a method to stringy the info 
  movieInfo(){
    console.log(`${this.title} is a hit motion picture directed by ${this.director} released on ${this.releaseDate}`)
  }
}

class LinkedMovies{
  constructor(){
    this.head = null;
  }

  addMovie(movie){
    if (this.head === null){
        this.head = movie;
    } else {
      let current = this.head;
      while (current.next !== null){
        current = current.next;
      }
      current.next = movie;
    }
  }
}

let movies = new LinkedMovies();

let movieOne = new Movie("Constantine", "Francis Lawrence", "18/03/2005");
movies.addMovie(movieOne);

let movieTwo = new Movie("Drop Dead Fred", "Ate de Jong", "11/10/1991")
movies.addMovie(movieTwo);


console.log(movies);

// stack/queue

class Books {
  constructor(title, author, pubYear){
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
  }

  bookInfo(){
    console.log(`${this.title} was a hit book by the esteemed ${this.author}, released in the year ${this.pubYear}`);

  }

}

class Stack {
  constructor(){
    this.items = [];
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    if (this.items.length === 0){
      return 'No books'
    }
    return this.items.pop();
  }

  peek(){ 
    return this.items[this.items.length - 1];
   }

   printStack(){
    if (this.items.length === 0) {
      console.log('No books in the stack.');
      return;
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      this.items[i].bookInfo(); // reverse order cos of lifo
    }
  }
}

class Queue {
  constructor(){
    this.queue = [];
  }

  // rrefers to adding a new element into the queue, standard procedure
  enqueue(element){
    this.queue.push(element)
  }

  // then remoing 
  dequeue(){
    return this.queue.shift();
  }

  // views the first element 
  peek(){
    return this.queue[0]
  }

  // reberse the queue 
  reverse(){
    const reversed = [];
    while(this.queue.length > 0){
      reversed.push(this.queue.pop())
    }
    this.queue = reversed
    return this.queue
  }

  printQueue(){
    if (this.queue.length === 0) {
      console.log('No books in the queue.');
      return;
    }
    for (let i = this.queue.length - 1; i >= 0; i--) {
      this.queue[i].bookInfo(); 
    }
  }
} 

let bookOne = new Books("The Wee Free Men", "Sir Terry Pratchett", "2003" )
let bookTwo = new Books("A Hat Full of Sky", "Sir Terry Pratchett", "2004");
let bookThree = new Books("Wintersmith", "Sir Terry Pratchett", "2006");

let library = new Stack();
library.push(bookOne);
library.push(bookTwo);
library.push(bookThree);

let booksOut = new Queue();
booksOut.enqueue(bookTwo);
booksOut.enqueue(bookThree);
booksOut.enqueue(bookOne);


library.printStack();
booksOut.printQueue();

// hashing - a hash table is another data structure in CS, it stores key value pairs that you can then access via a key.  A hash table uses a hash function to turn a key value in an index, that index then point to where the value is stored within the table. They're very fast. Apparently the Map Object is the best form for HAsh Table/hashing 

let musicHash = new Map();

musicHash.set('key1', 'Oasis');
musicHash.set('key2', 'Juno the Soundtrack');
musicHash.set('key3', 'Decide');
musicHash.set('key4', 'Pushing against a stone');

console.log(musicHash.get('key1'));

musicHash.set('key1', 'blur');

console.log(musicHash.get('key1'));


// graphs - this is a non linear data structure, it has vertices (nodes) and edges (the lines connecting the nodes). the graph shorthand is G(V, E). it cn be used to represent and then understan complex relationships between objects/data. E.g suggesting friends. 


// Trees - another abstract data structure. Data is organised heirarcharly like a family tree. Parents, children, grandparents etc. (like the DOM)
// // terminology 
// Root is the first node in the tree
// Edge is the link between two nodes
// Child is a node that has a parent node
// Parent is a node that has an edge to a child node
// Leaf is a node that does not have a child node in the tree
// Height is the length of the longest path to a leaf
// Depth is the length of the path to its root