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
  <main grow>
    <div
      class="bg-[var(--light-2)] dark:bg-[var(--dark-2)] outline-[var(--light-3)] dark:outline-[var(--dark-3)]"
      w-fit p-5 mx-auto mt-20vh outline outline-1 rd-2
    >
      <div font-900 text-4xl>
        <span text-red>404:</span>
        {{ t('error.not-found') }}
      </div>
      <button
        :title="t('link.go_back')"
        icon-btn flex text-lg mt-2
        @click="router.back()"
      >
        <div i-carbon:caret-left text-2xl />
        {{ t('link.go_back') }}
      </button>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
