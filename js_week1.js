//1
console.log(2 == "2"); // true
console.log("he" == "she"); // false
console.log(2 === 2); // True
console.log("true" == true); // false
console.log(true === true); // true
console.log("true" != true); // true
console.log("true" !== true); // true

//2
let x = 1; // Let is a re-assignable variable. It is locally scoped. (2nd Preferred)
const y = 2; // Const is a non re-assignable variable. It is locally scoped. (Preferred)
var z = 3; // Var is a re-assignable variable. It is globally scoped. (Do not use)

//3
//First-class FN
const sum2And2 = () => {
  console.log(2 + 2);
};

//Higher-Order FN
const callAFunction = (someFunction) => {
  someFunction();
};
callAFunction(sum2And2);

//Callback FN
const sum4Plus4UntilStopByMaxNum = (maxNumber, sum = 0) => {
  if (sum > maxNumber) return sum - 4;
  sum += 4;
  return sum4Plus4UntilStopByMaxNum(maxNumber, sum);
};
console.log(sum4Plus4UntilStopByMaxNum(28));

//4
const a = "hi";
//console.log(c); //Undefined
const someFunction = (arg) => {
  const b = "bye";
  if (arg) {
    const c = "see ya!";
    console.log(a); //Hi
    console.log(b); //Bye
  }
};
someFunction("True");

//5
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For loop
for (let i = 0; i < someArray.length; i++) {
  console.log(someArray[i]);
}

//for of loop
for (const number of someArray) {
  console.log(number);
}

//6
let anotherArray = [1, 2, 3, 4, 5];

//a
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const concatArr = arr1.concat(...arr2);

//b
const numOfItemsInArr = anotherArray.length;

//c
const newArrMinus3 = anotherArray.filter((num) => num !== 3);

//d
const get5 = someArray.find((num) => num === 5);

//e
const slicedArr = someArray.slice(2, 4);

//f
anotherArray.splice(2, 2);
console.log(anotherArray);

//g
anotherArray = [1, 2, 3, 4, 5];
const is4Included = anotherArray.includes(4);
console.log(is4Included);

//h
const indexOf2 = anotherArray.indexOf(2);
console.log(indexOf2);

//i
const isArr = Array.isArray(anotherArray);
console.log(isArr);

//j
const joinArr = anotherArray.join(", ");
console.log(joinArr);

//k
const newArrTimes2 = anotherArray.map((num) => num * 2);
console.log(newArrTimes2);

//l
anotherArray.pop();
console.log(anotherArray);

//m
anotherArray.push(5, 6);
console.log(anotherArray);

//n
anotherArray.pop();
anotherArray.shift();
console.log(anotherArray);

//o
anotherArray.unshift();
console.log(anotherArray);

//p
newArr = [9, 1, 3, 5];
newArr.sort();
console.log(newArr);

//q
anotherArray = [1, 2, 3, 4, 5];

const sumArr = anotherArray.reduce((sum, currentVal) => {
  return sum + currentVal;
}, 0);

console.log(sumArr);

//7
let someObject = {
  color: "black",
};

//a
someObject = Object.assign({ name: "John Doe" }, someObject);

//b
someObject.age = 22;

//c
someObject["address"] = "123 test address";
console.log(someObject);

//d
const valuesOfObj = Object.values(someObject);
console.log(valuesOfObj);

//e
for (const key in someObject) {
  console.log(someObject[key]);
}

//8
const numbers = [{ num: 1 }, { num: 2 }, { num: 3 }];

for (const obj of numbers) {
  console.log(obj.num);
}

//9
const person = new Set();

person.add({ name: "John Doe" });

console.log(person.has({ name: "John Doe" }));

person.forEach((obj) => person.delete(obj));
console.log(person);

//10
const person2 = new Map();
person2.set("name", "John Doe");
console.log(person2.has("name"));
person2.delete("name");
console.log(person2);

//11 Explain what asynchronous programming means in 3 sentences.
//When programming starts but it ends at a later time while the rest of the keep running synchronously.
//One example are fetch calls where we have to await the response from a server to populate the page with the data received.
//Since there is a time lag from when the fetch was call to when the time we receive the data, there's loading place holders until the data arrives.

//12 Explain what call back hell is
//Nested callbacks that resemble a pyramid. To many layers of nested callbacks.

//13 Explain what is a promise and describe the possible states of promises
// A promise is a placeholder for data to come into the code from a server. There is a time delay to get data.
// The two possible states are either success or failure.

//14 What is async/await?
// a way to tell the code that this function is asynchronous and to await the results. Promise based behavior.

//15 Create two async functions:
const fetch = require("node-fetch");

const getCharacters = async () => {
  try {
    const results = await fetch("https://rickandmortyapi.com/api/character");
    const data = await results.json();

    console.log(data.results.map((char) => char.name));
  } catch (error) {
    console.log(error.message);
  }
};

getCharacters();

const get2Char = async () => {
  try {
    const [r1, r2] = await Promise.all([
      fetch("https://rickandmortyapi.com/api/character/2"),
      fetch("https://randomuser.me/api/?results=1"),
    ]);
    const [d1, d2] = await Promise.all([r1.json(), r2.json()]);
    const name1 = d1.name;
    const name2 =
      `${d2?.results[0].name?.first}` + " " + `${d2?.results[0].name?.last}`;
    console.log([name1, name2]);
  } catch (error) {
    console.log(error.message);
  }
};
get2Char();

//16 OOP
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(`${this.name}'s perimeter is`, this.sides * this.sideLength);
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

//17 OOP II

class Square extends Shape {
  constructor(sideLength) {
    super(sideLength);
    this.name = "Square";
    this.sides = 4;
    this.sideLength = sideLength;
  }

  calcArea() {
    console.log("The area is " + this.sideLength * this.sideLength);
  }
}

const cuadrado = new Square(6);
cuadrado.calcPerimeter();
cuadrado.calcArea();
