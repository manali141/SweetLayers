// Search Filter

const inputData = document.querySelector("#Search")
inputData.addEventListener("input",() => {
  const serachValue = inputData.value.toLowerCase();
  const filterCard = menuElement.filter((item) => 
    item.name.toLowerCase().includes(serachValue) 
  || item.category.toLowerCase().includes(serachValue) 
  || item.description.toLowerCase().includes(serachValue)
  || item.price.toLowerCase().includes(serachValue)
  )
  menuData(filterCard);

  if(filterCard.length == 0){
    document.querySelector(".MenucardDisplay").innerHTML = `<p class="noData">No Data Found</p>`
  }
})




let menuElement = [];

// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake")
// .then(res => res.json())
// .then(data => {
//     menuElement = data;
//     menuData(cardElement);
// })

fetch("https://manali141.github.io/SweetLayers/Script/cake.json")
.then(res => res.json())
.then(data => {
    menuElement = data;
    menuData(menuElement);
})

const menuData = (data) => {
    const cards = data.map((item) => 
    `<div class="category-card">
      <div class="menuImage category-image">
        <img src="${item.image}" alt="${item.altText}">
      </div>
      <div class="category-content">
        <h6>${item.category}</h6>
        <div class="namePrice">
          <h3>${item.name}</h3>
          <span>${item.price}</span>
        </div>
        <p>${item.description}</p>
      </div>
      <div class="category-footer">
            <button>Order Now</button>
      </div>
    </div>
    `
    ).join("");
    document.querySelector(".MenucardDisplay").innerHTML = cards;
}
menuData(menuElement);