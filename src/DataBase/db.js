import Dexie from 'dexie';

// Crea una nueva base de datos usando Dexie
const db = new Dexie('MiBaseDeDatos');

// Definir las tablas y sus esquemas
db.version(1).stores({
  momentos: '++id, id_evento, nombre, edad',
});

db.open().catch((err) => {
  console.error('Failed to open db:', err);
});

export default db;
