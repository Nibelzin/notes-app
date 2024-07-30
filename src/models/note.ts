import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        category: String,
        title: String,
        description: String,
        date: {type: Date, default: Date.now}
    }
)

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)

export default Note;