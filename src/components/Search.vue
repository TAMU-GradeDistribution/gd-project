<script setup lang="ts">
import type { University } from '~/types'

const props = defineProps<{
  hideUniversitySearch?: boolean
  hideCourseSearch?: boolean
}>()
defineEmits(['onSearch'])

const { t } = useI18n()
const { hideUniversitySearch, hideCourseSearch } = toRefs(props)
const selectedUni = ref<University>({ value: '', label: '' })
const allUnis = ref<University[]>([])
const searchString = ref('')

const setCourse = (search: string) => searchString.value = search
const setSelectedUni = (newUni: University) => {
  selectedUni.value = newUni
  if (newUni === null)
    selectedUni.value = { value: '', label: '' }
}
const setAllUnis = (newUnis: University[]) => allUnis.value = newUnis
const focusCourse = () => hideCourseSearch ? '' : document.getElementById('course_select')!.querySelector('input')!.focus()
const uniFilter = (option: any, label: string, search: string) => `${option.value} ${label}`.toLocaleLowerCase().includes(search.toLocaleLowerCase())
const fetchUniversities = async () => {
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

setSelectedUni({ value: '', label: '' })
setAllUnis([])
fetchUniversities().then((universities: University[]) => setAllUnis(universities))
</script>

<template>
  <VSelect
    v-if="!hideUniversitySearch"
    class="style-chooser mx-auto"
    :select-on-key-codes="[9, 13]"
    :options="allUnis"
    :placeholder="t('main.select_university')"
    :filter-by="uniFilter"
    @update:model-value="setSelectedUni"
    @close="focusCourse"
  />
  <div v-if="!(hideUniversitySearch || hideCourseSearch)" class="h-2" />
  <div v-if="!hideCourseSearch" class="flex justify-center">
    <VSelect
      id="course_select"
      class="style-chooser grow"
      placeholder="ex. CSCE 121.203 Fall 2022 Smith, J."
      :clear-search-on-blur="() => false"
      :no-drop="true"
      @search="setCourse"
      @keydown.enter="$emit('onSearch', selectedUni, searchString)"
    />
    <button class="min-w-10 hover:bg-[var(--light-2)] hover:dark:bg-[var(--dark-2)] border-[var(--dark-1)] dark:border-[var(--light-1)] border-1 border-l-none rd-r-1">
      <div class="flex h-full" @click="$emit('onSearch', selectedUni, searchString)">
        <div class="m-auto" i-carbon:search />
      </div>
    </button>
  </div>
</template>
