import { acceptHMRUpdate, defineStore } from 'pinia'
import type { University } from '~/types'

export const useSearchState = defineStore('search', () => {
  const router = useRouter()

  const allUnis = ref<University[]>([])
  const university = ref<University>()
  const search = ref<string>(router.currentRoute.value.query.s as string)

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
      filter: (option: any, label: string, query: string) => `${option.value} ${label}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    },
    course: {
      valueRaw: search,
      clear: () => search.value = '',
      input: (e: Event) => search.value = (e.target as HTMLInputElement).value,
      search: () => university.value && search.value && router.push({ path: '/search', query: { u: university.value.value, s: search.value } }),
      isEmpty: computed(() => !search.value),
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchState, import.meta.hot))
