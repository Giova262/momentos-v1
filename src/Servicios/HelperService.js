import { notificarError } from './NotificacionesService';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatterWithoutDecimal = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatterMoney(data) {
  return formatter.format(data);
}

export function formatterMoneyWithoutDecimal(data) {
  return formatterWithoutDecimal.format(data);
}

export function formatDate(dateT, separator = '/') {
  if (!dateT) return null;

  let date = new Date(dateT);
  if (dateT.length == 10) {
    const [year, month, day] = dateT.split('-'); // Separar año, mes y día
    date = new Date(year, month - 1, day); // Mes comienza en 0 (enero)
  }

  return `${date.getFullYear()}${separator}${('0' + (date.getMonth() + 1)).slice(-2)}${separator}${(
    '0' + date.getDate()
  ).slice(-2)}`;
}

export function formatDateEsp(dateT, separator = '/') {
  if (!dateT) return null;

  let date = new Date(dateT);
  // if (dateT.length == 10) {
  //   const [year, month, day] = dateT.split('-'); // Separar año, mes y día
  //   date = new Date(year, month - 1, day); // Mes comienza en 0 (enero)
  // }

  const respuesta = `${('0' + date.getDate()).slice(-2)}${separator}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${separator}${date.getFullYear()}`;

  return respuesta;
}

export function formatDate2(dateT) {
  if (!dateT) return null;

  const date = new Date(dateT);
  return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
}

export function formatDate3(dateT) {
  if (!dateT) return null;

  const date = new Date(dateT);

  return `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

export function formatDate4(dateT) {
  if (!dateT) return null;

  const [year, month, day] = dateT.split('-'); // Dividir la fecha en partes
  const formattedDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`; // Formatear a dd/mm/yyyy

  return formattedDate;
}

export function calculateDistanceFromMenoyoFactory(x2, y2) {
  const latitud = Number(x2);
  const longitud = Number(y2);
  const x1 = -34.55767;
  const y1 = -58.7288;
  return Math.hypot(latitud - x1, longitud - y1);
}

export function IguessIfTheNumberIsATripOrAnOrder(number) {
  if (number > 3000 && number < 200000) {
    return 'nro_viaje';
  }

  if (number > 1900 && number < 3000) {
    return 'year';
  }

  if (number > 200000) {
    return 'pedido';
  }

  return 'DONTKNOW';
}

export function getTotalOrderWeight(items) {
  if (items.length == 1) {
    return items[0].peso;
  }
  return items.reduce((a, b) => {
    let peso1 = 0;
    let peso2 = 0;
    if (a.peso) {
      peso1 = a.peso * a.cantidad;
    }
    if (b.peso) {
      peso2 = b.peso * b.cantidad;
    }
    return Number(peso1) + Number(peso2);
  });
}

export function getTotalMonto(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.importe) {
      total += Number(item.importe);
    }
  }
  return total;
}

export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

export function distance(lat, lon) {
  var earthRadiusKm = 6371;

  let lat1 = -34.55767;
  let lon1 = -58.7288;

  let lat2 = Number(lat);
  let lon2 = Number(lon);

  var dLat = degreesToRadians(lat2 - lat1);
  var dLon = degreesToRadians(lon2 - lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

export function getTotalMontoFacturasMenoyo(numform, diccionary) {
  let total = 0;
  const carrierInvoice = diccionary[numform];
  for (let i = 0; i < carrierInvoice.length; i++) {
    const element = carrierInvoice[i];
    total += Number(element.neto);
  }
  return total;
}

export function divisionHelper(a, b) {
  if (isFinite(a / b)) {
    return a / b;
  }
  return null;
}

export function distinct(value, index, self) {
  return self.indexOf(value) === index;
}

export function hash(string) {
  const H = 37;
  let total = 0;
  let table = new Array(16);
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total %= table.length;
  if (total < 1) {
    table.length - 1;
  }
  return parseInt(total);
}

export function generateNewColor(name) {
  let nombreConcat = name.concat(name);
  var simbolos, color;
  simbolos = '89ABCDEF01234567';
  color = '#';
  if (nombreConcat.length < 6) return '#000000';
  color = color + simbolos[hash(nombreConcat[0])];
  color = color + simbolos[hash(nombreConcat[1])];
  color = color + simbolos[hash(nombreConcat[2])];
  color = color + simbolos[hash(nombreConcat[3])];
  color = color + simbolos[hash(nombreConcat[4])];
  color = color + simbolos[hash(nombreConcat[5])];
  return color;
}

export function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

export function removeDuplicatesByKey(arr, keyName) {
  let unique = [];
  let uniqueObject = {};

  arr.forEach((element) => {
    uniqueObject[element[keyName]] = element;
  });

  Object.entries(uniqueObject).forEach(([key, value]) => {
    unique.push(value);
  });
  return unique;
}

export function canAssignADeliveryMan(order, notificar = false) {
  if (order.origen === 'Krikos' && order.krikos_autorizado !== '1') {
    if (notificar) {
      notificarError('Pedido de Krikos no se encuentra Autorizado por un coordinador');
    }
    return false;
  }

  if (order.factura_id) {
    // console.info(
    //   'Pedido: ' +
    //     order.id +
    //     ' Allows you to assign, because you have an invoice id',
    // );
    return true;
  }

  if ((order.autorizado == 0 || !order.autorizado) && order.bloqueos) {
    if (notificar) {
      notificarError('Pedido: ' + order.id + ' No se puede asignar, porque tiene un Bloqueo y no está Autorizado.');
    }
    return false;
  }

  return true;
}

export function onlyUnique(array) {
  const result = [];
  const map = new Map();
  for (const item of array) {
    if (!map.has(item.nombre)) {
      map.set(item.nombre, true);
      result.push(item);
    }
  }
  return result;
}

export function calculateTheNumberOfDaysBetweenTwoDates(dateTo, dateFrom) {
  let date1 = new Date(dateTo);
  let date2 = new Date(dateFrom);
  let Difference_In_Time = date2.getTime() - date1.getTime();
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  return Difference_In_Days;
}

export function numberWithCommas(x) {
  x = Number(x).toFixed(2);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function numberToTwoDecimals(num) {
  if (!num) return 0;

  let str = num.toString();
  const decimalPos = str.indexOf('.');

  if (decimalPos === -1) {
    return str + '.00';
  }
  const decimals = str.length - decimalPos - 1;
  if (decimals < 2) {
    return str + '0'.repeat(2 - decimals);
  }

  return str.substring(0, decimalPos + 3);
}

export function numberToOneDecimals(num) {
  if (!num) return 0;
  let str = num.toString();
  const decimalPos = str.indexOf('.');

  if (decimalPos === -1) {
    return str + '.0';
  }

  const decimals = str.length - decimalPos - 1;
  if (decimals < 1) {
    return str + '0'.repeat(1 - decimals);
  }

  return str.substring(0, decimalPos + 2);
}

export function formatToFixedDecimals(number, decimalPlaces) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(number);
}

export function applyMask(number, mask) {
  const numberStr = number.toString();
  let result = '';
  let numIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === '#') {
      if (numIndex < numberStr.length) {
        result += numberStr[numIndex];
        numIndex++;
      } else {
        result += '0'; // Fill with '0' if the number has fewer digits
      }
    } else {
      result += mask[i];
    }
  }

  return result;
}
