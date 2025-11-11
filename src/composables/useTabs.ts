import { ref } from 'vue'

const activeTab = ref<'overview' | 'variations'>('overview')

export const useTabs = () => {
    return { activeTab }
}