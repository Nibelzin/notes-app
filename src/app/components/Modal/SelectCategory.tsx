import { useState } from "react"
import toast from "react-hot-toast";
import { Category } from "@/app/interfaces/Category";

export default function SelectCategory(props: any) {

    const handleNewCatButtonClick = (e: any) => {
        e.stopPropagation();
        setNewCategory(!newCategoryMode)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (newCategoryMode === true) {
            if (newCategoryName === "") {
                toast.error("Nome da Categoria não informado")
                return
            }
            createNewCategory()
        } else {
            selectNewCategory()
        }

    }

    const createNewCategory = () => {
        const newNoteCategory: Category = {
            name: newCategoryName,
            color: selectedColor
        }
        toast.success("Categoria adicionada com sucesso!")
        props.closeSelect(newNoteCategory)
    }

    const selectNewCategory = () => {
        const nextCategory =  props.notesCategories.find((c: Category) => c.name === selectedCategory)
        const newNoteCategory = {
            category: nextCategory ? nextCategory : { name: "", color: ""}
        }

        toast.success("Categoria selecionada com sucesso!")
        props.closeSelect(newNoteCategory.category)
    }



    // Mostrar se esta criando uma nova categoria ou não
    const [newCategoryMode, setNewCategory] = useState(false)


    const [newCategoryName, setCategoryName] = useState('')
    const [selectedColor, setSelectedColor] = useState('blue')

    const [selectedCategory, setSelectedCategory] = useState(props.category.name)

    return (
        <div className="absolute text-gray-800 border shadow rounded-md p-4 w-80 md:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-10
        dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors">
            <h1 className="text-md font-semibold">Categoria</h1>
            <form onSubmit={handleSubmit} className="p-2 flex flex-col">
                {newCategoryMode &&
                    <div>
                        <p className="font-semibold">Nome</p>
                        <input type="text" value={newCategoryName} onChange={e => setCategoryName(e.target.value)} className="w-full mt-2 p-2 outline-none border rounded dark:bg-zinc-800 dark:border-zinc-500 transition-colors" />
                        <p className="font-semibold mt-4">Cor</p>
                        <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className="w-full my-2 p-2 outline-none border rounded dark:bg-zinc-800 dark:border-zinc-500 transition-colors">
                            <option value="blue">Azul</option>
                            <option value="purple">Roxo</option>
                            <option value="green">Verde</option>
                            <option value="pink">Rosa</option>
                            <option value="yellow">Amarelo</option>
                            <option value="red">Vermelho</option>
                        </select>
                    </div>
                }
                {!newCategoryMode &&
                    <div>
                        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full my-2 p-2 outline-none border rounded dark:bg-zinc-800 dark:border-zinc-500 transition-colors">
                            <option value="">Sem Categoria</option>
                            {props.notesCategories.map((category: any) => {
                                return (
                                    <option key={category.name} value={category.name}>{category.name}</option>
                                )
                            })}
                        </select>
                    </div>
                }
                <button type="button" onClick={handleNewCatButtonClick} className="text-blue-600 underline mt-4">{newCategoryMode ? "Categorias existentes" : "Nova Categoria"}</button>
                <div className="flex gap-2 flex-col justify-end mt-4">
                    <button className="bg-blue-600 text-white p-2 rounded shadow-md">Confirmar</button>
                    <button type="button" onClick={props.onCancel} className=" text-blue-600 p-2 rounded border dark:border-zinc-700 transition-colors">Cancelar</button>
                </div>
            </form>
        </div>
    )
}