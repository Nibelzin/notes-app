import { getNotes } from "@/lib/utils";
import NoteGroup from "../components/Note/NotesGroup";

export default async function Notes() {

    const res = await getNotes()
    const notes = res.notes

    const notesCategories = notes.reduce((acc: Array<String>, curr: any) => {
        if (curr.category.name !== "" && acc.filter((obj: any) => obj.name === curr.category.name).length === 0) acc.push(curr.category)
        return acc
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Suas notas</h1>
            <NoteGroup notes={notes} notesCategories={notesCategories}/>
        </div>
    )
}