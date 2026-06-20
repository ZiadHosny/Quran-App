import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Lang, settingsActions } from '../store/settings.store';

export const useSettings = () => {
    const { theme, lang } = useAppSelector(state => state.settings);
    const dispatch = useAppDispatch();

    const toggleTheme = () => dispatch(settingsActions.toggleTheme());
    const setLang = (l: Lang) => dispatch(settingsActions.setLang(l));

    return { theme, lang, toggleTheme, setLang };
};
