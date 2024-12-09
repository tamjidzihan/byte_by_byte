import { getAllBlogPosts } from "@/lib/Data";
import FeaturedPost from "./components/FeaturedBlog";
import BlogCard from "./components/BlogCard";
import Header from "./components/Header";


export default function Home() {
  const allBlogs = getAllBlogPosts();
  return (
    <>
      <Header />
      <FeaturedPost />
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {allBlogs &&
              allBlogs.map(
                (blog) =>
                  blog.data.isPublished && (
                    <BlogCard
                      key={blog.data.Id}
                      data={blog.data}
                      content={blog.content}
                      readTime={blog.readTime.text}
                    />
                  )
              )}
          </div>
        </div>
      </section>

    </>
  );
}

