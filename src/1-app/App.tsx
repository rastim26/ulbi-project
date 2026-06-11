import './styles/index.scss'
import React, { Suspense } from 'react'
import { AppRouter } from '1-app/providers/router'
import { Navbar } from '3-widgets/Navbar'
import { Sidebar } from '3-widgets/Sidebar'
import { Loader } from '6-shared/ui/Loader/Loader'

const App = () => {
    return (
        <div className="app">
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
