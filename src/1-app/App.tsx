import './styles/index.scss'
import React, { Suspense } from 'react'
import { useTheme } from '1-app/providers/ThemeProvider'
import { AppRouter } from '1-app/providers/router'
import { Navbar } from '3-widgets/Navbar'
import { Sidebar } from '3-widgets/Sidebar'
import { clsx } from '6-shared/lib/clsx/clsx'
import { Loader } from '6-shared/ui/Loader/Loader'

const App = () => {
    const { theme } = useTheme()
    return (
        <div className={clsx('app', theme)}>
            <Suspense fallback={<Loader />}>
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
