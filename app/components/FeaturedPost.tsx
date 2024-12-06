import Image from 'next/image'
import React from 'react'
import { ArrowRight } from "lucide-react";
import featureImage from '../../public/photo-f.jpg'

const FeaturedPost = () => {
    return (
        <section className="relative py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <Image
                        src={featureImage}
                        alt="Featured post header image showing a laptop and coffee"
                        className="w-full h-72 object-cover"
                        width={500}
                        height={500}
                    />
                    <div className="p-8">
                        <span className="text-sm">
                            <span className="text-blue-600 dark:text-blue-400">
                                Technology
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                                {" "}
                                • Featured • June 1, 2023
                            </span>
                        </span>
                        <h2 className="mt-2 text-3xl font-bold dark:text-white">
                            The Future of Web Development: What&apos;s Next?
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Explore the latest trends and technologies shaping the future
                            of web development. From WebAssembly to Edge Computing,
                            discover what&apos;s driving innovation in our industry.
                        </p>
                        <a className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                            Read more <ArrowRight className="ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedPost