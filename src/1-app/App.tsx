import './styles/index.scss'
import {Suspense} from "react"
import {Routes, Route, Link} from "react-router-dom"
import {useTheme} from "1-app/providers/ThemeProvider";
import {AboutPage} from "2-pages/AboutPage";
import {MainPage} from "2-pages/MainPage";
import {classNames} from "6-shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App