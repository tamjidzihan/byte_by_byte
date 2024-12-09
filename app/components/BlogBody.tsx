'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import React from 'react'

interface BlogBodyProps {
    data: any;
    content: any;
}

const BlogBody = ({ data, content }: BlogBodyProps) => {
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
                    <h1 className="text-5xl font-bold mb-4 dark:prose-dark">
                        {data.Title}
                    </h1>
                    <div className="flex items-center mb-6">
                        <Image
                            src='/BL-1002/next-react.jpg'
                            alt="Author"
                            className="w-12 h-12 rounded-full mr-4"
                            height={500}
                            width={500}
                        />
                        <div>
                            <p className="font-semibold dark:prose-dark">John Doe</p>
                            <p className="dark:prose-dark">Posted on July 15, 2023</p>
                        </div>
                    </div>
                    <div className="prose max-w-xs sm:max-w-sm md:max-w-prose lg:prose-xl  dark:prose-dark">
                        <MDXRemote {...content} />
                    </div>
                </article>
            </div>
        </>
    )
}

export default BlogBody

