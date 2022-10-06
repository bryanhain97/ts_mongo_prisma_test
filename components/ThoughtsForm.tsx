import styles from '../styles/ThoughtsForm.module.sass';
import Note, { Importance, RemainingChars } from '../types/Note';
import { ChangeEvent, useState, useCallback, useEffect, useContext } from 'react';
import { NotesContext } from '../pages/thoughts';
import { FaOctopusDeploy } from 'react-icons/fa';



const DEFAULT_NOTE: Note = { title: '', text: '', importance: Importance.Not };
const TEXT_MAXLENGTH: number = 220;
const TITLE_MAXLENGTH: number = 16;


const ThoughtsForm = () => {
    const { setCurrentNotes } = useContext(NotesContext);
    const [newNote, setNewNote] = useState<Note>(DEFAULT_NOTE);
    const [remainingChars, setRemainingChars] = useState<RemainingChars>({
        title: TITLE_MAXLENGTH,
        text: TEXT_MAXLENGTH
    });

    const updateNote = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
    }, []);
    const updateImportance = useCallback((importance: Importance) => {
        setNewNote((prevNote) => ({ ...prevNote, importance }));
    }, []);
    const getRemainingClass = useCallback((remainingChars: RemainingChars[keyof RemainingChars]) => {
        return remainingChars === 0 ? styles.remaining_chars_zero : styles.remaining_chars;
    }, []);
    const getImportanceClass = (importance: Importance) => {
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
    const saveNoteInDb = async (e: any, note: Note) => {
        e.preventDefault();
        try {
            const createdAt = new Date();
            const response = await fetch('/api/saveNote', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({ ...note, createdAt }),
                headers: { 'Content-Type': 'application/json' }
            });
            const addedNote = await response.json();
            setCurrentNotes((prev): Note[] => ([...prev, addedNote]));
        }
        catch (e) {
            console.log('ERROR: ', e);
        }
        finally {
            setNewNote(DEFAULT_NOTE);
        }
    };


    useEffect(() => {
        setRemainingChars(() => ({
            title: TITLE_MAXLENGTH - newNote.title!.length,
            text: TEXT_MAXLENGTH - newNote.text.length
        }));
    }, [newNote.text, newNote.title]);


    return (
        <form className={styles.thoughtsForm}>
            <h5>create thought</h5>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="title">
                    title
                    <span className={getRemainingClass(remainingChars.title)}>{`(${remainingChars.title})`}</span>
                </label>
                <input type="text" id="title" name="title" onChange={updateNote} maxLength={TITLE_MAXLENGTH} value={newNote.title}></input>
            </div>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="textarea">
                    text
                    <span className={getRemainingClass(remainingChars.text)}>{`(${remainingChars.text})`}</span>
                </label>
                <textarea
                    className="textarea" id="textarea"
                    name="text"
                    onChange={updateNote}
                    value={newNote.text}
                    maxLength={TEXT_MAXLENGTH}>
                </textarea>
            </div>
            <div className={styles.importanceLevel}>
                <FaOctopusDeploy className={getImportanceClass(Importance.Not)} onClick={() => updateImportance(Importance.Not)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Low)} onClick={() => updateImportance(Importance.Low)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Medium)} onClick={() => updateImportance(Importance.Medium)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.High)} onClick={() => updateImportance(Importance.High)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Critical)} onClick={() => updateImportance(Importance.Critical)} />
                <button className={styles.thoughtsForm_save} onClick={(e) => saveNoteInDb(e, newNote)}>save</button>
            </div>
        </form>
    );
};

export default ThoughtsForm;