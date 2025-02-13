import styles from './page.module.css';
import getSinglePost from '@/integrations/wordpress/getSinglePost';

export default async function Post({params}) {

    const slug = (await params).slug;
    const post = await getSinglePost(slug);

   return(
        <div className={styles.container}>
            <h1>{post?.title}</h1>
        </div>        
   )
}