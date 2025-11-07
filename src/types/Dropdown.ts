import { CHARACTER_KEY, LANGUAGE_KEY, ROMANIZATION_KEY } from '@/constants/constants'

export interface DropdownOption {
    value: string
    label: string
}

export const OPTION_TYPE = {
    CHARACTER: CHARACTER_KEY,
    LANGUAGE: LANGUAGE_KEY,
    ROMANIZATION: ROMANIZATION_KEY,
} as const

export type OptionTypes = typeof OPTION_TYPE[keyof typeof OPTION_TYPE]