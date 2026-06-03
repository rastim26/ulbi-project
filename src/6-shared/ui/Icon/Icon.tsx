import clsx from 'clsx'

import styles from './Icon.module.scss'

import HomeIcon from './icons/home.svg'
import ListIcon from './icons/list.svg'
import ThemeModeIcon from './icons/moon-and-sun.svg'


const icons = {
    home: HomeIcon,
    list: ListIcon,
    theme: ThemeModeIcon,
}

export type IconName = keyof typeof icons

interface IconProps {
    name: IconName
    width?: number | string
    height?: number | string
    className?: string
}

export const Icon = ({
                         name,
                         width = 20,
                         height = 20,
                         className,
                     }: IconProps) => {

    const SvgIcon = icons[name]

    if (!SvgIcon) {
        return null
    }

    return (
        <SvgIcon
            className={clsx(styles.icon, className)}
            style={{
                width: width,
                height: height,
            }}
            aria-hidden="true"
        />
    )
}