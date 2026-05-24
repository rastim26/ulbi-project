import clsx from 'clsx'
import ui from '../actions.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    intent?: 'primary' | 'secondary' | 'success' | 'danger'
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'text'
    size?: 'sm' | 'md' | 'lg'
    fullWidth?: boolean
}

export const Button = ({
                           intent = 'primary',
                           variant = 'solid',
                           size = 'md',
                           fullWidth = false,
                           className,
                           ...props
                       }: Props) => {
    return (
        <button
            className={clsx(
                ui.base,
                ui[intent],
                ui[variant],
                ui[size],
                fullWidth && ui.fullWidth,
                className
            )}
            {...props}
        />
    )
}