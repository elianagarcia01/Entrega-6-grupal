// Example starter JavaScript for disabling form submissions if there are invalid fields







    
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
                if (pass2.value != "" && pass2.value == pass1.value && pass2.value.length >= 6){
                    pass2.classList.add("is-invalid");
                } else {
                    term.classList.add("is-invalid");
                }
                if (nombre.value != "" && apellido.value != "" && email.value != "" &&
                pass1.value != "" && pass2.value != "" && term.checked) {
                    if(pass1.value.length >= 6 && pass2.value == pass1.value){
                        showAlertSuccess();
                    }
                    else{
                        showAlertError();
                    }
                }
                else{
                    showAlertError();
                }
            })
        }
    succesCase();


        /*    if(nombre.value != "" && apellido.value != "" && email.value != "" && 
            pass1.value != "" && pass2.value != "" && term.checked) {
                if(pass1.value.length >= 6 && pass2.value == pass1.value){
                    showAlertSuccess();
                    form.classList.add("was-validated");

                }
                else{
                    
                    showAlertError(); 
                }
            }
            else{
                showAlertError();
            }
        })
    }
    succesCase();
   


    // Loop over them and prevent submission validate only if password > 6 and password1 = password2
   /* Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    alert("Las contraseñas no coinciden o son menores a 6 caracteres");
                    event.preventDefault()
                    event.stopPropagation()
                  
                }

                form.classList.add('was-validated')
            }, false)
        })
})() */

  // 
     
    
    
        











 
/*
function validateForm() {
    
    

    var forms = document.querySelectorAll('.needs-validation')
    

    if (email != "" && password1.length >= 6 && password1 === password2 && nombre != "" && apellido != "" && terminos.checked) {
        form.classList.add('was-validated')
    }

}
let boton = document.getElementById("boton")
boton.addEventListener("click", validateForm())


/*
function validateForm() {
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let boton = document.getElementById("boton")
    let form = document.querySelector("form");
    if (email.includes("@") && password1.length > 6 && password1 === password2) {
        form
    }
    boton.addEventListener("sumbit")
}
*/