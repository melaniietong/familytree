<template>
    <div class='py-4 max-sm:px-4 border-t border-neutral-200 dark:border-neutral-700 flex flex-col gap-4 shrink-0'>
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Character
            </span>
            <Dropdown 
                v-model="character"
                :options="CHARACTER_OPTIONS"
                key='char' 
                @update:modelValue="e => updateOption(e, DATA_KEY.CHARACTER)"/>
        </div>
    
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Language
            </span>
            <Dropdown 
                v-model="language"
                :options="LANGUAGE_OPTIONS"
                key='lang' 
                @update:modelValue="e => updateOption(e, DATA_KEY.LANGUAGE)" />
        </div>
        
        <div class='flex flex-row justify-between items-center'>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>
                Phonetics
            </span>
            <Dropdown 
                v-model="phonetic"
                :options="phoneticOptions"
                key='rom' 
                @update:modelValue="e => updateOption(e, DATA_KEY.PHONETIC)" />
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
import { watchEffect } from 'vue'
import Dropdown from './../Dropdown.vue'
import { useOptions } from '@/composables/useOptions'
import { CHARACTER_OPTIONS, LANGUAGE_OPTIONS } from '@/constants/options'
import { DATA_KEY } from '@/constants/data'

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
</script>