import { Id, toast } from "react-toastify"

type Props = {
    fn: () => {},
    successMsg?: string
}

type SuccessResponse = {
    message: string
}

export const promiseToast = ({ fn, successMsg }: Props) => toast.promise(async () => {
    return fn()
}, {
    pending: loadingMsg,
    success: {
        render({ toastProps }) {
            const res = toastProps.data as SuccessResponse
            return res.message ?? successMsg
        },
    },
    error: {
        render({ toastProps }) {
            const res = toastProps.data as any
            const error = res.data.err ?? errorMsg
            return error
        },
    },
})


export const loadingToast = (msg?: string) => {
    return toast.loading(msg ?? loadingMsg)
}

export const dismissToast = (id: Id) => {
    return toast.dismiss(id)
}

export const updateToastSuccess = ({ id, render }: { id: Id, render: string }) => {
    toast.update(id, { render, type: 'success', isLoading: false, autoClose: 1000 })
}

export const updateToastError = ({ id, render }: { id: Id, render: string }) => {
    toast.update(id, { render, type: 'error', isLoading: false, autoClose: 1000 })
}

export const errorMsg = "Error when try The Operation"
export const createMsg = "Task Created Successfully!"
export const updateMsg = "Task Updated Successfully!"
export const deleteMsg = 'Task Deleted Successfully!'
export const loadingMsg = 'Please wait...'
export const signUpMsg = 'Sign Up Successfully'
export const loginMsg = 'Login Successfully'