import styles from './articlePreviewLandingPage.module.css';
import classes from '../../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePreviewLandingPage({title, content, imageSrc, refference}) {

    return(
        <Link href={refference}>
            <div className={styles.container}>
                <h2 className={classes.paragraphSecondary}>{title}</h2>
                <div className={styles.contentContainer}>
                    {imageSrc != null
                        &&
                        <>
                        <p className={classNames({[classes.paragraphTertiary]:true, [styles.paragraph]:true})}>{content}</p>
                            <div className={styles.photoContainer}>
                                    <Image 
                                        width={500} 
                                        height={250} 
                                        className={styles.photo} 
                                        src={imageSrc}/>
                            </div>
                        </>
                    }                                
                </div>
                <div className={styles.bottomBlinder}></div>
            </div>
        </Link>        
    )
}