import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'

export default {
    title: '2-pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {},
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Default = Template.bind({})
