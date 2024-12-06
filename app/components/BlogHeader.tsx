
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlogHeader({ data, readTime }: any) {
    return (
        <>
            <Link href={'/'}>
                <article
                    className="h-full max-h-[30rem] bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-lg transition-shadow max-md:"
                >
                    <Image
                        className="w-full h-48 object-cover"
                        src={data.HeaderImage}
                        width={500}
                        height={500}
                        alt={`Header image for ${data.title}`}
                    />
                    <div className="p-6">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {readTime}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold dark:text-white hover:text-blue-800 dark:hover:text-blue-300">
                            {data.Title}
                        </h3>
                        <p className="mt-3 text-gray-600 dark:text-gray-300 ">
                            {data.Abstract}..
                        </p>
                        <div className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ">
                            Read more <ArrowRight className="ml-2" size={16} />
                        </div>
                    </div>
                </article>
            </Link>
        </>


    );
}

export default BlogHeader;



