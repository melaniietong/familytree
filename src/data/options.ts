import type { DropdownOption } from '@/types/Dropdown'
import { LANGUAGE, CHARACTER, ROMANIZATION } from '@/constants/constants'

export const characterOptions: DropdownOption[] = [
    { value: CHARACTER.TRADITIONAL, label: CHARACTER.TRADITIONAL },
    { value: CHARACTER.SIMPLIFIED, label: CHARACTER.SIMPLIFIED }
]

export const languageOptions: DropdownOption[] = [
    { value: LANGUAGE.MANDARIN, label: LANGUAGE.MANDARIN },
    { value: LANGUAGE.CANTONESE, label: LANGUAGE.CANTONESE }
]

export const romanizationCantoneseOptions: DropdownOption[] = [
    { value: ROMANIZATION.JYUTPING, label: ROMANIZATION.JYUTPING },
    { value: ROMANIZATION.YALE, label: ROMANIZATION.YALE }
]

export const romanizationMandarinOptions: DropdownOption[] = [
    { value: ROMANIZATION.PINYIN, label: ROMANIZATION.PINYIN },
    { value: ROMANIZATION.ZHUYIN, label: ROMANIZATION.ZHUYIN }
]