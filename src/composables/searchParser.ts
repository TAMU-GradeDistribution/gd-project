export const searchParser = (university: string, queryString: string) => {
  const query = { uni: university, dep: '', course: '', sec: '', year: '', sem: '', prof: '' }

  queryString.split(' ').forEach((word: string) => {
    switch (true) {
      case query.dep.length === 0 && word.length === 4 && isNaN(Number(word)) && !['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        query.dep = word
        break
      case query.course.length === 0 && word.length >= 3 && word.length !== 4 && (!isNaN(Number(word)) || word.includes('.')):
        query.course = word.includes('.') ? word.split('.')[0] : word
        query.sec = word.includes('.') ? word.split('.')[1] : ''
        break
      case query.year.length === 0 && word.length === 4 && !isNaN(Number(word)):
        query.year = word
        break
      case query.sem.length === 0 && ['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        query.sem = word
        break
      default:
        query.prof += `${word} `
    }
  })

  query.prof = query.prof.trim()

  // remove empty keys to reduce url query length
  return Object.fromEntries(Object.entries(query).filter(([_, v]) => v !== ''))
}
