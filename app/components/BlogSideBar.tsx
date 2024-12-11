
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Toc from './Toc'
import FeaturedBlogCard from './FeaturedBlogCard';
import { getAllBlogPosts } from '../../lib/Data';

interface BlogSideBarProps {
    headings: any;
}

const BlogSideBar = ({ headings }: BlogSideBarProps) => {
    const allBlogs = getAllBlogPosts();
    return (
        <div className="lg:col-span-1 ">
            <div className="sticky top-8">
                <h3 className="text-2xl font-bold mb-6 dark:prose-dark">Posts links</h3>
                <div className='dark:prose-dark'>
                    <Toc headings={headings} />
                </div>
                <h3 className="text-2xl font-bold mb-6 dark:prose-dark">Latest Posts</h3>
                {allBlogs &&
                    allBlogs.map(
                        (blog) =>
                            blog.data.isFeatured && (
                                <FeaturedBlogCard
                                    key={blog.data.Id}
                                    data={blog.data}
                                    readTime={blog.readTime.text}
                                />
                            )
                    )}
            </div>
        </div>
    )
}

export default BlogSideBar