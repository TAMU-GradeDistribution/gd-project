<script setup lang="ts">
const scrollbar = ref(null)
onMounted(() => {
  useRouter().afterEach((to, from, failure) => {
    // @ts-expect-error ref should be valid after onMounted
    scrollbar.value.$el.scrollTop = 0
    // @ts-expect-error ref should be valid after onMounted
    scrollbar.value.update()
  })
})
</script>

<template>
  <perfect-scrollbar ref="scrollbar" class="h-inherit">
    <RouterView />
  </perfect-scrollbar>
</template>
