let products = [];
// Agregar un nuevo producto al carrito.
const product = (id, name, price, stock) => {
  products.push({
    id: id,
    name: name,
    price: price,
    stock: stock,
  });
  return products;
};

// Incrementar la cantidad de un producto ya existente en el carrito.
const cantProducts = () => {
  let contProducts = 0;
  for (i = 0; i <= products.length; i++) {
    contProducts = i;
  }
  return contProducts;
};

// Quitar un producto ya existente.
const delProduct = (name) => {
  const removeProduct = products
    .map((product) => {
      return product.nombre;
    })
    .indexOf(nombre);
  products.splice(removeProduct, 1);
  return products;
};

// Obtener un reporte con el precio total y el detalle. Cada fila del detalle debe tener
// el nombre del producto, el precio del producto, la cantidad pedida y el total por fila.
const reportDetails = () => {
  let details = [];
  for (const key in products) {
    details.push({
      name: products[key]["name"],
      price: products[key]["price"],
      stock: products[key]["stock"],
      total: products[key]["price"] * products[key]["stock"],
    });
  }
  return details;
};

product(1, "arroz", 20, 30);
product(2, "Yerba", 20, 30);
product(3, "Fideos", 20, 30);
