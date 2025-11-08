import { 
    LANGUAGE, 
    CHARACTER, 
    CHARACTER_DATA_KEY, 
    PHONETIC, 
    PHONETIC_DATA_KEY 
} from '@/constants/constants'
import { formatLabel } from '@/utils/strings'
import type { DropdownOption } from '@/types/dropdown'

export const characterOptions: DropdownOption[] = [
    { value: CHARACTER_DATA_KEY.TRADITIONAL, label: formatLabel(CHARACTER.TRADITIONAL) },
    { value: CHARACTER_DATA_KEY.SIMPLIFIED, label: formatLabel(CHARACTER.SIMPLIFIED) }
]

export const languageOptions: DropdownOption[] = [
    { value: LANGUAGE.MANDARIN, label: formatLabel(LANGUAGE.MANDARIN) },
    { value: LANGUAGE.CANTONESE, label: formatLabel(LANGUAGE.CANTONESE) }
]

export const phoneticCantoneseOptions: DropdownOption[] = [
    { value: PHONETIC_DATA_KEY.JYUTPING, label: formatLabel(PHONETIC.JYUTPING) },
    { value: PHONETIC_DATA_KEY.YALE, label: formatLabel(PHONETIC.YALE) }
]

export const phoneticMandarinOptions: DropdownOption[] = [
    { value: PHONETIC_DATA_KEY.PINYIN, label: formatLabel(PHONETIC.PINYIN) },
    { value: PHONETIC_DATA_KEY.ZHUYIN, label: formatLabel(PHONETIC.ZHUYIN) }
]