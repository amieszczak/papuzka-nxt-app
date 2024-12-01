import styles from './page.module.css';
//
import ArticlePreview from '../../components/articlePreview/articlePreview.js';
//
import { articlesData } from '../../data/articlesData/articlesData.js';

export default function Articles() {
    return (
        <div className={styles.container}>
            {articlesData.map(item => {
                return (
                    <ArticlePreview key={item.id} title={item.title} content={item.content} author={item.author} date={item.date} refference={item.refference} styleProp='articles'/>
                )
            })}
        </div>
    )
}