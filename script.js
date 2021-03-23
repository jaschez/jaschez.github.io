var prohibidas = ['tonto', 'pirineo', 'cipollin', 'pluscuamperfecto', 'mariadelmarabad', 'rendirme', 'alcaparro'];

var formulario = document.getElementsByClassName('formulario-comentario')[0];
var comentarios = document.getElementById('comentarios');

VisibilidadComentarios();

function validarCorreo(email) {
    const r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return r.test(email);
}

function VisibilidadComentarios(){
    if(formulario.style.display == "none"){
        comentarios.style.width = "100%";
        comentarios.style.marginLeft = "0%";
        formulario.style.display="block";
        comentarios.style.opacity = "100%";
        
    }
    else{
        comentarios.style.width = "5%";
        comentarios.style.opacity = "10%";
        formulario.style.display="none";
        comentarios.style.marginLeft = "95%";
    }
}

function botonPulsado(){
    var comment = document.getElementsByClassName('comentario')[0];

    var nombre = document.getElementById('fname').value;
    var correo = document.getElementById('fmail').value;
    var texto = document.getElementById('ftext').value;

    if(nombre.length == 0 || correo.length == 0 || texto.length == 0){
        alert("Debes de completar todos los campos antes de enviar un comentario");
        return false;
    }

    if(!validarCorreo(correo)){
        alert("Introduce un correo electrónico válido");
        return false;
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear().toString();
    var yy = yyyy.substring(yyyy.length - 2, yyyy.length);
    var hh = today.getHours();
    var mm = today.getMinutes();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var fecha = dd + '/' + mm + '/' + yy;

    var newComment = comment.cloneNode(true);
    
    newComment.getElementsByClassName('author-comentario')[0].innerHTML = nombre;
    newComment.getElementsByClassName('fecha-comentario')[0].innerHTML = fecha + " a las " + hh + ":" + mm;
    newComment.getElementsByClassName('texto-comentario')[0].innerHTML = texto;

    comment.before(newComment);
}

function updateText(){
    var text = document.getElementById('ftext').value;

    var i;

    for(i = 0; i < prohibidas.length; i++){
        var searchMask = prohibidas[i];
        var regEx = new RegExp(searchMask, "ig");
        var replaceMask = "*".repeat(prohibidas[i].length);

        text = text.replace(regEx, replaceMask);
    }

    document.getElementById('ftext').value = text;
}