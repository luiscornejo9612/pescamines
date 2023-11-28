let filas = 0;
let columnas = 0;
let tabla = document.getElementById("taulell");
tabla = "";



function iniciarPartida () {
    pedirValores();
    crearTabla(filas, columnas);
}

function pedirValores () {
    filas = parseInt(prompt("Ingresa el numero de filas y columnas"));
    columnas = filas;
    if (filas <= 10) {
        filas = 10;
        columnas = filas;
    }
    else if(filas >= 30){
        filas = 30;
        columnas = filas;
    }

    console.log(filas + " * " + columnas);
}

function crearTabla (filas, columnas) {

    for (let f = 0; f < filas; f++) {
        tabla += "<tr id='tr_" + f +"'>";
        for (let c = 0; c < columnas; c++) {
            tabla += "<td id='td" + f + "_" + c + "'>" + f + "" + c + "</td>";
        }
        tabla += "</tr>";
    }
    // Agregamos la tabla al elemento
    document.getElementById("taulell").innerHTML = "<table>" + tabla + "</table>";
}





