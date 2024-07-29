import dbConnect from "@/lib/db"
import Note from "@/models/note"
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const { category, title, description } = await request.json()
    await dbConnect();
    await Note.create({category, title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201})
}

export async function GET() {
    await dbConnect();
    const notes = await Note.find();
    return NextResponse.json({notes})
}

export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await dbConnect();
    await Note.findByIdAndDelete(id)
    return NextResponse.json({message: "Topic deleted"}, {status: 200})
}