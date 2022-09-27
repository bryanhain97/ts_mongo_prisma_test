import NoteProps, { Importance } from "../types/Note";
import { ReactElement } from "react";
import styles from '../styles/Note.module.sass'
import { useFormattedDate } from "../hooks";
import { FaOctopusDeploy } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Note = ({
    title = 'No title',
    text = 'No text',
    created_at = new Date(),
    importance = Importance.Low // 0,1,2,3,4
}: NoteProps
): ReactElement => {
    const [formattedDate, _] = useFormattedDate(created_at);
    return (
        <motion.div
            className={styles.note}
        >
            <div className={styles.note_header}>
                <h2 className={styles.note_title}>{title}</h2>
                <span className={styles.importance}>
                    <FaOctopusDeploy className={styles.note_icon} />
                </span>
            </div>
            <div className={styles.note_divider}></div>
            <p className={styles.note_text}>{text}</p>
            <span className={styles.note_date}>{formattedDate}</span>
        </motion.div>
    )
}

export default Note;