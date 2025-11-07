import { ref, computed } from 'vue'
import { CHARACTER_KEY, LANGUAGE_KEY, ROMANIZATION_KEY } from '@/constants/constants'
import { LANGUAGE, ROMANIZATION } from '@/constants/constants'
import { 
    romanizationMandarinOptions, 
    romanizationCantoneseOptions
} from '@/data/options'
import type { OptionTypes } from '@/types/dropdown'
import type { DropdownOption } from '@/types/dropdown'

/*
 * ------------------------------------
 * State
 * ------------------------------------
 */

const isDark = ref<boolean>(localStorage.theme === 'dark')

const character = ref<string>('')
const language = ref<string>('')
const romanization = ref<string>('')

const romanizationOptions = computed((): DropdownOption[] => {
    return language.value === LANGUAGE.MANDARIN ? romanizationMandarinOptions : romanizationCantoneseOptions
})

/*
 * ------------------------------------
 * Handle selection
 * ------------------------------------
 */

const updateOption = (selectedOption: string, option: OptionTypes): void => {
    switch (option) {
        case CHARACTER_KEY: {
            character.value = selectedOption
            localStorage.character = selectedOption
            break
        }

        case LANGUAGE_KEY: {
            language.value = selectedOption
            localStorage.language = selectedOption

            // when language changes, set default romanization
            romanization.value = selectedOption === LANGUAGE.MANDARIN ? ROMANIZATION.PINYIN : ROMANIZATION.JYUTPING
            localStorage.romanization = romanization.value
            break
        }

        case ROMANIZATION_KEY: {
            romanization.value = selectedOption
            localStorage.romanization = selectedOption
            break
        }
    }
}

/*
 * ------------------------------------
 * Dark mode
 * ------------------------------------
 */

function toggleDarkMode(): void {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.theme = isDark.value ? 'dark' : 'light'
}

export function useOptions() {
    return {
        isDark,
        character,
        language,
        romanization,
        romanizationOptions,
        
        toggleDarkMode,
        updateOption
    }
}