import { clsx } from '6-shared/lib/clsx/clsx'
import { Loader } from '6-shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clsx(cls.PageLoader, className)}>
        <Loader />
    </div>
)
