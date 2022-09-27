import { NextPage } from 'next';
import type ThoughtsPageProps from '../types/ThoughtsPage'
import styles from '../styles/Thoughts.module.sass'
import { Note, ThoughtsForm } from '../components';
import { Importance } from '../types/Note';

const ThoughtsPage: NextPage<ThoughtsPageProps> = () => {
    return (
        <div className={styles.thoughtsPage}>
            <ThoughtsForm />
            <Note
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus?"
                importance={Importance.Not}
            />
            <Note
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus?"
                importance={Importance.Low}
            />
            <Note
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus?"
                importance={Importance.Medium}
            />
            <Note
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus?"
                importance={Importance.High}
            />
            <Note
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui amet quos dolore nam eveniet temporibus?"
                importance={Importance.Critical}
            />
        </div>
    )
}
export default ThoughtsPage


// import { writeToDatabase } from "./api/writeToDatabase"
// export async function getServerSideProps() {
//     const user = await writeToDatabase({ email: 'bryan.test@gmail.com', name: 'brav' })
//     // by importing the logic into getServerSideProps we dont fetch twice --- CORRECT
//     // fetch('localhost:3000/api/route') fetches api route which then calls db => additional call => bad for performance
//     console.log(user)
//     return { props: { user } }
// }