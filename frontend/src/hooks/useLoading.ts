import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadingActions } from "../store/loading.store";
import { dismissToast, loadingToast } from "../utils/toast";

export const useLoading = () => {
    const { loading } = useAppSelector(state => state.loading)
    const dispatch = useAppDispatch()

    // setLoading
    const setLoading = (value: boolean) => {
        let id = undefined
        if (value) {
            id = loadingToast()
        } else {
            dismissToast(id);
        }
        dispatch(loadingActions.setLoading(value))
    }

    return {
        loading,
        setLoading
    }
}