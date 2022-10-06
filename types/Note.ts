enum Importance {
    Not = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4,
}
type RemainingChars = {
    title: number,
    text: number
}
export default interface NoteProps {
    id?: string,
    title?: string,
    text: string,
    createdAt?: string,
    importance: Importance
}
export {
    Importance,
    type RemainingChars
}
