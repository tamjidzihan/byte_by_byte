import { ShieldQuestion } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
    return (
        <section className="dark:bg-gray-800  bg-white min-h-svh ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center relative">
                    <ShieldQuestion className=' inline h-32 w-32 dark:text-primary-500 text-gray-600 dark:text-gray-300' />
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 text-gray-600 dark:text-gray-300">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl  dark:text-white hover:text-blue-800 dark:hover:text-blue-300">Blog Not Found</p>
                    <p className="mb-10 text-lg font-light text-gray-700 dark:text-gray-400">Sorry, we can&apos;t find that blog. You&apos;ll find lots to explore on the home page. </p>
                    <Link href={'/'} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Back to Homepage</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage