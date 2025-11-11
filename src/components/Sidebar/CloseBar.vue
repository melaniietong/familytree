<template>
    <div class='w-full flex flex-row justify-end py-4 shrink-0'>
        <button 
            v-if="!isDesktop"
            class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2 cursor-pointer'
            @click="$emit('close')">
            <FontAwesomeIcon 
                :icon="faXmark"
                class='text-xl text-neutral-950 dark:text-neutral-50' />
        </button>
    </div>
</template>

<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSizing } from '@/composables/useSizing'

defineEmits(['close'])

const { isDesktop } = useSizing()
</script>