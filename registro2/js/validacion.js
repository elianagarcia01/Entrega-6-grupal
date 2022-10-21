/*// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
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
*/
function validateForm() {
    let email = document.getElementById("email").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let terminos = document.getElementById("terminos")
    

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