// funcion de inicio
window.addEventListener('load', starLoad);
function starLoad() {
    //agregar boton que agrege mande a llamar a todo
    var startButton = document.getElementById('btnForm');
    startButton.addEventListener('click', function(){
        validateAll('formData');
    });
}




// ------------------ REVISIONES ----------------------- //


// funcion para validar el estado y los clases correspondiente
function validateAll(form) {
    //llamada al funcion removeAlertMessage por si el div.alert esta activado y no se encuentre algun error
    removeAlertMessage();
    // traer datos con su respectivo input
    var listAll = validateStatus(form);
    // tamaño de la lista status
    var indexListStatus = listAll[0].length;
    //estado que se devuelve, si uno es falso, devuelve falso
    var status = true;
    for (let i = 0; i < indexListStatus; i++) {
        var status = listAll[0][i];
        if (!status) {
            addStyleDanger(listAll[1][i]);
            status = false;
            addAlertMessage(listAll[1][i]);
            break;
        } else {
            addStyleCorrect(listAll[1][i]);
        }
    }

    //console.log(listFalse);
    return status;
}

//función revisar el estaado de cada input
function validateStatus(form) {
    //traer toda la lista
    var list = getAllInput(form);
    //saber el tamaño de la lista
    var xlength = list.length;
    //lista de validaciones
    var listaV = Array();
    // lista de componente
    var listaC = Array();
    // lista combinada
    var listAll = Array();


    for (var i = 0; i < xlength; i++) {
        //console.log(list[i]);
        var name = list[i].name;
        if (name == "cadenan") {
            var r = validateName(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (name == "cadenaa") {
            //console.log(list[i].value);
            var r = validateLastName(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (name == "numberd") {
            var r = validateDni(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (name == "cadena") {
            var r = validateCadena(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (name == "number") {
            var r = validateNumerico(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (name == "numberc") {
            var r = validateCelular(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);

        } else if (name == "numbert") {
            var r = validateTelefono(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);

        } else if (name == "cadenac") {
            var r = validateCorreo(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);

        }
    }
    listAll.push(listaV, listaC);
    return listAll;
}

//function traer todos los inputs
function getAllInput(idForm) {
    var form = document.getElementById(idForm);
    var listInput = form.getElementsByTagName('input');
    return listInput;
}

//funcion para los no aceptado
function addStyleDanger(input) {
    input.style.borderColor = "red";
}

//funciones para aceptado
function addStyleCorrect(input) {
    input.style.borderColor = "green";
}

//funcion para agregar al alert

function addAlertMessage(input) {
    //variable que contiene el div con la clases alert BOOTSTRAP
    var nAlert = document.getElementById("alertStatus");
    //nombre del input enviado, convertido a mayuscula
    //var name = input.name.toUpperCase();
    //valor del input enviado
    var xvalue = input.value;

    //validamos si no esta vacio, si no error el texto ingresado
    if (xvalue == "") {
        nAlert.innerText = "El campo " + name + " esta vacío, por favor ingrese los datos.";
    } else {
        nAlert.innerText = "Texto invalido, por favor verifique el texto.";
    }
    //mostramos el div.alert
    nAlert.style.opacity = "1";
}

// funcion para remover el alert
function removeAlertMessage() {
    var nAlert = document.getElementById("alertStatus");
    nAlert.style.opacity = "0";
}


// ------------------ LISTA DE FUNCIONES ------------------------------- //

//funcion para nombre
function validateName(name) {
    var regExp = /^[A-Za-z\s]{3,50}$/
    return regExp.test(name);
}

//funcion para apellidos

function validateLastName(lastName) {
    var regExp = /^[A-Za-z]{3,50}$/
    return regExp.test(lastName);
}

//funcion para dni

function validateDni(dni) {
    var regExp = /^[0-9]{8}$/
    return regExp.test(dni);
}

//funcion para celular

function validateCelular(celular) {
    var regExp = /^[0-9]{9}$/
    return regExp.test(celular);
}

//funcion para Telefono
function validateTelefono(telefono) {
    var regExp = /^[0-9]{7}$/
    return regExp.test(telefono);
}

//funcion para validar que sea solo cadena
function validateCadena(cadena) {
    var regExp = /[A-Za-z\s]/
    return regExp.test(cadena);
}

//funcion para validar que sea solo numerico
function validateNumerico(cadena) {
    var regExp = /[0-9]/
    return regExp.test(cadena);
}

//funcion para validar correos
function validateCorreo(correo) {
    var regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regExp.test(correo);
}