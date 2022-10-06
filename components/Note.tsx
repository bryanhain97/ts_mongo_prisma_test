import NoteProps, { Importance } from '../types/Note';
import { ReactElement, useCallback } from 'react';
import styles from '../styles/Note.module.sass'
import { FaOctopusDeploy } from 'react-icons/fa'
import { motion } from 'framer-motion'


const Note = ({
    id,
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
    const getTimeFromUTCTime = useCallback((createdAt: string): string => {
        const time = new Date(createdAt).toLocaleTimeString()
        return time
    }, [])

    const getDateFromUTCTime = useCallback((createdAt: string): string => {
        const date = new Date(createdAt).toUTCString().substring(0, 16)
        return date
    }, [])
    // const deleteNote = async (id: NoteProps['id']) => {
    //     const response = await fetch('/api/deleteNote', {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id })
    //     })
    //     const deletedID = await response.json()
    //     console.log(deletedID)
    // }

    return (
        <motion.div
            className={styles.note}
            id={id}
            animate={{ x: [-15, 0], opacity: [0, 1] }}
        >
            <div className={styles.note_header}>
                <span className={styles.note_delete} onClick={() => {}}></span>
                <h2 className={styles.note_title}>{title}</h2>
                <span className={styles.note_importance}>
                    <FaOctopusDeploy className={getImportanceClass(importance)} />
                </span>
            </div>
            <div className={styles.note_divider}></div>
            <p className={styles.note_text}>{text}</p>
            <div className={styles.note_createdAt}>
                <span className={styles.note_createdAt_date}>{getDateFromUTCTime(createdAt!)}</span>
                <span className={styles.note_createdAt_time}>{getTimeFromUTCTime(createdAt!)}</span>
            </div>
        </motion.div>
    )
}

export default Note;