import {Theme} from '../../src/1-app/providers/ThemeProvider'

const themeToolbarItems = [
    {value: Theme.LIGHT, title: '☀️ Light'},
    {value: Theme.DARK, title: '🌙 Dark'},
]

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        color: /(background|color)$/i,
        date: /Date$/,
    },
}

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for all stories',
        defaultValue: Theme.LIGHT,
        toolbar: {
            title: '🌓 Theme',
            items: themeToolbarItems,
        },
    },
}
