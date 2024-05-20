function validateForm() {

    let tipoSolicitud = document.getElementById("type").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let profesion = document.getElementById("profesion").value;
    let descripcion = document.getElementById("descripcion").value;
    let selectDepartamento = document.getElementById("departamento");
    let selectCiudad = document.getElementById("ciudad");
    let autorizacion = document.getElementById("autorizacion").checked;

    if (tipoSolicitud === "0") {
        alert("Por favor, selecciona el tipo de solicitud.");
        return false;
    } else if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    } else if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    } else if (tipoDocumento === "0") {
        alert("Por favor, selecciona un tipo de documento.");
        return false;
    } else if (numeroDocumento === "" || isNaN(numeroDocumento) || numeroDocumento.length !== 10) {
        alert("Por favor, ingresa un número de documento válido de 10 dígitos.");
        return false;
    } else if (correo === "" || !correo.includes("@") || !correo.includes(".")) {
        alert("Ingrese un correo válido.");
        return false;
    } else if (telefono === "" || isNaN(telefono) || telefono.length !== 10) {
        alert("Por favor, ingresa un número de teléfono válido de 10 dígitos.");
        return false;
    } else if (selectCiudad.value === "0" || selectDepartamento.value === "0") {
        alert("Por favor, selecciona una ciudad y departamento.");
        return false;
    } else if (selectCiudad.value !== selectDepartamento.value) {
        alert("La ciudad y el departamento seleccionado no coinciden.");
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
    }else if (!autorizacion){
        alert("Por favor, autorice el tratamiento de datos personales");
        return false;
    } else {
        alert("Enviado con éxito.");
        return true;
    }
}


let selectCiudad = document.getElementById("ciudad");
let selectDepartamento = document.getElementById("departamento");

function seleccionarCiudad() {
    let ciudadSeleccionada = document.getElementById("ciudad").value;
    let DepartamentoSeleccionado = document.getElementById("departamento").value;
    console.log(ciudadSeleccionada);
    console.log(DepartamentoSeleccionado);
}

ciudades.forEach((ciudad) => {
    let nuevaCiudad = document.createElement("option");
    nuevaCiudad.value = ciudad.dpto;
    nuevaCiudad.textContent = ciudad.nombre;
    selectCiudad.appendChild(nuevaCiudad);
});

departamentos.forEach((dpto) => {
    let nuevoDpto = document.createElement("option");
    nuevoDpto.value = dpto.id;
    nuevoDpto.textContent = dpto.nombre;
    selectDepartamento.appendChild(nuevoDpto);
});