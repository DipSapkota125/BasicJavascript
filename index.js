// var x = 9;
// console.log(x);
// x = 12;
// console.log(x);
// var x = 7 * 7;
// console.log(x);

// let y = 55;
// console.log(y);
// y = 56;
// console.log(y);

// let y = 90;
// console.log(y);

// const PI = 3.14;
// console.log(PI);
// PI = 3.89;
// console.log(PI);
// const PI = 90;

// const x = 90;
// console.log(x);
// console.log(typeof x);

// let name = "Amrit";
// console.log(name);
// console.log(typeof name);

// let bool = true;
// console.log(bool);
// console.log(typeof bool);

// let x = 90;
// let y = 67;
// let z = true;
// let result = x + y + z;
// console.log(result);

// let name = "Amrit Gurung";
// let y = 90;
// let find = name + y;
// console.log(find);

// const name = "Dip";
// const surname = "Sapkota";
// console.log("My name is : " + name + " " + surname + ".");
// const myGreeting = `My name is ${name} ${surname} .`;
// console.log(`Hello Everyone : ${myGreeting}`);

// let name = "Amrit Gurung";
// console.log(name);
// console.log(typeof name);
// console.log(typeof Number(name));

//type conversion and strings methods

// let number = 678;
// console.log(number);
// console.log(typeof String(number));
// console.log(typeof number.toString());

//Strings method
// let str = "Hello, World!,Nepathya";
// let y = "How Are You?";
// let z = "    How is Your Life    ";

//charAt
// console.log(str.charAt(0));
//length
// console.log(str.length);
//concat
// console.log(str.concat(y));
//replace
// console.log(str.replace("Hello","Hi"))
//indexof
// console.log(str.indexOf("o"));
//lastindexof
// console.log(str.lastIndexOf("l"));
//includes
// console.log(str.includes("Hello"));
//split
// console.log(str.split(","));
//tolowercase
// console.log(str.toLowerCase());
//uppercase
// console.log(str.toUpperCase());
//trim
// console.log(z.trim());
//slice
// console.log(str.slice(0, 4));

// const heading = document.getElementById("mycss");
// heading.innerText = "We miss Chadwick Boseman!";

// heading.style.background = "red";
// heading.style.color = "white";
// heading.style.textAlign = "center";

//condition(if else)
// let email = "dipsapkota325gmail.com";
// let password = "9999999999";

// if (email === "dipsapkota325gmail.com" && password === "9999999999") {
//   console.log("Login success!");
// } else {
//   console.log("Invalid credentials!");
// }

//student grade
// let grade = "A";

// if (grade === "B") {
//   console.log("Very good marks!");
// } else if (grade === "C") {
//   console.log("Good Marks!");
// } else if (grade === "D") {
//   console.log("Needs to improvement!");
// } else if (grade === "A") {
//   console.log("Excellent marks!");
// } else {
//   console.log("Invalid marks");
// }

// x= 10;

// let x = 10;

// if (x > 15) {
//   console.log("X is greater than 15!");
// } else if (x > 5) {
//   console.log("X is greater than 5 but not greater than 15!");
// } else {
//   console.log("X is not greater than 15!");
// }

//weather
// let weather = "winter";

// if (weather === "sunny") {
//   console.log("It's a beautiful day!");
// } else if (weather === "cloudy") {
//   console.log("It's a little bit cloudy!");
// } else if (weather === "rainy") {
//   console.log("It's a rainy day!");
// } else if (weather === "winter") {
//   console.log("Aja kati dherai jado hai!");
// } else {
//   console.log("Invalid weather");
// }

//switch case

// let day = "Sunday";
// switch (day) {
//   case "Monday":
//     console.log("Today is a monday!");
//     break;

//   case "Tuesday":
//     console.log("Today is a Tuesday!");
//     break;

//   case "Wednesday":
//     console.log("Today is a Wednesday!");
//     break;

//   case "Thursday":
//     console.log("Today is a Thursday!");
//     break;

//   case "Friday":
//     console.log("Today is a Friday!");
//     break;

//   case "Saturday":
//     console.log("Today is a Saturday!");
//     break;

//   case "Sunday":
//     console.log("Today is a Sunday!");
//     break;
//   default:
//     console.log("Invalid day!");
//     break;
// }

// let grade = "A";
// switch (grade) {
//   case "A":
//     console.log("Excellent Marks!");
//     break;
//   case "B":
//     console.log("Very Good Marks!");
//     break;

//   case "C":
//     console.log("Good Marks!");
//     break;

//   case "D":
//     console.log("Needs Improvement!");
//     break;

//   case "E":
//     console.log("Fail!");
//     break;

//   default:
//     console.log("Invalid marks");
//     break;
// }

// let month = "October";

// switch (month) {
//   case "January":
//   case "February":
//   case "March":
//     console.log("The month is in Q1");
//     break;

//   case "April":
//   case "May":
//   case "june":
//     console.log("The month is in Q2");
//     break;

//   case "July":
//   case "August":
//   case "September":
//     console.log("The month is in Q3");
//     break;

//   case "October":
//   case "November":
//   case "December":
//     console.log("The month is in Q4");
//     break;

//   default:
//     console.log("Invalid month");
//     break;
// }

//loop

//for loop
// for (let i = 1; i<=10; i++ ) {
//       console.log(i)

// }

//while

// let x = 0;
// while (x<5) {
//       console.log(x)
//       i++;

// }

//do while
// let x = 5;
// do {
//   console.log("hello world");
// } while (x < 5);

//array

// const myArr = [4, 3, 6, 7, 9, 3, 2, 1,14, 12];
// console.log(myArr.length);

// const newArr = ["Shyam", "Geeta", "Sita", "Hari"];
// console.log(newArr);
//push method
// const newAdd = newArr.push("Iron Man");
// console.log(newAdd);

//unshift method

// let newArr = ["Chadwick", "Amrit", "Bartika", "Trishna"];
// console.log(newArr.unshift("Captain America"));
// console.log(newArr);

//pop method
// const newArr = [3, 8, 9, 4, 6, 34];
// console.log(newArr);
// const newData = newArr.pop();
// console.log(newData);

//shift
// const newArr = [67, 4, 5, 7, 9, 8];
// const newVar = newArr.shift();
// console.log(newVar);
// console.log(newArr);

//concat method
// let arr1 = [3, 5, 6, 7, 9];
// let arr2 = ["Avatar", "James Camron", "Chadke 2.0", "Avengers"];

// console.log(arr1.concat(arr2));

//filter method

// let newArr = [2, 7, 8, 9, 5, 3, 67, 23, 98, 45];
// console.log(newArr);
// const findFilter = newArr.filter((n) => n > 5);
// console.log(findFilter);
// console.log(newArr);

//splice method
// const newArr = [5, 7, 8, 4, 3, 9, 5];
// console.log(newArr);
// const newData = newArr.splice(2, 3);
// console.log(newData);
// console.log(newArr);

//reverse method
// const newArr = [6, 9, 5, 10, 4, 3, 1, 2];
// console.log(newArr);
// const newData = newArr.reverse();
// console.log(newData);
// console.log(newArr);

//sort method

const newArr = [7, 9, 4, 3, 2, 5, 10];
console.log(newArr);

const myData = newArr.sort();
console.log(myData);
console.log(newArr);
