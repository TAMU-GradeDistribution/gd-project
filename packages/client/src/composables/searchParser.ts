export const searchParser = (uni: string, query: string) => {
  const search = {
    university: uni,
    dep: '',
    course: '',
    sec: '',
    year: '',
    sem: '',
    prof: '',
  }

  // only keep letters, numbers, accents, and some punctuation
  const sanitize = (str: string) => str.replace(/[^\p{L}\p{M}\d'., ]/giu, '')

  // remove duplicate whitespace and trim
  const trimSpace = (str: string) => str.replace(/\s{2,}/g, ' ').trim()

  // convert to start case
  const toStartCase = (str: string) => str.split(' ')
    .filter(s => s)
    .map(s => `${s[0].toUpperCase()}${s.substring(1).toLowerCase()}`)
    .join(' ')

  // match 'SPRING', 'SUMMER', or 'FALL'
  const semRegex = /^(?:SPRING)|(?:SUMMER)|(?:FALL)$/gi

  // match 2-4 capital letters
  const depRegex = /^[A-Z]{2,4}$/gi

  // match 3-4 digits, optionally followed by a dot and 3-4 digits, optionally followed by a capital letter
  const courseRegex = /^\d{3,4}(?:\.\d{3,4}[A-Z]?)?$/gi

  // match 4 digits
  const yearRegex = /^\d{4}$/g

  // clean up and split query into tokens
  const tokens = trimSpace(sanitize(query)).split(' ')

  // determine the type for each token
  tokens.forEach((token: string) => {
    const hasDot = !!token.indexOf('.')

    switch (true) {
      // test for semester
      case !search.sem.length && semRegex.test(token):
        search.sem = token
        break

      // test for department
      case !search.dep.length && depRegex.test(token):
        search.dep = token
        break

      // test for course
      case !search.course.length && courseRegex.test(token):
        search.course = hasDot ? token.split('.')[0] : token
        search.sec = hasDot ? token.split('.')[1] : ''
        break

      // test for year
      case !search.year.length && yearRegex.test(token):
        search.year = token
        break

      // else, it's probably a prof name
      default:
        search.prof += `${token} `
    }
  })

  // run some additional checks

  // if year and dep but no course, then year is probably a course
  if (search.year.length && search.dep.length && !search.course.length) {
    search.course = search.year
    search.year = ''
  }

  // if dep but no course, then dep is probably a prof name
  if (search.dep.length && !search.course.length) {
    search.prof = `${search.dep} ${search.prof}`
    search.dep = ''
  }

  // if course but no dep, then course is probably a year
  if (search.course.length && !search.dep.length) {
    search.year = search.course
    search.course = ''
  }

  // make sure search object is formatted correctly
  search.sem = toStartCase(search.sem)
  search.dep = search.dep.toUpperCase()
  search.course = search.course.toUpperCase()
  search.sec = search.sec.toUpperCase()
  search.prof = toStartCase(search.prof)

  // remove empty keys and truncate key names to 1 character
  const result = Object.fromEntries(
    Object.entries(search)
      .filter(([_, v]) => v)
      .map(([k, v]) => [k[0], v]),
  )

  // print the search object for debugging
  Object.entries(result)
    .forEach(([k, v]) => console.log(`${k}: ${v}`))
  return result
}

'asdf asdf asdf'[0]
