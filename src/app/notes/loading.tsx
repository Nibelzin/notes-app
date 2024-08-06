export default function Loading() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Suas notas</h1>
            <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-gray-400 w-16 px-4 h-6 rounded-full self-end font-semibold animate-pulse"></div>
                <div className="bg-gray-400 w-16 px-4 h-6 rounded-full self-end font-semibold animate-pulse"></div>
                <div className="bg-gray-400 w-16 px-4 h-6 rounded-full self-end font-semibold animate-pulse"></div>
                <div className="bg-gray-400 w-16 px-4 h-6 rounded-full self-end font-semibold animate-pulse"></div>
            </div>
            <hr className="mt-4 mb-8" />
            <div className="flex flex-wrap gap-5 w-full">
                <div className="bg-gray-400 border flex flex-col w-[25rem] rounded-lg h-60 p-3 animate-pulse"></div>
                <div className="bg-gray-400 border flex flex-col w-[25rem] rounded-lg h-60 p-3 animate-pulse"></div>
                <div className="bg-gray-400 border flex flex-col w-[25rem] rounded-lg h-60 p-3 animate-pulse"></div>
                <div className="bg-gray-400 border flex flex-col w-[25rem] rounded-lg h-60 p-3 animate-pulse"></div>
            </div>
        </div>
    )
}