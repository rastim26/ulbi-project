import {Theme, useTheme} from '1-app/providers/ThemeProvider'
import {clsx} from '6-shared/lib/clsx/clsx'
import {Button} from '6-shared/ui/actions/Button/Button'
import {Icon} from "6-shared/ui/Icon/Icon";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            className={clsx(
                cls.themeSwitcher,
                {[cls.themeLight]: theme === Theme.LIGHT},
                {[cls.themeDark]: theme === Theme.DARK},
                className
            )}
            onClick={toggleTheme}
        >
            <Icon name="theme" width={40} height={41}/>
        </Button>
    )
}
