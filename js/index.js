/*var fahreinheit = prompt("ingrese los grados");

var gradosCelcius = (fahreinheit - 32) / 38;

var resultado = alert (gradosCelcius);*/


//Programa Alcancia
/*var opc, 
alcancia, 
total=0

opc=prompt("Digite el numero 1 si quiere ingresar dinero o el numero 2 si quiere ver el total de su alcancia: ")   
opc=parseInt(opc)
while(opc==1){
        alcancia=prompt("Cantidad de dinero que va a depositar en la alcancia: ")   
        alcancia=parseInt(alcancia)
        opc=prompt("Digite el numero 1 si quiere ingresar dinero o el numero 2 si quiere ver el total de su alcancia: ")  
        total=total+alcancia
        total=parseInt(total)
}
        
        
        alert("El dinero que ahorro fue de: "+total)*/


//Aplicacion para detectar edad al ingreso del var 

/*var edad=prompt("Ingresa tu edad: ")      
if(edad>=18){
        alert("Eres mayor de edad, BIENVENIDO")
        
}else if(edad==0){
        console.error("Error al ingresar la edad")
}
else if(edad<18){

        alert("Lo sentimos eres menor de edad, vuelve cuando tengas la edad indicada")
}*/


//Aplicacion para los datos 

/*var nombre=prompt("Ingrese su nombre: ")  
var apellido=prompt("Ingrese su apellido: ")  
var edad=prompt("Ingrese su edad: ")  
var tel=prompt("Ingrese su número de telefono: ")

alert("Hola " + nombre + apellido + " Su edad es "+ edad +" y su número de telefono es "+tel)*/























































//EJERCICIOS DE IF ELSE

//EJERCICIO ELSE

/*var Nombreproducto=prompt("Ingrese nombre del producto: ")  
let Cantidad =prompt("ingrese la cantidad") 

let precioProducto

if (Nombreproducto == "gaseosa") {
    precioProducto = 1500
} else if (Nombreproducto == "vino") {
    precioProducto = 50000
} else if (Nombreproducto = "papas") {
    precioProducto = 2500
}

let precioTotal = Cantidad * precioProducto

alert("Tienes que pagar" + precioTotal + "pesos")


//EJERCICIO 2

let hora = prompt("Ingrese la hora por favor")

if (hora >= 6 && hora <= 12) {
        alert("Buenos dias")

} else if (hora >= 13 && hora <= 18) {
        alert("Buenas tardes")

} else{
        alert("Buenas noches")
}


*/


//EJERICICIO 1 IF


/*let edad=prompt("Por favor ingresa tu edad")

if(Number(edad) == edad){

         if(edad >= 18){
                alert("WAO ya eres mayor de edad")
               
        }
        else{
                alert("LO SIENTO aun no eres mayor de edad")
                
        }
        }
        else{
                alert("Digita un valor que sea valido")
        }*/

//EJERICICIO 2
/*let edad = prompt("Por favor ingresa tu edad")

if (edad == 18) {
        alert("Puedes ingresar a nuestro contenido")

}
else {
        alert("Este contenido solo puede ingresar mayores de edad")
}
*/

/* EJERCICIOS CON SWITCH */

//EJERCICIO 1

/*let cantante = prompt("introduce un numero para ver frase del cantante 0. Hector lavoe 1. willie colon 2. Ruben Blades")
switch (cantante) {
        case '0':
                 alert('vivo de ilucion y fantasia esperando un amor que nunca llegara');
                break;
        case '1':
                alert('<center>No se puede negar la existencia de algo palpado Por mas etéreo que sea</center>');
                break;

        case '2':
                alert('Ven descubre quien soy antes de juzgarme');
                break;

        default:
                alert('artista desconocido');
}*/


//EJERCICIO 2

/*let menu = parseInt(prompt("Lista de ejercicio.\n"+"1- calificaciones.\n"+"2- suma.\n"));


switch(menu){
        case 1:
                let calificaciones = prompt ("ingrese su calificaciom");
                
                if(calificaciones >= 1 && calificaciones <= 10){
                        
                        if(calificaciones >=7 && calificaciones <=9){
                                alert("Aprovado")
                        }else if (calificaciones==10){
                                alert("Aprovado obtuviste una calificacion perfecta")
                        }else{
                                alert("Reprobado");
                        }
                }else{
                        alert("Valor fuera de pensado Ingrese un valor valido");
                }
                break;
                
        case 2:
                let valor1=parseInt(prompt("Ingrese su primer valor"));
                let valor2=parseInt(prompt("Ingrese su segundo valor"));

                let resultado = valor1 + valor2;
                alert (valor1+"+"+valor2+"="+resultado);

                break;

                default:
                        alert("Opcion no es valida");
                        break;
        }*/

// EJERICICOS WHILE

//EJERCICIO 1
/*var suma = 0;
do {
        var numeros = prompt("Digita el numero a Operar");
        if
                (Number(numeros) == numeros) {
                numeros = Number(numeros);
                suma = suma + numeros;
        }
        else {
                if (numeros) {
                        alert(numeros + "No es un valor numerico valido")
                }
        }
} while (numeros != undefined);
alert("la suma de los numeros ingresados es " + suma);*/

//EJERCICIO 2

/*let contraseña = 'hola';

while(contraseña != 'hola'){
        contraseña = prompt('Introduzca su contraseña')
}
alert("Su contraseña es correcta");*/


//EJERCICIOS DO WHILE

//EJERCICIO 1

/*do {
        contraseña = prompt('Introduzca su contraseña') 
}while(contraseña != 'hola'){
    alert("contraseña correcta")    
}
*/

//EJERCICIO 2

/*do {
        var calificacion = prompt("Digita la calificacion");

        if (Number(calificacion) == calificacion) {

                if (calificacion > 0 && calificacion <= 10) {


                }

        }
} while (calificacion) {
        if (calificacion < 3) {
                alert("tendra que recuperar la materia");
        }
        else if (calificacion < 5) {
                alert("necesita otras asesorias");
        }
        else if (calificacion < 7) {
                alert("paso raspando");
        }
        else if (calificacion < 9) {
                alert("buena calificacion");
        }
        else if (calificacion >= 9) {
                alert("Exelente calificacion");
        } else {
                alert("Sin calificacion agrege una nota valida");
        }
}*/

//EJERICICIOS ARRAYS

/*function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function ordenar() {
    
        let array = [];
    
        // Relleno el array con numeros aleatorios
        for (let i = 0; i < 10; i++) {
            array.push(getRandomInt(1, 100));
        }
    
       alert("Array sin ordenar");
    
        alert(array);
    
        // Ordeno el array. Es importate lo de a-b.
        // Si quieres de mayor a menor, porn b-a
        array.sort(function (a, b) { return a - b });
    
        alert("Array ordenado");
    
        alert(array);
    
        // Creo el elemento ul
        let ul = document.createElement("ul");
    
        // Recorro el array
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
    
            // Creo el li
            let li = document.createElement("li");
            
            // Creo el texto del li
            let textLi = document.createTextNode(element);
            
            // Añado el texto del li al li
            li.appendChild(textLi);
            
            // Añado el li al ul
            ul.appendChild(li);
    
        }
    
        // Añado el ul al div de valores
        let valores = document.getElementById("valores");
        valores.appendChild(ul);
    
    }
    
    window.onload = ordenar;*/


//EJERCICIO 2

    