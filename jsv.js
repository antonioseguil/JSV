// funcion de inicio
window.addEventListener('load', starLoad);
function starLoad() {
    //agregar boton que agrege mande a llamar a todo
    var startButton = document.getElementById('btnForm');
    startButton.addEventListener('click', validateAll);
}


//function traer todos los inputs
function getAllInput() {
    var listInput = document.getElementsByTagName('input');
    return listInput;
}

// ------------------ REVISIONES ----------------------- //

//función validar
function validateStatus() {
    //traer toda la lista
    var list = getAllInput();
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
        var id = list[i].id;
        if (id == "txtName") {
            var r = validateName(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (id == "txtLastNameF" || id == "txtLastNameM") {
            //console.log(list[i].value);
            var r = validateLastName(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        } else if (id == "txtDni") {
            var r = validateDni(list[i].value);
            listaV.push(r);
            listaC.push(list[i]);
        }
    }
    listAll.push(listaV,listaC);
    return listAll;
}

// funcion para agregar clases

function validateAll() {
    // traer datos con su respectivo input
    var listAll = validateStatus();
    var indexListStatus = listAll[0].length;

    for (let i = 0; i < indexListStatus; i++) {
        var status = listAll[0][i];
        if(!status){
            addStyleDanger(listAll[1][i]);
        }else{
            addStyleCorrect(listAll[1][i]);
        }
    }
    console.log(listAll);
}
//funcion para agregar style de borde rojo, etc

function addStyleDanger(input) {
    input.style.borderColor = "red";
}

function addStyleCorrect(input) {
    input.style.borderColor = "green";
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