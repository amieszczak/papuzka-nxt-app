import styles from './articlePreviewLandingPage.module.css';
import classes from '../../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePreviewLandingPage({title, content, imageSrc, author, date, refference}) {

    return(
        <Link href={refference}>
            <div className={classNames({[styles.container]:true, [styles.containerLandingPage]:true})}>
                <h2 className={classes.paragraphSecondary}>{title}</h2>
                <p className={classes.paragraphTertiary}>{content}</p>
                <div className={styles.bottomBlinder}></div>
            </div>
        </Link>        
    )
}