const cFijo = $("#costoFijo");
const pVenta = $("#precioVenta");
const cVariable = $("#costoVariable");
const items = $("#items");
const nuevo = $("#nuevo");
const btnEnviar = $("#enviar");

let datos = [];

btnEnviar.click(function () {
  datos.push({
    costoFijo: cFijo.val(),
    precioVenta: pVenta.val(),
    costoVariable: cVariable.val(),
    puntoEquilibrio: cFijo.val() / (pVenta.val() - cVariable.val()),
  });
  items.html(itemsTemplate({ items: datos }));
});

const itemsTemplate = Handlebars.compile(`
  <table>
    <tr>
        <th>Costo Fijo</th>
        <th>Precio de Venta</th>
        <th>Costo variable</th>
        <th>Punto de Equilibrio</th>
    </tr>
    <tr> 
    {{#each items}}
        <td>{{this.costoFijo}}</td>
        <td>{{this.precioVenta}}</td>
        <td>{{this.costoVariable}}</td>
        <td>{{this.puntoEquilibrio}}</td>
        {{/each}}
    </tr> 
  </table>
 `);
