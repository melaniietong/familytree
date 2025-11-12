import * as f3 from 'family-chart'
import { data } from '../data/data'

type BaseChart = ReturnType<typeof f3.createChart> & {
  centerTree?: () => void
}

export type ChartInstance = BaseChart | null
export type Person = (typeof data)[number]['data']
