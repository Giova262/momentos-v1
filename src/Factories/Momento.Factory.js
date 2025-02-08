// modeloFactory.js
import Momento from 'src/Models/Momento';

const ModeloFactory = {
  crearModelo(nombre, edad) {
    return new Momento(nombre, edad);
  }
};

// Exportar la fábrica
export default ModeloFactory;
