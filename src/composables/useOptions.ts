import { ref, computed } from 'vue'
import { 
    LANGUAGE, 
    PHONETIC_MANDARIN_OPTIONS, 
    PHONETIC_CANTONESE_OPTIONS, 
    PHONETICS_DEFAULT
} from '@/constants/options'
import { DATA_KEY } from '@/constants/data'
import { 
    getStoredCharacter, 
    getStoredLanguage, 
    getStoredPhonetic,
    readStorage,
    writeStorage
} from '@/utils/storage'
import { isLanguage, isCharacterDataKey, isPhoneticDataKey } from '@/utils/options'
import type { DropdownOptions, DropdownOption } from '@/types/dropdown'
import type { CharacterDataKeys, PhoneticDataKeys } from '@/types/data'
import type { Languages } from '@/types/options'

/*
 * ------------------------------------
 * State
 * ------------------------------------
 */

const isDark = ref<boolean>(readStorage('theme') === 'dark')

const character = ref<CharacterDataKeys>(getStoredCharacter())
const language = ref<Languages>(getStoredLanguage())
const phonetic = ref<PhoneticDataKeys>(getStoredPhonetic(language.value))

const phoneticOptions = computed((): DropdownOption[] => {
    return language.value === LANGUAGE.MANDARIN ? PHONETIC_MANDARIN_OPTIONS : PHONETIC_CANTONESE_OPTIONS
})

/*
 * ------------------------------------
 * Handle selection
 * ------------------------------------
 */

const updateOption = (selectedOption: string, option: DropdownOptions): void => {
    switch (option) {
        case DATA_KEY.CHARACTER: {
            if (!isCharacterDataKey(selectedOption)) return
            character.value = selectedOption
            writeStorage('character', selectedOption)
            break
        }

        case DATA_KEY.LANGUAGE: {
            if (!isLanguage(selectedOption)) return
            language.value = selectedOption
            writeStorage('language', selectedOption)

            // When language changes, set default phonetic
            phonetic.value = PHONETICS_DEFAULT[selectedOption]
            writeStorage('phonetic', phonetic.value)
            break
        }

        case DATA_KEY.PHONETIC: {
            if (!isPhoneticDataKey(selectedOption)) return
            phonetic.value = selectedOption
            writeStorage('phonetic', selectedOption)
            break
        }
    }
}

/*
 * ------------------------------------
 * Dark mode
 * ------------------------------------
 */

const toggleDarkMode = (): void => {
    isDark.value = !isDark.value
    const root = typeof document === 'undefined' ? null : document.documentElement
    root?.classList.toggle('dark', isDark.value)
    writeStorage('theme', isDark.value ? 'dark' : 'light')
}

export const useOptions = () => {
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