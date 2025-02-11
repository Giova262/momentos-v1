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
    id_permissions: item.id,
    submenu: item.submenu,
    codigo: item.codigo,
  });
}

async function all() {
  return await Database.momentos.toArray();
}

async function getSubmenu(data) {
  return await Database.momentos.where({ submenu: data }).toArray();
}

export default {
  clear,
  migrar,
  all,
  add,
  getSubmenu,
};
