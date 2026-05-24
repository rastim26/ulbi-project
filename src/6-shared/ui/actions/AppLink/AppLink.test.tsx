import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {AppLink} from './AppLink'

describe('AppLink', () => {
    it('should render internal link with default classes', () => {
        render(
            <MemoryRouter>
                <AppLink to="/about">About</AppLink>
            </MemoryRouter>,
        )

        const link = screen.getByRole('link', {name: 'About'})

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/about')
        expect(link).toHaveClass('base', 'primary', 'link', 'md')
    })

    it('should render external link for absolute URLs', () => {
        render(<AppLink to="https://example.com">Docs</AppLink>)

        const link = screen.getByRole('link', {name: 'Docs'})

        expect(link).toHaveAttribute('href', 'https://example.com')
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noreferrer')
    })

    it('should support forcing external mode', () => {
        render(
            <AppLink to="/relative" external className="custom-link">
                External relative
            </AppLink>,
        )

        const link = screen.getByRole('link', {name: 'External relative'})

        expect(link).toHaveAttribute('href', '/relative')
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveClass('custom-link')
    })
})

