import React, {Suspense} from 'react'
import {Route, Routes} from "react-router-dom"
import {routeConfig} from "6-shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
