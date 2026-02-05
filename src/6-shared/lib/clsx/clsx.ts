/**
 * clsx helper — fully drop-in compatible with the `clsx` library.
 * https://www.npmjs.com/package/clsx
 *
 * USAGE:
 * - Pass strings or numbers for static class names
 * - Use `condition && 'class-name'` for conditional classes
 * - Use objects `{ 'class-name': boolean }` for multiple conditionals
 * - Use arrays to compose or map class values (supports nesting)
 *
 * HANDLES:
 * - Ignores all falsy values: false, null, undefined, 0, ''
 * - Includes object keys only when their value is truthy
 * - Flattens nested arrays recursively
 *
 * EXAMPLES:
 * clsx('btn', 'btn--primary')
 * clsx('btn', isActive && 'is-active')
 * clsx('btn', { 'btn--disabled': isDisabled })
 * clsx('btn', { 'btn--disabled': isDisabled }, { 'btn--loading': isLoading })
 * clsx(['btn', ['mt-2', isLarge && 'text-lg']])
 */

type ClassDictionary = Record<string, boolean | null | undefined>

export type ClassValue =
    | string
    | number
    | null
    | undefined
    | boolean
    | ClassDictionary
    | ClassValue[]

export function clsx(...args: ClassValue[]): string {
    return args
        .flatMap((arg) => {
            if (!arg) return []

            if (typeof arg === 'string' || typeof arg === 'number') {
                return [String(arg)]
            }

            if (Array.isArray(arg)) {
                return [clsx(...arg)]
            }

            if (typeof arg === 'object') {
                return Object.entries(arg)
                    .filter(([_, value]) => value)
                    .map(([key]) => key)
            }

            return []
        })
        .join(' ')
}
