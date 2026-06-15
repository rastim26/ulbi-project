import {useEffect, useRef} from 'react'

export const useFocusRestore = (
    isOpen: boolean,
    ref: React.RefObject<HTMLElement>
) => {
    const lastFocused = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!isOpen) return

        lastFocused.current =
            document.activeElement as HTMLElement

        ref.current?.focus()

        return () => {
            lastFocused.current?.focus()
        }
    }, [isOpen, ref])
}
