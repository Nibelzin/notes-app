import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-14 shadow z-10 flex items-center p-5 px-20 font-semibold text-gray-800 justify-between">
            <div className="flex gap-5">
                <Link href={'/'}>Home</Link>
                <Link href={'/notes'}>Notes</Link>
            </div>
            <div className="flex items-center bg-yellow-300 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
                New note
            </div>
        </div>
    )
}