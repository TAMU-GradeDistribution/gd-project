<script setup lang="ts">
import type { University } from '~/types'

const { t } = useI18n()
const router = useRouter()

const search = (selectedUni: University, searchString: string) => {
  if (!selectedUni.value || !searchString)
    return
  router.push({ path: '/search', query: { u: selectedUni.value, s: searchString } })
}
</script>

<template>
  <main class="flex flex-col grow px-2">
    <div class="flex flex-col p-2">
      <div class="mx-auto min-w-90 sm:min-w-120">
        <Search hide-university-search @on-search="search" />
      </div>
    </div>
    <div class="flex flex-col text-xl text-center p-2 mb-3 mx-auto">
      charts go here
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
