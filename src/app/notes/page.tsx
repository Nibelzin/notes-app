import NoteGroup from "../components/Note/NotesGroup";

export const metadata = {
    title: 'Suas Notas - Dinamic Notes',
    description: 'Developed by Luan Santos',
  }

export default function Notes() {

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Suas notas</h1>
            <NoteGroup />
        </div>
    )
}