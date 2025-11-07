<template>
    <div 
        ref='container' 
        class='relative inline-block w-30'>
        <!-- Trigger button -->
        <button
            class='w-full flex items-center justify-between gap-2 rounded-md border border-neutral-400 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-900 px-2 py-1 text-sm text-gray-700 dark:text-neutral-200 transition-all cursor-pointer'
            @click=toggleDropdown>
            <span class='text-xs text-neutral-600 dark:text-neutral-400'>{{ selected }}</span>
            <FontAwesomeIcon
                :icon="faChevronDown"
                class='text-xs text-neutral-400 dark:text-neutral-600 transition-all duration-300'
                :class="{ 'rotate-180': isOpen }" />
        </button>

        <!-- Dropdown menu -->
        <transition
            enter-active-class='transition ease-out duration-100'
            enter-from-class='transform opacity-0 scale-95'
            enter-to-class='transform opacity-100 scale-100'
            leave-active-class='transition ease-in duration-75'
            leave-from-class='transform opacity-100 scale-100'
            leave-to-class='transform opacity-0 scale-95'>
            <div
                v-if="isOpen"
                class='absolute w-full bg-neutral-50 dark:bg-neutral-900 rounded-md border border-neutral-400 dark:border-neutral-600 z-5'
                :class="[ dropdownUp ? 'bottom-full mb-1' : 'top-full mt-1' ]">
                <button
                    v-for="option in options"
                    :key="option.value"
                    class='block w-full px-2 py-1 text-xs text-left text-neutral-600 dark:text-neutral-400 hover:bg-red-100 dark:hover:bg-red-900 rounded-md'
                    @click="selectOption(option.value)">
                    {{ option.label }}
                </button>
            </div>
        </transition>
    </div>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { DropdownOption } from '@/types/dropdown'

const props = defineProps<{
    modelValue: string
    options: DropdownOption[]
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

/*
 * ------------------------------------
 * State
 * ------------------------------------
 */

const isOpen = ref<boolean>(false)
const dropdownUp = ref<boolean>(false)
const container = ref<HTMLElement | null>(null)

const selected = computed((): string => {
    return props.options.find(o => o.value === props.modelValue)?.label ?? ''
})

/*
 * ------------------------------------
 * Component events
 * ------------------------------------
 */

const selectOption = (value: string): void => {
    emit('update:modelValue', value)
    isOpen.value = false
}

const toggleDropdown = (): void => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    nextTick((): void => {
      calculatePosition()
      document.addEventListener('click', handleClickOutside)
    })
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
}

const handleClickOutside = (event: MouseEvent): void => {
    if (!container.value) return
    
    if (!container.value.contains(event.target as Node)) {
        isOpen.value = false
    }
}

/*
 * ------------------------------------
 * Position
 * ------------------------------------
 */

const handleResize = (): void => {
    if (isOpen.value) calculatePosition()
}

const calculatePosition = (): void => {
    if (!container.value) return

    const labelHeight = 25

    const rect = container.value.getBoundingClientRect()
    const spaceBelow = window.innerHeight - rect.bottom
    const dropdownHeight = props.options.length * labelHeight
    
    dropdownUp.value = spaceBelow < dropdownHeight
}

/*
 * ------------------------------------
 * Initial events
 * ------------------------------------
 */

onMounted((): void => window.addEventListener('resize', handleResize))
onUnmounted((): void => window.removeEventListener('resize', handleResize))
</script>