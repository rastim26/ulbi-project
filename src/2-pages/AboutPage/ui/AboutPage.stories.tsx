import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import AboutPage from './AboutPage'

export default {
    title: '2-pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
