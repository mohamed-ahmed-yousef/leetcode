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

export { AuthToasterError, AuthToasterSuccess, AuthToastLoading }
