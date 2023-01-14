<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div grow flex flex-col>
    <div class="bg-[var(--light-2)] dark:bg-[var(--dark-2)]" flex flex-col justify-center my-auto mx-auto p-5 rd-2 outline outline-1 outline-stone-700>
      <div flex flex-row inline-block font-900 text-4xl>
        <span text-red>404:&nbsp;</span>
        {{ t('error.not-found') }}
      </div>
      <button :title="t('link.go_back')" icon-btn flex flex-row text-lg w-fit mt-2 mr-auto @click="router.back()">
        <div i-carbon:caret-left text-2xl />{{ t('link.go_back') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
