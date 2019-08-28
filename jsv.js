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

//función para traer todo
function validateAll() {
    //traer toda la lista
    var list = getAllInput();
    //saber el tamaño de la lista
    var xlength = list.length;

    for (var i = 0; i < xlength; i++) {
        //console.log(list[i]);
        var id = list[i].id;
        if (id == "txtName") {
            var r = validateName(list[i].value);
            console.log(r);
        }
    }
}


//funcion para nombre

function validateName(name) {
    var regExp = /^[A-Za-z\s]{3,50}$/
    return regExp.test(name);
}


//funcion para apellidos

function validateLastName(name) {
    var regExp = /^[A-Za-z\s]+$/
    return regExp.test(name);
}