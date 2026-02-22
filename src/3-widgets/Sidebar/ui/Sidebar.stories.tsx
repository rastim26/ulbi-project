import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { Theme } from '1-app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'

export default {
    title: '3-widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
