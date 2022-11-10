<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()

const queryParser = (query: string) => {
  const queryResult = { department: '', course: '', section: '', year: '', semester: '', professor: '' }

  query.split(' ').forEach((word: string) => {
    switch (true) {
      case queryResult.department.length === 0 && word.length === 4 && isNaN(Number(word)) && !['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        queryResult.department = word
        break
      case queryResult.course.length === 0 && word.length >= 3 && word.length !== 4 && (!isNaN(Number(word)) || word.includes('.')):
        queryResult.course = word.includes('.') ? word.split('.')[0] : word
        queryResult.section = word.includes('.') ? word.split('.')[1] : ''
        break
      case queryResult.year.length === 0 && word.length === 4 && !isNaN(Number(word)):
        queryResult.year = word
        break
      case queryResult.semester.length === 0 && ['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        queryResult.semester = word
        break
      default:
        queryResult.professor += `${word} `
    }
  })

  return queryResult
}
</script>

<template>
  <main class="flex flex-col grow justify-evenly px-2">
    <div class="flex flex-col text-xl text-center p-2 mb-3 mx-auto">
      <div>
        {{ router.currentRoute.value.fullPath }}
        <br>&nbsp;<br>
        <br>&nbsp;<br>
      </div>
      <div class="flex flex-col">
        {{ queryParser('CSCE 214.209 summer 2014 smith') }}
        <br>&nbsp;<br>
        {{ queryParser('franklin doe 314 ECEN FALL 2088 abraham') }}
        <br>&nbsp;<br>
        {{ queryParser('Spring 8115 ACEN 849.308M') }}
        <br>&nbsp;<br>
        {{ queryParser('ecen 214 ') }}
        <br>&nbsp;<br>
        {{ queryParser('CSCE 221 beny p.') }}
        <br>&nbsp;<br>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
