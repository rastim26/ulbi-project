import { useTranslation } from 'react-i18next'
import {Counter} from '5-entities/Counter'

const AboutPage = () => {
    const { t } = useTranslation('about')
    return (
        <div>
            {t('About page')}
            {t('About my personal website page')}
            <Counter/>
        </div>
    )
}

export default AboutPage
