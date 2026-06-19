import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Sidebar } from './Sidebar'

export default {
    title: '3-widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
