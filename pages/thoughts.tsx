import { NextPage } from 'next';
import { AnimatePresence } from 'framer-motion';
import { createContext, SetStateAction, useState, Dispatch, useEffect } from 'react';
import type ThoughtsPageProps from '../types/ThoughtsPage';
import styles from '../styles/Thoughts.module.sass';
import { Note, ThoughtsForm } from '../components';
import { prisma } from './api/_db';
import NoteProps from '../types/Note';

export const NotesContext = createContext<{
    currentNotes: NoteProps[],
    setCurrentNotes: Dispatch<SetStateAction<NoteProps[]>>
}>({
    currentNotes: [],
    setCurrentNotes: () => { }
});

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ notes }) => {
    const [currentNotes, setCurrentNotes] = useState<NoteProps[]>(notes);

    return (
        <NotesContext.Provider value={{ currentNotes, setCurrentNotes }}>
            <div className={styles.thoughtsPage}>
                <ThoughtsForm />
                <AnimatePresence>
                    {currentNotes.map(({ id, text, title, importance, createdAt }:
                        NoteProps, idx) => (
                        <Note
                            key={idx}
                            id={id}
                            text={text}
                            title={title}
                            importance={importance}
                            createdAt={createdAt}
                        />)
                    )}
                </AnimatePresence>
            </div >
        </NotesContext.Provider>
    );
};
export default ThoughtsPage;


export async function getServerSideProps() {
    const notes = await prisma.note.findMany();
    return {
        props: {
            notes
        }
    };
}