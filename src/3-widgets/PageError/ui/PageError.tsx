import { clsx } from '6-shared/lib/clsx/clsx'
import { useTranslation } from 'react-i18next'
import { Button } from '6-shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()
    const reloadPage = () => {
        const loc = document.location
        loc.reload()
    }
    return (
        <div className={clsx(cls.PageError, className)}>
            <h1>{t('Oops! Something went wrong')}</h1>
            <Button onClick={reloadPage}>{t('Refresh the page')}</Button>
        </div>
    )
}
