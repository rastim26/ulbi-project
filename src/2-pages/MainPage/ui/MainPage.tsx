import { useTranslation } from 'react-i18next'
import {Counter} from "5-entities/Counter";

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            {t('Main page')}
            <Counter/>
        </div>
    )
}

export default MainPage
