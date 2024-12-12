export function getLatestFeaturedBlog(blogs) {
    if (!blogs || blogs.length === 0) return null;

    return blogs
        .filter((blog) => blog.data.isFeatured)
        .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())[0];
}
