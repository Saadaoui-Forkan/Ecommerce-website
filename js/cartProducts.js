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
                        <h2 class="init-price">${product.price} $</h2>
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

// increase and decrease the quantity
let minus = Array.from(document.querySelectorAll('.fa-square-minus'))
let plus = Array.from(document.querySelectorAll('.fa-square-plus'))
let qty = Array.from(document.querySelectorAll('.quantity h3'))
let initPrice = Array.from(document.querySelectorAll('.init-price'))
let price = Array.from(document.querySelectorAll('.product-price h2'))

// get the initial price of all products
let total = document.querySelector('.global-price')
let totalPrice = []
price.forEach((e)=>{
    totalPrice.push(parseInt(e.innerHTML))
})
total.innerHTML = `<h2>${sumArray(totalPrice)} $</h2>`

// increase the quantity
minus.forEach((el,i) =>{
    el.addEventListener('click', ()=>{
        let q = parseInt(qty[i].innerHTML)
        if (q != 0) {
            q --
            qty[i].innerHTML = q
            price[i].innerHTML = `<h3>${parseInt(initPrice[i].innerHTML) * q} $</h3>`
            myArray(totalPrice,i)
            sumArray(totalPrice)
            total.innerHTML = `<h2>${sumArray(totalPrice)} $</h2>`
        }  
    })
})

// decrease the quantity
plus.forEach((el,i) =>{
    el.addEventListener('click', ()=>{
        let q = parseInt(qty[i].innerHTML)
        q ++ 
        qty[i].innerHTML = q
        price[i].innerHTML = `<h3>${parseInt(initPrice[i].innerHTML) * q} $</h3>`
        myArray(totalPrice,i)
        sumArray(totalPrice)
        total.innerHTML = `<h2>${sumArray(totalPrice)} $</h2>`
    })
})

function myArray(arr,param) {
    let x =parseInt(price[param].innerText)
        const index = price.indexOf(price[param])
        arr.splice(index, 1, x)
}

// get the sum of products's price
function sumArray(array) {
    let sum = 0;
    array.forEach(item => {
      sum += item;
    });
    return sum;
  }