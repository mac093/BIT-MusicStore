var imagenes= [
    "./Imagenes/vinyl-hero-main.jpg",
    "./Imagenes/Mejores_Albumes.jpg",
    "./Imagenes/Albumes_Poster.PNG",
    "./Imagenes/Vynisl_Tienda.jpeg",
];
let indice = 0;
function cambiarimagen(){
    var imagen = document.getElementById('carrusel');
    imagen.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}
setInterval(cambiarimagen, 3000);