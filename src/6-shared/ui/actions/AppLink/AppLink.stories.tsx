import {ComponentMeta, ComponentStory} from '@storybook/react'
import {AppLink} from './AppLink'

export default {
    title: '6-shared/actions/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Internal = Template.bind({})
Internal.args = {
    children: 'Go to main',
    to: '/',
    intent: 'primary',
    variant: 'link',
}

export const External = Template.bind({})
External.args = {
    children: 'Open docs',
    to: 'https://react.dev',
    intent: 'secondary',
    variant: 'ghost',
}

