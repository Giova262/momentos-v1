import { Notify } from 'quasar';

/**
 *
 * @param {*} mensaje mensaje principal
 * @param {*} caption el texto que está debajo del mensaje, más chiquito
 * @param {*} color   su valor debe ser 'negative' o 'positive'
 */
export function notificar(mensaje, caption, color) {
  Notify.create({
    message: mensaje,
    color: color,
    multiLine: true,
    progress: true,
    timeout: 8000,
    caption: caption,
  });
}

export function notificarError(
  mensaje,
  caption = 'Lo siento, hubo un error',
  timeout = 8000,
) {
  // console.log(mensaje);
  Notify.create({
    message: mensaje,
    color: 'negative',
    multiLine: true,
    progress: true,
    timeout: timeout,
    caption: caption,
  });
}

export function notificarExito(mensaje, caption = 'Success', timeout = 2000) {
  Notify.create({
    message: mensaje,
    color: 'positive',
    multiLine: true,
    progress: true,
    timeout: timeout,
    caption: caption,
  });
}

export function notificarAlerta(mensaje, caption = 'Alerta', timeout = 8000) {
  Notify.create({
    message: mensaje,
    color: 'yellow-10',
    multiLine: true,
    progress: true,
    timeout: timeout,
    caption: caption,
  });
}

export function notificarInformacion(
  mensaje,
  caption = 'Informacion',
  timeout = 8000,
) {
  Notify.create({
    message: mensaje,
    color: '#4d82bc',
    multiLine: true,
    progress: true,
    timeout: timeout,
    caption: caption,
  });
}

export function notificarAPIError(error, timeout = 8000) {
  if (!error.response) {
    notificarError(error.message, 'API Error', timeout);
    return;
  }

  switch (error.response.status) {
    case 400:
      if (error.response.data.errores) {
        for (let i = 0; i < error.response.data.errores.length; i++) {
          const element = error.response.data.errores[i];
          switch (element.type) {
            case 'warning':
              notificarAlerta(element.message, 'API Alerta', timeout);
              break;

            default:
              notificarError(element.message, 'API Error', timeout);
              break;
          }
        }
      }

      if (error.response.data.message) {
        notificarError(error.response.data.message, 'API Error', timeout);
      }

      break;
    case 401:
      notificarError(
        'Tu sesión expiró, por favor volve a ingresar al sitio..',
        'API Error',
        timeout,
      );
      window.open('/#/', '_self');
      break;
    case 404:
      notificarError(
        'Request failed with status code 404',
        `Not Found -> /${error.response.config.url}`,
        timeout,
      );
      break;
    case 406:
      if (error.response.data.message) {
        notificarError(error.response.data.message, 'API Error', timeout);
      }
      break;
    case 413:
      notificarError(
        'La imagen es muy grande, por favor reduzca el tamaño de la misma',
        `Entity Too Large`,
        timeout,
      );
      break;
    case 422:
      if (error.response.data.message) {
        notificarError(error.response.data.message, 'API Error', timeout);
      }
      Object.entries(error.response.data.errors).forEach(([key, value]) => {
        value.forEach((err) => {
          notificarError(err, key, timeout);
        });
      });
      break;

    default:
      console.error(error.response);
      notificarError(error.response.data.message, 'API Error', timeout);
      break;
  }
}
