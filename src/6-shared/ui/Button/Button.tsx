import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'
import cls from './Button.module.scss'

type ButtonIntent =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'

type ButtonVariant =
    | 'solid'
    | 'outline'
    | 'ghost'
    | 'link'

type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    intent?: ButtonIntent
    variant?: ButtonVariant
    size?: ButtonSize
    block?: boolean
}

export const Button: FC<ButtonProps> = ({
                                            intent = 'primary',
                                            variant = 'solid',
                                            size = 'md',
                                            block = false,
                                            type = 'button',
                                            className,
                                            ...props
                                        }: ButtonProps) => (
    <button
        type={type}
        className={clsx(
            cls.button,
            cls[intent],
            cls[variant],
            cls[size],
            block && cls.block,
            className,
        )}
        {...props}
    />
)
