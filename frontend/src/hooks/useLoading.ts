import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadingActions } from "../store/loading.store";

export const useLoading = () => {
    const { loading } = useAppSelector(state => state.loading)
    const dispatch = useAppDispatch()

    // setLoading
    const setLoading = (value: boolean) => {
        dispatch(loadingActions.setLoading(value))
    }

    return {
        loading,
        setLoading
    }
}