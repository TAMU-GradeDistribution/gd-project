import { acceptHMRUpdate, defineStore } from 'pinia'
import { useFuse } from '@vueuse/integrations/useFuse'
import type { University } from '~/types'

export const useSearchState = defineStore('search', () => {
  const router = useRouter()

  const uAll = ref<University[]>([])
  const uSelected = ref<University>()
  const uSearch = ref<string>('')
  const cSearch = ref<string>(router.currentRoute.value.query.s as string)

  const fResults = useFuse(uSearch, uAll, { fuseOptions: { includeScore: true, keys: ['value', 'label'] } }).results

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
    uAll.value = unis
    const initialUni = router.currentRoute.value.query.u as string
    if (initialUni)
      uSelected.value = unis.find(uni => uni.value === initialUni)
  })

  return {
    university: {
      allRaw: uAll,
      selectedRaw: uSelected,
      filter: () => fResults.value.filter(i => i.score! < 0.6).map(i => i.item),
      update: (query: string) => uSearch.value = query,
    },
    course: {
      valueRaw: cSearch,
      isEmpty: computed(() => !cSearch.value),
      clear: () => cSearch.value = '',
      input: (e: Event) => cSearch.value = (e.target as HTMLInputElement).value,
      search: () => uSelected.value && cSearch.value && router.push({ path: '/search', query: { u: uSelected.value.value, s: cSearch.value } }),
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useSearchState, import.meta.hot))
