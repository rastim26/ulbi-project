import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom"
import {MainPage} from "2-pages/MainPage"
import {AboutPage} from "2-pages/AboutPage"
import {routeConfig} from "6-shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
