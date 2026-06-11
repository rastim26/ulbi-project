import { useTranslation } from 'react-i18next'
import {clsx} from '6-shared/lib/clsx/clsx'
import {NavLink} from "6-shared/ui/actions/NavLink/NavLink";
import cls from './Navbar.module.scss'
import {Button} from "6-shared/ui/actions/Button/Button";
import {Modal} from "6-shared/ui/Modal/Modal";
import {useState} from "react";

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
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
                        variant="text"
                    >
                        {t('Main')}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        aria-label="Go to About"
                        intent="secondary"
                        variant="text"
                    >
                        {t('About')}
                    </NavLink>
                </li>
            </ul>
            <Button onClick={() => setIsOpen(true)}>
                Open modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <h2>Modal title</h2>
                <p>Modal content</p>
            </Modal>
        </nav>
    )
}
