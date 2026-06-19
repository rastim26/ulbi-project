import { ComponentMeta, ComponentStory } from '@storybook/react'
import AboutPage from './AboutPage'

export default {
    title: '2-pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Default = Template.bind({})
