import {Link, LinkProps} from 'react-router-dom'
import clsx from 'clsx'
import ui from '../actions.module.scss'

type Props = LinkProps & {
    intent?: 'primary' | 'secondary' | 'muted'
    variant?: 'solid' | 'outline' | 'ghost' | 'link' | 'text'
    size?: 'sm' | 'md' | 'lg'
    external?: boolean
}

export const AppLink = ({
                            to,
                            intent = 'primary',
                            variant = 'link',
                            size = 'md',
                            external,
                            className,
                            ...props
                        }: Props) => {
    const isExternal =
        external || (typeof to === 'string' && to.startsWith('http'))

    const classes = clsx(
        ui.base,
        ui[intent],
        ui[variant],
        ui[size],
        className
    )

    if (isExternal) {
        return (
            <a
                href={to as string}
                className={classes}
                target="_blank"
                rel="noreferrer"
                {...props}
            />
        )
    }

    return <Link to={to} className={classes} {...props} />
}