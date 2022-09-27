import styles from '../styles/ThoughtsForm.module.sass';
import { Importance } from '../types/Note';
import { useState } from 'react'
import { FaOctopusDeploy } from 'react-icons/fa'

const ThoughtsForm = () => {
    const [importance, setImportance] = useState<Importance>(Importance.Low)
    return (
        <form className={styles.thoughtsForm}>
            <h5>create thought</h5>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="title">title</label>
                <input type="text" id="title"></input>
            </div>
            <div className={styles.thoughtsForm_field}>
                <label htmlFor="text">text</label>
                <input type="text" id="text"></input>
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