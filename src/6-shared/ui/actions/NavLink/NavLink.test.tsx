import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {NavLink} from './NavLink'

describe('NavLink', () => {
    it('should render with base classes', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <NavLink to="/about">About</NavLink>
            </MemoryRouter>,
        )

        const link = screen.getByRole('link', {name: 'About'})

        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', '/about')
        expect(link).toHaveClass('base', 'primary', 'link', 'md')
    })

    it('should add active class when route matches', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <NavLink to="/about">About</NavLink>
            </MemoryRouter>,
        )

        const link = screen.getByRole('link', {name: 'About'})

        expect(link).toHaveClass('active')
    })

    it('should not add active class when route does not match', () => {
        render(
            <MemoryRouter initialEntries={['/profile']}>
                <NavLink to="/about">About</NavLink>
            </MemoryRouter>,
        )

        const link = screen.getByRole('link', {name: 'About'})

        expect(link).not.toHaveClass('active')
    })
})

