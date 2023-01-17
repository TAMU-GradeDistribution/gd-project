<script setup lang="ts">
import CourseSearch from '~/components/CourseSearch.vue'
import HelpSection from '~/components/HelpSection.vue'

const { t } = useI18n()
const sState = useSearchState()

const courseSearch = ref<InstanceType<typeof CourseSearch> | null>(null)
const helpSection = ref<InstanceType<typeof HelpSection> | null>(null)

useHead({
  title: 'GDProject',
})
</script>

<template>
  <main flex flex-col grow px-2 @click="helpSection!.hide">
    <div h-20vh />
    <div flex flex-col p-2>
      <div text-2xl font-900 my-5 sm:text-4xl>
        The GDProject
      </div>
      <div mx-auto min-w-90 sm:min-w-120>
        <VSelect
          v-model="sState.university.selectedRaw"
          class="style-chooser" mx-auto
          :select-on-key-codes="[9, 13]"
          :options="sState.university.allRaw"
          :placeholder="t('main.select_university')"
          :filter-by="sState.university.filter"
          @close="courseSearch!.focus()"
        />
        <div h-2 />
        <CourseSearch ref="courseSearch" />
        <HelpSection ref="helpSection" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.style-chooser {
  --vs-actions-padding: 4px 8px 0 3px;
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    border: 1px solid;
    background: var(--light-1);
    &:hover {
      background: var(--light-2);
    }
    html.dark & {
      background: var(--dark-1);
      &:hover {
        background: var(--dark-2);
      }
    }
  }
  .vs__search::placeholder {
    color: var(--dark-3);
    html.dark & {
      color: var(--light-3);
    }
  }
  .vs__selected {
    html.dark & {
      color: var(--light-1);
    }
  }
  .vs__clear,
  .vs__open-indicator {
    cursor: pointer;
    fill: var(--dark-1);
    html.dark & {
      fill: var(--light-1);
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
