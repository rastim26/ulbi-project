import {
    FC,
    ReactNode,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from 'react'

import {ThemeContext, Theme} from '../lib/ThemeContext'
import {applyTheme, getInitialTheme, saveTheme} from '../lib/theme'

interface ThemeProviderProps {
    children: ReactNode
    forcedTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({children, forcedTheme}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const initialTheme = forcedTheme || getInitialTheme()
        applyTheme(initialTheme)
        return initialTheme
    })

    useEffect(() => {
        if (forcedTheme) {
            setTheme(forcedTheme)
        }
    }, [forcedTheme])

    useEffect(() => {
        applyTheme(theme)
        if (!forcedTheme) {
            saveTheme(theme)
        }
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((prev) =>
            prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        )
    }, [])

    const value = useMemo(
        () => ({theme, setTheme, toggleTheme}),
        [theme, toggleTheme]
    )

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider