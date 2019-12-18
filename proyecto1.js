var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; //array de posibles resultados
var condicionN = true, condicionL = true; //booleanos inicializados como 'true'
var valorNumero; //variable global para almacenar el valor de la id 'numero'
var valorLetra; //variable global para almacenar el valor de la id 'letra'


document.getElementsByClassName("cajatexto")[0].onkeypress = detectarTecla; //cajaTexto numero, al pulsar la tecla indicada en la funcion la ejecuta
document.getElementsByClassName("cajatexto")[1].onkeypress = detectarTecla; //cajaTexto letra

/**
 * funcion para validar la letra que introduzca el usuario. Unicamente recibira el valor que le pasemos si se cumplen
 * las condiciones especificadas, con lo cual pasaria la variable a ser true
 */
function validarLetra() {
    /*Pasamos la letra introducida a mayusculas para que en la comparacion final solo compare si ambos valores comparten
    * la misma letra o no. Ya que distingue entre mayusculas y minusculas, para JS no es lo mismo el caracter 'a' que 'A',
    * a pesar de ser la misma letra. Con esta funcion nos evitamos ese problema*/
    let letra = document.getElementById("letra").value.toUpperCase();
    valorLetra = letra;

    if (letra === "" || letra == null) { // si el usuario no introduce nada...
        window.alert("Rellena la letra, por favor");
        condicionL = false;
    } else if (!(letra.match(/[a-z]/i))) { //si el texto no tiene solo letras...
        window.alert("Introduce solo letras, por favor");
        document.getElementById("letra").value = ""; //borra el texto introducido
        condicionL = false;
    } else if (!(letra.length === 1)) { //si el texto no tiene 1 solo caracter...
        window.alert("Solo puedes introducir una letra");
        document.getElementById("letra").value = "";
        condicionL = false;
    } else {
        condicionL = true;
        /*si no se cumplen el resto de condiciones, habremos pasado el filtro! indicamos explicitamente que la condicion
        se cumple con 'true', sino una vez introducimos los datos y hacemos clic en el boton este no hace nada,
        porque la condicion de que ejecute su funcion es que las condiciones de ambos metodos se cumplan, sean 'true'*/
    }

    return valorLetra; // como cumplio todos los requisitos, devuelve el valor que introdujo
}


/**
 * funcion que se utiliza con el mismo objetivo que validarLetra, pero con el numero que introduzca el usuario.
 */
function validarNumero() {
    let numero = document.getElementById("numero").value;
    valorNumero = numero;
    const regex = /^[0-9]+$/; //constante definida con un patron de caracteres permitidos en este caso

    if (numero === "" || numero == null) { //si el campo 'numero' esta vacio...
        window.alert("Rellena el número, por favor");
        condicionN = false;
    } else if (!(numero.match(regex))) { //si el texto introducido no tiene solo numeros...
        window.alert("Introduce solo números");
        document.getElementById("numero").value = "";
        condicionN = false;
    } else { //si pasa el filtro...
        condicionN = true;
    }

    return valorNumero; //valor devuelto que contiene el numero introducido por el usuario
}

/**
 * Funcion asociada al boton utilizado para enviar los campos y realizar el calculo de letra. Compara el resultado con
 * la letra introducida y muestra ambos datos.
 */
function calcularDni() {

    //llamada a las funciones para validar los datos
    validarNumero();
    validarLetra();

    let resultadoLetra = letras[valorNumero % 23]; //variable local que almacena el resultado del algoritmo para calcular la letra

    if (condicionN === true && condicionL === true) { //si ambos datos introducidos pasaron el filtro...
        //escribe en la pagina el resultado obtenido del algoritmo
        document.getElementById("resultado").innerHTML = "<h1>Resultado: " + resultadoLetra + "</h1>";
        if (valorLetra !== resultadoLetra) { //si la letra del usuario no es igual que la letra generada...
            //escribe en rojo la letra del usuario
            document.getElementById("respuesta").innerHTML = "<h3 style='color: red'>Tu letra: " + valorLetra + "</h3>";
        } else { //si es la misma letra...
            //escribe en verde la letra del usuario
            document.getElementById("respuesta").innerHTML = "<h3 style='color: green'>Tu letra: " + valorLetra + "</h3>";
        }
    }


}

/**
 * Funcion que se encarga de enviar los datos una vez el usuario pulse la tecla 'enter' en cualquiera de los dos campos.
 */


//function pulsarEnter() {

    /*funciona, pero al tener el campo en cuestion vacio y pulsar enter la primera vez es preciso pulsar el boton dos
     veces, me imagino que sera del navegador, porque al introducir datos y pulsar enter funciona perfectamente*/

    /*
    function detectarTecla(e) { //funcion interna, ya que solo la utilizaremos aqui
        if (e.key === "Enter") { //si la tecla pulsada es enter...
            document.getElementById("bcalcular").click(); //ejecuta el boton
        }
    }

    document.getElementsByClassName("cajatexto")[0].onkeypress = detectarTecla; //cajaTexto numero, al pulsar la tecla indicada en la funcion la ejecuta
    document.getElementsByClassName("cajatexto")[1].onkeypress = detectarTecla; //cajaTexto letra
}
*/

//OTRA FORMA, llamamos solo a la funcion que ejecuta el evento (aunque event esta deprecated)
function detectarTecla(e) { //CAMBIAMOS EL e POR EVENT EN EL HTML
    if (e.key === "Enter") { //si la tecla pulsada es enter...
        document.getElementById("bcalcular").click(); //ejecuta el boton
    }
}