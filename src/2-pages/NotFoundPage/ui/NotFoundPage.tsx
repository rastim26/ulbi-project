import { clsx } from '6-shared/lib/clsx/clsx'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()
    return (
        <div className={clsx(cls.NotFoundPage, className)}>
            {t('Not Found Page')}
        </div>
    )
}
