import type { DropdownOption } from '@/types/Dropdown'
import { LANGUAGE, CHARACTER, ROMANIZATION } from '@/constants/constants'
import { formatLabel } from '@/utils/strings'

export const characterOptions: DropdownOption[] = [
    { value: CHARACTER.TRADITIONAL, label: formatLabel(CHARACTER.TRADITIONAL) },
    { value: CHARACTER.SIMPLIFIED, label: formatLabel(CHARACTER.SIMPLIFIED) }
]

export const languageOptions: DropdownOption[] = [
    { value: LANGUAGE.MANDARIN, label: formatLabel(LANGUAGE.MANDARIN) },
    { value: LANGUAGE.CANTONESE, label: formatLabel(LANGUAGE.CANTONESE) }
]

export const romanizationCantoneseOptions: DropdownOption[] = [
    { value: ROMANIZATION.JYUTPING, label: formatLabel(ROMANIZATION.JYUTPING) },
    { value: ROMANIZATION.YALE, label: formatLabel(ROMANIZATION.YALE) }
]

export const romanizationMandarinOptions: DropdownOption[] = [
    { value: ROMANIZATION.PINYIN, label: formatLabel(ROMANIZATION.PINYIN) },
    { value: ROMANIZATION.ZHUYIN, label: formatLabel(ROMANIZATION.ZHUYIN) }
]