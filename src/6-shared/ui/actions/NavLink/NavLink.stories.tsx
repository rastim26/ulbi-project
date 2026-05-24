import {ComponentMeta, ComponentStory} from '@storybook/react'
import {NavLink} from './NavLink'

export default {
    title: '6-shared/actions/NavLink',
    component: NavLink,
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const ActiveOnRoot = Template.bind({})
ActiveOnRoot.args = {
    children: 'Current route',
    to: '/',
    intent: 'primary',
    variant: 'link',
}

export const SecondaryGhost = Template.bind({})
SecondaryGhost.args = {
    children: 'Secondary route',
    to: '/about',
    intent: 'secondary',
    variant: 'ghost',
}

