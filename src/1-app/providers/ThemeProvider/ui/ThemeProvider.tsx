import {
    FC,
    ReactNode,
    useEffect,
    useMemo,
    useState,
    useCallback,
} from 'react'

import {ThemeContext, Theme} from '../lib/ThemeContext'
import {
    applyTheme,
    getInitialTheme,
    saveTheme,
} from '../lib/theme'

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        applyTheme(theme)
        saveTheme(theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((prev) =>
            prev === Theme.LIGHT
                ? Theme.DARK
                : Theme.LIGHT,
        )
    }, [])

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme,
        }),
        [theme, toggleTheme],
    )

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider