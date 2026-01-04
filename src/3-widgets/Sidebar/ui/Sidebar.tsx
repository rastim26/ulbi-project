import cls from "./Sidebar.module.scss"
import {classNames} from "6-shared/lib/classNames/classNames"
import {useState} from "react"
import {ThemeSwitcher} from "6-shared/ui/ThemeSwitcher/ThemeSwitcher"

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

            <button onClick={onToggle}>Toggle</button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher/>
                {/*<LangSwitcher />*/}
            </div>
        </div>
    )
}
