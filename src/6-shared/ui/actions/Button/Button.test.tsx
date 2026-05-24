import {fireEvent, render, screen} from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
    it('should render with default classes', () => {
        render(<Button>Test</Button>)

        const button = screen.getByRole('button', {name: 'Test'})

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('base', 'primary', 'solid', 'md')
    })

    it('should apply custom classes and width modifier', () => {
        render(
            <Button
                intent="danger"
                variant="ghost"
                size="lg"
                fullWidth
                className="custom"
            >
                Delete
            </Button>,
        )

        const button = screen.getByRole('button', {name: 'Delete'})

        expect(button).toHaveClass('danger', 'ghost', 'lg', 'fullWidth', 'custom')
    })

    it('should forward native button props', () => {
        const onClick = jest.fn()

        render(
            <Button type="submit" disabled onClick={onClick}>
                Submit
            </Button>,
        )

        const button = screen.getByRole('button', {name: 'Submit'})

        expect(button).toHaveAttribute('type', 'submit')
        expect(button).toBeDisabled()

        fireEvent.click(button)
        expect(onClick).not.toHaveBeenCalled()
    })
})
