export const PORTAL_ID = {
    MODAL: 'modal-root',
    TOAST: 'toast-root',
    TOOLTIP: 'tooltip-root',
} as const

export type PortalTarget =
    typeof PORTAL_ID[keyof typeof PORTAL_ID]