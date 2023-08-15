let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

