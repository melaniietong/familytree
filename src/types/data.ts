import * as f3 from 'family-chart'
import { data } from '../data/data'
import { CHARACTER_DATA_KEY, PHONETIC_DATA_KEY } from '@/constants/data'

type BaseChart = ReturnType<typeof f3.createChart> & {
  centerTree?: () => void
}

export type ChartInstance = BaseChart | null
export type Person = (typeof data)[number]['data']

export type CharacterDataKeys = (typeof CHARACTER_DATA_KEY)[keyof typeof CHARACTER_DATA_KEY]
export type PhoneticDataKeys = (typeof PHONETIC_DATA_KEY)[keyof typeof PHONETIC_DATA_KEY]