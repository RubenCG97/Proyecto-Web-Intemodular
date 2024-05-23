var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { nombre: 'Maria', email: 'maria@camastv.com', telefono: '123456789', contrasenna: 'maria123' },
    { nombre: 'Ruben', email: 'ruben@camastv.com', telefono: '987654321', contrasenna: 'ruben123' },
    { nombre: 'Carlos', email: 'carlos@camastv.com', telefono: '111222333', contrasenna: 'carlos123' },
    { nombre: 'Richal', email: 'richal@camastv.com', telefono: '999888777', contrasenna: 'richal123' }
];

// Guardar los usuarios iniciales en localStorage solo si no existen
if (!localStorage.getItem('usuarios')) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Cargar y mostrar usuarios existentes al cargar la página
window.onload = function() {
    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios'));

}

document.querySelector('#registro').addEventListener('submit', (e) => {
    e.preventDefault();
    registrar();
});

function registrar() {
    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.toLowerCase().trim();
    const telefono = document.querySelector('#telefono').value.trim();
    const contrasenna = document.querySelector('#contrasenna').value.trim();
    const repecontrasenna = document.querySelector('#repeContrasenna').value.trim();

    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (validarRegistro(nombre, email, telefono, contrasenna, repecontrasenna, Usuarios)) {
        Usuarios.push({ 
            nombre: nombre, 
            email: email, 
            telefono: telefono, 
            contrasenna: contrasenna 
        });
        localStorage.setItem('usuarios', JSON.stringify(Usuarios));
        alert('Registro completado');
        window.location.href = "inicio_sesion_medio_mal2.html";
    }
}

function validarRegistro(nombre, email, telefono, contrasenna, repecontrasenna, Usuarios) {
    var expresion_regular_telefono = /^\d{9}$/;
    var expresion_regular_nombre = /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/;
    var expresion_regular_email = /^[a-zA-Z0-9._%+-]+@(gmail\.com)$/;
    var expresion_regular_contrasenna = /^.{8,16}$/;

    const UsuarioYaRegistrado = Usuarios.find(usuario => {
        console.log('Comparando con:', usuario);
        return usuario.email.toLowerCase() === email || usuario.telefono === telefono;
    });
    
    if (UsuarioYaRegistrado) {
        console.log('Usuario ya registrado:', UsuarioYaRegistrado);
        alert('El usuario ya está registrado');
        return false;
    }

    if (!expresion_regular_telefono.test(telefono)) {
        alert('El teléfono debe tener 9 cifras numéricas.');
        return false;
    }

    if (!expresion_regular_nombre.test(nombre)) {
        alert('El nombre debe tener entre 1 y 3 palabras.');
        return false;
    }

    if (!expresion_regular_email.test(email)) {
        alert('El email debe ser una dirección válida que termine en @gmail.com');
        return false;
    }

    if (!expresion_regular_contrasenna.test(contrasenna)) {
        alert('La contraseña debe tener entre 8 y 16 caracteres.');
        return false;
    }

    if (contrasenna !== repecontrasenna) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    return true;
}
