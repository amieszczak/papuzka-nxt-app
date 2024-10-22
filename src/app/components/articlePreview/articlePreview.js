import styles from './articlePreview.module.css';
//
import classNames from 'classnames';

export default function ArticlePreview({title, content, author, date, refference, styleProp}) {
    
    if(styleProp == 'articles') {
        return (
            <div className={classNames({[styles.container]:true, [styles.containerArticles]:true})}>
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
    } else if(styleProp == 'landingPage') {
        return(
            <a href={refference}>
                <div className={classNames({[styles.container]:true, [styles.containerLandingPage]:true})}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className={styles.bottomBlinder}></div>
                </div>
            </a>
            
        )
    }
    
}