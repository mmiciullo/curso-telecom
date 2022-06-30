let presupuestoPErsonal = prompt("Ingrese el presupuesto personal");

// Calculos de gastos sobre el presupuesto personal
// 50% para gastos necesarios
// 30% gastos opcionales
// 20% ahorro e inversion

let gastosNecesarios = presupuestoPErsonal * 0.5;
let gastosOpcionales = presupuestoPErsonal * 0.3;
let ahorroInversion = presupuestoPErsonal * 0.2;

document.write(
  "Se debería dedicar a cada una de las categorías <br>" +
    "Gastos necesarios: " +
    gastosNecesarios +
    "<br>" +
    "Gastos opcionales: " +
    gastosOpcionales +
    "<br>" +
    "Ahorro e inversion: " +
    ahorroInversion
);
