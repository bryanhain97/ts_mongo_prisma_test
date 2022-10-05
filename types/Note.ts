enum Importance {
    Not = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4,
}

export default interface NoteProps {
    title?: string,
    text: string,
    createdAt?: String,
    importance: Importance
}
export { Importance }
