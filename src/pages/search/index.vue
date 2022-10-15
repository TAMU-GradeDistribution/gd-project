<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="flex flex-col grow justify-evenly px-2">
    <div class="flex flex-col p-2 mb-3">
      <div class="mx-auto">
        <h1 class="text-3xl text-center">
          {{ router.currentRoute.value.fullPath }}
        </h1>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
