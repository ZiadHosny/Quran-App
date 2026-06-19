import { useAppDispatch, useAppSelector } from '../store/hooks';
import { settingsActions } from '../store/settings.store';

export const useSettings = () => {
    const { theme } = useAppSelector(state => state.settings);
    const dispatch = useAppDispatch();

    const toggleTheme = () => dispatch(settingsActions.toggleTheme());

    return { theme, toggleTheme };
};
