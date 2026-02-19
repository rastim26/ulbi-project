import { render, screen } from '@testing-library/react'
import { Button } from '6-shared/ui/Button/Button'
import { ThemeButton } from './Button'

describe('Button', () => {
    it('should render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    it('should render with className', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
