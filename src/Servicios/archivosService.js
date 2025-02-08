// services/csvService.js
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

const CSV_FILE = './data.csv';

// Función para leer el archivo CSV
export const leerCSV = () => {
  if (!fs.existsSync(CSV_FILE)) return []; // Si no existe, retorna una lista vacía
  const data = fs.readFileSync(CSV_FILE, 'utf8');
  return parse(data, { columns: true });
};

// Función para agregar un nuevo momento al CSV
export const agregarMomento = (momento) => {
  let momentos = [];

  // Si el archivo existe, lo leemos
  if (fs.existsSync(CSV_FILE)) {
    momentos = leerCSV();
  }

  // Agregamos el nuevo momento a la lista
  momentos.push(momento);

  // Convertimos los datos a formato CSV
  const csvString = stringify(momentos, { header: true });

  // Escribimos en el archivo CSV (si no existe, lo crea)
  fs.writeFileSync(CSV_FILE, csvString, 'utf8');
  console.log(`Momento agregado correctamente: ${momento.titulo}`);
};
