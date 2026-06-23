import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {Modal} from './Modal'

export default {
    title: '6-shared/Modal',
    component: Modal,
    argTypes: {
        isOpen: {
            control: 'boolean',
        },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Opened = Template.bind({})
Opened.args = {
    isOpen: true,
    onClose: action('onClose'),
    children: 'Opened modal content',
}

export const Closed = Template.bind({})
Closed.args = {
    isOpen: false,
    onClose: action('onClose'),
    children: 'Closed modal content',
}
