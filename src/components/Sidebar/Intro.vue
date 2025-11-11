<template>
    <div class='flex flex-col gap-4 items-center max-sm:px-4'>
        <Logo />

        <p class='text-base text-neutral-950 dark:text-neutral-50'>
            Chinese family terms can be confusing. This app makes it simpler and interactive!
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
</template>

<script setup lang='ts'>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Logo from './../Logo.vue'

</script>