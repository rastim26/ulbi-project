import cls from "./app-link.module.scss"
import React, {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "6-shared/lib/classNames/classNames"

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
        <Link to={to}
              className={classNames(cls['app-link'], {}, [className, cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    )
}
