import { Notes } from '../interfaces/notes.interface'

export interface Group {
  title:string,
  notes?:Notes[],
  color?: string
}
