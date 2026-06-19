import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: '6-shared/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Default = Template.bind({})
