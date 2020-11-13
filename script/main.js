import ProductContainerComponent from './ProductContainerComponent.js';

const API_URL = "https://api.jsonbin.io/b/5fae60f6ea9b612e1c674234";

const productContainerComponent = new ProductContainerComponent(API_URL);

productContainerComponent.download(".product-items-container");

setInterval(() => productContainerComponent.download(".product-items-container"), 30000);
