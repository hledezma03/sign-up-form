const userPassword = document.getElementById("user-password");
const userConfirmPasswrod = document.getElementById("user-confirm-password");
const btn = document.querySelector("button")
const form = document.querySelector("form")



btn.addEventListener("click", (event) => {
    event.preventDefault()
    if (userPassword.value !== userConfirmPasswrod.value) {
        alert("Your password and confirm password should be equal")
    } else {
        alert("Your account has been created successfully")
        form.reset();
    }
})

