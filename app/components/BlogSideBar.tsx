'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import Toc from './Toc'

interface BlogSideBarProps {
    headings: any;
}

const BlogSideBar = ({ headings }: BlogSideBarProps) => {
    return (
        <div className="lg:col-span-1 ">
            <div className="sticky top-8">
                <h3 className="text-2xl font-bold mb-6 dark:prose-dark">Posts links</h3>
                <div className='dark:prose-dark'>
                    <Toc headings={headings} />
                </div>
                <h3 className="text-2xl font-bold mb-6 dark:prose-dark">Latest Posts</h3>
                <div className="space-y-6">


                    <div className="border rounded-lg overflow-hidden dark:prose-dark">
                        <Image
                            src='/BL-1002/next-react.jpg'
                            alt="Latest post"
                            className="w-full h-48 object-cover"
                            height={500}
                            width={500}
                        />
                        <div className="p-4">
                            <h4 className="font-semibold mb-2 dark:prose-dark">
                                The Importance of Reading
                            </h4>
                            <p className="text-gray-600 text-sm dark:prose-dark">July 10, 2023  Technology</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogSideBar