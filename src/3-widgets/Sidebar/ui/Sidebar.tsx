import {useState} from 'react'
import {useTranslation} from 'react-i18next'

import { clsx } from '6-shared/lib/clsx/clsx'
import { ThemeSwitcher } from '6-shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '6-shared/ui/LangSwitcher/LangSwitcher'
import {Button} from '6-shared/ui/actions/Button/Button'
import {NavLink} from "6-shared/ui/actions/NavLink/NavLink";
import {RoutePath} from "6-shared/config/routeConfig/routeConfig";
import {Icon} from "6-shared/ui/Icon/Icon";

import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggle = () => {
        setIsCollapsed((prev) => !prev)
    }
    const { t } = useTranslation()
    return (
        <div
            data-testid="sidebar"
            className={clsx(cls.sidebar, {[cls.collapsed]: isCollapsed}, className)}
        >
            <ul className={cls.navigation}>
                <li>
                    <NavLink
                        to={RoutePath.main}
                        aria-label="Go to Main"
                        intent="secondary"
                        variant="ghost"
                        className={cls.link}
                    >
                        <Icon name="home"/>
                        <span className={cls.linkText}>{t('Main')}</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={RoutePath.about}
                        aria-label="Go to About"
                        intent="secondary"
                        variant="ghost"
                        className={cls.link}
                    >
                        <Icon name="list"/>
                        <span className={cls.linkText}>{t('About')}</span>
                    </NavLink>
                </li>
            </ul>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={clsx(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher isShort={isCollapsed} className={cls.lang}/>
            </div>
        </div>
    )
}
