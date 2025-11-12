import { CHARACTER_DATA_KEY, PHONETIC_DATA_KEY } from './data'
import { formatLabel } from '@/utils/strings'
import type { Languages } from '@/types/options'
import type { CharacterDataKeys, PhoneticDataKeys } from '@/types/data'
import type { DropdownOption } from '@/types/dropdown'

export const LANGUAGE = {
    CANTONESE: 'cantonese',
    MANDARIN: 'mandarin',
} as const

export const CHARACTER = {
    SIMPLIFIED: 'simplified',
    TRADITIONAL: 'traditional',
} as const

export const PHONETIC = {
    JYUTPING: 'jyutping',
    PINYIN: 'pinyin',
    YALE: 'yale',
    ZHUYIN: 'zhuyin',
} as const

export const LANGUAGE_DEFAULT: Languages = LANGUAGE.CANTONESE
export const CHARACTER_DEFAULT: CharacterDataKeys = CHARACTER_DATA_KEY.TRADITIONAL
export const PHONETICS_DEFAULT: Record<Languages, PhoneticDataKeys> = {
    [LANGUAGE.MANDARIN]: PHONETIC_DATA_KEY.PINYIN,
    [LANGUAGE.CANTONESE]: PHONETIC_DATA_KEY.JYUTPING
}

export const PHONETIC_OPTIONS_BY_LANGUAGE: Record<Languages, PhoneticDataKeys[]> = {
    [LANGUAGE.MANDARIN]: [PHONETIC_DATA_KEY.PINYIN, PHONETIC_DATA_KEY.ZHUYIN],
    [LANGUAGE.CANTONESE]: [PHONETIC_DATA_KEY.JYUTPING, PHONETIC_DATA_KEY.YALE]
}

export const CHARACTER_OPTIONS: DropdownOption[] = [
    { value: CHARACTER_DATA_KEY.TRADITIONAL, label: formatLabel(CHARACTER.TRADITIONAL) },
    { value: CHARACTER_DATA_KEY.SIMPLIFIED, label: formatLabel(CHARACTER.SIMPLIFIED) }
]

export const LANGUAGE_OPTIONS: DropdownOption[] = [
    { value: LANGUAGE.MANDARIN, label: formatLabel(LANGUAGE.MANDARIN) },
    { value: LANGUAGE.CANTONESE, label: formatLabel(LANGUAGE.CANTONESE) }
]

export const PHONETIC_CANTONESE_OPTIONS: DropdownOption[] = [
    { value: PHONETIC_DATA_KEY.JYUTPING, label: formatLabel(PHONETIC.JYUTPING) },
    { value: PHONETIC_DATA_KEY.YALE, label: formatLabel(PHONETIC.YALE) }
]

export const PHONETIC_MANDARIN_OPTIONS: DropdownOption[] = [
    { value: PHONETIC_DATA_KEY.PINYIN, label: formatLabel(PHONETIC.PINYIN) },
    { value: PHONETIC_DATA_KEY.ZHUYIN, label: formatLabel(PHONETIC.ZHUYIN) }
]