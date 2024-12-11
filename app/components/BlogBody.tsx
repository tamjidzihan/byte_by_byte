'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import React from 'react'
import { getFormatDate } from "../../lib/GetFormatDate";

interface BlogBodyProps {
    data: any;
    content: any;
}

const BlogBody = ({ data, content }: BlogBodyProps) => {
    const formattedDate = getFormatDate(data.createdAt)
    console.log(data.tags)
    return (
        <>
            <div className="lg:col-span-2">
                <article className="prose max-w-none lg:px-6">
                    <Image
                        src={data.HeaderImage}
                        alt={data.Title}
                        className="w-full h-[400px] object-cover rounded-lg mb-8"
                        height={500}
                        width={500}
                    />
                    <h1 className="text-4xl font-bold mb-3 dark:prose-dark">
                        {data.Title}
                    </h1>
                    <div>
                        <span className=" mr-4 dark:text-white text-gray-900">Tags: </span>
                        {data.tags.map((tag, index) =>
                            <span key={index} className="inline-block mr-3 py-1 px-2 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-blue-500  text-sm font-medium tracking-wides cursor-pointer">
                                {tag}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <Image
                            src={data.AuthorImage}
                            alt="Author"
                            className="w-12 h-12 rounded-full mr-4"
                            height={500}
                            width={500}
                        />
                        <div >
                            <p className="font-semibold dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-300 mb-0">{data.Author}</p>
                            <p className="dark:prose-dark dark:text-gray-400 mt-0">Posted on {formattedDate} • {data.Topic}</p>
                        </div>
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="prose max-w-xs sm:max-w-sm md:max-w-prose lg:prose-xl  dark:prose-dark">
                        <MDXRemote {...content} />
                    </div>
                </article>
            </div>
        </>
    )
}

export default BlogBody

