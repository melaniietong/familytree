<template>
    <div 
        v-if="person"
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
</template>

<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { useTabs } from '@/composables/useTabs'
import { TAB } from '@/constants/tabs'
import { useOptions } from '@/composables/useOptions'
import { 
    CHARACTER_KEY, 
    PHONETIC_KEY, 
    type Languages, 
    type CharacterDataKeys 
} from '@/constants/constants'
import { tts } from '@/utils/textToSpeech'

defineProps<{
    person: Record<string, any> | null
}>()

const { activeTab } = useTabs()
const { language, character, phonetic } = useOptions()
</script>