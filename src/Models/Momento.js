
import MomentoDB from "src/DataBase/MomentoDB";
import { checkObjectKey } from "src/Servicios/ValidacionesService";

class Momento {
  constructor() {
    this.id_dexie = null;
    this.id_evento = null;
    this.nombre = null;
    this.edad = null;
  }

  reset() {
    this.id_dexie = null;
    this.id_evento = null;
    this.nombre = null;
    this.edad = null;
  }

  fill(data) {
    this.id_dexie = data.id;
    this.id_evento = data.id_evento;
    this.nombre = data.nombre;
    this.edad = data.edad;
  }

  save() {
    MomentoDB.add(this.payload())
  }

  update() {
    MomentoDB.update(this.id, this.payload())
  }

  async destroy() {
    await MomentoDB.destroy(this.id_dexie)
  }

  payload() {
    return {
      id_evento: this.id_evento ? this.id_evento : -1,
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
