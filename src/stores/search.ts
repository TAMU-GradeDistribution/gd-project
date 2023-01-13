import { acceptHMRUpdate, defineStore } from 'pinia'
import type { University } from '~/types'

export const useSearchState = defineStore('search', () => {
  const router = useRouter()
  const initialSearch = router.currentRoute.value.query.s as string

  const allUnis = ref<University[]>([])
  const university = ref<University>()
  const searchString = ref<string>(initialSearch)

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

  fetchUniversities().then((unis) => {
    allUnis.value = unis
    const initialUni = router.currentRoute.value.query.u as string
    if (initialUni)
      university.value = unis.find(uni => uni.value === initialUni)
  })

  return {
    university: {
      allRaw: allUnis,
      selectedRaw: university,
      filter: (option: any, label: string, search: string) => `${option.value} ${label}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    },
    course: {
      valueRaw: searchString,
      clear: () => searchString.value = '',
      input: (e: Event) => searchString.value = (e.target as HTMLInputElement).value,
      search: () => university.value && searchString.value && router.push({ path: '/search', query: { u: university.value.value, s: searchString.value } }),
      isEmpty: computed(() => !searchString.value),
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchState, import.meta.hot))
