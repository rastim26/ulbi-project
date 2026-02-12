import './Loader.scss'
import { clsx } from '6-shared/lib/clsx/clsx'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={clsx('lds-roller', className)}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
)
