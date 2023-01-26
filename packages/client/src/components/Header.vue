<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header flex m-3>
    <RouterLink
      to="/"
      :title="t('header.logo')"
    >
      <div i-carbon:subflow text-2xl sm:text-4xl />
    </RouterLink>
    <div grow />
    <nav flex my-auto gap-x5 sm:text-xl>
      <RouterLink
        to="/"
        :title="t('link.home')"
        icon-btn
      >
        <div i-carbon:home />
      </RouterLink>
      <RouterLink
        to="/about"
        :title="t('link.about')"
        icon-btn
      >
        <div i-carbon:help />
      </RouterLink>
      <button
        :title="t('header.select_lang')"
        icon-btn hidden
      >
        <div i-carbon:language />
      </button>
      <a
        href="https://github.com/GDProject/gd-website"
        target="_blank" :title="t('link.github')"
        icon-btn
      >
        <div i-carbon:logo-github />
      </a>
      <button
        :title="t('header.toggle_dark')"
        icon-btn
        @click="toggleDark()"
      >
        <div i="carbon-sun dark:carbon-moon" />
      </button>
    </nav>
  </header>
</template>
