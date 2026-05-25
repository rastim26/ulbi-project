import { Theme, useTheme } from '1-app/providers/ThemeProvider'
import { clsx } from '6-shared/lib/clsx/clsx'
import LightIcon from '6-shared/ui/Icon/icons/theme-light.svg'
import DarkIcon from '6-shared/ui/Icon/icons/theme-dark.svg'
import {Button} from '6-shared/ui/actions/Button/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            className={clsx(cls.ThemeSwitcher, className)}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
