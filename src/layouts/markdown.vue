<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div
    class="bg-white dark:bg-[#121212]"
    flex flex-col text-gray-700 dark:text-gray-200
  >
    <Header />
    <main>
      <RouterView />
      <a
        :title="t('link.go_back')"
        flex my-20 w-fit mx-auto text-lg icon-btn
        @click="router.back()"
      >
        <div i-carbon:caret-left text-2xl />
        {{ t('link.go_back') }}
      </a>
    </main>
    <Footer />
  </div>
</template>
