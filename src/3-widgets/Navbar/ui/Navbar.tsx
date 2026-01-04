import cls from "./Navbar.module.scss"
import {classNames} from "6-shared/lib/classNames/classNames"
import {AppLink, AppLinkTheme} from "6-shared/ui/AppLink/AppLink"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav aria-label="Main navigation"
             className={classNames(cls.Navbar, {}, [className])}
        >
            <ul className={cls['list']}>
                <li>
                    <AppLink
                        to="/"
                        aria-label="Go to Main"
                        theme={AppLinkTheme.INVERTED}
                    >Main</AppLink>
                </li>
                <li>
                    <AppLink
                        to="/about"
                        aria-label="Go to About"
                        theme={AppLinkTheme.INVERTED}
                    >About</AppLink>
                </li>
            </ul>
        </nav>
    )
}

