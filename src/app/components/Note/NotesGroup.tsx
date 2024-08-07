"use client"

import { useEffect, useState } from "react";
import NewNoteButton from "../Buttons/NewNoteButton";
import NoteComponent from "./Note";
import Chip from "../Chip/Chip";
import { nanoid } from "nanoid";
import { Category } from "@/app/interfaces/Category";
import { Note } from "@/app/interfaces/Note";
import toast from "react-hot-toast";

export default function NoteGroup() {

    const [notes, setNotes] = useState(Array<Note>)

    const addNote = () => {
        const newNote: Note = {
            _id: nanoid(),
            title: "",
            description: "",
            category: { name: "", color: "" },
            date: new Date()
        }

        const newNotes = [...notes, newNote]
        toast.success('Nota adicionada com sucesso!')
        setNotes(newNotes)
    }

    const deleteNote = (id: string) => {
        const newNotes = notes.filter(note => {
            if (note._id !== id) return note
        })
        toast.success('Nota deletada com sucesso!')
        setNotes(newNotes)
    }

    const updateNote = ({ _id, title, category, description, date }: Note) => {
        let newNotes = [...notes]
        const updatedNote: Note = {
            _id,
            title,
            category,
            description,
            date
        }
        const index = notes.findIndex(note => updatedNote._id === note._id)
        newNotes[index] = updatedNote

        setNotes(newNotes)
    }


    useEffect(() => {
        const lsNotes: Array<Note> = JSON.parse(localStorage.getItem('notes') || '[]')
        if (lsNotes.length !== 0) {
            setNotes(lsNotes)
        }
    }, [])

    useEffect(() => {
        console.log('setado')
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const notesCategories = notes.reduce((acc: Array<Category>, curr: any) => {
        if (curr.category.name !== "" && acc.filter((obj: any) => obj.name === curr.category.name).length === 0) acc.push(curr.category)
        return acc
    }, [])


    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredNotes = notes.filter((n: Note) => {
        if (selectedCategory === 'all') {
            return n
        }
        if (n.category.name === selectedCategory) {
            return n
        }
    })

    return (
        <div>
            <div className="flex items-center gap-2 flex-wrap">
                <button onClick={() => setSelectedCategory('all')} className="text-gray-800 border-2 w-fit px-4 rounded-full self-end font-semibold
                dark:text-white dark:border-zinc-700 transition-colors">Todas</button>
                {notesCategories.map((c: Category) => (
                    <button key={c.name} onClick={() => setSelectedCategory(c.name)}>
                        <Chip title={c.name} color={c.color} />
                    </button>
                ))}
            </div>
            <hr className="mt-4 mb-8 dark:border-zinc-700 transition-colors" />
            <div className="flex flex-wrap gap-5 w-full">
                {filteredNotes.map((n: Note) => (
                    <NoteComponent key={n._id} _id={n._id} title={n.title} category={n.category} description={n.description} date={n.date} notesCategories={notesCategories} updateNote={updateNote} deleteNote={deleteNote} />
                ))}
                <NewNoteButton addNote={addNote} />
            </div>
        </div>
    )
}