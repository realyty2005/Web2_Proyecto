document.querySelector('.carrusel').addEventListener('mouseenter', function() {
    document.querySelector('.fotos-overlay').style.display = 'block';
});

// Ocultar el overlay al quitar el mouse del carrusel
document.querySelector('.carrusel').addEventListener('mouseleave', function() {
    document.querySelector('.fotos-overlay').style.display = 'none';
});