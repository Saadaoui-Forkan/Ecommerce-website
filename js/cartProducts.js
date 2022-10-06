let productsInCart = JSON.parse(localStorage.getItem('productsInCart'))
let productsInCartUI = document.querySelector('.cart-products')

function drawProductsInCart() {
    let cartProductsUI = productsInCart.map((product)=>{
        return `
        <div class="product-container">
            <div class="product-img">
                <img src='${product.img_url}.png' alt="" srcset="">
            </div>
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <h3 class="product-description">${product.des}</h3>
                <h2 class="product-price">${product.price} DT</h2>
            </div>
            <div class="product-btns">
                <button class="remove-to-cart">Remove Product</button>
            </div>
        </div>
        `
    })
    productsInCartUI.innerHTML = cartProductsUI
}
drawProductsInCart()

// remove item
(function removeItems() {
    console.log("hello");
})();