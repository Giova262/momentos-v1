import Database from 'src/DataBase/db';

async function clear() {
  await Database.momentos
    .clear()
    .then(function () {
      console.info('Successfully cleared momentos');
    })
    .catch(alert);
}

async function migrar(list) {
  await clear();

  for (const key in list) {
    add(list[key]);
  }
  return;
}

async function add(item) {
  return await Database.momentos.add({
    id_evento: item.id,
    nombre: item.nombre,
    edad: item.edad,
  });
}

async function update(id, item) {
  Database.momentos.where("id_evento").equals(id).first()
    .then((usuario) => {
      if (usuario) {
        return Database.momentos.update(usuario.id, { nombre: item.nombre, edad: item.edad });
      } else {
        console.log("No se encontró el item.");
      }
    })
    .then((updated) => {
      if (updated) console.log("Item actualizado.");
    })
    .catch((err) => console.error("Error al actualizar:", err));
}

async function destroy(id) {
  return await Database.momentos.delete(id);
}

async function destroy_by_evento_id(id) {
  Database.momentos.where("id_evento").equals(id).first()
    .then((item) => {
      if (item) {
        return Database.momentos.delete(item.id);
      } else {
        console.log("No se encontró el Item con ese código.");
      }
    })
    .then(() => console.log("Item eliminado"))
    .catch((err) => console.error("Error al eliminar:", err));
}

async function show(id) {
  return await Database.momentos.where("id_evento").equals(id).first()
  // return await Database.momentos.where({ id_evento: id }).toArray();
}

async function getAll() {
  return await Database.momentos.toArray();
}

export default {
  clear,
  migrar,
  show,
  getAll,
  add,
  update,
  destroy,
  destroy_by_evento_id
};
