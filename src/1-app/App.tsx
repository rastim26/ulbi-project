import './styles/index.scss'
import {useTheme} from "1-app/providers/ThemeProvider";
import {AppRouter} from "1-app/providers/router";
import {Navbar} from "3-widgets/Navbar";
import {classNames} from "6-shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    );
};

export default App