// src/utils/getTranslation.js
import { useSelector } from 'react-redux';
import { translations } from '../translations';

export const useTranslation = () => {
    const language = useSelector((state) => state.language.language);

    const t = (key) => {
        const keys = key.split('.');
        let translation = translations[language];
        keys.forEach(k => {
            translation = translation[k];
        });
        return translation || key;
    };

    return { t, language };
};
