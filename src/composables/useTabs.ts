import { ref } from 'vue'
import { TAB } from '@/constants/tabs'
import type { Tabs } from '@/types/tabs'

const activeTab = ref<Tabs>(TAB.OVERVIEW)

const updateTab = (tab: Tabs): void => {
    activeTab.value = tab
}

export const useTabs = () => {
    return { 
        activeTab,
        
        updateTab
    }
}