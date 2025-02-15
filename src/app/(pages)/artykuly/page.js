/* 'use client'; */
import styles from './page.module.css';
//
import ArticlePreview from '../../components/articlePreview/articles/articlePreviewArticles.js';
//
/* import { articlesData } from '../../data/articlesData/articlesData.js'; */
import getAllPosts from '@/integrations/wordpress/getAllPosts';



export default async function Articles() {

    const posts = await getAllPosts();
    console.log(posts);

    return (
        <div className={styles.container}>
            {posts?.map((item, index) => {
                return(
                    <ArticlePreview 
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


/* {articlesData.map(item => {
    return (
        <ArticlePreview key={item.id} title={item.title} content={item.content} author={item.author} date={item.date} refference={item.refference} styleProp='articles'/>
    )
})} */