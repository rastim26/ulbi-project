import {ComponentMeta, ComponentStory, StoryFn} from '@storybook/react'
import {AppLink} from './AppLink'

export default {
    title: '6-shared/actions/AppLink',
    component: AppLink,
    argTypes: {
        intent: {
            control: 'select',
            options: ['primary', 'secondary', 'muted'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost', 'link', 'text'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
)

// ===== LINK VARIANT =====
export const LinkPrimary = Template.bind({})
LinkPrimary.args = {
    children: 'Link Primary',
    to: '/',
    intent: 'primary',
    variant: 'link',
    size: 'md',
}

export const LinkSecondary = Template.bind({})
LinkSecondary.args = {
    children: 'Link Secondary',
    to: '/about',
    intent: 'secondary',
    variant: 'link',
    size: 'md',
}

export const LinkMuted = Template.bind({})
LinkMuted.args = {
    children: 'Link Muted',
    to: '/contact',
    intent: 'muted',
    variant: 'link',
    size: 'md',
}

// ===== TEXT VARIANT =====
export const TextPrimary = Template.bind({})
TextPrimary.args = {
    children: 'Text Primary',
    to: '/',
    intent: 'primary',
    variant: 'text',
    size: 'md',
}

export const TextSecondary = Template.bind({})
TextSecondary.args = {
    children: 'Text Secondary',
    to: '/about',
    intent: 'secondary',
    variant: 'text',
    size: 'md',
}
