import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { PageError } from './PageError'

export default {
    title: '6-shared/PageError',
    component: PageError,
    argTypes: {},
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
