{
// Ejercicio 1
    // Muestra una ventana de alerta nada más cargar el archivo
    alert("¡Bienvenido a la página web!");

// Ejercicio 2
    // Pide el nombre al usuario usando un cuadro de texto
    let nombre = prompt("¿Cómo te llamas?");
    // Muestra el mensaje de bienvenida combinando el texto del usuario
    alert("¡Bienvenido, " + nombre + "!");

// Ejercicio 3
    // Pide el primer número(está en string) y lo convertimos a número entero
    let numero1 = parseInt(prompt("Introduce el primer número:"));
    // Pide el segundo número y hacemos lo mismo
    let numero2 = parseInt(prompt("Introduce el segundo número:"));
    // Los sumamos
    let suma = numero1 + numero2;
    // Muestra el resultado en una alerta
    alert("La suma es: " + suma);

// Ejercicio 4
    // Pide la edad y la convertimos a número entero
    let edad = parseInt(prompt("Introduce tu edad:"));
    // Comprueba si es mayor o igual a 18
    if (edad >= 18) {
    alert("Eres mayor de edad");
    } 
    else {
    alert("Eres menor de edad");
    }
}