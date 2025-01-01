/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, Bookmark } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { getFormatDate } from '../../lib/GetFormatDate'
import Link from 'next/link'

const ArticlesCard = ({ data, readTime }: any) => {
    const formattedDate = getFormatDate(data.createdAt)
    return (
        <article className=" cursor-pointer mb-8 border dark:border-gray-900 bg-gray-50 dark:bg-gray-950  hover:dark:border-gray-400 hover:border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                <Image
                    className="w-full h-48 object-cover hover:scale-105 duration-300"
                    src={data.HeaderImage}
                    width={500}
                    height={500}
                    alt={`Header image for ${data.title}`}
                />
            </Link>
            <div className='m-5'>
                <span className=" mr-4 dark:text-white text-gray-900">Topics: </span>
                <span className="inline-block mr-3 py-1 px-2 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-blue-500  text-sm font-medium tracking-wides cursor-pointer">
                    {data.Topic}
                </span>

            </div>
            <div className='flex' >
                <div className="flex items-center ml-4">
                    <Image
                        src={data.AuthorImage}
                        alt="Author"
                        className="w-12 h-12 rounded-full mr-4"
                        height={500}
                        width={500}
                    />
                    <div className=' flex-col mt-2'>
                        <p className="text-sm  font-medium dark:text-white text-gray-800">
                            {data.Author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 ">
                            {formattedDate} • {readTime}
                        </p>
                    </div>
                </div>
                <button className="ml-auto mr-5 mt-3">
                    <Bookmark className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
            </div>
            <div className="p-6">
                <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                    <h2 className="mt-2 text-xl font-semibold dark:text-white hover:text-blue-800 dark:hover:text-blue-300">
                        {data.Title}
                    </h2>
                </Link>
                <p className="mt-3 text-gray-600 dark:text-gray-300 ">
                    {data.Abstract}..
                </p>
                <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ">
                    Read more <ArrowRight className="ml-2" size={16} />
                </Link>
            </div>
        </article>
    )
}

export default ArticlesCard