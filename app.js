fetch(
  "https://api.spoonacular.com/recipes/complexSearch/?apiKey=29f91f4e6ec34c34850b05edce4f940d"
)
  .then((data) => data.json())
  .then((data) => StoreData(data));

let StoreData = (data) => {
  let storedData = JSON.stringify(data);
  localStorage.setItem("FoodData", storedData);
  console.log(data.results);
};

let data = JSON.parse(localStorage.getItem("FoodData"));
data = data.results;

console.log(data);

recipes = document.querySelector(".box");
// console.log(data.title);
recipes.innerHTML = data.map((sPro, index) => {
  return `<div class="products">
            <div class="img">
              <img
                class="img"
                src="${sPro.image}"
                alt=""
                width="320px"
              />
            </div>
            <div class="title">${sPro.title}</div>
           <a href='singlePage.html' class='anchor'> <button class='singlePageBtn' onclick='sendData(${index})'> View Detail </button></a>
          </div>
    `;
});

document.querySelector(".text").addEventListener("keyup", (e) => {
  search = e.target.value;
  let sRecipes = document.querySelector(".box");

  sRecipes.innerHTML = data
    .filter((fil) => {
      return fil.title.includes(search);
    })
    .map((sPro, index) => {
      return `<div class="products">
            <div class="img">
              <img
                class="img"
                src="${sPro.image}"
                alt=""
                width="320px"
              />
            </div>
            <div class="title">${sPro.title}</div>
            <a href='singlePage.html' class='anchor'> <button class='singlePageBtn' onclick='sendData(${index})'> View Detail </button></a>
          </div>
    `;
    });
});

function sendData(index) {
  let filterData = data[index];
  filterData = JSON.stringify(filterData);
  localStorage.setItem("singlePage", filterData);
  console.log(localStorage.getItem("singlePage"));
}
