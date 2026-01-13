import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '1-app/App'
import { ThemeProvider } from '1-app/providers/ThemeProvider'
import '6-shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
)
