import {useEffect} from 'react'

export const useBodyLock = (active: boolean) => {
    useEffect(() => {
        if (!active) return

        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = prev
        }
    }, [active])
}