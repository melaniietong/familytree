<template>
    <div class='py-4 max-sm:px-4 border-t border-neutral-200 dark:border-neutral-700 flex flex-col gap-4'>
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Character
            </span>
            <Dropdown 
                v-model="character"
                :options="characterOptions"
                key='char' 
                @update:modelValue="e => updateOption(e, CHARACTER_KEY)"/>
        </div>
    
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Language
            </span>
            <Dropdown 
                v-model="language"
                :options="languageOptions"
                key='lang' 
                @update:modelValue="e => updateOption(e, LANGUAGE_KEY)" />
        </div>
        
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Phonetics
            </span>
            <Dropdown 
                v-model="phonetic"
                :options="phoneticOptions"
                key='rom' 
                @update:modelValue="e => updateOption(e, PHONETIC_KEY)" />
        </div>
    
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Dark mode
            </span>
            <button
                class='w-8 h-4 flex items-center rounded-full transition-all duration-300 border cursor-pointer'
                :class="[ isDark ? 'border-neutral-600 bg-red-900' : 'border-neutral-400' ]"
                @click=toggleDarkMode>
                    <div
                        class='w-2 h-2 bg-neutral-400 rounded-full transform transition-all duration-300'
                        :class="[ isDark ? 'translate-x-5' : 'translate-x-1' ]"></div>
            </button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, watchEffect } from 'vue'
import Dropdown from './Dropdown.vue'
import { characterOptions, languageOptions } from '@/data/options'
import { 
    LANGUAGE, 
    CHARACTER_KEY,
    CHARACTER_DATA_KEY, 
    LANGUAGE_KEY,
    PHONETIC_KEY,
    PHONETIC_DATA_KEY
} from '@/constants/constants'
import { useOptions } from '@/composables/useOptions'

const { 
    isDark,
    character,
    language,
    phonetic,
    phoneticOptions,
    
    toggleDarkMode,
    updateOption
} = useOptions()

watchEffect((): void => {
    const root = document.documentElement
    
    if (isDark.value) {
        root.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        root.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

onMounted((): void => {
    language.value = localStorage.language ?? LANGUAGE.CANTONESE
    character.value = localStorage.character ?? CHARACTER_DATA_KEY.TRADITIONAL
    phonetic.value = localStorage.phonetic ?? (language.value === LANGUAGE.MANDARIN ? PHONETIC_DATA_KEY.PINYIN : PHONETIC_DATA_KEY.JYUTPING)
})
</script>