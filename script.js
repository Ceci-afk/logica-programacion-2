// Solicitar la temperatura al usuario
let celsius;
let temperaturaValida = false;

// Verificar que el dato sea un número
while (temperaturaValida === false) {

    let entrada = prompt("Ingresa la temperatura en grados Celsius:");

    celsius = Number(entrada);

    if (entrada.trim() !== "" && Number.isFinite(celsius)) {
        temperaturaValida = true;
    } else {
        alert("Error: debes ingresar un número válido. Intenta nuevamente.");
    }
}

// Convertir Celsius a Fahrenheit
let fahrenheit = (celsius * 9 / 5) + 32;

// Convertir Celsius a Kelvin
let kelvin = celsius + 273.15;

// Mostrar resultados en consola
console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);
