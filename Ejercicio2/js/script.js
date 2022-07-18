let credits = [
  {
    nombre: "Plan 001",
    capital: 150000,
    plazo: 30,
    tasa: 15,
  },
  {
    nombre: "Plan 002",
    capital: 300000,
    plazo: 180,
    tasa: 10,
  },
  {
    nombre: "Plan 003",
    capital: 485000,
    plazo: 60,
    tasa: 23,
  },
];

function generarInteres(credits) {
  let newCredits = [];

  // Recorrer array credits, a partir de los datos obtenidos de ese array calcular el interes e insertarlos en un nuevo array
  for (const key in credits) {
    let interes =
      (credits[key].capital * credits[key].plazo * credits[key].tasa) / 100;
    // Insertar datos al nuevo array
    newCredits.push({
      nombre: credits[key]["nombre"],
      capital: credits[key]["capital"],
      plazo: credits[key]["plazo"],
      tasa: credits[key]["tasa"],
      interes: interes,
    });
  }
  console.log(newCredits);
}

generarInteres(credits);
