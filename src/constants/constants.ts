export const LANGUAGE = {
    CANTONESE: 'cantonese',
    MANDARIN: 'mandarin',
} as const

export type Languages = (typeof LANGUAGE)[keyof typeof LANGUAGE]

export const CHARACTER = {
    SIMPLIFIED: 'simplified',
    TRADITIONAL: 'traditional',
} as const

export type Characters = (typeof CHARACTER)[keyof typeof CHARACTER]

export const CHARACTER_DATA_KEY = {
    SIMPLIFIED: 'simp',
    TRADITIONAL: 'trad',
} as const

export type CharacterDataKeys = (typeof CHARACTER_DATA_KEY)[keyof typeof CHARACTER_DATA_KEY]

export const PHONETIC = {
    JYUTPING: 'jyutping',
    PINYIN: 'pinyin',
    YALE: 'yale',
    ZHUYIN: 'zhuyin',
} as const

export type Phonetics = (typeof PHONETIC)[keyof typeof PHONETIC]

export const PHONETIC_DATA_KEY = {
    JYUTPING: 'jp',
    PINYIN: 'py',
    YALE: 'yale',
    ZHUYIN: 'zy',
} as const

export type PhoneticDataKeys = (typeof PHONETIC_DATA_KEY)[keyof typeof PHONETIC_DATA_KEY]

export const LANGUAGE_KEY: string = 'lang'
export const CHARACTER_KEY: string = 'char'
export const PHONETIC_KEY: string = 'phon'