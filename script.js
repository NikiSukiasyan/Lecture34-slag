let container = document.getElementById("container");
let box = document.getElementById("box");

async function FetchData() {
  let data = await fetch("https://fakestoreapi.com/products");
  let response = await data.json();

  response.map((product) => {
    let productDiv = document.createElement("a");
    productDiv.href = `product.html?id=${product.id}`;
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    p.textContent = product.title;
    img.src = product.image;
    productDiv.appendChild(p);
    productDiv.appendChild(img);
    container.appendChild(productDiv);
  });
  console.log(response);
}
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

async function FetchProduct(id) {
  let fetchedData = await fetch(`https://fakestoreapi.com/products/${id}`);

  let res = await fetchedData.json();

  let div = document.createElement("div");

  let p = document.createElement("p");

  let img = document.createElement("img");

  img.style.width = "100px";

  img.style.height = "100px";

  p.textContent = res.title;

  img.src = res.image;

  div.appendChild(p);
  div.appendChild(img);
  box.appendChild(div);
}

if (container) {
  FetchData();
} else {
  FetchProduct(id);
}
