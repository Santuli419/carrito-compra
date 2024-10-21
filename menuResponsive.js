
// Bloque de codigo para abrir menu responsive
document.addEventListener('DOMContentLoaded', () => {
    const cerrarMenu = document.getElementById('cerrar-menu');
    const abrirMenu = document.getElementById('abrir-menu');
    const menuDesplegable = document.querySelector('.menu-responsive');

    // Verifica si los elementos existen
    
        abrirMenu.addEventListener('click', () => {
            menuDesplegable.classList.remove('menu-desplegable');
        });

        cerrarMenu.addEventListener('click', () => {
            menuDesplegable.classList.add('menu-desplegable');
        });
 
});
