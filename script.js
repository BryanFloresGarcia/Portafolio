// alert("holaaaaaa");

function ocultamensaje() {
    document.getElementById('cajamensaje').style.visibility = "hidden";
    document.getElementById('botoncopiar').style.visibility = "visible";
    document.getElementById('respuestatxt').style.visibility = "visible";
}

function resolucion() {
    if (screen.width < 1280) {
        document.getElementById('caja2').style.height = "256px";
        let element = document.getElementById('respuestatxt');
        element.scrollIntoView();
    }
}

function encriptar() {
    if (comprobar()) {
        resolucion();
        const texto = document.getElementById('ingresotxt');
        let mensaje = "" + texto.value;
        let vocales = ["e", "i", "a", "o", "u"];
        let reemplazo = ["enter", "imes", "ai", "ober", "ufat"];
        for (let i = 0; i < vocales.length; i++) {

            mensaje = mensaje.replace(new RegExp(vocales[i], "g"), "" + reemplazo[i]);
        }

        document.getElementById('respuestatxt').value = mensaje;
    }


}

function desencriptar() {
    if (comprobar()) {
        resolucion();
        const texto = document.getElementById('ingresotxt');
        let mensaje = "" + texto.value;
        let vocales = ["e", "i", "a", "o", "u"];
        let reemplazo = ["enter", "imes", "ai", "ober", "ufat"];
        for (let i = 0; i < vocales.length; i++) {

            mensaje = mensaje.replace(new RegExp(reemplazo[i], "g"), "" + vocales[i]);
        }

        document.getElementById('respuestatxt').value = mensaje;
    }
}
function copiar() {

    let copyText = document.getElementById("respuestatxt");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    //alert("Copied the text: " + copyText.value);

}

function comprobar() {
    let texto = document.getElementById("ingresotxt").value;

    if (texto == "") {
        alert("Ingrese el texto primero");
        document.getElementById('cajamensaje').style.visibility = "visible";
        document.getElementById('botoncopiar').style.visibility = "hidden";
        document.getElementById('respuestatxt').style.visibility = "hidden";
        if (screen.width < 1280 && screen.width > 414) {
            document.getElementById('caja2').style.height = "56px";
        }else if (screen.width <= 414){
            document.getElementById('caja2').style.height = "120px";
        }
        
        return false;
    }
    ocultamensaje();
    return true;
}