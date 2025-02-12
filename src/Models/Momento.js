
import MomentoDB from "src/DataBase/MomentoDB";

class Momento {
  constructor(id, nombre, edad) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }

  reset() {
    this.id = null;
    this.nombre = null;
    this.edad = null;
  }

  fill(data) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.edad = data.edad;
  }

  save() {
    MomentoDB.add({
      id_evento: this.id,
      nombre: this.nombre,
      edad: this.edad,
    })
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Exportar la clase
export default Momento;
