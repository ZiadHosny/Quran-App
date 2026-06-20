import { useAppSelector } from '../store/hooks';
import { getTranslations, TranslationKey } from '../i18n/translations';

export const useTranslation = () => {
    const lang = useAppSelector(state => state.settings.lang);
    const dict = getTranslations(lang);
    const t = (key: TranslationKey) => dict[key];
    return { t, lang };
};
