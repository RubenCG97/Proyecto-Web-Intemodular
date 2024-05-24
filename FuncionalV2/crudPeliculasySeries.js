// Obtención de elementos del DOM
const baseDeDatos = document.getElementById('baseDeDatos');
const tipo = document.getElementById('inputTipo');
const titulo = document.getElementById('inputTitulo'); 
const duracion = document.getElementById('inputDuracion'); 
const reparto = document.getElementById('inputReparto');
const genero = document.getElementById('inputGenero');
const sipnosis = document.getElementById('inputSipnosis');
const cuerpoTabla = document.getElementById('tableBody');

let datos = JSON.parse(localStorage.getItem('datos')) || [];

baseDeDatos.addEventListener('submit', (e) => {
    e.preventDefault();

    const tipoValor = tipo.value.trim();
    const tituloValor = titulo.value.trim(); 
    const duracionValor = duracion.value.trim(); 
    const repartoValor = reparto.value.trim();
    const generoValor = genero.value.trim();
    const sipnosisValor = sipnosis.value.trim();

    if (!tipoValor || !tituloValor || !duracionValor || !repartoValor || !generoValor || !sipnosisValor) {
        alert('Por favor, complete todos los campos.');
        return;
    }


    const nuevoDato = {
        tipo: tipoValor,
        titulo: tituloValor,
        duracion: duracionValor,
        reparto: repartoValor,
        genero: generoValor,
        sipnosis: sipnosisValor
    };


    datos.push(nuevoDato);

    añadirObjeto();

    actualizarTabla();

    baseDeDatos.reset();
});

function añadirObjeto() {
    localStorage.setItem('datos', JSON.stringify(datos));
}

function actualizarTabla() {
    cuerpoTabla.innerHTML = '';

    datos.forEach((item, index) => {
        const row = document.createElement('tr');
        const celdaTipo = document.createElement('td');
        const celdaTitulo = document.createElement('td');
        const celdaDuracion = document.createElement('td');
        const celdaReparto = document.createElement('td');
        const celdaGenero = document.createElement('td');
        const celdaSipnosis = document.createElement('td');
        const celdaBotones = document.createElement('td');
        const botonEditar = document.createElement('button');
        const botonEliminar = document.createElement('button');

        celdaTipo.textContent = item.tipo;
        celdaTitulo.textContent = item.titulo;
        celdaDuracion.textContent = item.duracion;
        celdaReparto.textContent = item.reparto;
        celdaGenero.textContent = item.genero;
        celdaSipnosis.textContent = item.sipnosis;
        botonEditar.textContent = 'Editar';
        botonEliminar.textContent = 'Eliminar';

        botonEditar.addEventListener('click',function(){
            editaDato(index);
         });

        botonEliminar.addEventListener('click',function(){
            eliminaDato(index);
         });

        celdaBotones.appendChild(botonEditar);
        celdaBotones.appendChild(botonEliminar);
        row.appendChild(celdaTipo);
        row.appendChild(celdaTitulo);
        row.appendChild(celdaDuracion);
        row.appendChild(celdaReparto);
        row.appendChild(celdaGenero);
        row.appendChild(celdaSipnosis);
        row.appendChild(celdaBotones);

        cuerpoTabla.appendChild(row);

        botonEditar.classList.add('button', 'button_Editar'); 
        botonEliminar.classList.add('button', 'button_Eliminar'); 
    });
}

function editaDato(index) {
    const objeto = datos[index];
    
    tipo.value = objeto.tipo;
    titulo.value = objeto.titulo; 
    duracion.value = objeto.duracion; 
    reparto.value = objeto.reparto;
    genero.value = objeto.genero;
    sipnosis.value = objeto.sipnosis;
    datos.splice(index, 1);
    actualizarTabla();
}
function eliminaDato(index) {
  
    datos.splice(index, 1);
    actualizarTabla();
}
// Datos predefinidos
const datosPredefinidos = [
    {
        tipo: 'Película',
        titulo: 'Cadena perpetua',
        duracion: '142 min',
        reparto: 'Tim Robbins, Morgan Freeman',
        genero: 'Drama',
        sipnosis: 'Dos hombres encarcelados establecen una estrecha relación a lo largo de los años, encontrando consuelo y redención eventual a través de actos de decencia común.'
    },
    {
        tipo: 'Serie',
        titulo: 'Breaking Bad',
        duracion: '5 temporadas',
        reparto: 'Bryan Cranston, Aaron Paul',
        genero: 'Drama, Crimen, Thriller',
        sipnosis: 'Un profesor de química de secundaria diagnosticado con cáncer de pulmón terminal se convierte en fabricante y vendedor de metanfetamina para asegurar el futuro de su familia.'
    },
    {
        tipo: 'Película',
        titulo: 'El padrino',
        duracion: '175 min',
        reparto: 'Marlon Brando, Al Pacino',
        genero: 'Crimen, Drama',
        sipnosis: 'El patriarca de una poderosa familia criminal traslada el control de su imperio clandestino a su hijo renuente.'
    },
    {
        tipo: 'Serie',
        titulo: 'Juego de tronos',
        duracion: '8 temporadas',
        reparto: 'Emilia Clarke, Kit Harington',
        genero: 'Drama, Fantasía',
        sipnosis: 'Nobleza, intrigas, batallas y dragones en un mundo ficticio donde las familias nobles luchan por el control del Trono de Hierro.'
    },
    {
        tipo: 'Película',
        titulo: 'Pulp Fiction',
        duracion: '154 min',
        reparto: 'John Travolta, Uma Thurman',
        genero: 'Crimen, Drama',
        sipnosis: 'Viñetas de la vida de dos matones, un boxeador, una esposa y un par de bandidos, entrelazadas en cuatro historias de violencia y redención.'
    }
];

// Los 3 puntos hacen la función de añadir los datos individualmente, si no lo pongo me genera una tabla vacia.Ayudado por chatGpt
datos.push(...datosPredefinidos);

actualizarTabla();
