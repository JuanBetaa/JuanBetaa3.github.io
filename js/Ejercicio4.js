let bt = document.getElementById("calcu")

function instructores() {

    let ip = document.getElementById("nombre").value
    ip = parseInt(ip)
    let is = document.getElementById("apellido").value
    is = parseInt(is)
    let im = document.getElementById("asignatura").value
    im = parseInt(im)

    if (ip == 1 && is == 8 && im == 15 ) {

        alert(`La respuesta es correcta, tu nombre es Tatiana, tu apellido es Cabrera y la asignatura que dicta es JavaScript`)

    }

    else if (ip == 4 && is == 11 && im == 18) {

        alert(`La respuesta es correcta, tu nombre es Adriana, tu apellido es Duarte y la asignatura que dicta es Diseño`)

    }

    else if (ip == 3 && is == 3 && im == 17) {

        alert(`La respuesta es correcta, tu nombre es Carolina, tu apellido es Forero y la asignatura que dicta es Proyecto`)

    }

    else if (ip == 7 && is == 14 && im == 21) {

        alert(`La respuesta es correcta, tu nombre es Yaneth, tu apellido es carmen y la asignatura que dicta es Gestión Ambiental`)

    }

    else if (ip == 6 && is == 13 && im == 20) {

        alert(`La respuesta es correcta, tu nombre es Luis, tu apellido es Baqueros y la asignatura que dicta es Cultura Física`)

    }

    else if (ip == 5 && is == 12 && im == 19) {

        alert(`La respuesta es correcta, tu nombre es Christian, tu apellido es Buitrago y la asignatura que dicta es PHP`)

    }

    else if (ip == 2 && is == 9 && im == 16) {

        alert(`La respuesta es correcta, tu nombre es Fernando, tu apellido es Galindo y la asignatura que dicta es Bases de Datos`)

    }

    else {

        alert(`La respuesta es incorrecta`)

    }

}

calcu.addEventListener('click', instructores)