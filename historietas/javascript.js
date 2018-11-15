function izquierda() {
    var aux = document.getElementById('PRINCIPAL');
    aux.scrollLeft = 0;
}
function derecha() {
    var aux= document.getElementById('PRINCIPAL');
    aux.scrollLeft = aux.scrollWidth;
}