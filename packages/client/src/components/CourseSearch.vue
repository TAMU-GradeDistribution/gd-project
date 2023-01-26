<script setup lang="ts">
const sState = useSearchState()

const search = ref<HTMLInputElement | null>(null)

defineExpose({
  focus: () => search.value!.focus(),
})
</script>

<template>
  <div flex>
    <div class="style-chooser" grow>
      <div class="border-[var(--dark-1)] dark:border-[var(--light-1)]" flex flex-row pb-4px b-1 rd-1>
        <div class="vs__selected-options">
          <input
            ref="search"
            class="vs__search"
            autocomplete="off"
            placeholder="ex. CSCE 121.203 Fall 2022 Smith, J."
            :value="sState.course.valueRaw"
            @input="sState.course.input"
            @keydown.enter="sState.course.search"
          >
        </div>
        <div class="vs__actions">
          <button
            v-show="!sState.course.isEmpty"
            type="reset"
            title="Clear"
            fill-black dark:fill-white cursor-pointer mr-1
            @click="sState.course.clear"
          >
            <!-- Close SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
              <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button
      class="hover:bg-[var(--light-2)] hover:dark:bg-[var(--dark-2)] border-[var(--dark-1)] dark:border-[var(--light-1)]"
      title="Search"
      min-w-10 b-1 b-l-none rd-r-1
      @click="sState.course.search"
    >
      <div i-carbon:search flex h-full m-auto />
    </button>
  </div>
</template>
