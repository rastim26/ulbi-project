import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from '6-shared/config/storybook/ThemeDecorator'
import { Theme } from '1-app/providers/ThemeProvider'
import { Button, ButtonTheme } from './Button'

export default {
    title: '6-shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
