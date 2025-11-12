<template>
    <aside
        class='fixed lg:static top-0 left-0 h-full bg-neutral-100 dark:bg-neutral-900 sm:border-r border-neutral-200 dark:border-neutral-700 z-1 transform transition-transform duration-300 ease-in-out w-full sm:w-80 flex flex-col'
        :class="[ isDesktop ? 'translate-x-0' : sidebarOpen ? 'translate-x-0' : '-translate-x-full' ]">
        <div class='w-full h-full flex flex-col justify-between px-4'>
            <CloseBar @close="$emit('close')" />

            <Intro v-if="!person" />

            <div 
                v-else
                class='w-full flex flex-col items-center gap-6 px-4 my-8 overflow-y-scroll overflow-x-auto flex-1'>
                <div 
                    v-if="hasVariations" 
                    class='flex flex-row justify-center rounded-full border border-neutral-400 dark:border-neutral-600'>
                    <button
                        class='px-4 py-1 rounded-l-full text-xs text-neutral-600 dark:text-neutral-400'
                        :class="activeTab === TAB.OVERVIEW ? 'bg-neutral-200 dark:bg-neutral-700' : 'hover:bg-neutral-200 hover:dark:bg-neutral-700'"
                        @click="activeTab = TAB.OVERVIEW">
                        Info
                    </button>
                    
                    <button
                        class='px-4 py-1 rounded-r-full text-xs text-neutral-600 dark:text-neutral-400'
                        :class="activeTab === TAB.VARIATIONS ? 'bg-neutral-200 dark:bg-neutral-700' : 'hover:bg-neutral-200 hover:dark:bg-neutral-700'"
                        @click="activeTab = TAB.VARIATIONS">
                        Variations
                    </button>
                </div>

                <Overview 
                    v-if="activeTab === TAB.OVERVIEW"
                    :person="person" />

                <Variations 
                    v-else 
                    :person="person" />
            </div>

            <Options />
        </div>
    </aside>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import Options from './Sidebar/Options.vue'
import Intro from './Sidebar/Intro.vue'
import CloseBar from './Sidebar/CloseBar.vue'
import Variations from './Sidebar/Variations.vue'
import Overview from './Sidebar/Overview.vue'
import { TAB } from '@/constants/tabs'
import { useOptions } from '@/composables/useOptions'
import { useTabs } from '@/composables/useTabs'
import { useSizing } from '@/composables/useSizing'
import type { Person } from '@/types/data'

const props = defineProps<{
    person: Person | null
    sidebarOpen: boolean
}>()

defineEmits(['close'])

const { language } = useOptions()
const { activeTab } = useTabs()
const { isDesktop } = useSizing()

const hasVariations = computed((): boolean =>
    props.person?.language?.[language.value]?.variations?.length > 0
)
</script>
