import FeaturedPost from "./components/FeaturedBlog";
import Header from "./components/Header";
import { getAllBlogPosts } from "../lib/Data";
import { getLatestFeaturedBlog } from "../lib/GetLatestFeaturedBlog";
import BlogList from "./components/BlogList";

export default function Home() {
  const allBlogs = getAllBlogPosts();
  const latestFeatured = getLatestFeaturedBlog(allBlogs);
  return (
    <>
      <Header />
      {latestFeatured && (
        <FeaturedPost
          key={latestFeatured.data.Id}
          data={latestFeatured.data}
          readTime={latestFeatured.readTime.text}
        />
      )}
      <section className="py-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 dark:text-white">
            Recent Articles
          </h2>
          <BlogList
            allBlogs={allBlogs}
            initialCount={6}
            incrementCount={3}
          />
        </div>
      </section>
    </>
  );
}

