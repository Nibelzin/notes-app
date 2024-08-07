"use client"

import { useRouter } from "next/navigation"

export default function NewNoteButton({addNote}: any) {

    const router = useRouter()

    return (
        <button className="border-2 flex items-center justify-center flex-1 lg:max-w-[28rem] lg:min-w-[23rem] h-72 rounded-lg p-3
        dark:border-zinc-700 transition-colors" onClick={addNote}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-20 text-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    )
}