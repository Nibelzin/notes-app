import { Category } from "./Category";

export interface Note {
    _id?: any,
    title: string,
    description: string,
    category: Category,
    date: Date
}