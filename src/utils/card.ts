import { useOptions } from '@/composables/useOptions'
import { DATA_KEY } from '@/constants/data'
import type { Person } from '@/types/data'

const { character, language, phonetic } = useOptions()

export const cardHtml = (data: Person): string => `
    <div class='bg-neutral-200 dark:bg-neutral-800 w-[150px] h-[230px] p-2 rounded-md cursor-pointer flex flex-col items-center justify-center gap-2'>
        <div class='flex flex-col gap-1 items-center'>
            <span class='text-xs text-neutral-950 dark:text-neutral-50 text-center'>
                ${data[DATA_KEY.LANGUAGE][language.value][DATA_KEY.PHONETIC][phonetic.value]}
            </span>

            <span class='text-xl text-neutral-950 dark:text-neutral-50 font-semibold text-center'>
                ${data[DATA_KEY.LANGUAGE][language.value][DATA_KEY.CHARACTER][character.value]}
            </span>
        </div>

        <div class='bg-neutral-50 w-[100px] h-[110px] text-black text-xs'>
            
        </div>

        <div class='flex flex-col gap-1 items-center'>
            <span class='text-base text-neutral-950 dark:text-neutral-50 text-center'>
                ${data['eng']}
            </span>

            <span class='text-xs text-neutral-950 dark:text-neutral-50 text-center'>
                ${data['engSubtitle']}
            </span>
        </div>
    </div>
`