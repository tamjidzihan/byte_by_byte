/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import BlogCard from './BlogCard';

interface BlogListProps {
    allBlogs: any[]
    initialCount: number;
    incrementCount: number;
}

const BlogList: React.FC<BlogListProps> = ({ allBlogs, initialCount, incrementCount }) => {
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + incrementCount, allBlogs.length));
    };
    const visibleBlogs = allBlogs.slice(0, visibleCount);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleBlogs.map(
                    (blog) =>
                        blog.data.isPublished && (
                            <BlogCard
                                key={blog.data.Id}
                                data={blog.data}
                                readTime={blog.readTime.text}
                            />
                        )
                )}
            </div>
            {visibleCount < allBlogs.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Load More...
                    </button>
                </div>
            )}
        </div>
    );
};


export default BlogList