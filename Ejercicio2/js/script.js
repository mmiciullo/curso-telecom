const nCampo = $("#nombreCampo");

const gastos = $("#gastos");
const items = $("#items");
const result = $("#results");

const btnAgregar = $("#btnAgregar");

let ingresos = [];
let campos = [];

// El usuario generará nuevos campos a calcular
btnAgregar.click(function () {
  campos.push({
    label: nCampo.val(),
    input: nCampo.val() + "_input",
    porce: nCampo.val() + "_porc",
  });
  items.html(itemsTemplate({ items: campos }));
});

// Calculara los datos ingresados, el valor del campo con el porcentaje
function btnCalcular() {
  setTimeout(() => {
    for (const key in campos) {
      ingresos.push({
        resultCampo:
          $(`#${campos[key]["input"]}`).val() *
          $(`#${campos[key]["porce"]}`).val(),
        label: nCampo.val(),
      });
    }
    result.html(resultTemplate({ result: ingresos }));
  }, 500);
}

// Injectar los inputs que genero el usuario en la función agregar
const itemsTemplate = Handlebars.compile(`
  {{#each items}}
    <label>{{this.label}}
    <input type="number" id="{{this.input}}"></label>
    <label>%
    <input type="number" id="{{this.porce}}"></label><br>
    {{/each}}
    <button id='btnCalcular' onclick='btnCalcular()'>Calcular</button>
`);

// Crear tabla con los datos calculados de los valores y porcentajes agregados
const resultTemplate = Handlebars.compile(`
<table>
{{#each result}}
      <tr>
          <th>{{this.label}}</th>
      </tr>   
      <tr>
          <td>{{this.resultCampo}}</td>
      </tr>
    {{/each}}
  </table>
`);
