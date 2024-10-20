import styles from './articles.module.css';
//
import ArticlePreview from '../components/articlePreview/articlePreview.js';

export default function Articles() {
    return(
        <div className={styles.container}>
            <ArticlePreview/>
        </div>
    )
}