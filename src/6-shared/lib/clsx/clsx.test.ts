import { clsx } from './clsx'

describe('clsx', () => {
    it('Single className', () => {
        const expected = 'btn'
        expect(clsx('btn')).toBe(expected)
    })
    it('Listed multiple classNames', () => {
        const expected = 'btn mt-2'
        expect(clsx('btn', 'mt-2')).toBe(expected)
    })
    it('Conditional className', () => {
        const expected = 'btn is-active'
        const isActive = true
        expect(clsx('btn', isActive && 'is-active')).toBe(expected)
    })
    it('Conditional object className', () => {
        const expected = 'btn mt-2'
        expect(clsx('btn', { 'mt-2': true })).toBe(expected)
    })
    it('Nested classNames', () => {
        const expected = 'btn mt-2 text-lg\''
        const isLarge = true
        expect(clsx(['btn', ['mt-2', isLarge && 'text-lg']])).toBe(expected)
    })
    it('Empty className', () => {
        const expected = ''
        expect(clsx()).toBe(expected)
    })
    describe('Faulty inputs', () => {
        it('Faulty falsy className', () => {
            const expected = 'btn'
            const isActive = false
            expect(clsx('btn', isActive && 'is-active')).toBe(expected)
        })
        it('Faulty falsy nested classNames', () => {
            const expected = 'btn mt-2'
            const isActive = false
            expect(clsx([
                'btn',
                ['mt-2', isActive && 'text-lg'],
            ])).toBe(expected)
        })
        it('Faulty null conditional object className', () => {
            const expected = 'btn'
            expect(clsx('btn', { 'mt-2': null })).toBe(expected)
        })
        it('Faulty undefined conditional object className', () => {
            const expected = 'btn'
            expect(clsx('btn', { 'mt-2': undefined })).toBe(expected)
        })
        it('Faulty falsy conditional object className', () => {
            const expected = 'btn'
            expect(clsx('btn', { 'mt-2': false })).toBe(expected)
        })
    })
})
