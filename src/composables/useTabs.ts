import { ref } from 'vue'
import { TAB, type Tabs } from '@/constants/tabs'

const activeTab = ref<Tabs>(TAB.OVERVIEW)

export const useTabs = () => {
    return { activeTab }
}