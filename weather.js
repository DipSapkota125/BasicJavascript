const temperatureFiled = document.querySelector(".weather1");
const cityFiled = document.querySelector(".weather2 p");
const dateFilled = document.querySelector(".weather2 span");
const emojiFilled = document.querySelector(".weather3 img");
const weatherFilled = document.querySelector(".weather3 span");
const SearchFilled = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "kathmandu";
const fetchedData = async () => {
  try {
    const URL = `https://api.weatherapi.com/v1/current.json?key=5b9c3d315a1342a18ea122531232901&q=${target}`;
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    updateDom(temp_c, name, text, icon, localtime);
  } catch (error) {
    alert("location not found!");
    console.log(error);
  }
};

function updateDom(temp_c, name, text, icon, localtime) {
  const exactTime = localtime.split(" ")[1];
  const exactDate = localtime.split(" ")[0];
  const exactDay = getAllDayByName(new Date(exactDate).getDay());

  temperatureFiled.innerHTML = temp_c;
  cityFiled.innerText = name;
  dateFilled.innerText = `${exactTime} - ${exactDay} ${exactDate}`;
  emojiFilled.src = icon;
  weatherFilled.innerText = text;
}

fetchedData(target);

function getAllDayByName(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Don't know";
  }
}

const search = (e) => {
  e.preventDefault();
  target = SearchFilled.value;
  fetchedData(target);
};
form.addEventListener("submit", search);
