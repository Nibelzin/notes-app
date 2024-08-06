"use client"

import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { useState } from "react"
import toast from "react-hot-toast"
import { baseUrl } from "@/lib/globals"
import DeleteConfirm from "../Modal/DeleteConfirm"
import { useDetectClickOutside } from "react-detect-click-outside"
import { ptBR } from "date-fns/locale"
import Chip from "../Chip/Chip"
import SelectCategory from "../Modal/SelectCategory"
import { Category } from "@/app/interfaces/Category"

export default function Note(props: any) {

    const deleteNote = async () => {
        await fetch(`${baseUrl}/api/notes/${newNote.id}`, { method: "DELETE" })
            .then((res: any) => {
                if (!res.ok) {
                    throw new Error('Erro ao deletar nota!')
                } else {
                    toast.success('Nota deletada com sucesso!')
                }
            })
            .catch((e: any) => {
                toast.error(e.message)
            })
        router.refresh()
    }

    const updateDb = async () => {
        await fetch(`${baseUrl}/api/notes/${newNote.id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newNote)
        })
            .then((res: any) => {
                if (!res.ok) {
                    throw new Error('Erro ao atualizar nota!')
                }
            })
            .catch((e: any) => {
                toast.error(e.message)
            })
        router.refresh()
    }

    const handleDeleteBoxClickOutside = () => {
        setDeleteBoxvisible(false)
    }

    const handleSelectCatBoxClickOutside = () => {
        setSelectCategoryBoxVisible(false)
    }

    const handleSelectCatBoxClose = (newCategory: Category) => {
        setSelectCategoryBoxVisible(false)
        if (newCategory) {
            setNewNote({
                ...newNote,
                category: newCategory
            })
        }
        router.refresh()
    }

    const note = { ...props }
    const [newNote, setNewNote] = useState(note)

    const noteDate = format(new Date(newNote.date), 'dd/MM/yyyy - HH:mm', { locale: ptBR })
    const router = useRouter()

    const deleteBoxref = useDetectClickOutside({ onTriggered: handleDeleteBoxClickOutside })
    const selectCategoryBoxRef = useDetectClickOutside({ onTriggered: handleSelectCatBoxClickOutside })

    const [deleteBoxVisible, setDeleteBoxvisible] = useState(false);
    const [selectCategoryBoxVisible, setSelectCategoryBoxVisible] = useState(false);

    return (
        <div className="bg-white border flex w-full flex-col shadow flex-1 lg:max-w-[28rem] lg:min-w-[23rem] rounded-lg h-72 p-3 text-gray-800
        dark:bg-zinc-800 dark:text-white dark:border-zinc-700 transition-colors">
            <div className="flex">
                <input className="text-xl font-semibold flex-grow text-center outline-none
                dark:bg-zinc-800 transition-colors" value={newNote.title} placeholder="Nova nota" onChange={e => { setNewNote({ ...newNote, title: e.target.value }) }} onBlur={updateDb} />
                <div className="flex items-center gap-3">
                    <div className="relative" ref={deleteBoxref}>
                        <button onClick={() => setDeleteBoxvisible(!deleteBoxVisible)} className="outline-none" tabIndex={-1}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {deleteBoxVisible && <DeleteConfirm onCancel={handleDeleteBoxClickOutside} onDelete={deleteNote} />}
                    </div>
                </div>
            </div>
            <hr className="my-3 dark:border-zinc-700 transition-colors" />
            <textarea className="flex-grow outline-none resize-none dark:bg-zinc-800 transition-colors" value={newNote.description} placeholder="Descrição..." onChange={e => { setNewNote({ ...newNote, description: e.target.value }) }} onBlur={updateDb} />
            <div className="flex justify-between">
                <p>{noteDate}</p>
                <div ref={selectCategoryBoxRef}>
                    <button onClick={() => setSelectCategoryBoxVisible(!selectCategoryBoxVisible)}>
                        {newNote.category.name === "" ? <div className="w-16 border px-4 rounded-full font-semibold flex justify-center items-center
                        dark:border-zinc-700 dark:text-zinc-300 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                            </svg>

                        </div> : <Chip title={newNote.category.name} color={newNote.category.color} />}
                    </button>
                    {selectCategoryBoxVisible && <SelectCategory onCancel={handleSelectCatBoxClickOutside} notesCategories={props.notesCategories} id={newNote.id} category={newNote.category} closeSelect={handleSelectCatBoxClose} />}
                </div>
            </div>
        </div>
    )
}