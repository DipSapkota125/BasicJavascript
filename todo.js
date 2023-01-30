const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
showAllAddTasks();

function showAllAddTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");

    btn.innerText = "-";

    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllAddTasks();
    });
    div.append(btn);
    container.append(div);
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const mainDiv = document.querySelector(".task");
    mainDiv.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllAddTasks();
});

// const temperatureFiled = document.querySelector(".weather1");
// const cityFiled = document.querySelector(".weather2 p");
// const dateField = document.querySelector(".weather2 span");
// const emojiFiled = document.querySelector(".weather3 img");
// const weatherField = document.querySelector(".weather3 span");
// const searchFiled = document.querySelector(".searchField");
// const form = document.querySelector("form");

// let target = "kathmandu";

// const fetchedData = async (target) => {
//   try {
//     const URL = `https://api.weatherapi.com/v1/current.json?key=5b9c3d315a1342a18ea122531232901&q=${target}`;
//     const res = await fetch(URL);
//     const data = await res.json();

//     //destructuring the data
//     const {
//       current: {
//         temp_c,
//         condition: { text, icon },
//       },
//       location: { name, localtime },
//     } = data;

//     updateDom(temp_c, name, icon, text, localtime);
//   } catch (error) {
//     alert("location not found!");
//     console.log(error);
//   }
// };

// function updateDom(temperature, city, emoji, text, time) {
//   const exactTime = time.split(" ")[1];
//   const exactDate = time.split(" ")[0];
//   const exactDay = getDayFullName(new Date(exactDate).getDay());

//   temperatureFiled.innerText = temperature;
//   cityFiled.innerText = city;
//   dateField.innerText = `${exactTime} - ${exactDay} ${exactDate}`;
//   emojiFiled.src = emoji;
//   weatherField.innerText = text;
// }

// fetchedData(target);

// //function to get the name of the day
// function getDayFullName(num) {
//   switch (num) {
//     case 0:
//       return "Sunday";

//     case 1:
//       return "Monday";

//     case 2:
//       return "Tuesday";

//     case 3:
//       return "Wednesday";

//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";

//     case 6:
//       return "Saturday";
//     default:
//       return "Don't Know";
//   }
// }

// const search = (e) => {
//   e.preventDefault();
//   target = searchFiled.value;
//   fetchedData(target);
// };
// form.addEventListener("submit", search);
