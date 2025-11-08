<template>
  <div class='flex h-screen bg-neutral-50 dark:bg-neutral-700 overflow-hidden'>
    <Sidebar
      :person=selectedPerson
      :sidebarOpen=sidebarOpen
      :isDesktop=isDesktop
      @close="sidebarOpen = false" />

    <div id='chart' class='flex-1 f3 relative overflow-hidden z-0 lg:ml-16'></div>
    
    <button
      v-if="!isDesktop && !sidebarOpen"
      class='fixed top-4 left-4 z-2 bg-red-900 hover:bg-red-800 rounded-full p-2 cursor-pointer flex self-center'
      @click="sidebarOpen = true">
      <FontAwesomeIcon 
        :icon="faBars"
        class='text-xl text-white' />
    </button>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import * as f3 from 'family-chart'
import 'family-chart/styles/family-chart.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './components/Sidebar.vue'
import { data } from './data/data'
import { cardHtml } from './utils/card'
import { useOptions } from './composables/useOptions'

const selectedPerson = ref<Record<string, any> | null>(null)
const sidebarOpen = ref<boolean>(false)
const isDesktop = ref<boolean>(window.innerWidth >= 1024)

const { character, language, phonetic, isDark } = useOptions()

let chart: any = null

async function initChart() {
  await nextTick()
  const el = document.getElementById('chart')
  if (!el) return

  chart = f3
    .createChart('#chart', data)
    .setCardXSpacing(250)
    .setCardYSpacing(280)

  chart
    .setCardHtml()
    .setCardInnerHtmlCreator((d: any) => cardHtml(d.data.data))
    .setOnCardClick((e: any, d: any) => {
      selectedPerson.value = d.data.data
      if (!isDesktop.value) sidebarOpen.value = true

      chart.updateMainId(d.data.id)
      chart?.updateTree?.()
    })

  chart.updateMainId('1')
  chart.updateTree({ initial: true })
}

/*
 * ------------------------------------
 * Chart drawing
 * ------------------------------------
 */

const recenterChart = (): void => {
  chart?.centerTree?.()
}

const handleResize = (): void => {
  isDesktop.value = window.innerWidth >= 1024
  if (isDesktop.value) sidebarOpen.value = false

  recenterChart()
}

watch(sidebarOpen, (open): void => {
  if (open || isDesktop.value) {
    setTimeout(() => recenterChart(), 300) // wait for sidebar animation
  }
})

watch([character, language, phonetic], () => {
  chart?.updateTree?.()
})

/*
 * ------------------------------------
 * Initial event
 * ------------------------------------
 */

onMounted(async (): Promise<void> => {
  await initChart()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount((): void => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
.link {
  stroke: #000000;
}

.dark .link {
  stroke: #FFFFFF;
}
</style>