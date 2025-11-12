import { STORAGE_KEY } from '@/constants/storage'
import { 
    isLanguage, 
    isCharacterDataKey, 
    isPhoneticDataKey 
} from './options'
import { 
    LANGUAGE_DEFAULT, 
    CHARACTER_DEFAULT, 
    PHONETICS_DEFAULT 
} from '@/constants/options'
import { PHONETIC_OPTIONS_BY_LANGUAGE } from '@/constants/options'
import type { StorageKeys } from '@/types/storage'
import type { PhoneticDataKeys } from '@/types/data'
import type { Languages } from '@/types/options'
import type { CharacterDataKeys } from '@/types/data'

export const getStoredLanguage = (): Languages => {
    const stored = readStorage(STORAGE_KEY.LANGUAGE)
    return isLanguage(stored) ? stored : LANGUAGE_DEFAULT
}

export const getStoredCharacter = (): CharacterDataKeys => {
    const stored = readStorage(STORAGE_KEY.CHARACTER)
    return isCharacterDataKey(stored) ? stored : CHARACTER_DEFAULT
}

export const getStoredPhonetic = (lang: Languages): PhoneticDataKeys => {
    const stored = readStorage(STORAGE_KEY.PHONETIC)

    if (isPhoneticDataKey(stored) && PHONETIC_OPTIONS_BY_LANGUAGE[lang].includes(stored)) {
        return stored
    }
    
    return PHONETICS_DEFAULT[lang]
}

export const readStorage = (key: StorageKeys): string | null => {
    if (typeof window === 'undefined') return null
    
    try {
        return window.localStorage.getItem(key)
    } catch {
        return null
    }
}

export const writeStorage = (key: StorageKeys, value: string): void => {
    if (typeof window === 'undefined') return
    
    try {
        window.localStorage.setItem(key, value)
    } catch {
        console.warn('Local storage not supported.')
        return
    }
}