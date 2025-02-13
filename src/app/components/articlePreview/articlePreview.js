import styles from './articlePreview.module.css';
import classes from '../../page.module.css';
//
import classNames from 'classnames';
import Image from 'next/image';

export default function ArticlePreview({title, content, imageSrc, author, date, refference, styleProp}) {
    
    if(styleProp == 'articles') {
        return (
            <div className={classNames({[styles.container]:true, [styles.containerArticles]:true})}>
                <h2 className={classNames({[classes.headingPrimary]:true, [styles.headingArticles]:true})}>{title}</h2>
                <div className={classNames({[styles.previewContainerWithPhoto]: imageSrc != null, [styles.previewContainerWithoutPhoto]: imageSrc == null})}>
                    <div className={classNames({[classes.paragraphPrimary]: true, [styles.descriptionArticlesPhoto]: imageSrc != null, [styles.descriptionArticlesWithoutPhoto]: imageSrc == null,})} dangerouslySetInnerHTML={{__html: content}}></div>
                    <div className={styles.imageContainerArticles}>
                        {imageSrc != null 
                        && <Image width={841} height={748} className={styles.imageArticles} src={imageSrc}/>}                         
                    </div>                    
                </div>                
                <div className={styles.dataContainer}>
                    <div className={styles.info}>
                        <h3>{author} | {date}</h3>
                    </div>
                    <a href={'artykuly/' + refference}>Czytaj więcej</a>
                </div>
                <div className={styles.bottomBlinder}></div>
            </div>
        )
    } else if(styleProp == 'landingPage') {
        return(
            <a href={refference}>
                <div className={classNames({[styles.container]:true, [styles.containerLandingPage]:true})}>
                    <h2 className={classes.paragraphSecondary}>{title}</h2>
                    <p className={classes.paragraphTertiary}>{content}</p>
                    <div className={styles.bottomBlinder}></div>
                </div>
            </a>
            
        )
    }
    
}