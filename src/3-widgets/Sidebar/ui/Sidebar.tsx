import { clsx } from '6-shared/lib/clsx/clsx'
import { useState } from 'react'
import { ThemeSwitcher } from '6-shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from '6-shared/ui/LangSwitcher/LangSwitcher'
import { Button } from '6-shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggle = () => {
        setIsCollapsed((prev) => !prev)
    }
    return (
        <div className={clsx(cls.Sidebar, { [cls.collapsed]: isCollapsed }, className)}>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={clsx(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
