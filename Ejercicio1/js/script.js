let flujoAnual = [
  {
    periodo: "Enero",
    ingreso: 1500,
    egreso: 1500,
  },
  {
    periodo: "Febrero",
    ingreso: 2500,
    egreso: 2500,
  },
  {
    periodo: "Marzo",
    ingreso: 84683,
    egreso: 1155,
  },
  {
    periodo: "Abril",
    ingreso: 135353,
    egreso: 1533,
  },
  {
    periodo: "Mayo",
    ingreso: 1535,
    egreso: 5434,
  },
  {
    periodo: "Junio",
    ingreso: 4343354,
    egreso: 5434534,
  },
  {
    periodo: "Julio",
    ingreso: 435453,
    egreso: 4543,
  },
  {
    periodo: "Agosto",
    ingreso: 78351,
    egreso: 7816,
  },
  {
    periodo: "Septiembre",
    ingreso: 1878,
    egreso: 95634,
  },
  {
    periodo: "Octubre",
    ingreso: 4843,
    egreso: 9433,
  },
  {
    periodo: "Noviembre",
    ingreso: 35483,
    egreso: 53133,
  },
  {
    periodo: "Diciembre",
    ingreso: 3843,
    egreso: 348133,
  },
];

function ingresoGanancia(caja) {
  let ingresos = 0;
  let egresos = 0;
  for (const key in caja) {
    ingresos = +caja[key]["ingreso"];
    egresos = +caja[key]["egreso"];
  }
  if (ingresos > egresos) {
    console.log("1");
  } else if (ingresos < egresos) {
    console.log("-1");
  } else {
    console.log("0");
  }
}

ingresoGanancia(flujoAnual);

