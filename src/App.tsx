import './index.scss'
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
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