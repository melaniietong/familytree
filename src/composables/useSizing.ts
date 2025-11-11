import { ref } from 'vue'

const isDesktop = ref<boolean>(window.innerWidth >= 1024)

export const useSizing = () => {
    return { 
        isDesktop
    }
}