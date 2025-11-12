import { STORAGE_KEY } from '@/constants/storage'

export type StorageKeys = (typeof STORAGE_KEY)[keyof typeof STORAGE_KEY]