import { addDecorator } from '@storybook/react'
import { Theme } from '../../src/1-app/providers/ThemeProvider'
import { StyleDecorator } from '../../src/6-shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/6-shared/config/storybook/ThemeDecorator'
import { RouterDecorator } from '../../src/6-shared/config/storybook/RouterDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        color: /(background|color)$/i,
        date: /Date$/,
    },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
