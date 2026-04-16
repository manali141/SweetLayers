const cardElemnt = [
    {
        type: 'Wedding',
        title:'Classic Elegance',
        description:'A stunning three-tier vanilla bean cake with soft buttercream and fresh roses.',
        imgUrl:'https://manali141.github.io/SweetLayers/Images/cake-1.png',
        altText:'Wedding Cake with three tier vanila bean cake'
     },
     {
        type: 'Birthday',
        title:'Midnight Fudge',
        description:'Decadent chocolate layers with dark fudge frosting and chocolate curls.',
        imgUrl:'https://manali141.github.io/SweetLayers/Images/cake-2.png',
        altText:'Birthday Cake with chocolate layer'
     },
     {
        type:'Birthday',
        title:'Strawberry Dream',
        description:'Light sponge cake layered with fresh whipped cream and ripe strawberries',
        imgUrl:'https://manali141.github.io/SweetLayers/Images/cake-3.png',
        altText:'Strawberry sponge cake'
     },

]


const cardsData = (data) => {
    const webCards = data.map((item) => 
     `<div class="category-card">
      <div class="category-image">
        <img src="${item.imgUrl}" alt="${item.altText}">
      </div>
      <div class="category-content">
        <h6>${item.type}</h6>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>`).join("");
    document.querySelector(".cardDisplay").innerHTML =webCards;
}



cardsData(cardElemnt);




