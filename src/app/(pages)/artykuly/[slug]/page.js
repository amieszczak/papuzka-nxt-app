import styles from './page.module.css';
import classes from '../../../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import getSinglePost from '@/integrations/wordpress/getSinglePost';
import Breadcrumbs from '@/app/components/breadcrumbs/breadcrumbs';

export default async function Post({params}) {

    const slug = (await params).slug;
    const post = await getSinglePost(slug);


   return(
        <div className={styles.container}>
            <Breadcrumbs location={'artykul'}/>
            {post?.featuredImage != null 
                ?   <div className={styles.photoContainer}>
                        <Image width={1000} height={1000} className={styles.photo} src={post?.featuredImage?.node?.link}/>                   
                    </div> 
                :   null}            
            <h1 className={classes.headingSecondary}>{post?.title}</h1>
            <div className={classNames({[classes.paragraphSecondary]: true, [styles.paragraphContainer]: true})} dangerouslySetInnerHTML={{__html: post?.content}}/>
            <div className={styles.informationsContainer}>
                <div className={styles.articleInfo}>
                    <div className={classNames({
                        [classes.paragraphSecondary]:true, 
                        [styles.articleInfoUnit]:true})}>
                            {post?.author?.node?.name}
                    </div>
                    <div className={classNames({
                        [classes.paragraphSecondary]:true, 
                        [styles.articleInfoUnit]:true})}>
                            {post?.date}
                    </div>
                </div>
                <Link className={classNames({
                    [classes.paragraphPrimary]:true, 
                    [styles.link]:true})} href='/artykuly'>
                        Wróć do artykułów
                </Link>
            </div>    
        </div>        
   )
}