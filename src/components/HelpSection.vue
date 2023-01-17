<script setup lang="ts">
const { t } = useI18n()

const shown = ref(0)
const show = (id: number) => shown.value = id
const isShown = (id: number) => shown.value === id

defineExpose({
  hide: () => shown.value = 0,
})
</script>

<template>
  <div flex mt-2 gap-5 justify-center text-sm underline>
    <span cursor-help @mouseenter="show(1)">{{ t('main.not_sure') }}</span>
    <span cursor-help @mouseenter="show(2)">{{ t("main.missing_uni") }}</span>
    <span cursor-help @mouseenter="show(3)">{{ t("main.how_to_search") }}</span>
  </div>
  <div flex flex-col mx-auto mt-5 max-w-90 sm:max-w-120 text-justify op-75>
    <div v-show="isShown(1)" @click.stop>
      This website lets you check out the grade distribution of courses at your university.
      There are a ton of good reasons to do this before picking a class or professor.
      For more information check out the
      <RouterLink to="/about" :title="t('link.about')" icon-btn>
        about <div i-carbon:help inline-block vertical-middle />
      </RouterLink>
      page.
    </div>
    <div v-show="isShown(2)" @click.stop>
      Can't find your university in the selection dropdown?
      There is a pretty good chance that it hasn't been added yet.
      Feel free to request it
      <a href="https://github.com/GDProject/gd-parser/README#request-a-university/" :title="t('link.request_uni')" icon-btn>
        here. <div i-carbon:request-quote inline-block vertical-middle />
      </a>
    </div>
    <div v-show="isShown(3)" @click.stop>
      First select your university in the first dropdown.
      Then type in a department and course number in the second dropdown.
      You can optionally include a section number, semester, year, and professor.
      <br><br>
      EX: "CSCE 121 Fall 2022" or "CSCE 121.509 2022 Smith".
    </div>
  </div>
</template>
