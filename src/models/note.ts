import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        category: String,
        title: String,
        description: String
    }
)

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)

export default Note;