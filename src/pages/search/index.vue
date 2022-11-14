<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <main class="flex flex-col grow px-2">
    <div class="flex flex-col py-2">
      <div class="mx-auto min-w-90 sm:min-w-120">
        <Search hide-university-search />
      </div>
    </div>
    <div class="flex flex-col py-2">
      <div class="mx-auto text-center">
        charts go here
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
