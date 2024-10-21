
// FUNCIONES ASIDE
// Función para manipular el clic en los botones "+" de los contenedores
function toggleContenedor(contenedor, signo) {
    // Obtener referencia al contenedor y al botón de signo
    const contenedorElement = document.querySelector(contenedor);
    const signoElement = document.querySelector(signo);

    // Agregar un event listener al hacer clic en el botón de signo
    signoElement.addEventListener('click', function() {
        // Verificar si el contenedor está actualmente visible
        const isVisible = window.getComputedStyle(contenedorElement).display !== 'none';

        // Si está visible, ocultarlo; si no, mostrarlo y cambiar el signo
        if (isVisible) {
            contenedorElement.style.display = 'none';
            signoElement.textContent = '+';
        } else {
            contenedorElement.style.display = 'block';
            signoElement.textContent = '-';
        }
    });
}

// Llamadas a la función para los dos contenedores
toggleContenedor('.cont-filtros-ocultos-talles', '.boton-talles-span-signo-mas'); // Para el primer contenedor
toggleContenedor('.cont-filtros-ocultos-genero', '.boton-genero-span-signo-mas'); // Para el segundo contenedor
toggleContenedor('.cont-filtros-ocultos-precio', '.boton-precio-span-signo-mas');// Para el tercer contenedor


//Funcion de abrir y cerrar btn de filtros responsive

function toggleResponsive(contenedorSelector , signoSelector){

    const contenedorDeElemntos = document.querySelector(contenedorSelector);
    const signosElementos = document.querySelector(signoSelector);

    signosElementos.addEventListener('click', function(){
        const isVisible = window.getComputedStyle(contenedorDeElemntos).display !== 'none';
        if(isVisible){
            contenedorDeElemntos.style.display = 'none';
        }else{
            contenedorDeElemntos.style.display = 'block';
        }
    });
}

toggleResponsive('.cont-filtros-ocultos','.abrir-filtro');
