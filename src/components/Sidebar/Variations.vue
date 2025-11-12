<template>
    <div 
        v-if="person" 
        class='w-full flex flex-col gap-2 my-2'>
        <div
            v-for="(v, i) in person[DATA_KEY.LANGUAGE][language][DATA_KEY.VARIATIONS]"
            :key="i"
            class='flex flex-row items-center justify-between gap-4 px-4 py-4 border-b border-neutral-200 dark:border-neutral-700'>
            <div class='flex flex-col items-center gap-2'>
                <span class='text-xs text-center text-neutral-950 dark:text-neutral-50'>{{ v[DATA_KEY.PHONETIC][phonetic] }}</span>
                <span class='text-2xl text-center text-neutral-950 dark:text-neutral-50'>{{ v[DATA_KEY.CHARACTER][character] }}</span>
            </div>

            <button
                class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 my-2 cursor-pointer'
                @click="tts(
                    v[DATA_KEY.CHARACTER][character], 
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