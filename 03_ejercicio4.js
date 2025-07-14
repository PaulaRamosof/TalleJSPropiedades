//todo Carrito de compras con descuentos

let productos = [];      // Guardamos los productos
let total = 0;           // Total inicial

function agregar(nombre, precio) {
  productos.push(nombre);
  total += precio;
  console.log(`Añadido: ${nombre} - $${precio}`);
}

function calcularDescuento() {
  if (total > 100) {
    console.log(` 10% de descuento aplicado. Total: $${(total * 0.9).toFixed(2)}`);
  } else if (total > 50) {
    console.log(`🛍️ 5% de descuento aplicado. Total: $${(total * 0.95).toFixed(2)}`);
  } else {
    console.log(`💳 Total sin descuento: $${total.toFixed(2)}`);
  }
}
agregar("Cereal", 30000);
agregar("Pan", 25000);
agregar("Yogurt", 20000);

calcularDescuento(); // Muestra el total con posible descuento