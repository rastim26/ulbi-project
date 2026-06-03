import { useTranslation } from 'react-i18next'
import { clsx } from '6-shared/lib/clsx/clsx'
import {Button} from '6-shared/ui/actions/Button/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
    isShort?: boolean
}

export const LangSwitcher = ({className, isShort}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <Button
            className={clsx(cls.LangSwitcher, className)}
            intent="secondary"
            variant="ghost"
            onClick={toggle}
        >
            {t(isShort ? 'Language short' : 'Language')}
        </Button>
    )
}
