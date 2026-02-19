import { fireEvent, screen } from '@testing-library/react'
import {
    renderWithTranslation,
} from '6-shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    it('should render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    it('should render toggle', () => {
        renderWithTranslation(<Sidebar />)
        const sidebar = screen.getByTestId('sidebar')
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(sidebar).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(sidebar).toHaveClass('collapsed')
    })
})
