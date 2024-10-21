import styles from './articlePreview.module.css';

export default function ArticlePreview({title, content, author, date, refference}) {

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={styles.dataContainer}>
                <div className={styles.info}>
                    <h3>{author} | {date}</h3>
                </div>
                <a href={refference}>Czytaj więcej</a>
            </div>
            <div className={styles.bottomBlinder}></div>
        </div>
    )
}