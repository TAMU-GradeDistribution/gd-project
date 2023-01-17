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
  <main
    flex flex-col grow px-4
    @click="helpSection!.hide"
  >
    <div min-w-90 sm:min-w-120 mx-auto mt-20vh>
      <div my-3 sm:my-5 font-900 text-3xl sm:text-4xl text-center>
        The GDProject
      </div>
      <VSelect
        v-model="sState.university.selectedRaw"
        class="style-chooser"
        :filter-by="sState.university.filter"
        :options="sState.university.allRaw"
        :placeholder="t('main.select_university')"
        :select-on-key-codes="[9, 13]"
        @close="courseSearch!.focus()"
      />
      <CourseSearch ref="courseSearch" mt-2 />
      <HelpSection ref="helpSection" />
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
