import styles from './page.module.css';
//
import ArticlePreviewArticles from '../../components/articlePreview/articles/articlePreviewArticles.js';
//
import getAllPosts from '@/integrations/wordpress/getAllPosts';



export default async function Articles() {

    const posts = await getAllPosts();

    return (
        <div className={styles.container}>            
            {posts?.map((item, index) => {
                return(
                    <ArticlePreviewArticles 
                        key={index} 
                        title={item?.node?.title} 
                        content={item?.node?.content} 
                        imageSrc={item?.node?.featuredImage?.node?.sourceUrl} 
                        author={item?.node?.author?.node?.name} 
                        date={item?.node?.date} 
                        refference={item?.node?.slug}
                        />
                )
            })}
        </div>
    )
}