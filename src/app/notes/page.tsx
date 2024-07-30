import NewNoteButton from "../components/Buttons/NewNoteButton";
import Note from "../components/Note/Note";
import { getNotes } from "@/lib/utils";

export default async function Notes() {

    const res = await getNotes()
    const notes = res.notes
    

    return (
        <div className="flex flex-wrap gap-5 w-full">
            {notes.map((n: any) => (
                <Note key={n._id} id={n._id} title={n.title} category={n.category} description={n.description} date={n.date}/>
            ))}
            <NewNoteButton/>
        </div>
    )
}