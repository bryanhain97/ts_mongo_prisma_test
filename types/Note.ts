enum Importance {
    Not = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4,
}

export default interface NoteProps {
    title?: string,
    text?: string,
    created_at?: Date,
    importance?: Importance
}
export { Importance }
