// Punto 1
function sumarNumeros() {
// let numeros=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const entrada = document.getElementById('promedio').value;
const numeros = entrada.split(',').map(num => parseFloat(num.trim()));
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (!isNaN(numeros[i])) {
        suma = suma + numeros[i];
    }
}
const promedio = suma / numeros.length;
document.getElementById('salidaPromedio').innerText = `Suma total: ${suma.toFixed(1)}, Promedio: ${promedio.toFixed(1)}`;
}

// Punto 2
function ingresarNumeros() {
    let numerosIngresados = [];
    let suma = 0;
    let numero = 1;

    while (numero >= 0) {
        numero = parseFloat(prompt("Ingresa un número (negativo para terminar):"));
        if (numero >=0) {
        if (!isNaN(numero)) {
            numerosIngresados.push(numero);
            suma = suma + numero
            }
        }
    }
document.getElementById('salidaNumeros').innerHTML = `
    <strong>Números Ingresados:</strong> ${numerosIngresados.join(',')}<br>
    <strong>Suma Total:</strong> ${suma}`;

}
// Punto 3
function validarContrasena() {
    const contrasenaCorrecta = "1234";
    let intentos = 0;
    let contrasena;
    let contrasenasIngresadas = [];

    do {
        contrasena = prompt("Ingresa la contraseña:");
        contrasenasIngresadas.push(contrasena);
        intentos=intentos+1;
        if (contrasena !== contrasenaCorrecta) {
            alert("Contraseña Incorrecta");
        }
    } while (contrasena !== contrasenaCorrecta);

    document.getElementById('salidaContrasena').innerHTML = `
        <strong>¡Contraseña correcta!</strong><br>
        <strong>Intentos fallidos:</strong> ${intentos-1}<br>
        <strong>Contraseñas ingresadas:</strong> ${contrasenasIngresadas.join(',')}`;
}