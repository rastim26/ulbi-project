import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { Theme } from '1-app/providers/ThemeProvider'
import { Navbar } from './Navbar'

export default {
    title: '3-widgets/Navbar',
    component: Navbar,
    argTypes: {},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
