import React from 'react'
import ArticlesSideBar from '../components/ArticlesSideBar'
import ArticlesList from '../components/ArticlesList'
import { getAllBlogPosts, getAllTopics } from '../../lib/Data';

const ArticlesPage = () => {
    const allBlogs = getAllBlogPosts();
    const allTopics = getAllTopics()

    return (
        <div className="flex w-full min-h-screen  bg-gray-50 dark:bg-gray-800  ">
            <ArticlesSideBar
                allTopics={allTopics}
            />
            <main className="flex-1 p-6">
                <div className="max-w-4xl mx-auto">

                    <ArticlesList
                        allBlogs={allBlogs}
                        initialCount={4}
                        incrementCount={3}
                    />
                </div >
            </main >
        </div >
    )
}

export default ArticlesPage