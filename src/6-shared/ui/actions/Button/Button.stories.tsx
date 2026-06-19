import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Button} from './Button'

export default {
    title: '6-shared/actions/Button',
    component: Button,
    argTypes: {
        intent: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'danger'],
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
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// ===== SOLID VARIANT =====
export const SolidPrimaryMd = Template.bind({})
SolidPrimaryMd.args = {
    children: 'Solid Primary',
    intent: 'primary',
    variant: 'solid',
    size: 'md',
}

export const SolidSecondaryMd = Template.bind({})
SolidSecondaryMd.args = {
    children: 'Solid Secondary',
    intent: 'secondary',
    variant: 'solid',
    size: 'md',
}

export const SolidSuccessMd = Template.bind({})
SolidSuccessMd.args = {
    children: 'Solid Success',
    intent: 'success',
    variant: 'solid',
    size: 'md',
}

export const SolidDangerMd = Template.bind({})
SolidDangerMd.args = {
    children: 'Solid Danger',
    intent: 'danger',
    variant: 'solid',
    size: 'md',
}

export const SolidPrimarySm = Template.bind({})
SolidPrimarySm.args = {
    children: 'Small',
    intent: 'primary',
    variant: 'solid',
    size: 'sm',
}

export const SolidPrimaryLg = Template.bind({})
SolidPrimaryLg.args = {
    children: 'Large',
    intent: 'primary',
    variant: 'solid',
    size: 'lg',
}

// ===== OUTLINE VARIANT =====
export const OutlinePrimaryMd = Template.bind({})
OutlinePrimaryMd.args = {
    children: 'Outline Primary',
    intent: 'primary',
    variant: 'outline',
    size: 'md',
}

export const OutlineSecondaryMd = Template.bind({})
OutlineSecondaryMd.args = {
    children: 'Outline Secondary',
    intent: 'secondary',
    variant: 'outline',
    size: 'md',
}

export const OutlineSuccessMd = Template.bind({})
OutlineSuccessMd.args = {
    children: 'Outline Success',
    intent: 'success',
    variant: 'outline',
    size: 'md',
}

export const OutlineDangerMd = Template.bind({})
OutlineDangerMd.args = {
    children: 'Outline Danger',
    intent: 'danger',
    variant: 'outline',
    size: 'md',
}

// ===== GHOST VARIANT =====
export const GhostPrimaryMd = Template.bind({})
GhostPrimaryMd.args = {
    children: 'Ghost Primary',
    intent: 'primary',
    variant: 'ghost',
    size: 'md',
}

export const GhostSecondaryMd = Template.bind({})
GhostSecondaryMd.args = {
    children: 'Ghost Secondary',
    intent: 'secondary',
    variant: 'ghost',
    size: 'md',
}

export const GhostSuccessMd = Template.bind({})
GhostSuccessMd.args = {
    children: 'Ghost Success',
    intent: 'success',
    variant: 'ghost',
    size: 'md',
}

export const GhostDangerMd = Template.bind({})
GhostDangerMd.args = {
    children: 'Ghost Danger',
    intent: 'danger',
    variant: 'ghost',
    size: 'md',
}

// ===== STATES =====
export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
    children: 'Disabled',
    intent: 'primary',
    variant: 'solid',
    disabled: true,
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    children: 'Full Width Button',
    intent: 'primary',
    variant: 'solid',
    fullWidth: true,
}

