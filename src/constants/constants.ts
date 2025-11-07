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

export const ROMANIZATION = {
    JYUTPING: 'jyutping',
    PINYIN: 'pinyin',
    YALE: 'yale',
    ZHUYIN: 'zhuyin',
} as const

export type Romanizations = (typeof ROMANIZATION)[keyof typeof ROMANIZATION]