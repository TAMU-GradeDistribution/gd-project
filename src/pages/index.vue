<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

interface University {
  value: string
  label: string
}

class University {
  constructor(value: string, label: string) {
    this.value = value
    this.label = label
  }
}

const showPopper = ref(0)
const setShowPopper = (value: number) => {
  showPopper.value = value
}

const searchString = ref('')
const currentUniversity = ref<University>(new University('', ''))
const allUniversities = $ref<Array<University>>(new Array<University>())

const uniFilter = (option: any, label: string, search: string) => `${option.value} ${label}`.toLocaleLowerCase().includes(search.toLocaleLowerCase())
const setCourse = (search: string) => searchString.value = search
const setUni = (selection: University) => {
  currentUniversity.value = selection
  if (selection === null)
    currentUniversity.value = new University('', '')
}

const search = () => {
  if (!currentUniversity.value.value || !searchString.value)
    return
  router.push({ path: '/search', query: { u: currentUniversity.value.value, s: searchString.value } })
}

const fetchUniversities = async () => {
  // const response = await fetch('/api/v1/universities')
  // const data = await response.json()
  // allUniversities.value = data.map((uni: any) => new University(uni.id, uni.name))

  // TODO: remove and populate from API
  allUniversities.length = 0

  allUniversities.push(new University('TAMU', 'Texas A&M University, College Station'))
  allUniversities.push(new University('TAMUT', 'Texas A&M University, Texarkana'))
  allUniversities.push(new University('TAMUCC', 'Texas A&M University, Corpus Christi'))
  allUniversities.push(new University('TAMUK', 'Texas A&M University, Kingsville'))
  allUniversities.push(new University('TAMUQ', 'Texas A&M University, Qatar'))
  allUniversities.push(new University('TAMUSA', 'Texas A&M University, San Antonio'))
  allUniversities.push(new University('TAMUC', 'Texas A&M University, Commerce'))

  allUniversities.push(new University('UT', 'University of Texas, Austin'))
  allUniversities.push(new University('UTA', 'University of Texas, Arlington'))
  allUniversities.push(new University('UTD', 'University of Texas, Dallas'))
  allUniversities.push(new University('UTEP', 'University of Texas, El Paso'))
  allUniversities.push(new University('UTSA', 'University of Texas, San Antonio'))
  allUniversities.push(new University('UTRGV', 'University of Texas, Rio Grande Valley'))

  allUniversities.sort((a, b) => a.label.localeCompare(b.label))
}
fetchUniversities()
</script>

<template>
  <main class="flex flex-col grow px-2" @click="setShowPopper(0)">
    <div class="h-[20vh]" />
    <div class="flex flex-col p-2">
      <div class="text-2xl font-900 my-5 sm:text-4xl">
        The GDProject
      </div>
      <div class="mx-auto min-w-90 sm:min-w-120">
        <VSelect
          class="style-chooser mx-auto"
          :options="allUniversities"
          :placeholder="t('main.select_university')"
          :filter-by="uniFilter"
          @update:model-value="setUni"
        />
        <div class="flex justify-center mt-2">
          <VSelect
            class="style-chooser grow"
            placeholder="ex. CSCE 121 Fall 2022"
            :clear-search-on-blur="() => false"
            :no-drop="true"
            @search="setCourse"
            @keydown.enter="search"
          />
          <button class="min-w-10 hover:bg-[var(--light-2)] hover:dark:bg-[var(--dark-2)] border-[var(--dark-1)] dark:border-[var(--light-1)] border-1 border-l-none rd-r-1">
            <div class="flex h-full" @click="search">
              <div class="m-auto" i-carbon-search />
            </div>
          </button>
        </div>
        <div class="flex justify-center mt-2 gap-5">
          <Popper hover content=" " @open:popper="setShowPopper(1)">
            <span class="text-sm underline cursor-help">{{ t('main.not_sure') }}</span>
          </Popper>
          <Popper hover content=" " @open:popper="setShowPopper(2)">
            <span class="text-sm underline cursor-help">{{ t("main.missing_uni") }}</span>
          </Popper>
          <Popper hover content=" " @open:popper="setShowPopper(3)">
            <span class="text-sm underline cursor-help">{{ t("main.how_to_search") }}</span>
          </Popper>
        </div>
      </div>
      <div class="flex flex-col text-justify op-75 mx-auto mt-5 max-w-90 sm:max-w-120">
        <div v-show="showPopper === 1">
          This website lets you check out the grade distribution of courses at your university.
          There are a ton of good reasons to do this before picking a class or professor.
          For more information check out the
          <RouterLink class="icon-btn" to="/about" :title="t('link.about')">
            about <div class="inline-block vertical-middle" i-carbon-help />
          </RouterLink>
          page.
        </div>
        <div v-show="showPopper === 2">
          Can't find your university in the selection dropdown?
          There is a pretty good chance that it hasn't been added yet.
          Feel free to request it
          <a class="icon-btn" href="https://github.com/GDProject/gd-parser/README#request-a-university/" title="{{ t('link.request_uni') }}">
            here. <div class="inline-block vertical-middle" i-carbon-request-quote />
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
    color: var(--dark-1);
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
