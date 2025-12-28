import './styles/index.scss'
import {Routes, Route, Link} from "react-router-dom"
import {MainPageAsync} from "./pages/MainPage/MainPage.async"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async"
import {Suspense} from "react"
import {useTheme} from "./theme/useTheme";



const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App