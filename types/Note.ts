enum Importance {
    Not = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4,
}
export default interface NoteProps {
    id?: string,
    title?: string,
    text: string,
    createdAt?: string,
    importance: Importance
// eslint-disable-next-line semi
};

export {
    Importance,
};
