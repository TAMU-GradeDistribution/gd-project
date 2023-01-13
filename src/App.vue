<script setup lang="ts">
const scrollbar = ref()
onMounted(() => {
  useRouter().afterEach(() => {
    scrollbar.value.$el.scrollTop = 0
    scrollbar.value.update()
  })
})
</script>

<template>
  <perfect-scrollbar ref="scrollbar" h-inherit>
    <RouterView />
  </perfect-scrollbar>
</template>
