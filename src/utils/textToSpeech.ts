import { LANGUAGE, type Languages } from '@/constants/constants'

export const tts = (text: string, lang: Languages) => {
    if (!window.speechSynthesis) {
        console.warn('Speech synthesis not supported.')
        return
    }

    let voiceOption = ''
    switch (lang) {
        case LANGUAGE.MANDARIN: {
            voiceOption = 'zh-CN'
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