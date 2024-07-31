import styles from './listTitleTemplate.module.css';

export default function ListTitleTemplate({mainTitle, mainDescription, list}) {
    return(
        <div className={styles.listTitleTemplate}>
            <h2>{mainTitle}</h2>
            <p>{mainDescription}</p>
            <ul>
                {list.map(item => {
                    return (
                        <li>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}