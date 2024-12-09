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
                <h3 className="text-2xl font-bold mb-6">Posts links</h3>
                <Toc headings={headings} />
                <h3 className="text-2xl font-bold mb-6">Latest Posts</h3>
                <div className="space-y-6">


                    <div className="border rounded-lg overflow-hidden">
                        <Image
                            src='/BL-1002/next-react.jpg'
                            alt="Latest post"
                            className="w-full h-48 object-cover"
                            height={500}
                            width={500}
                        />
                        <div className="p-4">
                            <h4 className="font-semibold mb-2">
                                The Importance of Reading
                            </h4>
                            <p className="text-gray-600 text-sm">July 10, 2023  Technology</p>
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <Image
                            src='/BL-1002/next-react.jpg'
                            alt="Latest post"
                            className="w-full h-48 object-cover"
                            height={500}
                            width={500}
                        />
                        <div className="p-4">
                            <h4 className="font-semibold mb-2">
                                Writing in the Digital Age
                            </h4>
                            <p className="text-gray-600 text-sm">July 5, 2023</p>
                            <span className="inline-block px-3 py-1 mt-2 text-sm bg-gray-100 text-gray-700 rounded-full">
                                Technology
                            </span>
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <Image
                            src='/BL-1002/next-react.jpg'
                            alt="Latest post"
                            className="w-full h-48 object-cover"
                            height={500}
                            width={500}
                        />
                        <div className="p-4">
                            <h4 className="font-semibold mb-2">Finding Your Voice</h4>
                            <p className="text-gray-600 text-sm">June 30, 2023</p>
                            <span className="inline-block px-3 py-1 mt-2 text-sm bg-gray-100 text-gray-700 rounded-full">
                                Writing Tips
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSideBar