
const imgZoomables = document.querySelectorAll('.zoomable');

imgZoomables.forEach( img => {
    img.addEventListener("mousedown", function() {
        console.log("El mouse ha sido presionado.");
        if (img.style.transform === "scale(1.5)") {
            img.style.transform = "scale(1)";
        } else {
            img.style.transform = "scale(1.5)";
        }
    });
});