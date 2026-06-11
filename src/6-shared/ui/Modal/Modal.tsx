import {
    FC,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import {createPortal} from 'react-dom'

import {clsx} from '6-shared/lib/clsx/clsx'
import cls from './Modal.module.scss'

const ANIMATION_DELAY = 300

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
    contentClassName?: string
    lazy?: boolean
    titleId?: string
}

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
    const [isClosing, setIsClosing] = useState(false)

    const dialogRef = useRef<HTMLDivElement | null>(null)
    const lastFocusedElement = useRef<HTMLElement | null>(null)

    // lazy mount
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    // scroll lock
    useEffect(() => {
        if (!isOpen) return

        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = prev
        }
    }, [isOpen])

    // focus management (basic)
    useEffect(() => {
        if (isOpen) {
            lastFocusedElement.current = document.activeElement as HTMLElement

            setTimeout(() => {
                dialogRef.current?.focus()
            }, 0)
        }

        return () => {
            lastFocusedElement.current?.focus?.()
        }
    }, [isOpen])

    // escape
    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose()
            }
        }

        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setIsClosing(true)

        window.setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, ANIMATION_DELAY)
    }, [onClose])

    const handleOverlayClick = () => {
        handleClose()
    }

    if (lazy && !isMounted) {
        return null
    }

    return createPortal(
        <div
            className={clsx(
                cls.modal,
                {
                    [cls.opened]: isOpen,
                    [cls.closing]: isClosing,
                },
                className
            )}
        >
            {/* overlay ONLY visual */}
            <div
                className={cls.overlay}
                onClick={handleOverlayClick}
            />

            {/* dialog = accessibility root */}
            <div
                ref={dialogRef}
                className={clsx(cls.content, contentClassName)}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}