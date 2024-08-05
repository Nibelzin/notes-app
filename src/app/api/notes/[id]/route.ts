import dbConnect from "@/lib/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
    try {
        const { id } = params
        const { title, description, category } = await request.json();
        await dbConnect()
        await Note.findByIdAndUpdate(id, { title, description, category })
        return NextResponse.json({ message: "Topic updated" }, { status: 200 })
    } catch {
        return NextResponse.json({ message: "Error updating Topic" }, { status: 500 })
    }
}

export async function GET(request: any, { params }: any) {
    try {
        const { id } = params
        await dbConnect()
        const note = await Note.findOne({ _id: id })
        return NextResponse.json({ note }, { status: 200 })
    } catch {
        return NextResponse.json({ message: "Error getting note" }, { status: 500 })
    }
}

export async function DELETE(request: any, { params }: any) {
    try {
        const { id } = params
        await dbConnect()
        const note = await Note.findByIdAndDelete({ _id: id })
        return NextResponse.json({ note }, { status: 200 })
    } catch {
        return NextResponse.json({message: "Error deleting note"}, { status: 500 })
    }
}