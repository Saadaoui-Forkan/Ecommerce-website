function init() {
    let products = JSON.parse(localStorage.getItem("productsInCart")) || [];
    let productsInCartUI = document.querySelector(".cart-products");
    
    // display products
    productsInCartUI.innerHTML = products.map((product) => {
        return `
        
            <div class="products-wrapper">
                <div class="img">
                    <img src='${product.img_url}.png' alt="">
                </div>
                <div class="product-details">
                    <h2>${product.title}</h2>
                    <h2>${product.price}</h2>
                </div>
                <div class="quantity">
                    <i class="fa-sharp fa-solid fa-square-plus"></i>
                    <h3>${product.qty}</h3>
                    <i class="fa-sharp fa-solid fa-square-minus"></i>
                </div>
                <div class="total">
                    <h2>$111</h2>
                </div>
                <div >
                    <button class="remove-to-cart" data-click="${product.id}">Remove</button>
                </div>
                
            </div>
            
        
        `;
    }).join("");

    let bar = document.createElement('div')
    bar.setAttribute("class", "bar")
    productsInCartUI.appendChild(bar)

    let globalPrice = document.createElement('h2')
    globalPrice.setAttribute("class","global-price")
    productsInCartUI.appendChild(globalPrice)

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