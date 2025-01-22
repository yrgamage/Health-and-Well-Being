import products from "./products.js";

const cart = () => {
  let iconCart = document.querySelector(".icon-cart");
  let closeBtn = document.querySelector(".cartTab .close");
  let body = document.querySelector("body");
  let cartItems = [];

  const emptyCartStatus = () => {
    console.log("cart is empty");

    // Display the popup if the cart is empty
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup-field");
    let closePopup = document.getElementById("close");
    closePopup.addEventListener("click", () => {
      popup.classList.remove("open-popup-field");
    });
  };
  iconCart.addEventListener("click", () => {
    if (cartItems.length === 0) {
      emptyCartStatus();
    } else {
      body.classList.toggle("activeTabCart");
    }
  });
  closeBtn.addEventListener("click", () => {
    body.classList.toggle("activeTabCart");
  });

  const setProductInCart = (idProduct, quantity, position) => {
    if (quantity > 0) {
      if (position < 0) {
        cartItems.push({
          product_id: idProduct,
          quantity: quantity,
        });
      } else {
        cartItems[position].quantity = quantity;
      }
    } else {
      cartItems.splice(position, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    refreshCartHTML();
  };

  const refreshCartHTML = () => {
    let listHTML = document.querySelector(".listCart");
    let totalHTML = document.querySelector(".icon-cart span");
    let totalquantity = 0;
    listHTML.innerHTML = null;
    cartItems.forEach((item) => {
      totalquantity = totalquantity + item.quantity;
      let position = products.findIndex((value) => value.id == item.product_id);
      let info = products[position];
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.innerHTML = `
                <div class="image">
                    <img src="${info.image}"/>
                </div>
                <div class="name">${info.name}</div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus" data-id="${info.id}">-</span>
                    <span>${item.quantity}</span>
                    <span class="plus" data-id="${info.id}">+</span>
                </div>
            `;

      listHTML.appendChild(newItem);
    });
    totalHTML.innerText = totalquantity;
  };

  document.addEventListener("click", (event) => {
    let buttonClick = event.target;
    let idProduct = buttonClick.dataset.id;
    let position = cartItems.findIndex(
      (value) => value.product_id == idProduct
    );
    let quantity = position < 0 ? 0 : cartItems[position].quantity;

    if (
      buttonClick.classList.contains("addCart") ||
      buttonClick.classList.contains("plus")
    ) {
      quantity++;
      setProductInCart(idProduct, quantity, position);
    } else if (buttonClick.classList.contains("minus")) {
      quantity--;
      setProductInCart(idProduct, quantity, position);
    }
  });

  const initApp = () => {
    if (localStorage.getItem("cart")) {
      cartItems = JSON.parse(localStorage.getItem("cart"));
    }
    refreshCartHTML();
  };
  initApp();

  const checkout = () => {
    let total = 0;
    cartItems.forEach((item) => {
      let position = products.findIndex((value) => value.id == item.product_id);
      total += products[position].price * item.quantity;
    });

    if (cartItems.length === 0) {
        emptyCartStatus();
      } else {
        // Store the total in localStorage
     localStorage.setItem("total", total);

     // Open the checkout form in a new tab with the total as a query parameter
     window.open(`./checkout.html`, '_blank');
        
      }


  };
  document.querySelector(".checkOut").addEventListener("click", checkout);
};

export default cart;
