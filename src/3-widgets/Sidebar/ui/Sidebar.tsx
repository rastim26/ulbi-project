import cls from "./Sidebar.module.scss"
import {classNames} from "6-shared/lib/classNames/classNames"
import {useState} from "react"
import {ThemeSwitcher} from "6-shared/ui/ThemeSwitcher/ThemeSwitcher"
import {LangSwitcher} from "6-shared/ui/LangSwitcher/LangSwitcher"
import {Button} from "6-shared/ui/Button/Button"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onToggle = () => {
        setIsCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
