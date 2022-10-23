// product array
let products = [
    {
        id:1,
        img_url:'./images/hp-1',
        title:'Hp one',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'900',
        qty:1
    },
    {
        id:2,
        img_url:'./images/dell-3',
        title:'Dell one',
        des:'screen 15.6" FHD - processor Intel i7-1165G7',
        price:'1000',
        qty:1
    },
    {
        id:3,
        img_url:'./images/dell-2',
        title:'Dell two',
        des:'screen 15.6" FHD - processor Intel i7-1065G7 ',
        price:'800',
        qty:1
    },
    {
        id:4,
        img_url:'./images/dell-1',
        title:'Dell three',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'900',
        qty:1
    },
    {
        id:5,
        img_url:'./images/asus-1',
        title:'Asus one',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:6,
        img_url:'./images/asus-3',
        title:'Asus two',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'850',
        qty:1
    },
    {
        id:7,
        img_url:'./images/hp-2',
        title:'Hp two',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:8,
        img_url:'./images/hp-3',
        title:'Hp three',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:9,
        img_url:'./images/lenovo-1',
        title:'Lenovo one',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:10,
        img_url:'./images/lenovo-2',
        title:'Lenovo two',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:11,
        img_url:'./images/lenovo-3',
        title:'Lenovo three',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:12,
        img_url:'./images/toshiba-1',
        title:'Toshiba one',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:13,
        img_url:'./images/toshiba-2',
        title:'Toshiba two',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    },
    {
        id:14,
        img_url:'./images/toshiba-3',
        title:'Toshiba three',
        des:'screen 15.6" FHD - processor Intel i7-1065G7',
        price:'700',
        qty:1
    }
]

// display products 
const sectionOne = document.querySelector('.section-1')
const productContainer = document.querySelector('.product-container')

function drawProductsUI(allProducts =[]) {
    let productsUI = allProducts.map((product)=>{
        return `
        <div class="product-container">
            <div class="product-img">
                <img src='${product.img_url}.png' alt="" srcset="">
            </div>
            <div class="product-info">
                <h2 class="product-title" data-title="${product.title}">${product.title}</h2>
                <h3 class="product-description">${product.des}</h3>
                <h2 class="product-price">${product.price} DT</h2>
            </div>
            <div class="product-btns">
                <button class="add-to-cart">Add To Cart</button>
                <p class="add-to-favorite">Like<i class="fa-regular fa-thumbs-up"></i></p>
            </div>
        </div>
        
        `
    })
    sectionOne.innerHTML = productsUI.join("")
}
drawProductsUI(products)

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
    // addedItem.map((item)=>{
    //     cartItemsDiv.innerHTML += `
    //                 <p>${item.title} </p>         
    //             `
    // })
    badge.style.display = "block"
    badge.innerHTML = addedItem.length;
} 

// add products to shopping cart icon and save data in localStorage
let allItems = []
function addedToCart() {
    addToCart.forEach((item,i)=>{
        item.addEventListener('click', ()=>{
            if (localStorage.getItem ("register-username")) {

                // let items = allItems.find(item => item.id === products[i].id)
                // if(items){
                    // products[i].qty += 1
                // } else{
                    // allItems.push(products[i])
                // }
                
                // cartItemsDiv.innerHTML = ""
                // allItems.forEach((prod)=>{
                    // cartItemsDiv.innerHTML += `<p>${uniqueProducts[i].title}</p>`
                // })
                
                
                addedItem = [...addedItem,products[i]]

                let uniqueProducts = getUniqueArr(addedItem,"id")
                localStorage.setItem('productsInCart',JSON.stringify(uniqueProducts))

                cartItemsDiv.innerHTML = ""
                uniqueProducts.forEach(prod => { 
                    cartItemsDiv.innerHTML += `<p>${prod.title}</p>`
                })
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

function getUniqueArr(myArr,filterType) {
    let unique = myArr
    .map(prod => prod[filterType])
    .map((item,i,arr) => arr.indexOf(item) === i && i)
    .filter(prod => myArr[prod])
    .map(item => myArr[item])

    return unique    
}

// view products in cart menu
function openCartMenu() {
    let allAddedItems = JSON.parse(localStorage.getItem('productsInCart'))
    cartItemsDiv.innerHTML = ""
    allAddedItems.forEach(prod => { 
        cartItemsDiv.innerHTML += `<p>${prod.title}</p>`
    })
        if (cartItemsDiv.innerHTML != "" ) {
            cartItems.classList.toggle('active-shopping-cart')
        }
    
}
shoppingCart.addEventListener('click', openCartMenu)

// search product
let searchProduct = document.querySelector(".filtering-products form")
searchProduct.addEventListener('input', function(){
    search()
})

function search(){
    let inp = document.querySelector('.search-product')
    let input = inp.value.toUpperCase()
    let filteredProducts = products.filter(prod => prod.title.toUpperCase().indexOf(input) !== -1)
    drawProductsUI(filteredProducts)
}

// favorite products
const likesBtn = document.querySelectorAll('.add-to-favorite')
const likesNumber = document.querySelector('.likes')

// check if there is favorite products in localStorage
let favoriteItems = localStorage.getItem('favoriteProducts') 
                ? JSON.parse(localStorage.getItem('favoriteProducts')) 
                : []

if (favoriteItems) {
    likesNumber.innerHTML = favoriteItems.length
}

likesBtn.forEach((likeBtn,i) =>{
    likeBtn.addEventListener('click', ()=>{
        if(localStorage.getItem("register-username")){

            // getting favorite products
            favoriteItems = [...favoriteItems,products[i]]

            // remove repeated favorite products 
            let favoriteProducts = getUniqueArr(favoriteItems,"id")

            // getting the number of likes
            likesNumber.innerHTML = favoriteProducts.length

            // saving data in localStorage
            localStorage.setItem('favoriteProducts',JSON.stringify(favoriteProducts))
            
        }else{
            window.location = "../html/login.html"
        }
    })
})

// show my favorite products
const favorites = document.querySelector(".favorite-products")

favorites.addEventListener('click', ()=>{
    // get liked products from localStorage
    favoriteItems = JSON.parse(localStorage.getItem('favoriteProducts'))

    if(favoriteItems.length != 0){
        // create a popup
        let overlay = document.createElement('div')
        overlay.setAttribute("class", "popup-overlay")
        document.body.appendChild(overlay)
    
        //  styling and draw the popup-overlay
        let favoriteWrapper = document.createElement('div')
        favoriteWrapper.setAttribute("class", "favorite-wrapper")
        overlay.appendChild(favoriteWrapper)
        function drawFavoriteProducts(favorites) {
            let drawFavoriteProducts = favorites.map(favItem => {
                return `
                    <i class="fa-sharp fa-solid fa-circle-xmark closeBtn"></i>
                    <div class="favorite-card">   
                        <p class="dislike" data-click="${favItem.id}">
                            Dislike
                            <i class="fa-regular fa-thumbs-down"></i>
                        </p>
                        <img src="${favItem.img_url}.png" alt="" srcset="">
                        
                        <h2 class="favorite-title">${favItem.title}</h2>
                    </div>
                `
            })
            favoriteWrapper.innerHTML = drawFavoriteProducts.join("")
            abilityToDislike()
        }
        drawFavoriteProducts(favoriteItems)

        // remove disliked products
        function abilityToDislike() {
            if (favoriteItems.length != 0) {
                let disliked = document.querySelectorAll('.dislike')
                disliked.forEach(item =>{
                let dislikeId = item.getAttribute("data-click")
                item.addEventListener('click', ()=>{
                
                    favoriteItems = favoriteItems.filter((data) => data.id != dislikeId)
                    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteItems))
                    drawFavoriteProducts(favoriteItems)
                
                })
            })
            } else {
                favoriteWrapper.innerHTML= `
                <i class="fa-sharp fa-solid fa-circle-xmark closeBtn"></i>
                <h2 class="no-favorites"> No Favorite Products !!</h2>
                `
            }
            
        }
        
    } 
})

// close popup
document.addEventListener('click', function(e){
    if (e.target.className == "fa-sharp fa-solid fa-circle-xmark closeBtn") {
        e.target.parentNode.remove()
        document.querySelector('.popup-overlay').remove()
    }
})

