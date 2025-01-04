import styles from './listTitleTemplate.module.css';
import classes from '../../../page.module.css';

export default function ListTitleTemplate({mainTitle, mainDescription, list}) {
    return(
        <div className={styles.container}>
            <h2 className={classes.headingSecondary}>{mainTitle}</h2>
            <p className={classes.paragraphPrimary}>{mainDescription}</p>
            <ul>
                {list.map(item => {
                    return (
                        <li className={styles.unit} key={item.id}>
                            <h3 className={classes.paragraphPrimary}>{item.title}</h3>
                            <p className={classes.paragraphPrimary}>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}