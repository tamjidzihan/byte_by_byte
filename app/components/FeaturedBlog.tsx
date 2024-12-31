/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { getFormatDate } from '../../lib/GetFormatDate';

interface FeaturedPostProps {
    data: any
    readTime: any
}

const FeaturedPost = ({ data, readTime }: FeaturedPostProps) => {
    const formattedDate = getFormatDate(data.createdAt)

    return (
        <section className="relative py-10">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white dark:bg-gray-950  hover:bg-gray-100 hover:dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl max-md:hover:shadow-xl transition-shadow max-md: cursor-pointer">
                    <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                        <Image
                            src={data.HeaderImage}
                            alt={`Header image for ${data.title}`}
                            className="w-full h-96 object-cover"
                            width={500}
                            height={500}
                        />
                    </Link>
                    <div className="p-8">
                        <span className="text-sm flex justify-between">
                            <Link href={'/'} >
                                <span className="inline-block py-1 px-2 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-gray-300  text-sm font-medium tracking-widest">
                                    {data.Topic}
                                </span>
                            </Link >
                            <span className="text-gray-500 dark:text-gray-400">
                                {" "}
                                <span className=' hover:text-blue-800 dark:hover:text-blue-300 '>Featured </span>• {formattedDate} •  {readTime}
                            </span>
                        </span>
                        <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                            <h2 className="mt-2 text-3xl font-bold dark:text-white hover:text-blue-800 dark:hover:text-blue-300">
                                {data.Title}
                            </h2>
                        </Link>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {data.Abstract}..
                        </p>
                        <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            Read more <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedPost