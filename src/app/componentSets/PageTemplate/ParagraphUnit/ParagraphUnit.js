import styles from './paragraphUnit.module.css';
import classes from '../../../page.module.css';

export default function ParagraphUnit({title, paragraph}) {
    return (
        <section className={styles.paragraphUnit}>
            <h3 className={classes.headingSecondary}>{title}</h3>
            <p className={classes.paragraphPrimary}>{paragraph}</p>
        </section>
    )
}