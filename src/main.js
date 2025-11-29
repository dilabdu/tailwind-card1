import "./style.css";
import "./theme.js";
import products from "./data.js";
import "./localstorage.js";
import "./index.js";
import { calculatePrice } from "./index.js";

const productCounter = document.getElementById("product-counter");
const totalPriceEl = document.getElementById("total-price");

// productCounter.textContent=prompt("son")

const footerTime = document.querySelector("#data");
footerTime.textContent = new Date().getFullYear();
const productCardTemplate = document.querySelector("#product-card-template");
const productsList = document.querySelector(".products-list");

products.forEach((product) => {
  const clone = productCardTemplate.content.cloneNode(true);
  clone.querySelector("div").dataset.id = product.id; // har bitta divni tanlab ularga id berish
  const img = clone.querySelector("img");
  const cardTitle = clone.querySelector(".card-title");
  cardTitle.textContent = product.title;
  const description = clone.querySelector("p");
  clone.querySelector("button").dataset.id = product.id;
  description.textContent = product.description;
  img.src = product.thumbnail;
  productsList.appendChild(clone);
});

window.buyProduct = buyProduct;

let globalBasket = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

if (globalBasket.length) {
  basketCounter(globalBasket);
}

function basketCounter(globalBasket) {
  let totalAmount = 0;
  let totalPrice = 0;
  globalBasket.forEach((item) => {
    totalAmount += item.amount;
    totalPrice += item.amount * item.price;
  });
  productCounter.textContent = totalAmount;
  totalPriceEl.textContent = calculatePrice(totalPrice);
}

function buyProduct(e) {
  const prodId = e.dataset.id;
  const item = products.find((product) => product.id == prodId);
  const basketItem = globalBasket.find((basketItem) => basketItem.id == prodId);

  if (basketItem) {
    basketItem.amount += 1;
  } else {
    globalBasket.push({ ...item, amount: 1 });
  }

  localStorage.setItem("products", JSON.stringify(globalBasket));
  basketCounter(globalBasket);
}
