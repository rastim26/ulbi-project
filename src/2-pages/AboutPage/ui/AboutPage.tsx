import {useTranslation} from "react-i18next"

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (
        <div>
            {t('About page')}
            {t('About my personal website page')}
        </div>
    );
};

export default AboutPage