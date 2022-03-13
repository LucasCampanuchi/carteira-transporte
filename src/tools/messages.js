
import { Dialog } from 'quasar'

export const alert = (message, title = 'Atenção') => {
  Dialog.create({
    title: title,
    message: message
  })
}

export const confirmDialog = (title = 'Alert', message, func) => {
  Dialog.create({
    title: title,
    message: message,
    cancel: true
  }).onOk(func).onCancel(() => {})
}
