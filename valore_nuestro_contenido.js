function introducirDatos() {
    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.toLowerCase().trim();
}
function validar(nombre, email) {
    var expresion_regular_nombre = /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/;
    var expresion_regular_email = /^[a-zA-Z0-9._%+-]+@(gmail\.com)$/;

    if (!expresion_regular_nombre.test(nombre)) {
        alert('El nombre debe tener entre 1 y 3 palabras.');
        return false;
    }

    if (!expresion_regular_email.test(email)) {
        alert('El email debe ser una dirección válida que termine en @gmail.com');
        return false;
    }
    return true;
}
