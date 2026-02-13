import { useTranslation } from 'react-i18next'
import { ErrorButton } from '1-app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            {t('Main page')}
            <ErrorButton />
        </div>
    )
}

export default MainPage
