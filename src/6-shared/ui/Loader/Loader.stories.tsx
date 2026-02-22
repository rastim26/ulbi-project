import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { Loader } from './Loader'

export default {
    title: '6-shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
