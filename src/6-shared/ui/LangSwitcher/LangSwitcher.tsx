import { useTranslation } from 'react-i18next'
import { clsx } from '6-shared/lib/clsx/clsx'
import { Button, ButtonTheme } from '6-shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <Button
            className={clsx(cls.LangSwitcher, className)}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    )
}
