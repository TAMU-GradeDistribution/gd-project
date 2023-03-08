import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface CachedData {
  data: any
  timestamp: number
}

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

export enum LetterGrade {
  A_PLUS, B_PLUS, C_PLUS, D_PLUS,
  A_MINUS, B_MINUS, C_MINUS, D_MINUS,
  A, B, C, D, F,
  I, S, U, Q, X, W, P,
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

export enum Semester {
  FALL, SPRING, SUMMER, OTHER,
}

export interface University {
  id: string
  name: string
}
