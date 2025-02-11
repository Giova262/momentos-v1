
import MomentoDB from "src/DataBase/MomentoDB";

// modelo.js
class Momento {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    const asdas = MomentoDB.all()
    console.log('asdas');
    console.log(asdas);
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Exportar la clase
export default Momento;
