'use client'
import { MDXRemote } from "next-mdx-remote";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
                <article className="prose max-w-none">
                    <Image
                        src={data.HeaderImage}
                        alt={data.Title}
                        className="w-full h-[400px] object-cover rounded-lg mb-8"
                        height={500}
                        width={500}
                    />
                    <h1 className="text-4xl font-bold mb-4">
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
                            <p className="font-semibold">John Doe</p>
                            <p className="text-gray-600">Posted on July 15, 2023</p>
                        </div>
                    </div>
                    <div>

                        <MDXRemote {...content} />
                    </div>
                </article>
            </div>
        </>
    )
}

export default BlogBody

