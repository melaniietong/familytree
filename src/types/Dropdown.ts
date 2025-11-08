import { CHARACTER_KEY, LANGUAGE_KEY, PHONETIC_KEY } from '@/constants/constants'

export interface DropdownOption {
    value: string
    label: string
}

export const OPTION_TYPE = {
    CHARACTER: CHARACTER_KEY,
    LANGUAGE: LANGUAGE_KEY,
    PHONETIC: PHONETIC_KEY,
} as const

export type OptionTypes = typeof OPTION_TYPE[keyof typeof OPTION_TYPE]