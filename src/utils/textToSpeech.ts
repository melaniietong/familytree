import { LANGUAGE } from '@/constants/options'
import { CHARACTER_DATA_KEY } from '@/constants/data'
import type { Languages } from '@/types/options'
import type { CharacterDataKeys } from '@/types/data'

export const tts = (text: string, lang: Languages, char: CharacterDataKeys): void => {
    if (!window.speechSynthesis) {
        console.warn('Speech synthesis not supported.')
        return
    }

    let voiceOption = ''
    switch (lang) {
        case LANGUAGE.MANDARIN: {
            voiceOption = char === CHARACTER_DATA_KEY.TRADITIONAL ? 'zh-TW' : 'zh-CN'
            break
        }
        case LANGUAGE.CANTONESE: {
            voiceOption = 'zh-HK'
            break
        }
    }

    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = voiceOption
    speech.rate = 0.5
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}