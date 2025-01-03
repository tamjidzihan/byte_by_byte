/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import { Menu, X, ChevronDown, Logs } from "lucide-react";
import ToggleColorMode from './ToggleColorMode';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

interface NavbarProps {
    allTopics: any[]
}

const Navbar = ({ allTopics }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()

    return (
        <header className="sticky top-0 z-50 bg-opacity-90 dark:bg-opacity-90 bg-white dark:bg-gray-950 dark:text-white border-t-4 border-indigo-600 dark:border-indigo-900 shadow transition-colors">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-28">
                <div className="flex justify-between items-center h-16 ">
                    <div className="flex items-center space-x-4">
                        <div className="relative group hidden md:block">
                            <button className="flex items-center space-x-1 px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                <span> <Logs className='inline-block' size={20} /> Topics</span>
                                <ChevronDown size={16} />
                            </button>

                            <div className="absolute hidden group-hover:block w-48 rounded-md shadow-lg py-1 mt-1 bg-white dark:bg-gray-950">
                                {allTopics.map((topic, index) =>
                                    <div
                                        key={index}
                                        onClick={() => router.push('/articles')}
                                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer                              ">
                                        {topic}
                                    </div>
                                )}
                            </div>
                        </div>
                        <ToggleColorMode />
                    </div>
                    <Link href={'/'} className="text-2xl font-bold">
                        Byte
                        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block text-transparent bg-clip-text'>-by-</span>
                        Byte
                    </Link>
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav
                        className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 right-0 md:block md:static md:border-0 `}
                    >
                        <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-white dark:bg-gray-950">
                            <li>
                                <Link href={'/'} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/articles'} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Navbar