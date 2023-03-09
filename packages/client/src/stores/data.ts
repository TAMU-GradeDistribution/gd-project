import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { College, Course, Department, Professor, Section, University } from 'gd-shared'
import type { CachedData } from '~/types'

export const useDataState = defineStore('data', () => {
  const fetchRemote = async (url: string) => {
    try {
      const res = await fetch(url)
      const json = await res.json()
      return json.data
    }
    catch (e) {
      console.error(e)
      return undefined
    }
  }

  const fetchStore = async (key: string, url: string) => {
    const cache = useStorage(`cache/${key}`, { data: undefined, timestamp: 0 } as CachedData)
    const cacheExpiration = 1000 * 60 * 60 * 24 // 24 hours in milliseconds

    if (cache.value.data && cacheExpiration > Date.now() - cache.value.timestamp)
      return cache.value.data

    cache.value = { data: await fetchRemote(url), timestamp: Date.now() }
    return cache.value.data
  }

  const getColleges = async (universityId: string) => {
    const path = `${universityId}/colleges`
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as College[]
  }

  const getCourses = async (universityId: string, departmentId: string) => {
    const path = `${universityId}/${departmentId}/courses`
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as Course[]
  }

  const getDepartments = async (universityId: string, collegeId: string) => {
    const path = `${universityId}/${collegeId}/departments`
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as Department[]
  }

  const getProfessors = async (universityId: string) => {
    const path = `${universityId}/professors`
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as Professor[]
  }

  const getSections = async (universityId: string, collegeId: string, departmentId: string, courseId: string) => {
    const path = `${universityId}/${collegeId}/${departmentId}/${courseId}/sections`
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as Section[]
  }

  const getUniversities = async () => {
    const path = 'universities'
    return await fetchStore(path, `${CONFIG.API_PATH}/${path}`) as University[]
  }

  return {
    getColleges,
    getCourses,
    getDepartments,
    getProfessors,
    getSections,
    getUniversities,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataState, import.meta.hot))
