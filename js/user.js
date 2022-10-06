let userLinks = document.querySelector('.user-links');
let userProfile = document.querySelector('.userProfile');
let user = document.querySelector('.user');
let logoutBtn = document.querySelector('.logout');

let username = localStorage.getItem("register-username")
if(username){
    userLinks.remove()
    userProfile.style.display = "flex"
    user.innerHTML = username
}

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear();
    setTimeout(()=>{
        window.location = "../html/register.html"
    },1500)
})