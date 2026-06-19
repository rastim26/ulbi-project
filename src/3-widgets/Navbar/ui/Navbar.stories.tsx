import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Navbar } from './Navbar'

export default {
    title: '3-widgets/Navbar',
    component: Navbar,
    argTypes: {},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
