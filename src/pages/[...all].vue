<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="grow flex flex-col">
    <div class="flex flex-col justify-center my-auto mx-auto p-5 bg-light dark:bg-dark rd-2 outline outline-1 outline-stone-700">
      <div class="flex flex-row inline-block font-900 text-4xl">
        <span class="text-red">404:&nbsp;</span>
        {{ t('error.not-found') }}
      </div>
      <button class="icon-btn flex flex-row text-lg w-fit mt-2 mr-auto" :title="t('link.go_back')" @click="router.back()">
        <div i-carbon-caret-left class="text-2xl" />{{ t('link.go_back') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
