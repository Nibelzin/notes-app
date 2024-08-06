"use client"

import { useEffect, useState } from 'react'


export default function ConfigsModal(props: any) {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return (
        <div className="bg-white text-gray-800 border shadow rounded-md p-4 absolute w-60 md:w-80 top-14 left-10 md:-left-28 translate-x-[-14rem] md:-translate-x-1/2 -translate-y-1/2 z-10
        dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-colors"
        style={
            props.configBoxVisible ? {display: "block"} : {display: "none"}
        }>
            <div className="flex justify-between">
                <p>Dark Mode</p>
                <div onClick={() => setDarkMode(!darkMode)} className="w-12 relative bg-slate-400 rounded-full border flex items-center cursor-pointer p-1
                dark:bg-blue-500 dark:border-zinc-700 transition-colors">
                    <div className='absolute bg-white rounded-full w-4 h-4 transform transition-transform duration-300 shadow'
                    style={darkMode ? {right: "4px"} : {left: "4px"}}
                    ></div>
                </div>
            </div>
        </div>
    )
}