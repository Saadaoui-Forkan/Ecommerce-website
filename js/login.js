let loginUsername = document.querySelector(".login-username");
let loginPassword = document.querySelector(".login-password");
let form          = document.querySelector("form");
let showErrorMsg  = document.querySelector('.error-message')

let getUser = localStorage.getItem("register-username")
let getPassword = localStorage.getItem("register-password")

// loginBtn.addEventListener('click', login)

// function login(e){
//     e.preventDefault()
//     if(loginUsername.value === "" || loginPassword.value === ""){
//         alert('data not found')
//     }else{
//         if(getUser && 
//             getUser.trim() === loginUsername.value.trim() && 
//             getPassword && 
//             getPassword === loginPassword.value) 
//             {
//                 window.location = "../index.html"
//         }
//     }
// }
// 

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (getUser.trim() !== loginUsername.value.trim() || getPassword !== loginPassword.value) {
        showErrorMsg.setAttribute("class","show-error")
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