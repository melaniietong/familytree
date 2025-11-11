<template>
    <aside
        class='fixed lg:static top-0 left-0 h-full bg-neutral-100 dark:bg-neutral-900 sm:border-r border-neutral-200 dark:border-neutral-700 z-1 transform transition-transform duration-300 ease-in-out w-full sm:w-80 flex flex-col'
        :class="[ isDesktop ? 'translate-x-0' : sidebarOpen ? 'translate-x-0' : '-translate-x-full' ]">
        <div class='w-full h-full flex flex-col justify-between px-4'>
            <!-- Close bar -->
            <div class='w-full flex flex-row justify-end py-4 shrink-0'>
                <button 
                    v-if="!isDesktop"
                    class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 cursor-pointer'
                    @click="$emit('close')">
                    <FontAwesomeIcon 
                        :icon="faXmark"
                        class='text-xl text-neutral-950 dark:text-neutral-50' />
                </button>
            </div>

            <!-- Starting header -->
            <div v-if="!person">
                <div class='flex flex-col gap-4 items-center max-sm:px-4'>
                    <Logo />

                    <p class='text-base text-neutral-950 dark:text-neutral-50'>
                        Chinese family terms can be confusing. This app makes it easier and interactive!
                    </p>

                    <div class='flex flex-row justify-items-center items-center gap-4 bg-neutral-200 dark:bg-neutral-700 rounded-2xl px-6 py-4'>
                        <FontAwesomeIcon 
                            :icon="faLightbulb"
                            class='text-xl text-neutral-950 dark:text-neutral-50' />
                        
                        <p class='text-sm text-neutral-950 dark:text-neutral-50'>
                            Tap on a family member to view more details!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Overview-->
            <div 
                v-else
                class='w-full flex flex-col items-center gap-6 px-4 my-8 overflow-y-scroll overflow-x-auto flex-1'>
                <div 
                    v-if="hasVariations" 
                    class='flex flex-row justify-center rounded-full border border-neutral-400 dark:border-neutral-600'>
                    <button
                        class='px-4 py-1 rounded-l-full text-xs text-neutral-600 dark:text-neutral-400'
                        :class="activeTab === 'overview' ? 'bg-neutral-200 dark:bg-neutral-700' : 'hover:bg-neutral-200 hover:dark:bg-neutral-700'"
                        @click="activeTab = 'overview'">
                        Info
                    </button>
                    
                    <button
                        v-if="hasVariations"
                        class='px-4 py-1 rounded-r-full text-xs text-neutral-600 dark:text-neutral-400'
                        :class="activeTab === 'variations' ? 'bg-neutral-200 dark:bg-neutral-700' : 'hover:bg-neutral-200 hover:dark:bg-neutral-700'"
                        @click="activeTab = 'variations'">
                        Variations
                    </button>
                </div>

                <div 
                    v-if="activeTab === 'overview'"
                    class='w-full h-100 flex flex-col items-center justify-center gap-2'>
                    <span class='text-base text-neutral-950 dark:text-neutral-50'>
                        {{ person['language'][language][PHONETIC_KEY][phonetic] }}
                    </span>

                    <h1 class='text-4xl text-neutral-950 dark:text-neutral-50 font-semibold'>
                        {{ person['language'][language][CHARACTER_KEY][character] }}
                    </h1>

                    <button
                        class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 my-2 cursor-pointer'
                        @click="tts(
                            person['language'][language][CHARACTER_KEY][character], 
                            language as Languages,
                            character as CharacterDataKeys)">
                        <FontAwesomeIcon 
                            :icon="faVolumeHigh"
                            class='text-base text-neutral-950 dark:text-neutral-50' />
                    </button>

                    <h2 class='text-2xl text-neutral-950 dark:text-neutral-50'>
                        {{ person['eng'] }}
                    </h2>

                    <span 
                        v-if="person['engSubtitle']"
                        class='text-base text-neutral-950 dark:text-neutral-50'>
                        {{ person['engSubtitle'] }}
                    </span>
                </div>

                <div v-else class='w-full flex flex-col gap-2 my-2'>
                    <div
                        v-for="(v, i) in person['language'][language]['variations']"
                        :key="i"
                        class='flex flex-row items-center justify-between gap-4 px-4 py-4 border-b border-neutral-200 dark:border-neutral-700'>
                        <div class='flex flex-col items-center gap-2'>
                            <span class='text-xs text-neutral-950 dark:text-neutral-50'>{{ v.phon[phonetic] }}</span>
                            <span class='text-2xl text-neutral-950 dark:text-neutral-50'>{{ v.char[character] }}</span>
                        </div>

                        <button
                            class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 my-2 cursor-pointer'
                            @click="tts(
                                v.char[character], 
                                language as Languages, 
                                character as CharacterDataKeys)">
                            <FontAwesomeIcon 
                                :icon="faVolumeHigh"
                                class='text-base text-neutral-950 dark:text-neutral-50' />
                        </button>
                        
                        <span class='italic text-xs text-right text-neutral-700 dark:text-neutral-300'>
                            {{ v.description }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Options -->
            <Options />
        </div>
    </aside>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import Logo from './Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faLightbulb, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import Options from './Options.vue'
import { useOptions } from '@/composables/useOptions'
import { 
    CHARACTER_KEY, 
    PHONETIC_KEY, 
    type Languages, 
    type CharacterDataKeys 
} from '@/constants/constants'
import { tts } from '@/utils/textToSpeech'
import { useTabs } from '@/composables/useTabs'

const props = defineProps<{
    person: Record<string, any> | null
    sidebarOpen: boolean
    isDesktop: boolean
}>()

defineEmits(['close'])

const { language, character, phonetic } = useOptions()
const { activeTab } = useTabs()

const hasVariations = computed((): boolean =>
    props.person?.language?.[language.value]?.variations?.length > 0
)
</script>