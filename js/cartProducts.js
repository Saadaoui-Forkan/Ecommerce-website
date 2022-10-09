function init() {
    let products = JSON.parse(localStorage.getItem("productsInCart")) || [];
    let productsInCartUI = document.querySelector(".cart-products");
    
    // display products
    productsInCartUI.innerHTML = products.map((product) => {
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
                <button class="remove-to-cart" data-click="${product.id}">Remove Product</button>
            </div>
        </div>
        `;
    });

    // remove products from cart
    document.querySelectorAll(".remove-to-cart").forEach((item) => {
        let id = item.getAttribute("data-click");
        let productsInCart = localStorage.getItem("productsInCart");
        if (productsInCart) {
        item.addEventListener("click", () => {
            let productsInCart = localStorage.getItem("productsInCart");
            let items = JSON.parse(productsInCart);
            let filtered = items.filter((data) => data.id != id);
            localStorage.setItem("productsInCart", JSON.stringify(filtered));
            init();
        });
        } 
    });
}

init();