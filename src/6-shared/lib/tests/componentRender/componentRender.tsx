import {ReactNode} from 'react'
import {I18nextProvider} from 'react-i18next'
import {MemoryRouter} from "react-router-dom";
import {render} from '@testing-library/react'
import i18nForTests from '6-shared/config/i18n/i18nForTests'

export interface componentRenderOptions {
    route?: string,
}

export const componentRender = (
    component: ReactNode,
    options: componentRenderOptions = {}
) => {
    const {route = '/'} = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    )
}
