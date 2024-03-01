import { toast } from 'react-toastify'

const AuthToasterError = (message: string) => {
  return toast.error(message, {
    theme: 'dark',
    position: 'top-center',
    autoClose: 2000,
  })
}
const AuthToasterSuccess = (message: string) => {
  return toast.success(message, {
    theme: 'dark',
    position: 'top-center',
    autoClose: 2000,
  })
}

const AuthToastLoading = (message: string, id: string) => {
  return toast.loading(message, {
    theme: 'dark',
    position: 'top-center',
    autoClose: 2000,
    toastId: id,
  })
}

const notLogin = (message: string) => {
  return toast.error(`Login to be able to ${message} a problem`, {
    theme: 'dark',
    position: 'top-left',
    autoClose: 2000,
  })
}
export { AuthToasterError, AuthToasterSuccess, AuthToastLoading, notLogin }
