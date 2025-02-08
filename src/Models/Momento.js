
// modelo.js
class Momento {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Exportar la clase
export default Momento;
