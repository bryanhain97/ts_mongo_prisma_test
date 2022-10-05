import { NextPage } from 'next';
import type ThoughtsPageProps from '../types/ThoughtsPage'
import styles from '../styles/Thoughts.module.sass'
import { Note, ThoughtsForm } from '../components';
import { prisma } from './api/db';
import NoteProps from '../types/Note';

const ThoughtsPage: NextPage<ThoughtsPageProps> = ({ notes }) => {
    return (
        <div className={styles.thoughtsPage}>
            <ThoughtsForm />
            {notes.map(({ id, text, title, importance, createdAt }:
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
        </div>
    )
}
export default ThoughtsPage


export async function getServerSideProps() {
    let notes = await prisma.note.findMany()
    notes = JSON.parse(JSON.stringify(notes))
    console.log(notes)
    return {
        props: {
            notes
        }
    }
}