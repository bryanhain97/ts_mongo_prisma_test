import styles from '../styles/ThoughtsForm.module.sass';
import Note, { Importance } from '../types/Note';
import { ChangeEvent, useState, useCallback } from 'react'
import { FaOctopusDeploy } from 'react-icons/fa'

const DEFAULT_NOTE: Note = { title: '', text: '', importance: Importance.Not }

const ThoughtsForm = () => {
    const [newNote, setNewNote] = useState<Note>(DEFAULT_NOTE)
    const updateNote = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }))
    }, [])
    const updateImportance = (importance: Importance) => {
        setNewNote((prevNote) => ({ ...prevNote, importance: importance }))
    }
    const getImportanceClass = (importance: Importance) => {
        switch (importance) {
            case Importance.Not:
                return (newNote.importance === Importance.Not) ? `${styles.importanceLevel_Not} ${styles.importanceLevel_selected}` : styles.importanceLevel_Not
            case Importance.Low:
                return (newNote.importance === Importance.Low) ? `${styles.importanceLevel_Low} ${styles.importanceLevel_selected}` : styles.importanceLevel_Low
            case Importance.Medium:
                return (newNote.importance === Importance.Medium) ? `${styles.importanceLevel_Medium} ${styles.importanceLevel_selected}` : styles.importanceLevel_Medium
            case Importance.High:
                return (newNote.importance === Importance.High) ? `${styles.importanceLevel_High} ${styles.importanceLevel_selected}` : styles.importanceLevel_High
            case Importance.Critical:
                return (newNote.importance === Importance.Critical) ? `${styles.importanceLevel_Critical} ${styles.importanceLevel_selected}` : styles.importanceLevel_Critical
        }
    }
    const saveNoteInDb = async (e: any, note: Note) => {
        e.preventDefault()
        try {
            const createdAt = new Date().toUTCString().replace(' GMT', '')
            const addedNote = await fetch('/api/saveNote', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({ ...note, createdAt }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (e) {
            console.log('ERROR: ', e)
        }
        setNewNote(DEFAULT_NOTE)
    }
    return (
        <form className={styles.thoughtsForm}>
            <h5>create thought</h5>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="title">title</label>
                <input type="text" id="title" name="title" onChange={updateNote} maxLength={16} value={newNote.title}></input>
            </div>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="textarea">text</label>
                <textarea className="textarea" id="textarea" name="text" onChange={updateNote} value={newNote.text}></textarea>
            </div>
            <div className={styles.importanceLevel}>
                <FaOctopusDeploy className={getImportanceClass(Importance.Not)} onClick={() => updateImportance(Importance.Not)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Low)} onClick={() => updateImportance(Importance.Low)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Medium)} onClick={() => updateImportance(Importance.Medium)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.High)} onClick={() => updateImportance(Importance.High)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Critical)} onClick={() => updateImportance(Importance.Critical)} />
            </div>
            <button className={styles.thoughtsForm_save} onClick={(e) => saveNoteInDb(e, newNote)}>save</button>
        </form>
    )
}

export default ThoughtsForm;