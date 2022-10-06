let loginUsername = document.querySelector(".login-username");
let loginPassword    = document.querySelector(".login-password");
let loginBtn      = document.querySelector(".login-btn");

let getUser = localStorage.getItem("register-username")
let getPassword = localStorage.getItem("register-password")

// console.log(getUser, getPassword);
loginBtn.addEventListener('click', login)

function login(e){
    e.preventDefault()
    if(loginUsername.value === "" || loginPassword.value === ""){
        alert('data not found')
    }else{
        if(getUser && 
            getUser.trim() === loginUsername.value.trim() && 
            getPassword && 
            getPassword === loginPassword.value) 
            {
                window.location = "../index.html"
        }
    }
}