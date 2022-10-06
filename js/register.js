// register-username-register-email-register-password-register-btn

let registerUsername = document.querySelector(".register-username");
let registerEmail    = document.querySelector(".register-email");
let registerPassword = document.querySelector(".register-password");
let registerBtn      = document.querySelector(".register-btn");

registerBtn.addEventListener('click', register)

function register(e){
    e.preventDefault()
    if(registerUsername.value !== "" || registerEmail.value !=="" || registerPassword.value !== ""){
        localStorage.setItem("register-username", registerUsername.value)
        localStorage.setItem("register-email", registerEmail.value)
        localStorage.setItem("register-password", registerPassword.value)
    }
    setTimeout(()=>{
        window.location = "./login.html"
    }, 1000)
}

