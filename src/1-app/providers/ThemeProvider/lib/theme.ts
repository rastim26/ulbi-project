import {LOCAL_STORAGE_THEME_KEY, Theme} from './ThemeContext'

export const getSystemTheme = (): Theme => {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return Theme.DARK
    }

    return Theme.LIGHT
}

export const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem(
        LOCAL_STORAGE_THEME_KEY,
    ) as Theme | null

    return savedTheme || getSystemTheme()
}

export const applyTheme = (theme: Theme): void => {
    document.documentElement.dataset.theme = theme
}

export const saveTheme = (theme: Theme): void => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
}