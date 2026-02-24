import { clsx } from '6-shared/lib/clsx/clsx'
import { AppLink, AppLinkTheme } from '6-shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
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
                    <AppLink
                        to="/"
                        aria-label="Go to Main"
                        theme={AppLinkTheme.INVERTED}
                    >
                        {t('Main')}
                    </AppLink>
                </li>
                <li>
                    <AppLink
                        to="/about"
                        aria-label="Go to About"
                        theme={AppLinkTheme.INVERTED}
                    >
                        {t('About')}
                    </AppLink>
                </li>
            </ul>
        </nav>
    )
}
