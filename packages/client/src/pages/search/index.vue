<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('button.search')} | GDProject`,
})
</script>

<template>
  <main flex flex-col grow px-2>
    <div py-2 mx-auto min-w-90 sm:min-w-120>
      <CourseSearch />
    </div>
    <div py-2>
      <div mx-auto text-center>
        charts go here
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
