// Example starter JavaScript for disabling form submissions if there are invalid fields








function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


/* function succesCase() {
    const nombre =  document.getElementById('nombre');
    const apellido =  document.getElementById('apellido');
    const email =  document.getElementById('email');
    const pass1 =  document.getElementById('password1');
    const pass2 =  document.getElementById('password2');
    const term =  document.getElementById('terminos');
    const button = document.getElementById('boton');
    const form = document.getElementById('form');
    button.addEventListener("click", () => {
            if (nombre.value != ""){
                nombre.classList.add("is-valid");
            } else {
                nombre.classList.add("is-invalid");
            }
            if (apellido.value != ""){
                apellido.classList.add("is-valid");
            } else {
                apellido.classList.add("is-invalid");
            }
            if (email.value != ""){
                email.classList.add("is-valid");
            } else {
                email.classList.add("is-invalid");
            }
            if (pass1.value != "" && pass1.value.length >= 6){
                pass1.classList.add("is-valid");
            } else {
                pass1.classList.add("is-invalid");
            }
            if (pass2.value != "" && pass2.value == pass1.value && pass2.value.length >= 6){
                pass2.classList.add("is-valid");
            } else {
                pass2.classList.add("is-invalid");
            }
            if (term.checked ){
                term.classList.add("is-valid");
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
succesCase(); */






(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var form = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(form)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()





// function to check is password1 = password2 and password1 > 6 characters 
function checkPasswordMatch() {
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    if (password1.length > 5) {
        document.getElementById("password1").setCustomValidity("");
    } else {
        document.getElementById("password1").setCustomValidity("error");
    }
    if (password2 === password1 && password2.length > 5) {

        document.getElementById("password2").setCustomValidity("");
    } else {
        document.getElementById("password2").setCustomValidity("error");
    }
}

const boton = document.getElementById("boton");

boton.addEventListener("click", check);



function check() {
    const terminos = document.getElementById("terminos");
    if (terminos.checked) {
        document.getElementById("btnFeed").classList.add("is-valid");
        document.getElementById("btnFeed").classList.remove("is-invalid");
        document.getElementById("btnFeed").classList.remove("text-danger");

    } else {
        document.getElementById("btnFeed").classList.add("is-invalid");
        document.getElementById("btnFeed").classList.add("text-danger");
        document.getElementById("btnFeed").classList.remove("is-valid");
    }
};