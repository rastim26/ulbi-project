import {NavLink as RouterNavLink, NavLinkProps} from 'react-router-dom'
import clsx from 'clsx'
import ui from '../actions.module.scss'

type Props = NavLinkProps & {
    intent?: 'primary' | 'secondary' | 'muted'
    variant?: 'solid' | 'ghost' | 'link' | 'text'
    size?: 'sm' | 'md' | 'lg'
}

export const NavLink = ({
                            to,
                            intent = 'primary',
                            variant = 'link',
                            size = 'md',
                            className,
                            ...props
                        }: Props) => {
    return (
        <RouterNavLink
            to={to}
            className={({isActive}) =>
                clsx(
                    ui.base,
                    ui[intent],
                    ui[variant],
                    ui[size],
                    isActive && ui.active,
                    className
                )
            }
            {...props}
        />
    )
}