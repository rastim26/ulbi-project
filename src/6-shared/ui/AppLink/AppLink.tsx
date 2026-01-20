import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { clsx } from '6-shared/lib/clsx/clsx'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={clsx(cls.AppLink, className, cls[theme])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
