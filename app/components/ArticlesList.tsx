/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import ArticlesCard from './ArticlesCard'
import { useArticlesStore } from '../../store/ArticlesStore';

interface ArticlesListProps {
    allBlogs: any[]
    initialCount: number;
    incrementCount: number;
}

const ArticlesList = ({ allBlogs, initialCount, incrementCount }: ArticlesListProps) => {
    const { selectedTopics, dateRange, searchQuery } = useArticlesStore();
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + incrementCount, allBlogs.length));
    };

    const isDateInRange = (date: string) => {
        const blogDate = new Date(date);
        const now = new Date();

        switch (dateRange) {
            case '7':
                return now.getTime() - blogDate.getTime() <= 7 * 24 * 60 * 60 * 1000;
            case '30':
                return now.getTime() - blogDate.getTime() <= 30 * 24 * 60 * 60 * 1000;
            case '90':
                return now.getTime() - blogDate.getTime() <= 90 * 24 * 60 * 60 * 1000;
            case '365':
                return now.getTime() - blogDate.getTime() <= 365 * 24 * 60 * 60 * 1000;
            default:
                return true; // 'all' shows all blogs
        }
    };

    const filteredBlogs = allBlogs.filter((blog) => {
        const matchesSearch =
            searchQuery === '' ||
            blog.data.Title.toLowerCase().includes(searchQuery.toLowerCase())
        // searchQuery === '' ||
        // blog.data.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // blog.data.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTopics =
            selectedTopics.length === 0 || selectedTopics.includes(blog.data.Topic);
        return blog.data.isPublished && matchesSearch && matchesTopics && isDateInRange(blog.data.createdAt);
    });
    const sortedBlog = filteredBlogs.sort((a, b) => new Date(b.data.createdAt).getTime() - new Date(a.data.createdAt).getTime()) // Sort by createdAt in descending order
    const visibleBlogs = sortedBlog.slice(0, visibleCount);

    const heading = `${selectedTopics || ''}  Blog Posts`
    return (
        <div>
            <h1 className="text-3xl dark:text-white text-gray-700 font-bold mb-8"> {heading}</h1>
            <div className="grid gap-8 mb-10">
                {visibleBlogs
                    .filter(blog => blog.data.isPublished) // Filter only published blogs
                    .map(blog => (
                        <ArticlesCard
                            key={blog.data.Id}
                            data={blog.data}
                            readTime={blog.readTime.text}
                        />
                    ))}

            </div>


            {visibleCount < allBlogs.length && (
                <div className="text-center">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-gray-300  text-md font-medium "
                    >
                        Load More...
                    </button>
                </div>
            )}
        </div>
    )
}

export default ArticlesList