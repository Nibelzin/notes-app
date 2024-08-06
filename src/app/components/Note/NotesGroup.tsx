"use client"

import { useState } from "react";
import NewNoteButton from "../Buttons/NewNoteButton";
import NoteComponent from "./Note";
import Chip from "../Chip/Chip";
import { Category } from "@/app/interfaces/Category";
import { Note } from "@/app/interfaces/Note";

export default function NoteGroup(props: any) {

    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredNotes = props.notes.filter((n: Note) => {
        if(selectedCategory === 'all'){
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
                {props.notesCategories.map((c: Category) => (
                    <button key={c.name} onClick={() => setSelectedCategory(c.name)}>
                        <Chip title={c.name} color={c.color} />
                    </button>
                ))}
            </div>
            <hr className="mt-4 mb-8 dark:border-zinc-700 transition-colors"/>
            <div className="flex flex-wrap gap-5 w-full">
                {filteredNotes.map((n: Note) => (
                    <NoteComponent key={n._id} id={n._id} title={n.title} category={n.category} description={n.description} date={n.date} notesCategories={props.notesCategories} />
                ))}
                <NewNoteButton />
            </div>
        </div>
    )
}