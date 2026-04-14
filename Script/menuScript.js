const menuElement = [];

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake")
// .then(res => res.json())
// .then(data => {
//     menuElement = data;
//     menuData(cardElement);
// })

fetch("Script/cake.json")
.then(res => res.json())
.then(data => {
    menuElement = data;
    menuData(cardElement);
})

const menuData = (data) => {
    const cards = data.map((item) => 
    `<div class="category-card">
      <div class="category-image">
        <img src="${item.image}" alt="${item.altText}">
      </div>
      <div class="category-content">
        <h6>${item.category}</h6>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    </div>
    `
    ).join("");
    document.querySelector(".cardDisplay").innerHTML = cards;
}
menuData(menuElement);