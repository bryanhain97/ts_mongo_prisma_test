import styles from 'styles/Thoughts.module.sass';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { createContext, SetStateAction, useState, Dispatch } from 'react';
import { Note, ThoughtsForm } from 'components';
import { prisma } from './api/_db';
import { NoteProps, ThoughtsPageProps } from 'types';
import { useSession } from 'next-auth/react';

export const NotesContext = createContext<{
    currentNotes: NoteProps[],
    setCurrentNotes: Dispatch<SetStateAction<NoteProps[]>>
}>({
    currentNotes: [],
    setCurrentNotes: () => { }
});

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ notes }) => {
    const [currentNotes, setCurrentNotes] = useState<NoteProps[]>(notes);
    const { status } = useSession();
    const router: NextRouter = useRouter();

    return (
        <div className={styles.thoughtsPage}>
            {status === 'authenticated' ?
                <NotesContext.Provider value={{ currentNotes, setCurrentNotes }}>
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
                </NotesContext.Provider >
                :
                <button className={styles.button_access_denied} onClick={() => router.push('http://localhost:3000/auth/signin')}>
                    login to show your thoughts!!
                </button>
            }
        </div >
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