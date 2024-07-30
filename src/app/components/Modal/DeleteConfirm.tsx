export default function DeleteConfirm(props: any) {

    return (
        <div className="bg-white border shadow-md rounded-md p-4 absolute w-60 md:w-80 top-28 translate-x-[-14rem] md:-translate-x-1/2 -translate-y-1/2">
            <h1 className="text-lg font-semibold">Confirmar Ação</h1>
            <p className="mb-4">Tem certeza que deseja deletar esta nota?</p>
            <div className="flex gap-2 justify-end">
                <button onClick={props.onDelete} className="bg-red-600 text-white p-2 rounded-md shadow-md">Deletar</button>
                <button onClick={props.onCancel} className=" text-blue-600 p-2 rounded-md border">Cancelar</button>
            </div>
        </div>
    )
}