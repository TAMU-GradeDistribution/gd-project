<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header>
    <div class="flex m-3">
      <RouterLink to="/" :title="t('link.home')">
        <div alt="{{ t('header.logo') }}" class="text-2xl sm:text-4xl" i-carbon-subflow />
      </RouterLink>
      <div class="grow" />
      <nav class="flex my-auto gap-x5 sm:text-xl">
        <RouterLink class="icon-btn" to="/" :title="t('link.home')">
          <div i-carbon:search />
        </RouterLink>
        <RouterLink class="icon-btn" to="/about" :title="t('link.about')">
          <div i-carbon:help />
        </RouterLink>
        <button class="icon-btn !hidden" :title="t('header.select_lang')">
          <div i-carbon:language />
        </button>
        <a class="icon-btn" href="https://github.com/GDProject/gd-website" target="_blank" :title="t('link.github')">
          <div i-carbon:logo-github />
        </a>
        <a class="icon-btn" href="mailto:gdproject@adibarra.com" target="_blank" :title="t('link.email')">
          <div i-carbon:email />
        </a>
        <button class="icon-btn" :title="t('header.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </nav>
    </div>
  </header>
</template>
