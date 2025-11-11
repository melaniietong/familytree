export const TAB = {
    OVERVIEW: 'overview',
    VARIATIONS: 'variations',
} as const

export type Tabs = (typeof TAB)[keyof typeof TAB]
