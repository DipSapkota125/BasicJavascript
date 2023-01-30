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

// const NewClickBtn = document.getElementById("myclick");
// const NewBox = document.getElementById("mybox");
// const NewTag = document.getElementById("mytag");
// const MyInput = document.querySelector("input");

// NewClickBtn.addEventListener("click", () => {
//   NewBox.classList.add("newCssDiv");
//   NewBox.style.background = "purple";
//   NewBox.style.color = "#fff";
//   NewBox.style.margin = "20px";
// });

// NewBox.addEventListener("mouseover", () => {
//   NewClickBtn.style.transform = "scale(1.1)";
//   NewTag.style.background = "yellow";
// });

// NewBox.addEventListener("mouseout", () => {
//   NewClickBtn.style.transform = "";
//   NewTag.style.background = "";
// });

// MyInput.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// NewBox.addEventListener("dblclick", () => {
//   document.body.style.background = "black";
// });

// NewBox.addEventListener("click", () => {
//   document.body.style.background = "#fff";
// });

// NewClickBtn.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   NewClickBtn.style.background = "pink";
// });

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   ``;
// });

//local storage and session storage

// const MyCLICKBtn = document.getElementById("myclick");
// const HeyInput = document.getElementById("myinput");
// const MyClear = document.getElementById("myclear");

// const CallMeBack = () => {
//   alert(HeyInput.value);
//   //   sessionStorage.setItem("key", HeyInput.value);
//   localStorage.setItem(
//     "name",
//     JSON.stringify({ fname: "Ram", lname: "thapa", age: 23 })
//   );
// };

// const DeleteToken = () => {
//   localStorage.clear();
// };
// MyCLICKBtn.addEventListener("click", CallMeBack);
// MyClear.addEventListener("click", DeleteToken);

// if (localStorage.getItem("name")) {
//   alert(localStorage.getItem("name"));
//   console.log(JSON.parse(localStorage.getItem("name")));
//   console.log(JSON.parse(localStorage.getItem("name")));
// } else {
//   alert("xainata k dekheune");
// }

//math object
// const a = Math.round(4.5);
// console.log(a);  //returns 5

// const a = Math.floor(4.8);
// console.log(a);

// const a = Math.ceil(4.2);
// console.log(a);

// const a = Math.trunc(7.4);
// console.log(a);

//

// const a = Math.pow(2, 4);
// console.log(a);

// const a = Math.sign(-46);
// console.log(a);

// const a = Math.sqrt(625);
// console.log(a);

//abs return absolute value(postive only if we insert negative)

// const a = Math.abs(-7);
// console.log(a);

// function myFunc(a, b) {
//   return Math.abs(a - b);
// }

// console.log(myFunc(3, 8));

// const angle = 90 * (Math.PI / 180);
// console.log(Math.sin(angle));

// const value = Math.min(65, 34, 2, 8, 12);
// console.log(value);

// const curDate = new Date("2019-05-12");
// console.log(curDate);

// let myDate = new Date();
// console.log(myDate.toISOString());

// setTimeout(() => {
//   console.log("hello world!");
// }, 2000);

// let setId = setInterval(() => {
//   console.log("Hello world!");
// }, 1000);

// setTimeout(() => {
//   clearInterval(setId);
// }, 1000);

// setTimeout(() => {
//   console.log("5 second have passed");
// }, 5000);

//math object

// const value = Math.random();
// console.log(value);

//abs
// const value = Math.abs(-5);
// console.log(value);

// function subtract(a, b) {
//   return Math.abs(a - b);
// }
// console.log(subtract(2, 6));

//trunk
// const value = Math.trunc(5.8);
// console.log(value);

// const value = Math.round(4.5)
// console.log(value)

// const value = Math.floor(4.5);
// console.log(value);

// const value = Math.max(67, 23, 89, 5, 7, 8);
// console.log(value);

// const value = Math.min(6, 89, 45, 34, 2, 1);
// console.log(value);

// const value = Math.ceil(5.1);
// console.log(value);

// const value = Math.pow(2, 4);
// console.log(value);

// const value = Math.sqrt(625);
// console.log(value);

//Date in javascript
// const myDate = new Date();
// console.log(myDate);

// const oneByOne = new Date();
// console.log(oneByOne.getTime());

// const oneByOne = new Date();
// console.log(oneByOne.getDate());

// const oneByOne = new Date();
// console.log(oneByOne.getDay());

// const oneByOne = new Date();
// console.log(oneByOne.getMilliseconds());

// const oneByOne = new Date();
// console.log(oneByOne.getFullYear());

// const oneByOne = new Date();
// console.log(oneByOne.getMinutes());

// const oneByOne = new Date();
// console.log(oneByOne.getSeconds());

// const oneByOne = new Date();
// console.log(oneByOne.getMonth());

// const oneByOne = new Date();
// console.log(oneByOne.toISOString());

//setTimeout
// setTimeout(() => {
//   console.log("Sabai janako atmale santipaos!");
// }, 3000);

// const setId = setInterval(() => {
//   console.log("europe ma kabadi ko bhau ma bikne plan naleu sirkar!");
// }, 2000);

// setTimeout(() => {
//   clearInterval(setId);
//   console.log("lala ava dekhi naya plan ayo ktma ma");
// }, 3000);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// }

// let person1 = new Person("John", "Doe");
// let person2 = new Person("Jane", "Smith");

// console.log(person1.firstName);
// console.log(person2.firstName);

// person1.greet();
// person2.greet();

// function BankDetails(CustomerName, Balance = 0) {
//   this.CustomerName = CustomerName;
//   this.BankaccountNumber = Date.now();
//   this.Balance = Balance;
// }

// const DipAccount = new BankDetails("Dip", 5000);
// const rabinaAccount = new BankDetails("Rabina Subedi", 9000);

// console.log(rabinaAccount);

// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const form = document.getElementById("form");
// const container = document.querySelector(".container");

//let tasks = []
//showaddTasks

// function showAllAddTask() {
//   tasks.forEach((value, index) => {
//     const div = document.createElement("div");
//     div.setAttribute("class", "task");

//     const innerDiv = document.createElement("div");
//     div.append(innerDiv);

//     const p = document.createElement("p");
//     p.innerText = value.title;
//     innerDiv.append(p);

//     const span = document.createElement("span");
//     span.innerText = value.description;
//     innerDiv.append(span);

//     const btn = document.createElement("button");
//     btn.setAttribute("class", "deleteBtn");

//     btn.innerText = "-";

//     btn.addEventListener("click", () => {
//       removeTasks();
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//       showAllAddTask();
//     });

//     div.append(btn);
//     container.append(div);
//   });
// }

//removetasks

// function removeTasks() {
//   tasks.forEach(() => {
//     const heyRemove = document.querySelector(".task");
//     heyRemove.remove();
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   removeTasks();
//   tasks.push({
//     title: title.value,
//     description: description.value,
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   showAllAddTask();
// });

//oops concept(constructor function)

// const accoutForm = document.querySelector("#heyform");
// const customerName = document.querySelector("#customerName");
// const balance = document.querySelector("#balance");

// const depoForm = document.querySelector("#depo");
// const accountNumber = document.querySelector("#accountNumber");
// const amount = document.getElementById("amount");

// const withdrawForm = document.querySelector("#withdraw");
// const checkAccountNumber = document.querySelector("#checkaccountNumber");
// const withdrawAmount = document.querySelector("#withdrwamount");

// let accounts = [];
// accoutForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = new BankAccount(customerName.value, +balance.value);
//   accounts.push(account);
//   console.log(accounts);
// });

// depoForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newValue = accounts.find(
//     (account) => account.accountNumber === +accountNumber.value
//   );
//   newValue.deposit(+amount.value);
//   console.log(accounts);
// });

// withdrawForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const prevValue = accounts.find(
//     (account) => account.accountNumber === +checkAccountNumber.value
//   );
//   prevValue.withdraw(+withdrawAmount.value);
//   console.log(accounts);
// });

// function BankAccount(customerName, balance = 0) {
//   //properties
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     // this.balance = this.balance + amount;
//     this.balance += amount;
//   };

//   this.withdraw = (amount) => {
//     // this.balance = this.balance + amount;
//     this.balance -= amount;
//   };
// }

// const result = new BankAccount("Dip", 5000);
// const johnAccount = new BankAccount("John");

// result.deposit(7000);
// johnAccount.deposit(3000);

// result.withdraw(2000);

// console.log(result, johnAccount);

//constructor function

//for creating bank account
// const Form1 = document.querySelector("#form1");
// const customerName = document.querySelector("#customerName");
// const Balance = document.querySelector("#balance");

// //for deposit
// const Form2 = document.querySelector("#form2");
// const AccountNumber = document.querySelector("#accountNumber");
// const amount = document.getElementById("amount");

// //for withdraw
// const Form3 = document.querySelector("#form3");
// const CheckAccountNumber = document.querySelector("#checkaccountNumber");
// const WithdrawAmount = document.getElementById("withdrawamount");

// let accounts = [];

// Form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = new BankAccount(customerName.value, +Balance.value);
//   accounts.push(account);
//   console.log(accounts);
// });

// Form3.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const updateValue = accounts.find(
//     (account) => account.accountNumber === +CheckAccountNumber.value
//   );
//   updateValue.withdraw(+WithdrawAmount.value);

//   console.log(accounts);
// });
// Form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newValue = accounts.find(
//     (account) => account.accountNumber === +AccountNumber.value
//   );
//   newValue.deposit(+amount.value);

//   console.log(accounts);
// });

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance = this.balance + amount;
//   };
//   this.withdraw = (amount) => {
//     this.balance = this.balance - amount;
//   };
// }

// const johnAccount = new BankAccount("John", 5000);
// const dipAccount = new BankAccount("Dip");

// johnAccount.deposit(9000);
// dipAccount.deposit(6000);
// dipAccount.withdraw(2000);
// console.log(johnAccount, dipAccount);

//oop concept
//making conctructor function
// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = function (amount) {
//     this.balance -= amount;
//   };
// }

// const anilAccount = new BankAccount("anil kesari shah", 5000);
// const DipAccount = new BankAccount("dip sapkota");

// DipAccount.deposit(6700);
// anilAccount.withdraw(500);

// console.log(anilAccount, DipAccount);

//protype in javascript
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greet = function () {
//   console.log("Hello, " + this.firstName + " " + this.lastName);
// };

// const dipObj = new Person("Dip", "Sapkota");
// dipObj.greet();

// const johnObj = new Person("john", "Doe");
// johnObj.greet();

//for add
// const Form1 = document.getElementById("form1");
// const CustomerName = document.getElementById("customerName");
// const AddAmount = document.getElementById("addAmount");

// const Form2 = document.getElementById("form2");
// const AccountNumber = document.getElementById("accountNumber1");
// const DepoAmount = document.getElementById("depoAmount");

// const Form3 = document.getElementById("form3");
// const CheckAccountNumber = document.getElementById("checkAccountNumber");
// const CheckAmount = document.getElementById("withdrawAmount");

// let accounts = [];

// Form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = new BankAccount(CustomerName.value, +AddAmount.value);
//   accounts.push(account);
//   console.log(accounts);
// });

// Form3.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const withDrawValue = accounts.find(
//     (value) => value.accountNumber === +CheckAccountNumber.value
//   );
//   withDrawValue.withdraw(+CheckAmount.value);
//   console.log(accounts);
// });

// Form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const DepoValue = accounts.find(
//     (account) => account.accountNumber === +AccountNumber.value
//   );
//   DepoValue.deposit(+DepoAmount.value);
//   console.log(accounts);
// });

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance = this.balance + amount;
//   };
//   this.withdraw = function (amount) {
//     this.balance -= amount;
//   };
// }

// const ramAccount = new BankAccount("Ram", 3000);
// const shyamAccount = new BankAccount("Shyam");

// shyamAccount.deposit(4000);
// shyamAccount.withdraw(500);

// console.log(ramAccount, shyamAccount);

//oop concept
//constructor fuction convert into object

//dom manipulation
// const Form1 = document.getElementById("form1");
// const CustomerName = document.getElementById("customerName");
// const Addamount = document.getElementById("addamount");

// const Form2 = document.getElementById("form2");
// const DepoAccountNumber = document.getElementById("depoaccountNumber");
// const DepoAmount = document.getElementById("depoamount");

// const Form3 = document.getElementById("form3");
// const CheckAccountNumber = document.getElementById("checkaccountNumber");
// const WithdrawAmount = document.getElementById("withdrawamount");

// let accounts = [];
// Form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = new BankAccount(CustomerName.value, +Addamount.value);
//   accounts.push(account);

//   console.log(accounts);
// });

// Form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const DepoValue = accounts.find(
//     (value, index) => value.accountNumber === +DepoAccountNumber.value
//   );
//   DepoValue.deposit(+DepoAmount.value);

//   console.log(accounts);
// });

// Form3.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const WithdrawValue = accounts.find(
//     (value, index) => value.accountNumber === +CheckAccountNumber.value
//   );
//   WithdrawValue.withdraw(+WithdrawAmount.value);
//   console.log(accounts);
// });

// function BankAccount(CustomerName, balance = 0) {
//   this.customerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance = this.balance + amount;

//   };
//   this.withdraw = function (amount) {
//     this.balance = this.balance - amount;

//   };
// }

// const anilAccount = new BankAccount("Anil kesari shah", 5000);
// const RamAccount = new BankAccount("Ram");

// RamAccount.deposit(2000);
// anilAccount.withdraw(1000);

// console.log(anilAccount, RamAccount);

//prototype concept in javascript

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNUmber = Date.now();
//   this.balance = balance;

// this.deposit = function (amount) {
//   this.balance = this.balance + amount;
// };

// this.withdraw = function (amount) {
//   this.balance = this.balance - amount;
// };
// }

// BankAccount.prototype.add = function (amount) {
//   this.balance += amount;
//   console.log(`Added ${amount}, new balance:${this.balance}`);
// };

// BankAccount.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
//   console.log(`Deposited ${amount}, new Balance : ${this.balance}`);
// };

// BankAccount.prototype.withdraw = function (amount) {
//   if (this.balance >= amount) {
//     this.balance = this.balance - amount;
//     console.log(`Withdraw ${amount},New Balance:${this.balance}`);
//   } else {
//     console.log(`Insufficient funds,current balance:${this.balance}`);
//   }
// };

// const ramAccount = new BankAccount("Ram", 6000);

// ramAccount.deposit(4500);
// ramAccount.withdraw(11000);

// console.log(ramAccount);

// class BankAccount {
//   CustomerName;
//   AccountNumber;
//   balance;

//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.AccountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount},Current Balance is :${this.balance}`);
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Withdraw ${amount},Current Balance is:${this.balance}`);
//     } else {
//       console.log(`Insufficient fund,Current balance is:${this.balance}`);
//     }
//   }
// }

// const hariAccount = new BankAccount("hari", 5000);
// hariAccount.deposit(4000);
// console.log(hariAccount);

// class Person {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hey my name is :${this.name}, and my age is :${this.age}`);
//   }
// }

// const person1 = new Person("hari", 23);
// person1.sayHello();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

let person1 = new Person("John", 30);
let person2 = new Person("Amy", 25);

// person1.sayHello();
// person2.sayHello();

//simple constructor function
// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount}, New Balance is :${this.balance}`);
//   };

//   this.withdraw = function (amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Withdraw ${amount}, New Balance is :${this.balance}`);
//     } else {
//       console.log(`Insufficient fund, New Balance is : ${this.balance}`);
//     }
//   };
// }

// const hariAccount = new BankAccount("Hari", 5000);
// const anilAccount = new BankAccount("Anil Kesari Shah");
// anilAccount.deposit(6700);
// anilAccount.withdraw(2300);

// console.log(hariAccount, anilAccount);

//prototype chain

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

// this.deposit = function (amount) {
//   this.balance = this.balance + amount;
// };

// this.withdraw = function (amount) {
//   this.balance = this.balance - amount;
// };
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
//   console.log(`Deposited ${amount}, Current Balance is : ${this.balance}`);
// };

// BankAccount.prototype.withdraw = function (amount) {
//   if (this.balance >= amount) {
//     this.balance = this.balance - amount;
//     console.log(`Withdraw ${amount},Current balance is :${this.balance}`);
//   } else {
//     console.log(`Insufficient fund, Current balance is:${this.balance}`);
//   }
// };

// const hariAccount = new BankAccount("Hari", 6000);
// const anilAccount = new BankAccount("anil");
// anilAccount.deposit(5000);

// console.log(hariAccount, anilAccount);

// class BankAccount {
// CustomerName;
// accountNumber;
// balance;

//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount},Current Balance is:${this.balance}`);
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Withdraw ${amount},Current Balance is:${this.balance}`);
//     } else {
//       console.log(`Insufficient fund,Current balance is:${this.balance}`);
//     }
//   }
// }
// const ramAccount = new BankAccount("Ram", 5000);
// ramAccount.deposit(6000);
// console.log(ramAccount);

// class Person {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   callme() {
//     console.log(`My name is : ${this.name}, and age is : ${this.age}`);
//   }
// }

// const ramaccount = new Person("ram", 18);
// ramaccount.callme();

// contructor function in javascript

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Deposited ${amount},Current balance is : ${this.balance}`);
// };

// BankAccount.prototype.withdraw = function (amount) {
//   if (this.balance >= amount) {
//     this.balance -= amount;
//     console.log(`Withdraw ${amount},Current balance is:${this.balance}`);
//   } else {
//     console.log(`Insufficient fund,Current balance is:${this.balance}`);
//   }
// };

// const ramAccount = new BankAccount("Ram", 5000);
// const hariAccount = new BankAccount("Hari");
// const shyamAccount = new BankAccount("Shyam");

// hariAccount.deposit(8000);
// ramAccount.withdraw(6000);
// shyamAccount.deposit(10000);

// console.log(ramAccount, hariAccount);

//class based oop(concept in javascript)

//consructor
//constructor is a special method
// that is used to initialize the object,when it is created

// class BankAccount {
//   CustomerName;
//   accountNumber;
//   balance;

//constructor
//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log(`Deposited ${amount},Current balance is:${this.balance}`);
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance = this.balance - amount;
//       console.log(`Withdraw ${amount},Current balance is:${this.balance}`);
//     } else {
//       console.log(`Insufficient fund,Current balance is:${this.balance}`);
//     }
//   }
// }
// const shyamAccount = new BankAccount("shyam", 5000);
// const gitaAccount = new BankAccount("Gita");

// gitaAccount.deposit(5500);

// console.log(shyamAccount, gitaAccount);

//inheritance concept
//we have dry principle
//

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log(`Take Business loan is: ${amount}`);
// };

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// function SavingAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.personalLoan = function (amount) {
//   console.log(`Take personal loan is: ${amount}`);
// };

// const kalikaAccunt = new BankAccount("Kalika", 5000);
// const ramAccount = new CurrentAccount("Ram", 7000);
// const hariAccount = new SavingAccount("Hari", 6000);
// hariAccount.deposit(5000);
// hariAccount.withdraw(100);
// hariAccount.personalLoan(5000);
// console.log(hariAccount);

//for class
// class BankAccount {
//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.accountNUmber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposited ${amount},current balance is:${this.balance}`);
//   }
//   withdraw(amount) {
//     this.balance -= amount;
//     console.log(`withdraw ${amount},current balance is:${this.balance}`);
//   }
// }

// class CurrentAccount extends BankAccount {
//   transactionLimit = 50000;
//   constructor(CustomerName, balance=0) {
//     super(CustomerName, balance);
//   }

//   takeBusinessLoan(amount) {
//     console.log(`Taking business loan is: ${amount}`);
//   }
// }

// class SavingtAccount extends BankAccount {
//   transactionLimit = 10000;
//   constructor(CustomerName, balance) {
//     super(CustomerName, balance);
//   }

//   takePersonalLoan(amount) {
//     console.log(`Taking Personal loan is: ${amount}`);
//   }
// }

// const ramAccount = new BankAccount("Ram", 5000);
// const shyamAccount = new CurrentAccount("Shyam", 4000);
// shyamAccount.deposit(3500);
// shyamAccount.takeBusinessLoan(70000);

// console.log(shyamAccount);

//encapsulation
// class BankAccount {
//   #CustomerName;
//   accountNumber;
//   #balance;

//   constructor(CustomerName, balance = 0) {
//     this.#CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount},Current balance is : ${this.#balance}`);
//   }

//   withdraw(amount) {
//     this.#balance -= amount;
//   }

//   set Name(value) {
//     this.#CustomerName = value;
//   }

//   get Name() {
//     return this.#CustomerName;
//   }
//   set balance(amount) {
//     if (isNaN(amount)) {
//       throw new Error("Invalid input");
//     } else {
//       this.#balance = amount;
//       console.log(
//         `Set amount ${amount}, Current balance is : ${this.#balance}`
//       );
//     }
//   }

//   get balance() {
//     return this.#balance;
//   }
// }

// class CurrentAccount extends BankAccount {
//   transactionLimit = 20000;
//   constructor(CustomerNAme, balance = 0) {
//     super(CustomerNAme, balance);
//   }

//   #calCulatingInterest() {
//     console.log("interest calculating");
//   }

//   takePersonalLoan(amount) {
//     this.#calCulatingInterest(amount);
//     console.log(`Taking personal loan is : ${amount}`);
//   }
// }
// class SavingAccount extends BankAccount {
//   transactionLimit = 50000;
//   constructor(CustomerName, balance = 0) {
//     super(CustomerName, balance);
//   }

//   takeBusinessLoan(amount) {
//     console.log(`Taking business Loan is : ${amount}`);
//   }
// }

// const hariAccount = new BankAccount("hari", 5000);
// const hariAccount = new SavingAccount("hari", 5000);
// const hariAccount = new CurrentAccount("hari", 4500);
// hariAccount.calCulatingInterest(45000);
// hariAccount.Name = "HariLal";

// console.log(hariAccount);

// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// const hariAccount = new BankAccount("Hari", 6000);
// console.log(hariAccount);

//inheritance
// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 50000;
// }

// function SavingAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 20000;
// }

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log(`Taking business loan is : ${amount}`);
// };

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// const hariAccount = new BankAccount("Hari", 5000);
// const hariAccount = new CurrentAccount("Hari", 5000);
// hariAccount.deposit(5000);

// hariAccount.takeBusinessLoan(50000);
// console.log(hariAccount);

//In the constructor function, this refers to the object that is being created by the constructor. By using the this keyword, properties and methods can be added to the object.

// For example, in the BankAccount constructor,
// this.ClientName = CustomerName assigns the
// value of the CustomerName parameter to a new
//  property called ClientName on the object that
//  is being created. Similarly, this.accountNumber = Date.now()
//  assigns the current timestamp to a new property
//   called accountNumber on the object, and
//    this.balance = balance assigns the value
//     of the balance parameter to a new property
//     called balance on the object.

// This way the properties like ClientName, accountNumber, balance
//  are added to the object that is being created by the
//  constructor and can be accessed using the object
//   name as shown in the log statement.
// function BankAccount(CustomerName, balance = 0) {
//   this.ClientName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(
//     `Deposited amount ${amount},Current balance is : ${this.balance}`
//   );
// };

// BankAccount.prototype.withdraw = function (amount) {
//   if (this.balance >= amount) {
//     this.balance -= amount;
//     console.log(`Withdraw ${amount},Current balance is : ${this.balance}`);
//   }
// };

// function CurrentAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log(`Taking business loan ${amount}`);
// };

// In JavaScript, inheritance can be achieved by
//  using the prototype chain. The prototype
//   chain allows an object to inherit properties
//  and methods from its prototype,
//   which is an object that it is linked to.

// When you use the Object.create()
// method to create a new object and set
//  its prototype to another object, it creates
//  an object that inherits from the prototype object.

// In the code you provided, CurrentAccount.prototype =
//  Object.create(BankAccount.prototype); creates a new object
//  called CurrentAccount.prototype
//  and sets its prototype to BankAccount.prototype.

// So the CurrentAccount constructor
//  function now inherits all of the
//  properties and methods defined on the
//   BankAccount.prototype object, this allows
//    the CurrentAccount objects to access the
//     properties and methods of BankAccount and
//     also add their own properties and methods.

// This is a way to achieve inheritance
//  in javascript, as objects created with
//   the CurrentAccount constructor now have
//    access to the properties and methods defined on
//     the BankAccount.prototype object.

// function SavingAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance);
//   this.transactionLimit = 20000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log(`Taking personal loan${amount}`);
// };
// const shyamAccount = new BankAccount("Shyam", 5600);
// const amritAccount = new CurrentAccount("Amrit", 6700);
// const amritAccount = new SavingAccount("amrit", 7000);
// amritAccount.deposit(3400);
// amritAccount.withdraw(1200);
// amritAccount.takePersonalLoan(60000);
// console.log(amritAccount);

//important
//class based inheritance
// class BankAccount {
//   #CustomerName;
//   accountNumber;
//   #balance;
//   constructor(CustomerName, balance = 0) {
//     this.#CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount},Current balance is ${this.#balance}`);
//   }

//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.#balance -= amount;
//       console.log(`Withdraw ${amount},Current balance is ${this.#balance}`);
//     }
//   }

//   set balance(amount) {
//     if (isNaN(amount)) {
//       throw new Error("Invlid  balance input!");
//     } else {
//       this.#balance = amount;
//     }
//   }

//   set Name(value) {
//     this.#CustomerName = value;
//   }

//   get Name() {
//     return this.#CustomerName;
//   }

//   get balance() {
//     return this.#balance;
//   }
// }

// class CurrentAccount extends BankAccount {
//   constructor(CustomerName, balance = 0) {
//     super(CustomerName, balance);
//     this.transactionLimit = 50000;
//   }

//   takeBusinessLoan(amount) {
//     console.log(`Taking business loan is : ${amount}`);
//   }
// }

// class SavingAccount extends BankAccount {
//   constructor(CustomerName, balance = 0) {
//     super(CustomerName, balance);
//     this.transactionLimit = 30000;
//   }

//   #calculateInterest(amount) {
//     const interest = amount * 0.1; //10%
//     console.log(`Interest rate is : ${interest}`);
//   }

//   takingPersonalLoan(amount) {
//     this.#calculateInterest(amount);
//     console.log(`Taking business loan: ${amount}`);
//   }
// }

// const bhuwanAccount = new SavingAccount("bhuwan", 6000);
// bhuwanAccount.takingPersonalLoan(40000);

// console.log(bhuwanAccount);

// bhuwanAccount.Name = "Gita";
// console.log(bhuwanAccount.Name);

//static

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }

//   static subtract(a, b) {
//     return a - b;
//   }

//   static multiply(a, b) {
//     return a * b;
//   }

//   static divide(a, b) {
//     return a / b;
//   }
// }

// let result = Calculator.add(5, 10);  // result is 15
// let result2 = Calculator.divide(10,2);  // result is 5

// class MyData {
//   static add(a, b) {
//     return a + b;
//   }
// }

// let result = MyData.add(7, 9);
// console.log(result);

// class User {
//   static id = 1;
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//     this.id = User.id++;
//   }

//   static compareByAge(a, b) {
//     return a.age - b.age;
//   }

//   static compareByIncome(a, b) {
//     return a.income - b.income;
//   }
// }

// const user1 = new User("Ram", 70, 45000);
// const user2 = new User("shyam", 10, 47000);
// const user3 = new User("hari", 90, 23000);

// const users = [user1, user2, user3];
// users.sort((a, b) => a.age - b.age);
// console.log(users);

//for static method
// const users = [user1, user2, user3];
// users.sort(User.compareByIncome);

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return Math.abs(a - b);
//   }
// }

// let addition = Calculator.add(6, 9);
// let subtraction = Calculator.subtract(6, 9);

// console.log(subtraction);

// users.sort((a, b) => a.age - b.age);
// users.sort(User.sortByAge);
// users.sort(User.sortByIncome);

//function based oop
// function BankAccount(CustomerName, balance = 0) {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

//child class(inheritance)
// function CurrentAccount(CustomerName, balance = 0) {
//   BankAccount.call(this, CustomerName, balance); //constructor calling
//   this.trasactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);
// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log(`Taking business loan is : ${amount}`);
// };

// const ramAccount = new BankAccount("Ram", 67000);
// const ramAccount = new CurrentAccount("Ram", 56000);
// ramAccount.deposit(4500);
// ramAccount.takeBusinessLoan(60000);
// console.log(ramAccount);

///Class based oop and inheritance
// class BankAccount {
//   CustomerName;
//   accountNumber;
//   #balance;

//   constructor(CustomerName, balance = 0) {
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount},Current balance is:${this.#balance}`);
//   }

//   withdraw(amount) {
//     if (this.#balance >= amount) {
//       this.balance -= amount;
//       console.log(`Withdraw ${amount},Current balance is:${this.#balance}`);
//     } else {
//       console.log(`Insufficient fund,You have only: ${this.#balance}`);
//     }
//   }

//   //setter
//   set balance(amount) {
//     this.#balance = amount;
//   }

//   //getter
//   get balance() {
//     return this.#balance;
//   }
// }

// //child class
// class CurrentAccount extends BankAccount {
//   constructor(CustomerName, balance = 0) {
//     super(CustomerName, balance);
//     this.transactionLimit = 50000;
//   }

//   #calculateInterest(amount) {
//     const interest = amount * 0.1; //10%
//     console.log(`Interest amount is : ${interest}`);
//   }

//   takeBusinessLoan(amount) {
//     this.#calculateInterest(amount);
//     console.log(`Taking business loan is : ${amount}`);
//   }
// }

// const ramAccount = new BankAccount("Ram", 6000);
// const ramAccount = new CurrentAccount("Ram", 6700);
// ramAccount.takeBusinessLoan(90000);
// console.log(ramAccount);

//static property and method

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }

//   static subtract(a, b) {
//     return Math.abs(a - b);
//   }
// }

// let addition = Calculator.add(5, 8);
// let subtraction = Calculator.subtract(5, 8);

// console.log(subtraction);

// let ans = Math.random()
// console.log(ans)

// class User {
//   static id = 1;
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//     this.id = User.id++;
//   }
//   static sortByAge(a, b) {
//     return a.age - b.age;
//   }

//   static sortByIncome(a, b) {
//     return a.income - b.income;
//   }
// }

// const user1 = new User("Ram", 23, 45000);
// const user2 = new User("shyam", 18, 22000);
// const user3 = new User("Ram", 17, 12000);

// const users = [user1, user2, user3];
// users.sort(()=>a.age-b.age)
// users.sort(User.sortByAge)
// users.sort(User.sortByIncome);

// console.log(users);
// function myFunc(name = "ram") {
//   setTimeout(() => {
//     for (let i = 0; i < 100; i++) {
//       console.log(`${name} : ${i}`);
//     }
//   }, 4000);
// }

// myFunc();
// alert("hello world!");
// console.log("LastLine");

// setTimeout(() => {
//   console.log("hello world");
// }, 5000);
// alert("hey you!");

//callback
//  A callback function that filters an array and returns a new array containing only elements that pass a certain condition

// function filterArr(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumbers = filterArr(numbers, (num) => num % 2 === 0);
// console.log(evenNumbers);

// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];

// function calculator(arr = [], callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = callback(arr[i]);
//     newArr.push(element);
// newArr.push(callback(arr[i]*5))
//   }
//   console.log(newArr);
// }

// function multiply(a) {
//   return a * 10;
// }

// function divide(a) {
//   return a / 10;
// }

// calculator(arr, (a) => a * 10);
// calculator(arr, (a) => a / 10);

// calculator(arr, multiply);
// calculator(arr, divide);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function calculation(arr = [], callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }
//   console.log(newArr);
// }

// function multiply(a) {
//   return a * 10;
// }

// function divide(a) {
//   return a / 10;
// }

// calculation(arr, (a) => a * 10);

//promise concept
// const a = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Promise fulfilled!");
//   else reject("Some technical error!");
// });

// a.then((para) => {
//   console.log(para);
// }).catch((error) => {
//   console.log(error);
// });

//fetchData

// let arr = [];
// const fetchData = (arr = []) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       arr.push({ name: "Dip", age: 23 });
//       if (arr.length > 0) {
//         resolve("Promise fulfilled");
//       } else {
//         reject("Internal server error!");
//       }
//     }, 2000);
//   });
// };
// fetchData(arr)
//   .then((message) => {
//     console.log(message);
//   })
//   .then(() => {
//     console.log("5");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Will work either");
//   });

// const h1 = document.querySelector("h1");
// const url = "https://catfact.ninja/fact";

// function fetchedData() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => (h1.innerText = data.fact))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("All done"));
// }

// fetchedData();

//callback math of even numbers print example

// let arr = [1, 5, 3, 2, 6, 7, 23, 45, 67, 8];

// function calculation(numbers, callback) {
//   let newArr = [];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newArr.push(callback(numbers[i]));
//     }
//   }
//   return newArr;
// }

// calculation(arr, (value) => {
//   console.log(value);
// });

// const h1 = document.querySelector("h1");
// const url = "https://catfact.ninja/fact";
// function FetchedData() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => (h1.innerText = data.fact))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("All done"));
// }

// FetchedData();

//callback function

// let arr = [1, 5, 2, 7, 6, 8, 3];
// function calculation(arr = [], callback) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(callback(arr[i]));
//   }
//   console.log(newArr);
// }

// function add(a) {
//   return a + 6;
// }

// function multiply(a) {
//   return a * 6;
// }

// calculation(arr, (a) => a * 5);
// calculation(arr, add);
// calculation(arr, multiply);

//callback function(concept)
// function calculation(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }
// calculation(6, 9, (sum) => console.log(`The sum is:${sum}`));

//calculation
//Dry
// let arr = [2, 4, 7, 8, 2, 9, 1, 4];
// function calculation(arr = [], callback) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     const element = callback(arr[i]);
//     newArr.push(element);
//   }
//   console.log(newArr);
// }

// function add(a) {
//   return a + 5;
// }

// function subtract(a) {
//   return a - 5;
// }

// calculation(arr, (a) => a + 5);
// calculation(arr, (b)=>b-5);

//promises concept
// const a = new Promise((resolve, reject) => {
// resolve("Promise fulfilled");
//   reject("Technical error!");
// });

// a.then((msg) => console.log(msg))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("work eiter"));

// let arr = [];
// function fetchedData(arr = []) {
//   return new Promise((resolve, reject) => {
//     arr.push({ name: "ram", age: 23 });
//     if (arr.length > 0) {
//       resolve("Promise fullfilled!");
//     } else {
//       reject("Some technical error!");
//     }
//   });
// }

// fetchedData(arr)
//   .then((msg) => console.log(msg))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("All done"));

//fetchApi using async and await;

// const h1 = document.querySelector("h1");
// const url = "https://catfact.ninja/fact";

// const fetchedData = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     h1.innerText = data.fact;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchedData();

// function fetchedData() {   //get //read //post //put// Restful api crud
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => (h1.innerText = data.fact))
//     .catch((error) => console.log(error));
// }

// fetchedData();

// try {
//   if (condition) {
//     throw new Error("Custom Error");
//   }
// } catch (error) {
//   console.log(error);
// }

//Bom in javascript
// console.log(navigator)

// navigator.geolocation.getCurrentPosition((d) => {
//   console.log(d.coords.latitude);
// });

// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);
// console.log(location.href);

// console.log(location.search);

// const func1 = () => location.replace("https://www.youtube.com");

// console.log(screen);

// function calculateArea() {
//   console.log(width); // Output: undefined
//   console.log(height); // Output: undefined
//   console.log(area); // ReferenceError: area is not defined
//   var width = 5;
//   let height = 10;
//   const area = width * height;
//   console.log(area); // Output: 50
// }
// calculateArea();

//hoisting

// console.log(myFunc(6, 7));
// const myFunc = (a, b) => {
//   return a * b;
// };

//bom
// navigator.geolocation.getCurrentPosition((d) => {
//   console.log(d.coords.longitude);
// });

// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

// console.log(location.href);

// const myFunc = () => location.assign("https://www.youtube.com");

// console.log(history);
// console.log(screen)

//async and await in javascript(promise handling)
// const h1 = document.querySelector("h1");
// const url = "https://catfact.ninja/fact";

// const fetchedData = async () => {
//   try {
//     const res = await fetch(url);

//     const data = await res.json();

//     h1.innerText = data.fact;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchedData();

//normal function
