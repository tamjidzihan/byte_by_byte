'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar1, Filter, House, Search, Tag } from 'lucide-react'
import React from 'react'
import { useArticlesStore } from '../../store/ArticlesStore'
import Link from 'next/link'

interface ArticlesSideBarProps {
    allTopics: any[]
}


const ArticlesSideBar = ({ allTopics }: ArticlesSideBarProps) => {
    const {
        selectedTopics,
        setSelectedTopics,
        dateRange,
        setDateRange,
        searchQuery,
        setSearchQuery } =
        useArticlesStore();

    const handleCheckboxChange = (topic: string) => {
        const updatedTopics = selectedTopics.includes(topic)
            ? selectedTopics.filter((t) => t !== topic)
            : [...selectedTopics, topic];
        setSelectedTopics(updatedTopics);
    };

    const handleDateRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDateRange(e.target.value);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <aside className=" w-64 border-r bg-gray-50 dark:bg-gray-800 dark:border-gray-700 p-6 hidden md:block">
            <div className="sticky top-8">
                <div className="mb-8">
                    <Link href={'/articles'}>
                        <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
                            <House className="h-5 w-5 mr-2 text-blue-500" />
                            All Blogs
                        </h3>
                    </Link>
                </div>
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
                        <Filter className="h-5 w-5 mr-2 text-blue-500" />
                        Topics
                    </h3>
                    <div className="space-y-2">
                        {allTopics.map((topic, index) => (
                            <label key={index} className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedTopics.includes(topic)}
                                    onChange={() => handleCheckboxChange(topic)}
                                    className="form-checkbox h-4 w-4 text-blue-600 dark:bg-gray-800 dark:border-gray-700"
                                />
                                <span className="ml-2 text-gray-700 dark:text-gray-300">{topic}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
                        <Calendar1 className="h-5 w-5 mr-2 text-blue-500" />
                        Date Range
                    </h3>
                    <select
                        value={dateRange}
                        onChange={handleDateRangeChange}
                        className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All Time</option>
                        <option value="7">Last 7 days</option>
                        <option value="30">Last 30 days</option>
                        <option value="90">Last 3 months</option>
                        <option value="365">Last year</option>
                    </select>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-200">
                        <Tag className="h-5 w-5 mr-2 text-blue-500" />
                        Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['#webdev', '#ui', '#startup', '#tech'].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-200 dark:bg-indigo-900 text-gray-800 dark:text-gray-200 rounded-full text-sm hover:bg-gray-300 hover:dark:bg-indigo-800 cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default ArticlesSideBar
