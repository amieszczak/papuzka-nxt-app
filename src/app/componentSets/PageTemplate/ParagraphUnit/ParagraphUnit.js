import styles from './paragraph-unit.module.css';

export default function ParagraphUnit({title, paragraph}) {
    return (
        <section className={styles.paragraphUnit}>
            <h3>{title}</h3>
            <p>{paragraph}</p>
        </section>
    )
}