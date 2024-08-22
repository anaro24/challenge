const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");
let mensajeCopiado = document.getElementById("text-copiado");

function btnEncriptar() {
    let textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(mensajeEncriptado) {
    let mensajeGuardado = "";
    for (i = 0; i < mensajeEncriptado.length; i++) {
        if (mensajeEncriptado[i] == "e") {
            mensajeGuardado = mensajeGuardado + "enter";
        }
        else if (mensajeEncriptado[i] == "i") {
            mensajeGuardado = mensajeGuardado + "imes";
        }
        else if (mensajeEncriptado[i] == "a") {
            mensajeGuardado = mensajeGuardado + "ai";
        }
        else if (mensajeEncriptado[i] == "o") {
            mensajeGuardado = mensajeGuardado + "ober";
        }
        else if (mensajeEncriptado[i] == "u") {
            mensajeGuardado = mensajeGuardado + "ufat";
        }
        else {
            mensajeGuardado = mensajeGuardado + mensajeEncriptado[i];
        }
    }
    return mensajeGuardado;
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
}

function btnDesencriptar() {
    let textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(mensajeDesencriptado) {
    let mensajeGuardado = [];
    for (let i = 0; i < mensajeDesencriptado.length; i++) {
        if (mensajeDesencriptado[i] == "e") {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter", "e");
        } else if (mensajeDesencriptado[i] == "i") {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes", "i");
        } else if (mensajeDesencriptado[i] == "a") {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai", "a");
        } else if (mensajeDesencriptado[i] == "o") {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober", "o");
        } else if (mensajeDesencriptado[i] == "u") {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat", "u");
        }
    }
    return mensajeDesencriptado;
}


function btnCopiar() {
    mensajeCopiado.select();
    //mensajeCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensajeCopiado.value);
    alert("Mensaje copiado: " + mensajeCopiado.value);
}


