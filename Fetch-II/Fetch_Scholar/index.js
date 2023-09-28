let url = `https://fakestoreapi.com/products`;
let mainbox = document.getElementById("main");
async function init() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    print(data);
  } catch (error) {
    console.log(error);
  }
}
let print = (data) => {
  data.forEach((product) => {
    let p_card = document.createElement("div");
    p_card.className = "p_card";

    let p_avatar = document.createElement("img");
    p_avatar.src = product.image;

    let p_rating = document.createElement("p");
    p_rating.textContent = `Rating : ${product.rating.rate}`;

    let p_id = document.createElement("h4");
    p_id.textContent = `Product Id : ${product.id}`;

    let p_price = document.createElement("p");
    p_price.textContent = `Price : ${product.price} INR`;

    let p_title = document.createElement("p");
    p_title.textContent = product.title;

    let p_category = document.createElement("p");
    p_category.textContent = `category : ${product.category}`;

    let p_description = document.createElement("p");
    p_description.textContent = `Description : ${product.description}`;

    p_card.append(p_avatar, p_category, p_rating, p_id, p_title, p_price, p_description);
    mainbox.append(p_card);
  });
};
init();
