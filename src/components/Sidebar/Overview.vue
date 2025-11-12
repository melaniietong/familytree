<template>
    <div 
        v-if="person"
        class='w-full h-100 flex flex-col items-center justify-center gap-2'>
        <span class='text-base text-neutral-950 dark:text-neutral-50'>
            {{ person[DATA_KEY.LANGUAGE][language][DATA_KEY.PHONETIC][phonetic] }}
        </span>

        <h1 class='text-4xl text-neutral-950 dark:text-neutral-50 font-semibold'>
            {{ person[DATA_KEY.LANGUAGE][language][DATA_KEY.CHARACTER][character] }}
        </h1>

        <button
            class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 my-2 cursor-pointer'
            @click="tts(
                person[DATA_KEY.LANGUAGE][language][DATA_KEY.CHARACTER][character], 
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
import { useOptions } from '@/composables/useOptions'
import { tts } from '@/utils/textToSpeech'
import { DATA_KEY } from '@/constants/data'
import type { Person } from '@/types/data'
import type { Languages } from '@/types/options'
import type { CharacterDataKeys } from '@/types/data'

defineProps<{
    person: Person | null
}>()

const { language, character, phonetic } = useOptions()
</script>