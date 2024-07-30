"use client"

import { baseUrl } from "@/lib/globals"
import { getNotes } from "@/lib/utils"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function NewNoteButton() {

    const router = useRouter()

    const newNote = async () => {
        const defaultNote = {
            title: "",
            desciption: "",
            category: ""
        }
        const res = await fetch(`${baseUrl}/api/notes`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(defaultNote)
        })
        toast.success('Nota adicionada com sucesso!')
        await getNotes()
        router.refresh()
    }

    return (
        <button className=" border-2 flex items-center justify-center w-[25rem] rounded-lg h-60 p-3 text-slate-800" onClick={newNote}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-20 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    )
}