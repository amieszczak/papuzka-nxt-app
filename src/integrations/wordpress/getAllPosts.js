import fetchAPI from './callout.js';
import allPosts from './graph-ql-queries/all-posts.js';


const getAllPosts = async (first = 1000) => {
    const response = await fetchAPI(allPosts, { first });
    const posts = response?.posts?.edges;

    return posts;
};

export default getAllPosts;