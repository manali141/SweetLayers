const cardElemnt = [
    {
        type: 'Wedding',
        title:'Classic Elegance',
        description:'A stunning three-tier vanilla bean cake with soft buttercream and fresh roses.',
        imgUrl:'https://2987f4e8-4402-44f6-a52d-0410a55b4f7c-00-29dpsxyxmtkz5.riker.replit.dev/images/cake-1.png',
        altText:'Wedding Cake with three tier vanila bean cake'
     },
     {
        type: 'Birthday',
        title:'Midnight Fudge',
        description:'Decadent chocolate layers with dark fudge frosting and chocolate curls.',
        imgUrl:'https://2987f4e8-4402-44f6-a52d-0410a55b4f7c-00-29dpsxyxmtkz5.riker.replit.dev/images/cake-2.png',
        altText:'Birthday Cake with chocolate layer'
     },
     {
        type:'Birthday',
        title:'Strawberry Dream',
        description:'Light sponge cake layered with fresh whipped cream and ripe strawberries',
        imgUrl:'https://2987f4e8-4402-44f6-a52d-0410a55b4f7c-00-29dpsxyxmtkz5.riker.replit.dev/images/cake-3.png',
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




