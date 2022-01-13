// url para practica baseUrl2=https://source.unsplash.com/random

import { registerImage } from "./lazy.js";

const max = 122;
const min = 1;
const random = () => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "320";
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);
  return container;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector("button");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};

addButton.addEventListener("click", addImage);
