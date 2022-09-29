import styles from '../styles/ThoughtsForm.module.sass';
import Note, { Importance } from '../types/Note';
import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react'
import { FaOctopusDeploy } from 'react-icons/fa'

const ThoughtsForm = () => {
    const [note, setNote] = useState<Note>({
        title: '',
        text: '',
        importance: Importance.Not
    })
    const updateNote = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        console.log(note)
    }, [note])
    return (
        <form className={styles.thoughtsForm}>
            <h5>create thought</h5>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="title">title</label>
                <input type="text" id="title" name="title" onChange={updateNote}></input>
            </div>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="textarea">text</label>
                <textarea className="textarea" id="textarea" name="text" onChange={updateNote}></textarea>
            </div>
            <div className={styles.thoughtsForm_importanceLevel}>
                <FaOctopusDeploy className={styles.thoughtsForm_importanceLevel_Not} />
                <FaOctopusDeploy className={styles.thoughtsForm_importanceLevel_Low} />
                <FaOctopusDeploy className={styles.thoughtsForm_importanceLevel_Medium} />
                <FaOctopusDeploy className={styles.thoughtsForm_importanceLevel_High} />
                <FaOctopusDeploy className={styles.thoughtsForm_importanceLevel_Critical} />
            </div>
            <button className={styles.thoughtsForm_save}>save</button>
        </form>
    )
}

export default ThoughtsForm;