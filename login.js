var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { Nombre: 'Maria', email: 'maria@camastv.com', telefono: '123456789', contrasenna: 'maria123' },
    { Nombre: 'Ruben', email: 'ruben@camastv.com', telefono: '987654321', contrasenna: 'ruben123' },
    { Nombre: 'Carlos', email: 'carlos@camastv.com', telefono: '111222333', contrasenna: 'carlos123' },
    { Nombre: 'Richal', email: 'richal@camastv.com', telefono: '999888777', contrasenna: 'richal123' }
];

localStorage.setItem('usuarios', JSON.stringify(usuarios));
const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

function login() {
    const email = document.querySelector('#email').value;
    const contrasenna = document.querySelector('#contrasenna').value;
    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const UsuarioYaRegistrado = Usuarios.find(usuario => usuario.email === email && usuario.contrasenna === contrasenna);
    if (!UsuarioYaRegistrado) {
        return alert("Usuario y/o contraseña incorrectos");
    }
    alert("Bienvenido a CamasTv");
    localStorage.setItem('conectado', JSON.stringify(UsuarioYaRegistrado));
    window.location.href = "inicio.html";
}