import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        category: {name: String, color: String},
        title: String,
        description: String,
        date: {type: Date, default: Date.now}
    }
)

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema)

export default Note;