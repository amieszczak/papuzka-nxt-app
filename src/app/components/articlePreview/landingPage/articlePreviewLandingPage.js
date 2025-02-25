import styles from './articlePreviewLandingPage.module.css';
import classes from '../../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ArticlePreviewLandingPage({title, content, imageSrc, refference}) {

    const [hover, setHover] = useState(null);

    return(
        <Link 
         href={'artykuly/' + refference}
         onMouseEnter={() => setHover(title)}
         onMouseLeave={() => setHover(null)}>
            <div className={classNames({[styles.container]:true, [styles.containerHover]: hover == title})}>
                <h2 className={classes.paragraphSecondary}>{title}</h2>
                <div className={styles.contentContainer}>
                    {imageSrc != null
                        ?   <>
                                <div className={classNames({
                                    [classes.paragraphTertiary]:true, 
                                    [styles.paragraph]:true})} dangerouslySetInnerHTML={{__html: content}}/>
                                    <div className={styles.photoContainer}>
                                            <Image 
                                                width={500} 
                                                height={250} 
                                                className={classNames({
                                                    [styles.photo]:true, 
                                                    [styles.photoHover]: hover == title})} 
                                                src={imageSrc}/>
                                    </div>                                                        
                            </>
                        :   <div className={classNames({
                            [classes.paragraphTertiary]:true, 
                            [styles.paragraphFull]:true})} dangerouslySetInnerHTML={{__html: content}}/>
                    }       
                </div>
                <div className={styles.bottomBlinder}></div>
            </div>
        </Link>  
    )
}