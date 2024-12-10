/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import { getFormatDate } from '@/lib/GetFormatDate'
import Link from 'next/link'

interface FeaturedBlogCardProps {
    data: any
    readTime: any
}

const FeaturedBlogCard = ({ data, readTime }: FeaturedBlogCardProps) => {
    const formattedDate = getFormatDate(data.createdAt)
    return (
        <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden dark:prose-dark  bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 hover:dark:bg-gray-800  shadow-sm  hover:shadow-xl transition-shadow max-md: cursor-pointer">
                <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                    <Image
                        src={data.HeaderImage}
                        alt={`Header image for ${data.title}`}
                        className="w-full h-48 object-cover"
                        height={500}
                        width={500}
                    />
                </Link >
                <div className="p-4">
                    <Link href={'/'} >
                        <span className="inline-block py-1 px-2 my-4 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-gray-300  text-sm font-medium tracking-widest">
                            {data.tags[0]}
                        </span>
                    </Link >
                    <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                        <h4 className="font-semibold mb-2 dark:prose-dark  dark:text-white hover:text-blue-800 dark:hover:text-blue-300">
                            {data.Title}
                        </h4>
                    </Link >
                    <p className="text-gray-600 text-sm dark:prose-dark"> {readTime}  •   {formattedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlogCard