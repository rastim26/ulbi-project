import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PageError } from './PageError'

export default {
    title: '6-shared/PageError',
    component: PageError,
    argTypes: {},
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Default = Template.bind({})
