import { useTranslation } from 'react-i18next'
import {clsx} from '6-shared/lib/clsx/clsx'
import {NavLink} from "6-shared/ui/actions/NavLink/NavLink";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation()
    return (
        <nav
            aria-label="Main navigation"
            className={clsx(cls.Navbar, className)}
        >
            <ul className={cls.list}>
                <li>
                    <NavLink
                        to="/"
                        aria-label="Go to Main"
                        intent="secondary"
                    >
                        {t('Main')}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        aria-label="Go to About"
                        intent="secondary"
                    >
                        {t('About')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
