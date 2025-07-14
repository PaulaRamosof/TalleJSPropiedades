//todo Libro Objeto Básico  + if / crear un sistema de prestamos de libros:

//? Creo el constructor del objeto:
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function() {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado con éxito.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  };
}

let milibro = new Libro("Cien años de soledad", "Gabriel García Márquez");

milibro.prestar(); // Primer intento: éxito
milibro.prestar(); // Segundo intento: mensaje de error
