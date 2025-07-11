import styles from './articlePreviewArticles.module.css';
import classes from '../../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePreviewArticles({title, content, imageSrc, author, date, refference}) {

    return (
        <div className={styles.container}>
            <h2 className={classNames({
                [classes.headingPrimary]:true, 
                [styles.heading]:true})}>
                    {title}
            </h2>
            <div className={classNames({
                [styles.previewContainerWithPhoto]: imageSrc != null, 
                [styles.previewContainerWithoutPhoto]: imageSrc == null})}>
                <div className={classNames({
                    [classes.paragraphPrimary]: true, 
                    [styles.descriptionArticlesPhoto]: imageSrc != null, 
                    [styles.descriptionArticlesWithoutPhoto]: imageSrc == null,})} dangerouslySetInnerHTML={{__html: content}}>
                </div>
                <div className={styles.imageContainer}>
                    {imageSrc != null 
                    && <Image 
                        width={841} 
                        height={748} 
                        className={styles.imageArticles} 
                        src={imageSrc}/>}                         
                </div>                    
            </div>                
            <div className={styles.dataContainer}>
                <div className={styles.info}>
                    <h3>{author} | {date}</h3>
                </div>
                <Link className={styles.link} href={'artykuly/' + refference}>
                    Czytaj więcej
                </Link>                
            </div>
            <div className={styles.bottomBlinder}></div>
        </div>
    )
}