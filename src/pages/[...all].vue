<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

useHead({
  title: `${t('error.not-found')} | GDProject`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <div grow flex flex-col>
    <div h-20vh />
    <div
      class="bg-[var(--light-2)] dark:bg-[var(--dark-2)] outline-[var(--light-3)] dark:outline-[var(--dark-3)]"
      flex flex-col mx-auto p-5 rd-2 outline outline-1
    >
      <div flex font-900 text-4xl>
        <span text-red>404:&nbsp;</span>
        {{ t('error.not-found') }}
      </div>
      <button
        :title="t('link.go_back')"
        icon-btn flex text-lg mt-2 mr-auto
        @click="router.back()"
      >
        <div i-carbon:caret-left text-2xl />
        {{ t('link.go_back') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
