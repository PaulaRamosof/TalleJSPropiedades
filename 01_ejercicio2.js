//todo Lista de compras

function ListaCompras() {
  this.productos = [];

  // Método para agregar productos
  this.agregar = function(producto) {
    this.productos.push(producto);
  };

  // Método para mostrar la lista
this.mostrar = function() {
  console.log(this.productos);
};
}

// Crear lista
let lista = new ListaCompras();

// Agregar productos
lista.agregar("Manzanas");
lista.agregar("Pan");
lista.agregar("Leche");
lista.agregar("pollo");


// Mostrar lista
lista.mostrar();
