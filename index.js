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

// const newArr = [7, 9, 4, 3, 2, 5];
// console.log(newArr);

// const myData = newArr.sort();
// console.log(myData);
// console.log(newArr);

//slice method

// const newArr = [5, 3, 6, 9, 2, 8, 7];

// const newValue = newArr.slice(1, 4);
// console.log(newArr);
// console.log(newValue);

// let myarr = [];

// myarr[0] = 1;
// for(let i = 0; i<10; i++){
//       myarr[i] = i
//       myarr.push(i)
// }

//object

// const myProfile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 23,
//   isMarried: false,
//   isSalary: function () {
//     console.log("mero dherai xaina salary");
//     return true;
//   },
// };

// console.log(myProfile);
// console.log(myProfile.lastName);
// console.log(myProfile["age"]);

// const ans = myProfile.isSalary();
// console.log(ans);

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   color: "red",
//   runWheel: 4,
//   isElectric: false,
//   startEngine: function () {
//     console.log("Start engine!");
//     return true;
//   },
//   endEngine: function () {
//     console.log("Stop engine");
//     return false;
//   },
// };

// console.log(car);
// console.log(car.startEngine());
// console.log(car.endEngine());

// if (car.startEngine()) {
//   console.log("Car is ready for running!");
// } else if (car.endEngine()) {
//   console.log("Car is not ready for running!");
// } else {
//   console.log("Invalid");
// }

//function

// function MyData() {
//   let a = 90;
//   let b = 78;
//   let result = (a + b) / 2;
//   console.log(result);
// }
//  MyData()

// function newFunc(a, b, c) {
//   return (a + b + c) / 2;
// }
// const ans = newFunc(4, 8, 12);
// const an2 = newFunc(9, 5, 11);

// console.log(ans);
// console.log(an2);

// const myValue = function(){
//       let x = 7;
//       let y= 9;
//       let result = x*y;
//       console.log(result)
// }

// console.log(myValue)

// function myData(arr = []) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // total = total + arr[i]
//     total += arr[i];
//   }
//   return total;
// }

// const ans = myData([5, 7, 8, 3, 7]);
// console.log(ans);

//scoping

// var x = 90;

// function myVar() {
//   var x = 9 + 9;
//   console.log(x);
// }

// console.log(x);

// myVar();

//var in block case

// function myBlock() {
//   if (true) {
//     var x = 9 * 9;
//     console.log(x);
//   }
// }

// myBlock();

//let in block and function scope
// function myFuc() {
//   if (true) {
//     let y = (6 + 6) / 2;
//     console.log(y);
//   }
// }

// myFuc();

//const in block scope
// function myCalc() {
//   if (true) {
//     const x = (9 + 5 - 3) * 3;
//     console.log(x);
//   }
// }

// myCalc();

//manipulate
// console.log(document.body.firstElementChild);

// const myHow = document.getElementById("how");

// myHow.innerText = "Chadwick";

// const myYOu = document.getElementsByClassName("heyyou");
// for (i = 0; i < myYOu.length; i++) {
//   myYOu[i].innerText = "Rinkiyake papa";
// }

// const heyDoing = document.getElementsByClassName("letdo");
// for (let i = 0; i < heyDoing.length; i++) {
//   heyDoing[i].innerHTML = "Antman and the wasp <b>Quantamania</b>";
// }

// const myEmail = document.getElementsByName("email");
// for (i = 0; i < myEmail.length; i++) {
//   myEmail[i].style.padding = "4px";
// }

// const mySpan = document.getElementsByTagName("span");
// mySpan[0].style.color = "yellow";
// for (let i = 0; i < mySpan.length; i++) {
//   mySpan[i].innerHTML = "Ronaldo gaye <b>KhadiMuluk</b>";
// }

// const meroButton = document.getElementById("myBtn");
// meroButton.style.backgroundColor = "blue";
// meroButton.style.color = "#fff";
// meroButton.style.border = "none";
// meroButton.style.padding = "2vmax 4vmax";
// meroButton.style.cursor = "pointer";

// console.log(meroButton.getAttribute("id"));
// console.log(meroButton.getAttribute("class"));

// meroButton.setAttribute("class", "thisisBtn");

// const myLocation = document.createElement("h2");
// document.body.append(myLocation);
// myLocation.innerHTML = "<b>Sa karnali</b>";
// document.body.prepend(myLocation);

// const change = document.querySelector(".heyyou");
// change.innerText = "likna";
// change.style.backgroundColor = "red";

// const luZa = document.querySelector("span");
// luZa.innerHTML = "<b>BaklolLol</b>";

//create element

// meroButton.onclick = CallMeLater;
// const dltBtn = document.querySelectorAll("button");
// dltBtn[1].onclick = meroDelete;

// function meroDelete() {
//   const myDelete = document.querySelector("h2");
//   myDelete.remove();
// }

// function CallMeLater() {
//   const Creating = document.createElement("h2");

//   Creating.innerText = "Thanos was right!";

//   document.body.append(Creating);
// }

// meroButton.onclick = myThanos;

// const heyRemove = document.getElementById("remove");

// heyRemove.onclick = DeleteGardey;

// function myThanos() {
//   const newDocument = document.createElement("h2");
//   newDocument.innerText = "Thanos was right!";

//   document.body.prepend(newDocument);
// }

// function DeleteGardey() {
//   const heQuery = document.querySelector("h2");
//   heQuery.remove();
// }

// const arr = [2, 4, 6, 8, 10];

// const myFunc = (value, index) => {
//   if (value === 6) {
//     console.log("exist!");
//   }
// };

// const result = arr.find((value, index) => {
//   if (value > 4) {
//     return value;
//   }
// });

// console.log(result);

// const result = arr.filter((value, index) => {
//   if (value > 4) {
//     return value;
//   }
// });

// console.log(result);

// const result = arr.every((value, index) => {
//   if (value >= 2) {
//     return value;
//   }
// });

// const result = arr.some((value, index) => {
//   return value > 4;
// });

// console.log(result);
// for (let element of arr) {
//   element += element + 3;
//   console.log(element);
// }
//find method

// const result = arr.forEach((value, index) => {
//   return (value += 30);
// });

// console.log(result);
// console.log(arr);

// const result = arr.map((value, index) => {
//   return (value += 20);
// });

// console.log(result);
// console.log(arr);

// const result = arr.reduce((prevValue, value, index) => {
//   console.log(index);
// });

// console.log(result);
// console.log(arr);

// let words = ["hello", "world", "javascript", "reduce"];

// const result = words.reduce((prevValue, value) => {
//   return value.length > prevValue.length ? value : prevValue;
// });

// console.log(result);

// Dom manipulation and its method
// const ans = document.head;
// console.log(ans);

// const ans = document.body.lastElementChild;
// console.log(ans);

// const result = document.getElementById("myIs");

// result.innerHTML = "Ronaldo kina gaye <b>KhadiMuluk</b>";
// result.innerText = "Ronldo gaye khadi";

// const ans = document.getElementsByClassName("myyour");
// ans[0].innerHTML = "<b>Antman and the wasp Quantumania</b>";

// const newData = document.getElementsByTagName("span");
// newData[0].innerHTML = "<strong>I am always Happy!</strong>";

// const myEmail = document.getElementsByName("email");

// const MyCountry = document.querySelector("#mycountry");
// MyCountry.innerHTML = "Nepal has adopted <b>Non-Alliagnance foregin Policy!</b";

// const myButton = document.getElementById("clickgara");
// myButton.innerText = "Save";
// myButton.style.background = "blue";
// myButton.style.color = "#fff";
// myButton.style.padding = "10px";
// myButton.style.border = "none";
// myButton.style.cursor = "pointer";

// const MyClear = document.querySelectorAll("button");

// MyClear[1].innerText = "Clear";
// for (let i = 0; i < MyClear.length; i++) {
//   MyClear[1].innerText = "Clear";
//   MyClear[1].style.background = "red";
//   MyClear[1].style.color = "#fff";
//   MyClear[1].style.border = "none";
//   MyClear[1].style.cursor = "pointer";
//   MyClear[1].style.padding = "10px";
// }

// myButton.onclick = myFunc;
// MyClear[1].onclick = DeleteGardeu;

// function DeleteGardeu() {
//   const PleaseDelete = document.querySelector("h2");
//   PleaseDelete.remove();
// }

// function myFunc() {
//   const Create = document.createElement("h2");
//   Create.innerHTML = "Thanos was <b>Right!</b>";
//   document.body.append(Create);
// }

//map = if you use map method it return new array by iterating the main array
//forEach = if you use forEach method it cannot return anything it can iterating main only

// let arr = [6, 8, 4, 2, 10, 12, 14];

// const myMine = arr.reduce((total, value, index, arr) => {
//   console.log(total, value, index, arr);
//   return (total + value) / 2;
// });

// console.log(myMine);

//for filter method
// const heyFilter = arr.find((value, index) => {
//   return value > 4;
// });

// console.log(heyFilter);

// const myBull = arr.forEach((value, index, array) => {
//   return (array[index] = value + 2);
// });

// console.log(myBull);

// const heyLol = arr.reduce((accum, value) => {
//   accum.push(value + 2);
//   return accum;
// }, []);

// console.log(heyLol);

// const lodButton = document.getElementById("myclick");

// const MyLogo = document.getElementById("mylog");
// const MyBox = document.getElementById("mybox");
// const MyInput = document.querySelector("input");

// lodButton.addEventListener("click", () => {
//   MyBox.classList.add("classForDiv");
// });

// MyBox.addEventListener("mouseover", () => {
//   lodButton.style.transform = "scale(1.1)";
//   MyLogo.style.background = "gray";
// });

// function func3() {
//   lodButton.style.transform = "scale(1.1)";
//   MyLogo.style.background = "gray";
// }

// MyBox.addEventListener("mouseover", func3);

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   lodButton.style.filter = "blur(10px)";
// });

// MyBox.addEventListener("dblclick", () => {
//   document.body.style.background = "black";
// });

// MyBox.addEventListener("click", () => {
//   document.body.style.background = "#fff";
// });

// MyInput.addEventListener("change", (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
// });

//Advance Array MEthod

//forEach
//if we use for each it cannot return array(anything).it only iterate main array
// let arr = [6, 8, 4, 2, 10, 12];

// const MyForEach = arr.forEach((value, index, array) => {
//   return (array[index] = value + 2);
// });

// console.log(MyForEach);

//map
//if we use map method it returns new array after iterate main array;
// const MyMap = arr.map((value, index, array) => {
//   return (array[index] = value + 2);
// });

// console.log(MyMap);

//filter
// const MyFilter = arr.filter((value, index) => {
//   // return value > 2;
//   // return value % 2 === 0;//for even
//   return value % 2 !==0 //for odd
// });

// console.log(MyFilter);

//find method
// const MyFind = arr.find((value, index) => {
//   return value > 4;
// });

// console.log(MyFind);

//reduce method
// return single value outputma(sum,average)
// const myReduce = arr.reduce((total, curValue, index) => {
//   console.log(total, curValue, index);
// total = total + curValue;
// total = (total + curValue) / 2;

// return total;
// });

// console.log(myReduce);

//Event Listeners

// const newClickBtn = document.getElementById("newclick");
// const newHello = document.getElementById("hello");
// const MyBox = document.getElementById("newbox");
// const HeyInput = document.querySelector("input");

// newClickBtn.addEventListener("click", () => {
//   MyBox.classList.add("newBoxDiv");
// });

// newClickBtn.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   newClickBtn.style.background = "purple";
// });

// MyBox.addEventListener("mouseover", () => {
//   newClickBtn.style.transform = "scale(1.1)";
//   newHello.style.background = "gray";
// });

// MyBox.addEventListener("mouseout", () => {
//   newClickBtn.style.transform = "";
//   newHello.style.background = "";
// });

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   newClickBtn.style.filter = "blur(10px)";
// });

// MyBox.addEventListener("dblclick", () => {
//   document.body.style.background = "black";
// });

// MyBox.addEventListener("click", () => {
//   document.body.style.background = "#fff";
// });

// HeyInput.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

//add event listeners

const NewClickBtn = document.getElementById("myclick");
const NewBox = document.getElementById("mybox");
const NewTag = document.getElementById("mytag");
const MyInput = document.querySelector("input");

NewClickBtn.addEventListener("click", () => {
  NewBox.classList.add("newCssDiv");
  //   NewBox.style.background = "purple";
  //   NewBox.style.color = "#fff";
  //   NewBox.style.margin = "20px";
});

NewBox.addEventListener("mouseover", () => {
  NewClickBtn.style.transform = "scale(1.1)";
  NewTag.style.background = "yellow";
});

NewBox.addEventListener("mouseout", () => {
  NewClickBtn.style.transform = "";
  NewTag.style.background = "";
});

MyInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

NewBox.addEventListener("dblclick", () => {
  document.body.style.background = "black";
});

NewBox.addEventListener("click", () => {
  document.body.style.background = "#fff";
});

NewClickBtn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  NewClickBtn.style.background = "pink";
});

addEventListener("contextmenu", (e) => {
  e.preventDefault();
  ``;
});
