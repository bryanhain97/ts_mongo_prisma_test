import NoteProps, { Importance } from '../types/Note';
import { ReactElement, useCallback } from 'react';
import styles from '../styles/Note.module.sass'
import { FaOctopusDeploy } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Note = ({
    title = 'No title',
    text = 'No text',
    createdAt,
    importance = Importance.Not
}: NoteProps
): ReactElement => {
    const getImportanceClass = useCallback((importance: Importance) => {
        switch (importance) {
            case 1:
                return styles.note_icon_LOW;
            case 2:
                return styles.note_icon_MEDIUM;
            case 3:
                return styles.note_icon_HIGH;
            case 4:
                return styles.note_icon_CRITICAL;
            default:
                return styles.note_icon_NOT;
        }
    }, [])

    return (
        <motion.div
            className={styles.note}
        >
            <div className={styles.note_header}>
                <h2 className={styles.note_title}>{title}</h2>
                <span className={styles.importance}>
                    <FaOctopusDeploy className={getImportanceClass(importance)} />
                </span>
            </div>
            <div className={styles.note_divider}></div>
            <p className={styles.note_text}>{text}</p>
            <span className={styles.note_date}>{createdAt}</span>
        </motion.div>
    )
}

export default Note;