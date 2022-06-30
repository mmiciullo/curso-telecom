let cFijo = prompt("Ingrese el costo fijo");
let pVenta = prompt("Ingrese el precio de venta");
let cVariables = prompt("Ingrese los costos variables");

let result = cFijo / (pVenta - cVariables);

document.write("El cálculo del punto de equilibrio es: " + result);
