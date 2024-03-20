import { Id} from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import { loadingActions } from "../store/loading.store";
import { dismissToast, loadingToast } from "../utils/toast";

export const useLoading = () => {
    const dispatch = useAppDispatch()

    // setLoading
    const setLoading = ({ id, msg }: { id?: Id, msg?: string }): Id  | undefined => {
        if (id) {
            dismissToast(id);
            dispatch(loadingActions.removeLoading(id))
        } else {
            id = loadingToast(msg)
            dispatch(loadingActions.setLoading(id))
            return id
        }
    }

    return {
        setLoading
    }
}