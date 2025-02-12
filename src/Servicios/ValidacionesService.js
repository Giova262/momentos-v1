import { notificarError } from 'src/Servicios/NotificacionesService';

export function isEmpty(value) {
  if (!value || value === '' || value == undefined) {
    return true;
  }
  return false;
}

export function isCorrectFormatDB(value, longitud) {
  if (value.length > longitud) {
    return false;
  }
  return true;
}

export function checkObjectKey(object, key, defaultValue = null) {
  if (typeof object !== 'object' || object === null) return defaultValue;

  if (key in object) return object[key];

  return defaultValue;
}

export function cloneObject(obj) {
  if (null == obj || 'object' != typeof obj) return obj;
  let copy = obj.constructor();
  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

export function isNumeric(str) {
  if (typeof str != 'string') return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

export function puedeFacturar(pedido) {
  if (pedido.factura_id) {
    notificarError('El pedido ya esta Facturado');
    return false;
  }

  if (pedido.estado === 'ANULADO') {
    notificarError('El pedido tiene un estado ANULADO');
    return false;
  }

  if ((pedido.autorizado == 0 || !pedido.autorizado) && pedido.bloqueos) {
    notificarError('Pedido Bloqueado, y no Autorizado');
    return false;
  }

  return true;
}

