import fetchAPI from './callout.js';

import allPostsQuery from '@/integrations/wordpress/graph-ql-queries/all-posts';


const getAllPosts = async (first = 1000) => {
    const response = await fetchAPI(allPostsQuery, { first });
    const posts = response?.posts?.nodes;

    console.log('posts:', posts)

    return posts;
};

export default getAllPosts;