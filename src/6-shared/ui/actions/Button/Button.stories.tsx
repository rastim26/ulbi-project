import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from './Button'

export default {
    title: '6-shared/actions/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Primary button',
    intent: 'primary',
    variant: 'solid',
}

export const DangerGhost = Template.bind({})
DangerGhost.args = {
    children: 'Danger ghost',
    intent: 'danger',
    variant: 'ghost',
    size: 'lg',
}

