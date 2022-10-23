import { RemainingChars, Importance, NoteProps } from 'types';

const getSaveButtonClass = (
    { textRequiredLength, titleRequiredLength }: RemainingChars,
    styles: any
) => {
    return (textRequiredLength && titleRequiredLength) ? styles.save_enabled : styles.save_disabled;
};
const getRemainingClass = (remainingChars: RemainingChars[keyof RemainingChars], styles: any) => {
    return remainingChars === 0 ? styles.remaining_chars_zero : styles.remaining_chars;
};

const getImportanceClass = (importance: Importance, newNote: NoteProps, styles: any) => {
    switch (importance) {
        case Importance.Not:
            return (newNote.importance === Importance.Not) ? `${styles.importanceLevel_Not} ${styles.importanceLevel_selected}` : styles.importanceLevel_Not;
        case Importance.Low:
            return (newNote.importance === Importance.Low) ? `${styles.importanceLevel_Low} ${styles.importanceLevel_selected}` : styles.importanceLevel_Low;
        case Importance.Medium:
            return (newNote.importance === Importance.Medium) ? `${styles.importanceLevel_Medium} ${styles.importanceLevel_selected}` : styles.importanceLevel_Medium;
        case Importance.High:
            return (newNote.importance === Importance.High) ? `${styles.importanceLevel_High} ${styles.importanceLevel_selected}` : styles.importanceLevel_High;
        case Importance.Critical:
            return (newNote.importance === Importance.Critical) ? `${styles.importanceLevel_Critical} ${styles.importanceLevel_selected}` : styles.importanceLevel_Critical;
    }
};

const getRequiredLengthClass = (
    requiredTextLength: Boolean,
    styles: any
) => {
    if (requiredTextLength) return styles.longEnough;
    return styles.notLongEnough;
};



export {
    getSaveButtonClass,
    getImportanceClass,
    getRemainingClass,
    getRequiredLengthClass
};