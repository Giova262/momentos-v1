
import MomentoDB from "src/DataBase/MomentoDB";
import { checkObjectKey } from "src/Servicios/ValidacionesService";

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
    MomentoDB.add(this.payload())
  }

  update() {
    MomentoDB.update(this.id, this.payload())
  }

  destroy() {
    MomentoDB.destroy(this.id)
  }

  payload() {
    return {
      id: this.id ? this.id : -1,
      nombre: this.nombre ? this.nombre : '',
      edad: this.edad ? this.edad : '',
    }
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Exportar la clase
export default Momento;
