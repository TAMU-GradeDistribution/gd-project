<script setup lang="ts">
import type { University } from '~/types'

const props = defineProps<{
  hideUniversitySearch?: boolean
  hideCourseSearch?: boolean
}>()

const { t } = useI18n()
const router = useRouter()

const { hideUniversitySearch, hideCourseSearch } = toRefs(props)

const allUnis = ref<University[]>([])
const initialUniversity = (router.currentRoute.value.query.uni ? router.currentRoute.value.query.uni : null) as University | null
const initialSearch = (router.currentRoute.value.query.s ? router.currentRoute.value.query.s : '') as string

const selectedUniversity = ref<University | null>(initialUniversity)
const searchString = ref<string>(initialSearch)

const uniFilter = (option: any, label: string, search: string) => `${option.value} ${label}`.toLocaleLowerCase().includes(search.toLocaleLowerCase())
const focusCourse = () => hideCourseSearch!.value ? '' : document.getElementById('text_input')!.focus()
const inputHandler = (e: Event) => searchString.value = (e.target as HTMLInputElement).value
const clearInput = () => searchString.value = ''
const search = () => {
  if ((hideUniversitySearch || (selectedUniversity.value && selectedUniversity.value !== null)) && (hideCourseSearch || searchString.value))
    router.push({ path: '/search', query: { uni: selectedUniversity.value!.value, s: searchString.value } })
}

const setAllUnis = (newUnis: University[]) => allUnis.value = newUnis
const fetchUniversities = async () => {
  if (hideUniversitySearch!.value)
    return [] as University[]
  // TODO: populate from API
  // const response = await fetch('/api/v1/universities')
  // const data = await response.json()
  // setAllUnis(data.map((uni: any) => { value: uni.id, label: uni.name }))
  const universities: University[] = []
  universities.push({ value: 'TAMU', label: 'Texas A&M University, College Station' })
  universities.push({ value: 'UT', label: 'University of Texas, Austin' })
  universities.sort((a, b) => a.label.localeCompare(b.label))
  return universities
}

setAllUnis([])
fetchUniversities().then((universities: University[]) => setAllUnis(universities))
</script>

<template>
  <VSelect
    v-if="!hideUniversitySearch"
    v-model="selectedUniversity"
    class="style-chooser mx-auto"
    :select-on-key-codes="[9, 13]"
    :options="allUnis"
    :placeholder="t('main.select_university')"
    :filter-by="uniFilter"
    @close="focusCourse"
  />
  <div v-if="!(hideUniversitySearch || hideCourseSearch)" class="h-2" />
  <div v-if="!hideCourseSearch" class="flex justify-center">
    <div class="grow style-chooser">
      <div class="flex flex-row pb-4px border-[var(--dark-1)] dark:border-[var(--light-1)] b-1 rd-1">
        <div class="vs__selected-options">
          <input
            id="text_input"
            class="vs__search"
            placeholder="ex. CSCE 121.203 Fall 2022 Smith, J."
            :value="searchString"
            autocomplete="off"
            @input="inputHandler"
            @keydown.enter="search"
          >
        </div>
        <div class="vs__actions">
          <button
            v-show="searchString.length > 0"
            type="button"
            class="fill-black dark:fill-white cursor-pointer mr-1"
            title="Clear"
            @click="clearInput"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
              <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <button class="min-w-10 hover:bg-[var(--light-2)] hover:dark:bg-[var(--dark-2)] border-[var(--dark-1)] dark:border-[var(--light-1)] b-1 b-l-none rd-r-1">
      <div class="flex h-full" @click="search">
        <div class="m-auto" i-carbon:search />
      </div>
    </button>
  </div>
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
