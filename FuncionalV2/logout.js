//Si no esta conectado siempre volverá al login
const usuario = JSON.parse(localStorage.getItem('conectado')) || false;
if(!usuario){
    window.location.href = "inicio_sesion.html";
}

//Para desconectarse de la página
document.getElementById("logout").addEventListener("click", function() {
    alert("Hasta pronto");
    localStorage.removeItem('conectado');
    window.location.href = "inicio_sesion.html";
})