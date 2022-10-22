// ------ Karim code Bardo 22/10/2022 --------

function removeObjectWithId(arr, id) {
    return arr.filter((obj) => obj.id !== id);
  }

  // set ui 
  const setUi = (arr) => {
    const productsInCartUI = document.querySelector('.cart-products')
    // display products

    if (arr.length === 0 ) {
        productsInCartUI.innerHTML = '<h2 class="no-items"> No items in cart !! </h2>'
    } else {
        productsInCartUI.innerHTML = arr.map((product) => {
            let productPrice = product.price * product.qty
            return `
            
                <div class="products-wrapper">
                    <div class="img">
                        <img src='${product.img_url}.png' alt="">
                    </div>
                    <div class="product-details">
                        <h2>${product.title}</h2>
                        <h2>${product.price} $</h2>
                    </div>
                    <div class="quantity">
                        <i class="fa-sharp fa-solid fa-square-plus"></i>
                        <h3>${product.qty}</h3>
                        <i class="fa-sharp fa-solid fa-square-minus"></i>
                    </div>
                    <div class="product-price">
                        <h2>${productPrice} $</h2>
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
    }
   


  }
  let newProducts = JSON.parse(localStorage.getItem("productsInCart"))
  setUi(newProducts)

  const remove = (e) => {
    let id = e.path[0].attributes[1].value
    let products = JSON.parse(localStorage.getItem('productsInCart'))
    let filtered = products.filter(item =>  item.id !== parseInt(id))
    localStorage.setItem('productsInCart', JSON.stringify(filtered))
    let newProducts = JSON.parse(localStorage.getItem("productsInCart"))
    setUi(newProducts)
    addEventListenerByClass('remove-to-cart', 'click', remove);
  }
  

function addEventListenerByClass(className, event, fn) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}
addEventListenerByClass('remove-to-cart', 'click', remove);

