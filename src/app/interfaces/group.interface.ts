import {Notes} from "./notes.interface";

export interface Group {
  title:string,
  color?: string,
  notes: Notes[]
}
