import {ComponentMeta, ComponentStory} from '@storybook/react'
import {NavLink} from './NavLink'

export default {
    title: '6-shared/actions/NavLink',
    component: NavLink,
    argTypes: {
        intent: {
            control: 'select',
            options: ['primary', 'secondary', 'muted'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'ghost', 'link', 'text'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const PrimaryInactive = Template.bind({})
PrimaryInactive.args = {
    children: 'Primary Inactive Navigation Link',
    to: '/main',
    intent: 'primary',
    variant: 'link',
    size: 'md',
}

export const PrimaryActive = Template.bind({})
PrimaryActive.args = {
    children: 'Primary Active Navigation Link',
    to: '/about',
    intent: 'primary',
    variant: 'link',
    size: 'md',
}
PrimaryActive.parameters = {
    initialEntries: ['/about'],
}

export const SecondaryInactive = Template.bind({})
SecondaryInactive.args = {
    children: 'Secondary Inactive Navigation Link',
    to: '/about',
    intent: 'secondary',
    variant: 'link',
    size: 'md',
}

export const SecondaryActive = Template.bind({})
SecondaryActive.args = {
    children: 'Secondary Active Navigation Link',
    to: '/about',
    intent: 'secondary',
    variant: 'link',
    size: 'md',
}
SecondaryActive.parameters = {
    initialEntries: ['/about'],
}

export const MutedText = Template.bind({})
MutedText.args = {
    children: 'Muted Text',
    to: '/contact',
    intent: 'muted',
    variant: 'text',
    size: 'md',
}
