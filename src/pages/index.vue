<script setup lang="ts">
const { t } = useI18n()
const sState = useSearchState()

const helpText = ref(0)
const courseSearch = ref<HTMLElement>()

const showHelp = (id: number) => helpText.value = id
</script>

<template>
  <main class="flex flex-col grow px-2" @click="showHelp(0)">
    <div class="h-[20vh]" />
    <div class="flex flex-col p-2">
      <div class="text-2xl font-900 my-5 sm:text-4xl">
        The GDProject
      </div>
      <div class="mx-auto min-w-90 sm:min-w-120">
        <VSelect
          v-model="sState.university.selectedRaw"
          class="style-chooser mx-auto"
          :select-on-key-codes="[9, 13]"
          :options="sState.university.allRaw"
          :placeholder="t('main.select_university')"
          :filter-by="sState.university.filter"
          @close="courseSearch!.focus()"
        />
        <div class="h-2" />
        <div class="flex justify-center">
          <div class="grow style-chooser">
            <div class="flex flex-row pb-4px border-[var(--dark-1)] dark:border-[var(--light-1)] b-1 rd-1">
              <div class="vs__selected-options">
                <input
                  ref="courseSearch"
                  class="vs__search"
                  placeholder="ex. CSCE 121.203 Fall 2022 Smith, J."
                  :value="sState.course.valueRaw"
                  autocomplete="off"
                  @input="sState.course.input"
                  @keydown.enter="sState.course.search"
                >
              </div>
              <div class="vs__actions">
                <button
                  v-show="!sState.course.isEmpty"
                  type="button"
                  class="fill-black dark:fill-white cursor-pointer mr-1"
                  title="Clear"
                  @click="sState.course.clear"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button class="min-w-10 hover:bg-[var(--light-2)] hover:dark:bg-[var(--dark-2)] border-[var(--dark-1)] dark:border-[var(--light-1)] b-1 b-l-none rd-r-1">
            <div class="flex h-full" @click="sState.course.search">
              <div class="m-auto" i-carbon:search />
            </div>
          </button>
        </div>
        <div class="flex justify-center mt-2 gap-5">
          <span class="text-sm underline cursor-help" @mouseenter="showHelp(1)">{{ t('main.not_sure') }}</span>
          <span class="text-sm underline cursor-help" @mouseenter="showHelp(2)">{{ t("main.missing_uni") }}</span>
          <span class="text-sm underline cursor-help" @mouseenter="showHelp(3)">{{ t("main.how_to_search") }}</span>
        </div>
        <div class="flex flex-col text-justify op-75 mx-auto mt-5 max-w-90 sm:max-w-120">
          <div v-show="helpText === 1" @click.stop>
            This website lets you check out the grade distribution of courses at your university.
            There are a ton of good reasons to do this before picking a class or professor.
            For more information check out the
            <RouterLink class="icon-btn" to="/about" :title="t('link.about')">
              about <div class="inline-block vertical-middle" i-carbon:help />
            </RouterLink>
            page.
          </div>
          <div v-show="helpText === 2" @click.stop>
            Can't find your university in the selection dropdown?
            There is a pretty good chance that it hasn't been added yet.
            Feel free to request it
            <a class="icon-btn" href="https://github.com/GDProject/gd-parser/README#request-a-university/" :title="t('link.request_uni')">
              here. <div class="inline-block vertical-middle" i-carbon:request-quote />
            </a>
          </div>
          <div v-show="helpText === 3" @click.stop>
            First select your university in the first dropdown.
            Then type in a department and course number in the second dropdown.
            You can optionally include a section number, semester, year, and professor.
            <br><br>
            EX: "CSCE 121 Fall 2022" or "CSCE 121.509 2022 Smith".
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.style-chooser {
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
