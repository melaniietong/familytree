import { LANGUAGE, CHARACTER, PHONETIC } from '@/constants/options'

export type Languages = (typeof LANGUAGE)[keyof typeof LANGUAGE]
export type Characters = (typeof CHARACTER)[keyof typeof CHARACTER]
export type Phonetics = (typeof PHONETIC)[keyof typeof PHONETIC]