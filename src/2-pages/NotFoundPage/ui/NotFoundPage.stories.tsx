import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Theme } from '1-app/providers/ThemeProvider'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

export default {
    title: '2-pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {},
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
