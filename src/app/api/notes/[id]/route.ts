import dbConnect from "@/lib/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params } : any) {
    const { id } = params
    const { title, description, category } = await request.json();
    await dbConnect()
    await Note.findByIdAndUpdate(id, { title, description, category })
    return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function GET(request : Request, { params }: any) {
    const { id } = params 
    await dbConnect()
    const note = await Note.findOne({ _id: id })
    return NextResponse.json({ note }, { status: 200 })
}