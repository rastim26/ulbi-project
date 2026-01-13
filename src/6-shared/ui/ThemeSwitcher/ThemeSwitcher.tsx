import { Theme, useTheme } from '1-app/providers/ThemeProvider'
import { classNames } from '6-shared/lib/classNames/classNames'
import LightIcon from '6-shared/assets/icons/theme-light.svg'
import DarkIcon from '6-shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from '6-shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
