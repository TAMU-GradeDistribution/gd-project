import type { LetterGrade, Semester } from './enums'

export interface College {
  id: string
  universityId: string
  name: string
}

export interface Course {
  id: string
  universityId: string
  professorId: string
  departmentId: string
  courseNumber: string
  description: string
  name: string
}

export interface Department {
  id: string
  collegeId: string
  universityId: string
  shortName: string
  name: string
}

export interface LetterGrades {
  letter: LetterGrade
  count: number
}

export interface Professor {
  id: string
  universityId: string
  firstName: string
  lastName: string
}

export interface Section {
  id: string
  universityId: string
  courseId: string
  professorId: string
  sectionNumber: string
  numStudents: number
  gpa: number
  letterGrades: LetterGrades[]
  year: number
  semester: Semester | string
  honors: boolean
  online: boolean
}

export interface University {
  id: string
  name: string
}
