// DESAFIO FETCH
// Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar en nuestro html
// (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y debe contener las propiedades en sus columnas de
//  Id, name, username, email y address-street.
const $table = document.querySelector("#table");
const $tBody = document.createElement("tbody");
const $tHead = document.createElement("thead");
const $trHead = document.createElement("tr");
$fragment = document.createDocumentFragment();

(() => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((json) => {
      keys(json);
      dateRows(json);
    });
})();

// Obtener las keys del objecto e insertarlo en el dom
const keys = (json) => {
  const keys = [Object.keys(json[1])];
  $trHead.innerHTML += `
    <th>${keys[0][0]}</th>
    <th>${keys[0][1]}</th>
    <th>${keys[0][2]}</th>
    <th>${keys[0][3]}</th>
    <th>${keys[0][4]}</th>
  `;
  $fragment.appendChild($trHead);
  $tHead.appendChild($fragment);
  $table.appendChild($tHead);
};

// Obtener los datos de las filas e insertarlos en el dom
const dateRows = (json) => {
  const keys = json.map((e) => {
    $tBody.innerHTML += `
        <tr>
          <td>${e.id}</td>
          <td>${e.name}</td>
          <td>${e.username}</td>
          <td>${e.email}</td>
          <td>${e.address.street}</td>
        </tr>
      `;
  });
  $fragment.appendChild($tBody);
  $table.appendChild($fragment);
};
