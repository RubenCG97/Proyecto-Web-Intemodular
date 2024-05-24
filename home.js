document.querySelectorAll('.contenedor-principal').forEach(contenedor => {
    const fila = contenedor.querySelector('.contenedor-carousel');
    const peliculas = contenedor.querySelectorAll('.pelicula');
    
    const flechaIzquierda = contenedor.querySelector('.flecha-izquierda');
    const flechaDerecha = contenedor.querySelector('.flecha-derecha');
    
    // ------- ----- para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    
        const indicadorActivo = contenedor.querySelector('.indicadores .activo');
        if(indicadorActivo && indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    
    // ------- ------ para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    
        const indicadorActivo = contenedor.querySelector('.indicadores .activo');
        if(indicadorActivo && indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    
    //   ----- ----- Paginacion ----- -----
    const numeroPaginas = Math.ceil(peliculas.length / 5);
    const indicadoresContenedor = contenedor.querySelector('.indicadores');
    if (indicadoresContenedor) {
        for(let i = 0; i < numeroPaginas; i++){
            const indicador = document.createElement('button');
        
            if(i === 0){
                indicador.classList.add('activo');
            }
        
            indicadoresContenedor.appendChild(indicador);
            indicador.addEventListener('click', (e) => {
                fila.scrollLeft = i * fila.offsetWidth;
        
                indicadoresContenedor.querySelector('.activo').classList.remove('activo');
                e.target.classList.add('activo');
            });
        }
    }
    
    //  ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });
    
    fila.addEventListener('mouseleave', () => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    });
});
