import fetchAPI from './callout.js';
import singlePost from './graph-ql-queries/single-post.js';


const getSinglePost = async (id) => {
    const response = await fetchAPI(singlePost, { id });
    const posts = response?.post;

    return posts;
};

export default getSinglePost;