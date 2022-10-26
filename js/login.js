let loginUsername = document.querySelector(".login-username");
let loginPassword = document.querySelector(".login-password");
let form          = document.querySelector("form");
let showErrorMsg  = document.querySelector('.error-message')

let getUser = localStorage.getItem("register-username")
let getPassword = localStorage.getItem("register-password")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (getUser.trim() !== loginUsername.value.trim() || getPassword !== loginPassword.value) {
        showErrorMsg.setAttribute("class","show-error")
        document.querySelector('.login-username').classList.add("error-input")
        document.querySelector('.login-password').classList.add("error-input")
    } else {
        if(getUser && 
            getUser.trim() === loginUsername.value.trim() && 
            getPassword && 
            getPassword === loginPassword.value) 
            {
                window.location = "../index.html"
        }
        setTimeout(()=>{
            window.location = "./login.html"
        }, 300)
    }
    

})