export const searchParser = (query: string) => {
  const result = { department: '', course: '', section: '', year: '', semester: '', professor: '' }

  query.split(' ').forEach((word: string) => {
    switch (true) {
      case result.department.length === 0 && word.length === 4 && isNaN(Number(word)) && !['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        result.department = word
        break
      case result.course.length === 0 && word.length >= 3 && word.length !== 4 && (!isNaN(Number(word)) || word.includes('.')):
        result.course = word.includes('.') ? word.split('.')[0] : word
        result.section = word.includes('.') ? word.split('.')[1] : ''
        break
      case result.year.length === 0 && word.length === 4 && !isNaN(Number(word)):
        result.year = word
        break
      case result.semester.length === 0 && ['FALL', 'SPRING', 'SUMMER'].includes(word.toLocaleUpperCase()):
        result.semester = word
        break
      default:
        result.professor += `${word} `
    }
  })

  result.professor = result.professor.trim()

  return result
}
