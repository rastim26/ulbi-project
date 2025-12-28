type Mods = Record<string, boolean | string>
export const classNames = (cls: string, mods?: Mods, additional?: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ')
}

// Example of use:
// classNames('remove-btn', {hovered: false, selectable: true, red: false}, ['pdg'] )