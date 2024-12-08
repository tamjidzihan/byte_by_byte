
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BlogCard({ data, readTime }: any) {
    return (
        <>
            <article
                className="h-full max-h-[30rem] bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-shadow max-md:"
            >
                <Image
                    className="w-full h-48 object-cover"
                    src={data.HeaderImage}
                    width={500}
                    height={500}
                    alt={`Header image for ${data.title}`}
                />
                <div className="p-6">
                    <div className=" flex justify-between">
                        <Link href={'/'} >
                            <span className="inline-block py-1 px-2 rounded bg-gray-200 dark:bg-indigo-900 hover:text-blue-500 text-indigo-700 dark:text-gray-200 hover:dark:text-gray-300  text-sm font-medium tracking-widest">
                                {data.Tags.split(" ")[0]}
                            </span>
                        </Link >
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {readTime}  • June 1, 2023
                        </span>
                    </div>
                    <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} >
                        <h3 className="mt-2 text-xl font-semibold dark:text-white hover:text-blue-800 dark:hover:text-blue-300">
                            {data.Title}
                        </h3>
                    </Link>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 ">
                        {data.Abstract}..
                    </p>
                    <Link href={`/blogs/${String(data.Title.split(" ").join("-").toLowerCase())}`} className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors ">
                        Read more <ArrowRight className="ml-2" size={16} />
                    </Link>
                </div>
            </article>
        </>
    );
}

export default BlogCard;



