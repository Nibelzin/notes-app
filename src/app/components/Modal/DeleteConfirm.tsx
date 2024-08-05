export default function DeleteConfirm(props: any) {

    return (
        <div className="bg-white border shadow rounded-md p-4 absolute w-60 md:w-80 top-28 left-4 md:-left-28 translate-x-[-14rem] md:-translate-x-1/2 -translate-y-1/2 z-10
        dark:bg-zinc-800 dark:border-zinc-700 transition-colors">
            <h1 className="text-lg font-semibold">Confirmar Ação</h1>
            <p className="mb-4">Tem certeza que deseja deletar esta nota?</p>
            <div className="flex gap-2 justify-end">
                <button onClick={props.onDelete} className="bg-red-600 text-white p-2 rounded-md shadow-md">Deletar</button>
                <button onClick={props.onCancel} className=" text-blue-500 p-2 rounded-md border dark:border-zinc-700">Cancelar</button>
            </div>
        </div>
    )
}