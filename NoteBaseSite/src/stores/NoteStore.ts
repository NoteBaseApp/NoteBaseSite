import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
import type { UUID } from 'crypto'
import type { NoteModel } from "../Model/NoteModel";
interface INoteState {
  notes: [] | [NoteModel]
}

export const useNoteStore = defineStore("note", {
    state: (): INoteState => ({
        notes: [],
    }),
    getters: {
      getNotes(state){
          return state.notes
        }
    },
    actions: {
      async fetchNotes(_id: string) {
        try {
          //const data = await axios.get(`http://localhost:80/note/getbyperson/${_id}`)
          const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/note/getbyperson/${_id}`)
            this.notes = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})