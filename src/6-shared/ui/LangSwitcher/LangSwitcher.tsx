import cls from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next"
import {classNames} from "6-shared/lib/classNames/classNames"
import {Button, ThemeButton} from "6-shared/ui/Button/Button"

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    )
}
