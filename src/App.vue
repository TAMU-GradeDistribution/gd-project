<script setup lang="ts">
const scrollbar = ref()

onMounted(() =>
  useRouter().afterEach(() => {
    scrollbar.value.ps.element.scrollTop = 0
    scrollbar.value.ps.update()
  }))
</script>

<template>
  <PerfectScrollbar ref="scrollbar" h-inherit>
    <RouterView />
  </PerfectScrollbar>
</template>
