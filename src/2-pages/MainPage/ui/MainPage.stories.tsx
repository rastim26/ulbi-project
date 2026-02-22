import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import MainPage from './MainPage'

export default {
    title: '2-pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
