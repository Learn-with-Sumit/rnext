const BlogPage = ({ params}) => {
    const slug = params?.slug;

    return <h1>Slug: {slug}</h1>
}

export default BlogPage;