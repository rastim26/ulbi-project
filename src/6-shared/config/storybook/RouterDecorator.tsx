import {DecoratorFn} from '@storybook/react'
import {MemoryRouter} from 'react-router-dom'

export const RouterDecorator: DecoratorFn = (Story, context) => (
    <MemoryRouter initialEntries={context.parameters?.initialEntries ?? ['/']}>
        <Story/>
    </MemoryRouter>
)
