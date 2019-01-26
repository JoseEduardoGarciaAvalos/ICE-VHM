function c2_deslizador(id) {
    var slider = document.getElementById(id);
    C2(id+";"+slider.value);
}
function c2_deslizadorValor(id, valor) {
    var slider = document.getElementById(id);
    slider.value = valor;
}
function c2_deslizadorSilenciar(id) {
    c2_deslizadorValor(id, -100);
    c2_deslizador(id);
}
function c2_ranking() {
    var campo = document.getElementById("c2_nick");
    C2(campo.value);
}
function c2_ranking2(e) {
    if (e.keyCode == 13) {
        c2_ranking();
    }
}
function c2_cambioLista() {
    var lista = document.getElementById("c2_iDispositivo");
    C2("c2_iDispositivo;"+lista.value);
}
function c2_cambioRadio(id) {
    valor = document.querySelector('input[name='+id+']:checked');
    C2(id+";"+valor.value);
}
