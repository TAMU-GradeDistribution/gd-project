<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header>
    <div class="flex px-5 mb-3">
      <div alt="{{ t('header.logo') }}" class="text-2xl my-2 sm:text-4xl" i-carbon-subflow />
      <div class="text-xl font-900 my-auto mx-5 sm:text-3xl">
        The GDProject
      </div>
      <div class="grow" />
      <button class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl !hidden" :title="t('header.select_lang')">
        <div i-carbon-language />
      </button>
      <RouterLink class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl" to="/" :title="t('link.home')">
        <div i-carbon-search />
      </RouterLink>
      <RouterLink class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl" to="/about" :title="t('link.about')">
        <div i-carbon-help />
      </RouterLink>
      <a class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl" href="https://github.com/GDProject/gd-website" target="_blank" :title="t('link.github')">
        <div i-carbon-logo-github />
      </a>
      <a class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl" href="mailto:gdproject@adibarra.com" target="_blank" :title="t('link.email')">
        <div i-carbon-email />
      </a>
      <button class="icon-btn m-auto ml-3 sm:ml-5 sm:text-xl" :title="t('header.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </div>
  </header>
</template>
