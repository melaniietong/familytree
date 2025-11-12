import { DROPDOWN_OPTIONS } from '@/constants/dropdown'

export interface DropdownOption {
    value: string
    label: string
}
export type DropdownOptions = typeof DROPDOWN_OPTIONS[keyof typeof DROPDOWN_OPTIONS]