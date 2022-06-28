let cFijo = Number(prompt("Ingrese el costo fijo"));
let pVenta = Number(prompt("Ingrese el precio de venta"));
let cVariables = Number(prompt("Ingrese los costos variables"));

let result = cFijo / (pVenta - cVariables);

document.write("El cálculo del punto de equilibrio es: " + result);
