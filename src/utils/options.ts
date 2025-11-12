import { LANGUAGE } from '@/constants/options'
import { CHARACTER_DATA_KEY, PHONETIC_DATA_KEY } from '@/constants/data'
import type { Languages } from '@/types/options'
import type { CharacterDataKeys, PhoneticDataKeys } from '@/types/data'

export const isLanguage = (value: unknown): value is Languages => {
    return Object.values(LANGUAGE).includes(value as Languages)
}

export const isCharacterDataKey = (value: unknown): value is CharacterDataKeys => {
    return Object.values(CHARACTER_DATA_KEY).includes(value as CharacterDataKeys)
}

export const isPhoneticDataKey = (value: unknown): value is PhoneticDataKeys => {
    return Object.values(PHONETIC_DATA_KEY).includes(value as PhoneticDataKeys)
}