import BlogBody from '@/app/components/BlogBody'
import BlogSideBar from '@/app/components/BlogSideBar'
import { getAllBlogPosts } from '@/lib/Data'
import { getHeadings } from '@/lib/GetHeadings'
// import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import remarkHeadingId from 'remark-custom-heading-id'

interface Props {
    params: Promise<{ slug: string }>
}

const BlogsPage = async ({ params }: Props) => {
    const slug = await (await params).slug[0]
    const allBlogs = getAllBlogPosts()
    const page = allBlogs.find((blog) =>
        String(blog.data.Title.split(" ").join("-").toLowerCase()) === slug
    )
    if (!page) {
        return (
            <div className="max-w-[1440px] mx-auto px-4 py-8">
                <p>Blog post not found.</p>
            </div>
        );
    }
    const { data, content } = page
    const mdxSource = await serialize(content, {
        scope: data,
        mdxOptions: { remarkPlugins: [remarkHeadingId] },
    });
    const headings = await getHeadings(content);


    return (
        <div className="max-w-[1440px] mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-40">
                <BlogBody data={data} content={mdxSource} />
                <BlogSideBar headings={headings} />

            </div>
        </div>
    )
}

export default BlogsPage