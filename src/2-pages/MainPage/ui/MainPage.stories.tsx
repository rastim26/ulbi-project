import { ComponentMeta, ComponentStory } from '@storybook/react'
import MainPage from './MainPage'

export default {
    title: '2-pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Default = Template.bind({})
