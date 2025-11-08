import { ref, computed } from 'vue'
import { CHARACTER_KEY, LANGUAGE_KEY, PHONETIC_KEY } from '@/constants/constants'
import { LANGUAGE, PHONETIC_DATA_KEY } from '@/constants/constants'
import { 
    phoneticMandarinOptions, 
    phoneticCantoneseOptions
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
const phonetic = ref<string>('')

const phoneticOptions = computed((): DropdownOption[] => {
    return language.value === LANGUAGE.MANDARIN ? phoneticMandarinOptions : phoneticCantoneseOptions
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

            // When language changes, set default phonetic
            phonetic.value = selectedOption === LANGUAGE.MANDARIN ? PHONETIC_DATA_KEY.PINYIN : PHONETIC_DATA_KEY.JYUTPING
            localStorage.phonetic = phonetic.value
            break
        }

        case PHONETIC_KEY: {
            phonetic.value = selectedOption
            localStorage.phonetic = selectedOption
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
        phonetic,
        phoneticOptions,
        
        toggleDarkMode,
        updateOption
    }
}