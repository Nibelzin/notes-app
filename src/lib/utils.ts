import { baseUrl } from "./globals"

export const getNotes = async () => {
    try {
        const res = await fetch(`${baseUrl}/api/notes`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error('Failed to fetch topics')
        }

        return res.json()
    } catch (e) {
        console.log("Error loading notes", e)
    }
}


