function reestablecerContraseña() {
    const email = document.querySelector('#email').value.trim().toLowerCase();
    const telefono = document.querySelector('#telefono').value.trim();
    const contrasenna = document.querySelector('#contrasenna').value.trim();
    const repeContrasenna = document.querySelector('#repeContrasenna').value.trim();
    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const UsuarioYaRegistrado = Usuarios.find(usuario => usuario.email === email && usuario.telefono === telefono);
    
    if (!UsuarioYaRegistrado) {
        return alert("Usuario y/o teléfono incorrectos");
    }

    if (contrasenna !== repeContrasenna) {
        return alert("Las contraseñas no coinciden");
    }

    var expresion_regular_contrasenna = /^.{8,16}$/;
    if (!expresion_regular_contrasenna.test(contrasenna)) {
        return alert("La contraseña debe tener entre 8 y 16 caracteres.");
    }

    UsuarioYaRegistrado.contrasenna = contrasenna;

    localStorage.setItem('usuarios', JSON.stringify(Usuarios));

    alert("Contraseña restablecida correctamente");
    window.location.href = "inicio_sesion_medio_mal2.html";
}

document.querySelector('#restablecerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    reestablecerContraseña();
});
