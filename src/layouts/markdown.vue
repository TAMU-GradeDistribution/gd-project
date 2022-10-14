<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="flex flex-col text-center !bg-white dark:!bg-[#121212] text-gray-700 dark:text-gray-200 min-h-screen">
    <Header />
    <RouterView />
    <div class="flex justify-center">
      <a class="flex flex-row icon-btn mt-10 mb-18 mx-2 text-lg" :title="t('link.go_back')" @click="router.back()">
        <div i-carbon-caret-left class="text-2xl" />{{ t('link.go_back') }}
      </a>
    </div>
    <Footer />
  </main>
</template>
