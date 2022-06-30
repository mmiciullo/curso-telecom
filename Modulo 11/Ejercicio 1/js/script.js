let cFijo = parseInt(prompt("Ingrese el costo fijo"));
let pVenta = parseInt(prompt("Ingrese el precio de venta"));
let cVariables = parseInt(prompt("Ingrese los costos variables"));

let result = cFijo / (pVenta - cVariables);

document.write("El cálculo del punto de equilibrio es: " + result);
