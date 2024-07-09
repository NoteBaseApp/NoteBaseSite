// import { GetApiToken } from '../stores/AuthStore' 

// export async function GetNotes(UserMail: string): Promise<Note[]>
// {
//     try {
//         let notes: Note[] = [];

//         let response = await fetch(`${import.meta.env.VITE_API_URL}/note/getbyperson`,
//             {
//                 headers: {
//                     'Authorization':`Bearer ${GetApiToken(UserMail)}`
//                 }
//             }
//         );
//         let result = await response.json();
        
//         result.forEach((note: Note) => {
//             notes.push(note);
//         })

//         return notes;
//     }
//     catch {
//         return []
//     }
// }

export interface Note {
    id: string;
    title: string;
    text: string;
    categoryId: string[];
    personId: string[];
    tagList: Tag[];
}

export interface Tag {
    id: string;
    title: string;
}