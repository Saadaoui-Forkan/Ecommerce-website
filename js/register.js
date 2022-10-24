// register-username-register-email-register-password-register-btn
let form            = document.querySelector('form')
let username        = document.querySelector(".register-username")
let email           = document.querySelector(".register-email")
let password        = document.querySelector(".register-password")
let confirmPassword = document.querySelector('.register-confirm-password')
let registerBtn     = document.querySelector(".register-btn")

// show input error message
function showError(input,message) {
    const formControl = input.parentElement
    formControl.classList = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
}
// show success outline
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.classList = "form-control success"
}

// check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

// check passwords much
function checkPassword(input1, input2) {
    if (input1.value != input2.value) {
        showError(input2, 'Passwords do not much')
    }
}

// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
            return false
        }
    })
    return true
}

// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`)
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max}`)
    }
    else {
        showSuccess(input)
    }
}

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// event listeners
form.addEventListener('submit', function(e){
    e.preventDefault()
    if (checkRequired([username,email,password,confirmPassword]) || checkLength(username, 4, 15) || checkLength(password, 6, 20) || checkEmail(email)){
		localStorage.setItem("register-username", username.value)
        localStorage.setItem("register-email", email.value)
        localStorage.setItem("register-password", password.value)
    }
    setTimeout(()=>{
        window.location = "./login.html"
    }, 1000)
})