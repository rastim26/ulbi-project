import '1-app/styles/index.scss'
import { Story } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
