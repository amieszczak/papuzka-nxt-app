const allPosts = `
query NewQuery {
  posts {
    edges {
      node {
        content
        date
        excerpt
        title
        slug
      }
    }
  }
}
`;

export default allPosts;