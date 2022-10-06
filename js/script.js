// product array
let products = [
    {
        id:1,
        img_url:'./images/hp-1',
        title:'Hp',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'900'
    },
    {
        id:2,
        img_url:'./images/dell-3',
        title:'Dell',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'1000'
    },
    {
        id:3,
        img_url:'./images/dell-2',
        title:'Dell',
        des:'screen 15.6" FHD - processor Intel i7-1065G7 ',
        price:'800'
    },
    {
        id:4,
        img_url:'./images/dell-1',
        title:'Dell',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'900'
    },
    {
        id:5,
        img_url:'./images/asus-1',
        title:'Asus',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:6,
        img_url:'./images/asus-3',
        title:'Asus',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'850'
    },
    {
        id:7,
        img_url:'./images/hp-2',
        title:'Hp',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:8,
        img_url:'./images/hp-3',
        title:'Hp',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:9,
        img_url:'./images/lenovo-1',
        title:'Lenovo',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:10,
        img_url:'./images/lenovo-2',
        title:'Lenovo',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:11,
        img_url:'./images/lenovo-3',
        title:'Lenovo',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:12,
        img_url:'./images/toshiba-1',
        title:'Toshiba',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:13,
        img_url:'./images/toshiba-2',
        title:'Toshiba',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    },
    {
        id:14,
        img_url:'./images/toshiba-3',
        title:'Toshiba',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700'
    }
]

// display products 
const sectionOne = document.querySelector('.section-1')
const productContainer = document.querySelector('.product-container')

function drawProductsUI() {
    let productsUI = products.map((product)=>{
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
                <button class="add-to-cart">Add To Cart</button>
                <i class="fa-solid fa-heart"></i>
            </div>
        </div>
        `
    })
    sectionOne.innerHTML = productsUI
}
drawProductsUI()

const addToCart = document.querySelectorAll(".add-to-cart")
const shoppingCart = document.querySelector(".shopping-cart")
const cartItems = document.querySelector('.cart-items')
const cartItemsDiv = document.querySelector('.cart-items-div')
const badge = document.querySelector('.badge')

// check if there is products in localStorage
let addedItem = localStorage.getItem('productsInCart') 
                ? JSON.parse(localStorage.getItem('productsInCart')) 
                : []
if (addedItem) {
    addedItem.map((item)=>{
        cartItemsDiv.innerHTML += `
                    <p>${item.title}</p>         
                `
    })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length;
} 

// add products to shopping cart icon and save data in localStorage
function addedToCart() {
    addToCart.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            if (localStorage.getItem ("register-username")) {
                cartItemsDiv.innerHTML += `
                    <p>${products[i].title}</p>         
                `
                addedItem = [...addedItem,products[i]]
                localStorage.setItem('productsInCart',JSON.stringify(addedItem)) 

                const cartItemsLength = document.querySelectorAll('.cart-items-div p')
                badge.style.display = "block"
                badge.innerHTML = cartItemsLength.length

            } else {
                window.location = "../html/login.html"
            }         
        })  
    })
}
addedToCart()

// view products in cart menu
function openCartMenu() {
    if (cartItemsDiv.innerHTML != "" ) {
        cartItems.classList.toggle('active-shopping-cart')
    }
}
shoppingCart.addEventListener('click', openCartMenu)






