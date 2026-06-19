import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/6-shared/config/storybook/StyleDecorator'
import { RouterDecorator } from '../../src/6-shared/config/storybook/RouterDecorator'
import { ThemeDecorator } from "../../src/6-shared/config/storybook/ThemeDecorator"
import { parameters, globalTypes } from "./config"

export { parameters, globalTypes }

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
addDecorator((story, context) => ThemeDecorator(context.globals.theme)(story))
