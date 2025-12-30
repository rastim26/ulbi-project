import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "1-app/App";
import {ThemeProvider} from "1-app/providers/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)