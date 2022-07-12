
window.onload =function () {
    let registro =document.querySelector(".registro");
        let form = document.querySelector("form");
    
            form.nombre.focus();
    
        form.addEventListener("submit",(e) => {
            let errors =[];
            
            let nombre = document.querySelector("#nombre");
            let apellido = document.querySelector("#apellido");
            let email = document.querySelector("#email");
            let password = document.querySelector("#password");
            let ulErrors = document.querySelector(".errores");
            
            if (nombre.value == "") {
                errors.push ("Agregar nombre completo");
                nombre.classList.add("is-invalid");
            } else {
                nombre.classList.add("is-invalid");
                nombre.classList.remove("is-invalid");
            }
    
            if (apellido.value == "") {
                errors.push ("Agregar apellido completo");
                apellido.classList.add("is-invalid");
            } else {
                apellido.classList.add("is-invalid");
                apellido.classList.remove("is-invalid");
            }
    

            if (email.value == "") {
                errors.push ("agregar email completo");
                email.classList.add("is-invalid");
            } else {
                email.classList.add("is-invalid");
                email.classList.remove("is-invalid");
            }
    
            if (password.value == "") {
                errors.push ("Agregar contraseña de mas de 7 digitos");
                password.classList.add("is-invalid");
            } else {
                password.classList.add("is-invalid");
                password.classList.remove("is-invalid");
            }
    
            if (errors.length > 0) {
                e.preventDefault ();
                ulErrors.classList.add("alert-warning");
                for (const error of errors) {
                    ulErrors.innerHTML += `<li>${error}</li>`;
                }
                console.log(errors);
            } else {
                alert("alerta")
                form.submit();  
            }
        });
    };

