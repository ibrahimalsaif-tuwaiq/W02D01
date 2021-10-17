/*   Function  */

// 1 - Write a function sum that accepts two number arguments and returns ...

const sum = function (a, b) {
  return a + b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

// 2 - Write a function average that accepts two number arguments ...

const average = function (a, b) {
  return (a + b) / 2;
};

average(20, 5); // => 12.5
average(10, 20); // => 15

// 3 - Wite a function findFactorial Given an integer n, return n! (n factorial)

const findFactorial = (num) => {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

findFactorial(1); // => 1
findFactorial(3); // => 6

// 4 - Write a function round that accepts one number argument ...

const round = function (number) {
  return Math.round(number);
};

round(5); // => 5
round(2.4); // => 2

// 5 - Write a function toThePowerOf that accepts two number ...

const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8

// 6 - Write a function randomNumber that returns a random ...

const randomNumber = function () {
  return Math.random();
};

randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673

// 7 - Write a function oneOrZero that uses randomNumber ...

const oneOrZero = function () {
  return Math.floor(Math.random() * 2);
};

oneOrZero(); // => 1
oneOrZero(); // => 0

// 8 - Write a function randomRange that accepts a positive number ...

const randomRange = function (number) {
  return Math.floor(Math.random() * (number - 0 + 1) + 0);
};

randomRange(10); // => 10
randomRange(10); // => 7

// 9 - write a function includeOf that accept two string arguments ...

// with for loop
const includeOf = function (string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == character) {
      return true;
    }
  }
  return false;
};

// with includes()
const includeOf2 = function (string, character) {
  return string.includes(character);
};

includeOf("Hello", "h"); // => false
includeOf("hello", "h"); // => true

// Extra - Rock Paper Scissors Game
const game = function () {
  alert("Welcome to Rock Paper Scissors");
  const playerChoice = prompt(
    "Please choose a number to play:\n1-rock \n2-paper \n3-scissors"
  );
  const choices = ["rock", "paper", "scissors"];
  const computer = choices[Math.floor(Math.random() * choices.length)];
  const player = choices[playerChoice - 1];

  if (player === computer) {
    alert(`Player chose ${player} and Computer chose ${computer}, it's a draw`);
  } else if (player === "rock") {
    if (computer === "paper") {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Computer won`
      );
    } else {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Player won`
      );
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Player won`
      );
    } else {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Computer won`
      );
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Computer won`
      );
    } else {
      alert(
        `Player chose ${player} and Computer chose ${computer}, Player won`
      );
    }
  }
};

/*  Array */

// 1 - Write a function addToArray that accepts two arguments ...

const addToArray = function (array, string) {
  array.push(string);
  return array;
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]

// 2 - Write a function convertToString that accepts an argument array of ...

const convertToString = function (array) {
  return array.join(" ");
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"

// 3 - Write a function updateValue that accepts three arguments ...

const updateValue = function (array, index, value) {
  if (array.length <= index) {
    return "there is no element to updated in this index";
  } else {
    array[index] = value;
    return array;
  }
};

updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]

// 4 - Write a function onlyString that accepts an arguments, array ...

const onlyString = function (array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []

// 5 - Write a function login that accepts two string arguments, username ...

const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  for (let i = 0; i < users.length; i++) {
    if (username === users[i][0]) {
      if (password === users[i][1]) {
        return "Login Successful";
      }
    }
  }
  return "Login Failed";
};

login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"

// 6 - Write a function maximumNumber that accepts an array of numbers ...

const maximumNumber = function (numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6

// 7 - Write a function reversString that accepts a string and returns the string reversed

// with .split and .reverse
const reversString = function (string) {
  let newString = "";
  const splitArray = string.split("");
  const reversedArray = splitArray.reverse();
  for (let i = 0; i < reversedArray.length; i++) {
    newString += reversedArray[i];
  }
  return newString;
};

// without .split and .reverse
const reversString2 = function (string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};

console.log(reversString2("Hello"));

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"

// Extra

// 1 - Write a function createUser that accepts two string arguments, username and password ...

const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  for (let i = 0; i < allUsers.length; i++) {
    if (username === allUsers[i].username) {
      return "That username is not available";
    }
  }
  allUsers.push({ username: username, password: password });
  return "Registration successful";
};

createUser("James", "123456"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

createUser("Jane", "5321"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

// 2 - Write a function sliceArray that accepts two arguments, array and control ...

const sliceArray = function (array, control) {
  const newArray = [];
  let counter = Math.ceil(array.length / 2);
  for (let i = 0; i < counter; i++) {
    newArray.push(array.splice(0, control));
    if (array.length === 0) {
      break;
    }
  }
  return newArray;
};

sliceArray([10, 20, 30, 40, 50, 60], 2); // => [[10,20],[30,40],[50,60]]
sliceArray([10, 20, 30, 40, 50, 60], 3); // => [[10,20,30],[40,50,60]]
