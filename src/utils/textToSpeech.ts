import { 
    LANGUAGE, 
    CHARACTER_DATA_KEY,
    type Languages, 
    type CharacterDataKeys
} from '@/constants/constants'

export const tts = (text: string, lang: Languages, char: CharacterDataKeys) => {
    if (!window.speechSynthesis) {
        console.warn('Speech synthesis not supported.')
        return
    }

    console.log(char)

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
    console.log(voiceOption)

    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = voiceOption
    speech.rate = 0.5
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}