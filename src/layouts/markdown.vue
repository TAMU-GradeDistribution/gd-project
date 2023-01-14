<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="!bg-white dark:!bg-[#121212]" flex flex-col text-center text-gray-700 dark:text-gray-200 min-h-screen>
    <Header />
    <RouterView />
    <div flex justify-center>
      <a :title="t('link.go_back')" flex flex-row icon-btn mt-10 mb-18 mx-2 text-lg @click="router.back()">
        <div i-carbon:caret-left text-2xl />
        {{ t('link.go_back') }}
      </a>
    </div>
    <Footer />
  </main>
</template>
