<template>
    <aside
        class='fixed lg:static top-0 left-0 h-full bg-neutral-100 dark:bg-neutral-900 sm:border-r border-neutral-200 dark:border-neutral-700 z-1 transform transition-transform duration-300 ease-in-out w-full sm:w-80 flex flex-col'
        :class="[ isDesktop ? 'translate-x-0' : sidebarOpen ? 'translate-x-0' : '-translate-x-full' ]">
        <div class='w-full h-full flex flex-col justify-between px-4'>
            <!-- Close bar -->
            <div class='w-full flex flex-row justify-end py-4'>
                <button 
                    v-if="!isDesktop"
                    class='flex justify-center rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700 p-2'
                    @click="$emit('close')">
                    <FontAwesomeIcon 
                        :icon="faXmark"
                        class='text-xl text-neutral-950 dark:text-neutral-50' />
                </button>
            </div>

            <!-- Starting header -->
            <div v-if="!person">
                <div class='flex flex-col gap-4 items-center max-sm:px-4'>
                    <Logo />

                    <p class='text-base text-neutral-950 dark:text-neutral-50'>
                        Learning Chinese family terms can be confusing. This app makes it easier and interactive!
                    </p>

                    <div class='flex flex-row justify-items-center items-center gap-4 bg-neutral-200 dark:bg-neutral-700 rounded-2xl px-6 py-4'>
                        <FontAwesomeIcon 
                            :icon="faLightbulb"
                            class='text-xl text-neutral-950 dark:text-neutral-50' />
                        
                        <p class='text-sm text-neutral-950 dark:text-neutral-50'>
                            Tap on a family member to view more details!
                        </p>
                    </div>
                </div>
            </div>

            <Options />
        </div>
    </aside>
</template>

<script setup lang='ts'>
import Logo from './Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Options from './Options.vue'

defineProps<{
    person: Record<string, any> | null
    sidebarOpen: boolean
    isDesktop: boolean
}>()

defineEmits(['close'])
</script>
