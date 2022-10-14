<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="border-t-1 bg-light dark:bg-dark border-stone-700 mt-3">
      <div class="flex justify-center py-1 sm:py-2">
        <a class="icon-btn text-sm my-auto mx-2 md:text-lg" href="mailto:gdproject@adibarra.com" target="_blank" :title="t('footer.email')">
          <div i-carbon-email />
        </a>
        <a class="icon-btn text-sm my-auto mx-2 md:text-lg" href="https://github.com/GDProject/gd-website" target="_blank" :title="t('footer.github')">
          <div i-carbon-logo-github />
        </a>
        <RouterLink class="icon-btn text-sm my-auto mx-2 md:text-lg" to="/about" :title="t('link.about')">
          <div i-carbon-help />
        </RouterLink>
      </div>
      <div class="text-center pb-1 text-2 sm:pb-2 sm:text-sm md:text-base">
        {{ t('footer.licensed') }} | {{ t('footer.copyright') }} © {{ new Date().getFullYear() }} The GDProject
      </div>
    </div>
  </footer>
</template>
