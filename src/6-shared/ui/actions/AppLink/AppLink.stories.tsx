import {ComponentMeta, ComponentStory, StoryFn} from '@storybook/react'
import {AppLink} from './AppLink'

export default {
    title: '6-shared/actions/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
)

export const InternalLight = Template.bind({})
InternalLight.args = {
    children: 'Go to main',
    to: '/',
    intent: 'primary',
    variant: 'link',
}
InternalLight.decorators = [
    (Story: StoryFn) => (
        <div data-theme="light" style={{padding: '20px'}}>
            <Story/>
        </div>
    ),
]

export const InternalDark = Template.bind({})
InternalDark.args = InternalLight.args
InternalDark.decorators = [
    (Story: StoryFn) => (
        <div data-theme="dark" style={{padding: '20px'}}>
            <Story/>
        </div>
    ),
]

export const ExternalLight = Template.bind({})
ExternalLight.args = {
    children: 'Open docs',
    to: 'https://react.dev',
    intent: 'secondary',
    variant: 'ghost',
}
ExternalLight.decorators = [
    (Story: StoryFn) => (
        <div data-theme="light" style={{padding: '20px'}}>
            <Story/>
        </div>
    ),
]

export const ExternalDark = Template.bind({})
ExternalDark.args = ExternalLight.args
ExternalDark.decorators = [
    (Story: StoryFn) => (
        <div data-theme="dark" style={{padding: '20px'}}>
            <Story/>
        </div>
    ),
]