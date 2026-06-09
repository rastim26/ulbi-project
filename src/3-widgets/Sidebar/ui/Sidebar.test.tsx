import { fireEvent, screen } from '@testing-library/react'
import {componentRender} from '6-shared/lib/tests/componentRender/componentRender'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    it('should render', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    it('should render toggle', () => {
        componentRender(<Sidebar/>)
        const sidebar = screen.getByTestId('sidebar')
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(sidebar).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(sidebar).toHaveClass('collapsed')
    })
})
