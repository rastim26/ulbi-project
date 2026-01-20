import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from '6-shared/lib/clsx/clsx'
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props
    return (
        <button
            type="button"
            className={clsx(cls.Button, className, cls[theme])}
            {...otherProps}
        >
            {children}
            {' '}
        </button>
    )
}
