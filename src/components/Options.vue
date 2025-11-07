<template>
    <div class='py-4 max-sm:px-4 border-t border-neutral-200 dark:border-neutral-700 flex flex-col gap-4'>
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Character
            </span>
            <Dropdown 
                v-model="character"
                :options="characterOptions"
                key='char' />
        </div>
    
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Language
            </span>
            <Dropdown 
                v-model="language"
                :options="languageOptions"
                key='lang' />
        </div>
        
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Romanization
            </span>
            <Dropdown 
                v-model="romanization"
                :options="romanizationOptions"
                key='romanization' />
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
import { ref, watch, computed, onMounted, watchEffect } from 'vue'
import Dropdown from './Dropdown.vue'
import { 
    characterOptions, 
    languageOptions, 
    romanizationCantoneseOptions, 
    romanizationMandarinOptions 
} from '@/data/options'
import { CHARACTER, LANGUAGE, ROMANIZATION } from '@/constants/constants'
import type { DropdownOption } from '@/types/Dropdown'

/*
 * ------------------------------------
 * State
 * ------------------------------------
 */

const isDark = ref(localStorage.theme === 'dark')
const language = ref('')
const character = ref('')
const romanization = ref('')

const romanizationOptions = computed((): DropdownOption[] => {
    return language.value === LANGUAGE.MANDARIN ? romanizationMandarinOptions : romanizationCantoneseOptions
})

/*
 * ------------------------------------
 * Dark mode
 * ------------------------------------
 */

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

const toggleDarkMode = (): void => {
    isDark.value = !isDark.value
}

/*
 * ------------------------------------
 * Option watchers
 * ------------------------------------
 */

watch(language, (newLang): void => {
    // When the selected language changes, reset romanization to the new language's default
    romanization.value = newLang === LANGUAGE.MANDARIN ? ROMANIZATION.PINYIN : ROMANIZATION.JYUTPING
    
    localStorage.language = newLang
    localStorage.romanization = romanization.value
})

watch(character, (val): void => {
    localStorage.character = val
})

watch(romanization, (val): void => {
    localStorage.romanization = val
})

/*
 * ------------------------------------
 * Set initial state
 * ------------------------------------
 */

onMounted((): void => {
    language.value = localStorage.language ?? LANGUAGE.CANTONESE
    character.value = localStorage.character ?? CHARACTER.TRADITIONAL
    romanization.value = localStorage.romanization ?? (language.value === LANGUAGE.MANDARIN ? ROMANIZATION.PINYIN : ROMANIZATION.JYUTPING)
    
    localStorage.language = language.value
    localStorage.character = character.value
    localStorage.romanization = romanization.value
})
</script>