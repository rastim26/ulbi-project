import {useEffect} from 'react'

export const useEscClose = (
    active: boolean,
    onClose: () => void
) => {
    useEffect(() => {
        if (!active) return

        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handler)

        return () => {
            document.removeEventListener('keydown', handler)
        }
    }, [active, onClose])
}