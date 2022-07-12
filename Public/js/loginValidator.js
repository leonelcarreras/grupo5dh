window.onload = function () {

  
    let form = document.querySelector("#form");
    let button = document.querySelector("#boton");


    let email = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");

    let password = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError");

    button.addEventListener("click", (e) => {

      

        let errores = [];



        if (email.value < 1) {
            errores.push("email");
            emailError.innerText = "El campo mail debe estar completo"
            console.log(errores)
        } else { emailError.innerText = "" };
        if ( (password.value).length < 8 || (password.value).length > 10) {
            errores.push("password");
            passwordError.innerText = "La contraseña debe tener entre 8 y 10 caracteres "
            console.log(errores);
            console.log(password.value)
        } else { passwordError.innerText = "" };
        /* if (password.value < 1) {
            errores.push("password");
            passwordError.innerText = "El campo contraseña debe estar completo"
        } else { passwordError.innerText = "" }; */

console.log(errores) 

        if (errores.length > 0) {
            e.preventDefault()

        } else {
            button.click();
            form.submit()
        } 


    })



}