import styles from 'styles/ThoughtsForm.module.sass';
import { ChangeEvent, useState, useCallback, useEffect, useContext } from 'react';
import { NotesContext } from 'pages/thoughts';
import { FaOctopusDeploy } from 'react-icons/fa';
import {
    getSaveButtonClass,
    getImportanceClass,
    getRemainingClass,
    getRequiredLengthClass
} from 'components/utils';
import {
    NoteProps,
    Importance,
    RemainingChars
} from 'types';


const DEFAULT_NOTE: NoteProps = { title: '', text: '', importance: Importance.Not };
const TEXT_MAXLENGTH: number = 220;
const TEXT_MINLENGTH: number = 16;
const TITLE_MAXLENGTH: number = 16;
const TITLE_MINLENGTH: number = 4;


const ThoughtsForm = () => {
    const { setCurrentNotes } = useContext(NotesContext);
    const [newNote, setNewNote] = useState<NoteProps>(DEFAULT_NOTE);
    const [remainingChars, setRemainingChars] = useState<RemainingChars>({
        title: TITLE_MAXLENGTH,
        text: TEXT_MAXLENGTH,
        titleRequiredLength: false,
        textRequiredLength: false
    });

    const updateNote = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewNote((prevNote) => ({ ...prevNote, [e.target.name]: e.target.value }));
    }, []);
    const updateImportance = useCallback((importance: Importance) => {
        setNewNote((prevNote) => ({ ...prevNote, importance }));
    }, []);
    const saveNoteInDb = async (e: any, note: NoteProps) => {
        e.preventDefault();
        try {
            if (remainingChars.titleRequiredLength && remainingChars.textRequiredLength) {
                const createdAt = new Date();
                const response = await fetch('/api/saveNote', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({ ...note, createdAt }),
                    headers: { 'Content-Type': 'application/json' }
                });
                const addedNote = await response.json();
                setCurrentNotes((prev): NoteProps[] => ([...prev, addedNote]));
            }
            else {
                throw new Error('Either title or text not long enough.');
            }
        }
        catch ({ message }) {
            console.log('ERROR: ', message);
        }
        finally {
            setNewNote(DEFAULT_NOTE);
        };
    };


    useEffect(() => {
        setRemainingChars(() => ({
            title: TITLE_MAXLENGTH - newNote.title!.length,
            text: TEXT_MAXLENGTH - newNote.text.length,
            titleRequiredLength: (newNote.title!.length - TITLE_MINLENGTH >= 0) ? true : false,
            textRequiredLength: (newNote.text!.length - TEXT_MINLENGTH >= 0) ? true : false,
        }));
    }, [newNote.text, newNote.title]);

    return (
        <form className={styles.thoughtsForm}>
            <h5>create thought</h5>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="title">
                    title
                    <span className={getRemainingClass(remainingChars.title, styles)}>{`(${remainingChars.title})`}</span>
                    <span className={getRequiredLengthClass(remainingChars.titleRequiredLength, styles)}>
                        {remainingChars.titleRequiredLength ? 'Long enough' : 'Not Long Enough'}
                    </span>
                </label>
                <input type="text" id="title" name="title" onChange={updateNote} maxLength={TITLE_MAXLENGTH} value={newNote.title}></input>
            </div>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="textarea">
                    text
                    <span className={getRemainingClass(remainingChars.text, styles)}>{`(${remainingChars.text})`}</span>
                    <span className={getRequiredLengthClass(remainingChars.textRequiredLength, styles)}>
                        {remainingChars.textRequiredLength ? 'Long enough' : 'Not Long Enough'}
                    </span>
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
                <FaOctopusDeploy className={getImportanceClass(Importance.Not, newNote, styles)} onClick={() => updateImportance(Importance.Not)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Low, newNote, styles)} onClick={() => updateImportance(Importance.Low)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Medium, newNote, styles)} onClick={() => updateImportance(Importance.Medium)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.High, newNote, styles)} onClick={() => updateImportance(Importance.High)} />
                <FaOctopusDeploy className={getImportanceClass(Importance.Critical, newNote, styles)} onClick={() => updateImportance(Importance.Critical)} />
                <button className={getSaveButtonClass(remainingChars, styles)} onClick={(e) => saveNoteInDb(e, newNote)}>save</button>
            </div>
        </form>
    );
};

export default ThoughtsForm;