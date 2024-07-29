import mongoose from 'mongoose'

const MONGODB_URI: any = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local',
    )
}

async function dbConnect() {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB database!')
        
    } catch(e) {
        console.log(e)
    }
}

export default dbConnect