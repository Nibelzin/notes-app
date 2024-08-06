import dbConnect from "@/lib/db"
import Note from "@/models/note"
import { NextResponse } from "next/server";

export async function POST(request: any) {
    try {
        const { category, title, description } = await request.json()
        await dbConnect();
        await Note.create({ category, title, description });
        return NextResponse.json({ message: "Note Created" }, { status: 201 })
    } catch {
        return NextResponse.json({ message: "Error creating note" }, { status: 500 })
    }
}

export async function GET() {
    try {
        await dbConnect();
        const notes = await Note.find();
        return NextResponse.json({ notes }, { status: 200})
    } catch {
        return NextResponse.json({ message: "Error getting notes" }, { status: 500})
    }
}
