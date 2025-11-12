import { ref } from 'vue'

const getInitialWindowSize = (): boolean => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= 1024
}

const isDesktop = ref<boolean>(getInitialWindowSize())

export const useSizing = () => {
    return { 
        isDesktop
    }
}