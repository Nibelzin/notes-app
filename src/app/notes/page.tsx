import Note from "../components/Note/Note";


const getNotes = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/notes', {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error('Failed to fetch topics')
        }

        return res.json()
    } catch (e) {
        console.log("Error loading notes", e)
    }
}

export default async function Notes() {

    const notes = await getNotes()

    return (
        <div className="flex flex-wrap gap-5 w-full">
            {notes.notes.map((n: any) => (
                <Note key= {n._id} title={n.title} category={n.category} description={n.description} />
            ))}
        </div>
    )
}