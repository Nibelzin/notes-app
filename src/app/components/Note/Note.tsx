"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


export default function Note(props: any) {

    const router = useRouter()

    const handleButtonClick = () => {
        toast.success(newNote.id)
    }

    const updateDb = async (note: any) => {
        console.log('funcionou')
        console.log(JSON.stringify(newNote))
        try{
            const res = await fetch(`http://localhost:3000/api/notes/${newNote.id}`, {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(newNote)
            })
            console.log(res)
            router.refresh()
        } catch(e) {

        }
    }

    const note = { ...props }

    const [newNote, setNewNote] = useState(note)

    return (
        <div className="bg-white border flex flex-col shadow w-[25rem] rounded-lg h-60 p-3 text-slate-800">
            <div className="flex">
                <input className="text-xl font-semibold flex-grow text-center outline-none" value={newNote.title} onChange={e => {setNewNote({...newNote, title: e.target.value})}} onBlur={updateDb}/>
                <div className="flex items-center gap-3">
                    <button onClick={handleButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <hr className="my-3"/>
            <textarea className="flex-grow outline-none resize-none" value={newNote.description} onChange={e => {setNewNote({...newNote, description: e.target.value})}} onBlur={updateDb}/>
            <div className="bg-purple-400 w-fit px-4 rounded-full self-end font-semibold">Casa</div>
        </div>
    )
}