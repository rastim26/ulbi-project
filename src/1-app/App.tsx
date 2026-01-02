import './styles/index.scss'
import {Link} from "react-router-dom"
import {useTheme} from "1-app/providers/ThemeProvider";
import {classNames} from "6-shared/lib/classNames/classNames";
import {AppRouter} from "1-app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <AppRouter/>
        </div>
    );
};

export default App