import products from "./products.js";
import cart from "./cart.js";
const app = document.getElementById('app');
const temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('./template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        const contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = '';
        cart();
        initApp();
    })
    .catch(error => {
        console.error('Error loading template:', error);
    });
}

loadTemplate();

const initApp = () => {
    const idProduct = new URLSearchParams(window.location.search).get('id');
    const info = products.find(value => value.id == idProduct);
    if(!info){
        window.location.href='/';
    }
    const detail = document.querySelector('.details');
    detail.querySelector('.image img').src = info.image;
    detail.querySelector('.name').innerText = info.name;
    detail.querySelector('.price').innerText = '$'+ info.price;
    detail.querySelector('.description').innerText = info.description;
    detail.querySelector('.addCart').dataset.id = idProduct;

    const listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = '';
    products.filter((value) => value.id != idProduct).forEach(product => {
        const newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML =
        `
        <a href="./detail.html?id=${product.id}">
            <img src="${product.image}"/>
        </a>
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>
        <button class="addCart"
            data-id="${product.id}">
            Add To Cart
        </button>
        `;

        listProduct.appendChild(newProduct);
    });
}

export default initApp;