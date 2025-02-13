const singlePost = `
query SinglePost($id: ID!){
    post(id: $id, idType: SLUG) {
     id
    title
    databaseId
    content
    date
    modified
    excerpt
    slug
    categories {
      nodes {
        name
        slug
        databaseId
      }
    }
    author {
      node {
        name
        slug
        description
      }
    }
    }
  }
`;

export default singlePost;