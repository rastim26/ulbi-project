import {ReactNode} from 'react'
import {createPortal} from 'react-dom'
import {PortalTarget} from "6-shared/config/portalTargets/portalTargets";

interface PortalProps {
    children: ReactNode
    target?: PortalTarget
}

export const Portal = ({
                           children,
                           target = 'modal-root',
                       }: PortalProps) => {
    const element =
        document.getElementById(target) ??
        document.body

    return createPortal(children, element)
}