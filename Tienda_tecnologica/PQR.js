function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let departamento = document.getElementById("departamento").value;
    let municipio = document.getElementById("municipio").value;
    let direccion = document.getElementById("direccion").value;
    let profesion = document.getElementById("profesion").value;
    let descripcion = document.getElementById("descripcion").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    } else if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    } else if (numeroDocumento === "" || isNaN(numeroDocumento) || numeroDocumento.length !== 10) {
        alert("Por favor, ingresa un numero de documento valido de 10 digitos.");
        return false;
    } else if (correo === "" || !correo.includes("@") || !correo.includes(".")) {
    alert("ingrese un correo válido ");
        return false;
    } else if (telefono === "" || isNaN(telefono) || telefono.length !== 10) {
        alert("Por favor, ingresa un numero de telefono valido de 10 digitos.");
        return false;
    } else if (departamento === "") {
        alert("Por favor, ingresa tu departamento.");
        return false;
    } else if (municipio === "") {
        alert("Por favor, ingresa tu municipio.");
        return false;
    } else if (direccion === "") {
        alert("Por favor, ingresa tu dirección.");
        return false;
    } else if (profesion === "") {
        alert("Por favor, ingresa tu profesión u oficio.");
        return false;
    } else if (descripcion === "") {
        alert("Por favor, ingresa la descripción de tu solicitud.");
        return false;
    } else {
        alert("Enviado con exito");
        return
    }
    return true;
}