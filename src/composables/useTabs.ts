import { ref } from 'vue'
import { TAB, type Tabs } from '@/constants/tabs'

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