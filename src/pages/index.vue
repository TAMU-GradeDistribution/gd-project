<script setup lang="ts">
const { t } = useI18n()

const showPopper = ref(0)

const setShowPopper = (value: number) => showPopper.value = value
</script>

<template>
  <main class="flex flex-col grow px-2" @click="setShowPopper(0)">
    <div class="h-[20vh]" />
    <div class="flex flex-col p-2">
      <div class="text-2xl font-900 my-5 sm:text-4xl">
        The GDProject
      </div>
      <div class="mx-auto min-w-90 sm:min-w-120">
        <Search />
        <div class="flex justify-center mt-2 gap-5">
          <Popper hover @open:popper="setShowPopper(1)">
            <span class="text-sm underline cursor-help">{{ t('main.not_sure') }}</span>
            <template #content />
          </Popper>
          <Popper hover @open:popper="setShowPopper(2)">
            <span class="text-sm underline cursor-help">{{ t("main.missing_uni") }}</span>
            <template #content />
          </Popper>
          <Popper hover @open:popper="setShowPopper(3)">
            <span class="text-sm underline cursor-help">{{ t("main.how_to_search") }}</span>
            <template #content />
          </Popper>
        </div>
      </div>
      <div class="flex flex-col text-justify op-75 mx-auto mt-5 max-w-90 sm:max-w-120">
        <div v-show="showPopper === 1">
          This website lets you check out the grade distribution of courses at your university.
          There are a ton of good reasons to do this before picking a class or professor.
          For more information check out the
          <RouterLink class="icon-btn" to="/about" :title="t('link.about')">
            about <div class="inline-block vertical-middle" i-carbon:help />
          </RouterLink>
          page.
        </div>
        <div v-show="showPopper === 2">
          Can't find your university in the selection dropdown?
          There is a pretty good chance that it hasn't been added yet.
          Feel free to request it
          <a class="icon-btn" href="https://github.com/GDProject/gd-parser/README#request-a-university/" title="{{ t('link.request_uni') }}">
            here. <div class="inline-block vertical-middle" i-carbon:request-quote />
          </a>
        </div>
        <div v-show="showPopper === 3">
          First select your university in the first dropdown.
          Then type in a department and course number in the second dropdown.
          You can optionally include a section number, semester, year, and professor.
          <br><br>
          EX: "CSCE 121 Fall 2022" or "CSCE 121.509 2022 Smith".
        </div>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
