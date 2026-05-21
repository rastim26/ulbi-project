import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { Theme } from '1-app/providers/ThemeProvider'
import {Button} from './Button'

export default {
    title: '6-shared/Button',
    component: Button,
    argTypes: {
        intent: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'success', 'danger'],
        },
        variant: {
            control: {type: 'select'},
            options: ['solid', 'outline', 'ghost', 'link'],
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
        },
        block: {control: 'boolean'},
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
    children: 'Button',
    intent: 'secondary',
    variant: 'outline',
}

export const SuccessGhost = Template.bind({})
SuccessGhost.args = {
    children: 'Button',
    intent: 'success',
    variant: 'ghost',
}

export const DangerLink = Template.bind({})
DangerLink.args = {
    children: 'Button',
    intent: 'danger',
    variant: 'link',
}

export const BlockLargeDark = Template.bind({})
BlockLargeDark.args = {
    children: 'Button',
    intent: 'secondary',
    variant: 'outline',
    size: 'lg',
    block: true,
}
BlockLargeDark.decorators = [ThemeDecorator(Theme.DARK)]
