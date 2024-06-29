import { writable } from 'svelte/store';
import { PUBLIC_API_URL } from '$env/static/public';

interface Note {
    id: string;
    title: string;
    text: string;
    categoryId: string[];
    personId: string[];
    tagList: Tag[];
}

interface Tag {
    id: string;
    title: string;
}

export let notes= writable<Note[]>([]);

const getNotes = async () => {
    try {
        var response = await fetch(`${PUBLIC_API_URL}/note/getbyperson`,
            {
                headers: {
                    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkpvZXkgUmVtbWVycyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6IkpvZXlqb2V5UmVtbWVyc0BnbWFpbC5jb20iLCJleHAiOjE3MTk2NzI5NDMsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNjUvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA2NS8ifQ.YCQXAquLOdxEM3CYTlcb1CGGX5QsX2TmGjxYozd1p3A'
                }
            }
        );
        var result = await response.json();
    }
    catch {
        return notes
    }
    
    result.forEach((note: Note) => {
        notes.update(notes => {
            notes.push(note);
            return notes;
        });
    })
    
}

getNotes();