import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t-2 border-indigo-600 dark:border-indigo-900 shadow transition-colors">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>

                        <Link href={'/'} className="text-2xl block font-bold dark:text-white text-gray-900  mb-4">
                            Byte
                            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block text-transparent bg-clip-text'>-by-</span>
                            Byte
                        </Link>

                        <p className="text-gray-600 dark:text-gray-300">
                            Exploring the latest in web development, design, and technology.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={'/'} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 dark:text-white">
                            Newsletter
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className=" flex-wrap">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-2 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
                    <p>&copy; 2024  <Link href={'/'} className="font-bold mb-4 inline-block hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text">
                        Byte
                        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>-by-</span>
                        Byte
                    </Link>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer