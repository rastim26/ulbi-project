import '1-app/styles/index.scss'
import { Story } from '@storybook/react'
import {Theme, ThemeProvider} from '1-app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider forcedTheme={theme}>
            <div className="app">
                <StoryComponent/>
            </div>
        </ThemeProvider>
    )
}
