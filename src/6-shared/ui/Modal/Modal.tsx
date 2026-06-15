import {
    FC,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'

/* Helper */
import {PORTAL_ID} from '6-shared/config/portalTargets/portalTargets'
import {clsx} from '6-shared/lib/clsx/clsx'
import {Portal} from '6-shared/ui/Portal/Portal'

/* Hooks */
import {useBodyLock} from '6-shared/hooks/useBodyLock/useBodyLock'
import {useEscClose} from '6-shared/hooks/useEscClose/useEscClose'
import {useFocusRestore} from '6-shared/hooks/useFocusRestore/useFocusRestore'


import cls from './Modal.module.scss'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode

    className?: string
    contentClassName?: string

    lazy?: boolean
    titleId?: string
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({
                                          isOpen,
                                          onClose,
                                          children,
                                          className,
                                          contentClassName,
                                          lazy = true,
                                          titleId = 'modal-title',
                                      }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [isRendered, setIsRendered] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const dialogRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isOpen) return

        setIsMounted(true)


        const id = requestAnimationFrame(() => {
            setIsRendered(true)
        })

        return () => cancelAnimationFrame(id)
    }, [isOpen])

    const requestClose = () => {
        if (isClosing) return
        setIsClosing(true)
    }

    const finalizeClose = () => {
        setIsClosing(false)
        setIsRendered(false)
        setIsMounted(false)
        onClose()
    }

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== e.currentTarget) return
        if (!isClosing) return

        finalizeClose()
    }

    const handleOverlayClick = requestClose

    // fallback safety
    useEffect(() => {
        if (!isClosing) return

        const id = window.setTimeout(() => {
            finalizeClose()
        }, ANIMATION_DELAY)

        return () => clearTimeout(id)
    }, [isClosing])

    useBodyLock(isOpen)
    useEscClose(isOpen, requestClose)
    useFocusRestore(isOpen, dialogRef)

    if (lazy && !isMounted) return null

    return (
        <Portal target={PORTAL_ID.MODAL}>
            <div
                className={clsx(
                    cls.modal,
                    {
                        [cls.opened]: isRendered,
                        [cls.closing]: isClosing,
                    },
                    className
                )}
            >
                <div
                    className={cls.overlay}
                    onClick={handleOverlayClick}
                />

                <div
                    ref={dialogRef}
                    className={clsx(cls.content, contentClassName)}
                    onTransitionEnd={handleTransitionEnd}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
}