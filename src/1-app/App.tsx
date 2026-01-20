import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from '1-app/providers/ThemeProvider'
import { AppRouter } from '1-app/providers/router'
import { Navbar } from '3-widgets/Navbar'
import { Sidebar } from '3-widgets/Sidebar'
import { clsx } from '6-shared/lib/clsx/clsx'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <Suspense fallback="Loading...">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
