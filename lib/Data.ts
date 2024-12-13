import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const dir = path.join(process.cwd(), "_content");

export const getAllBlogPosts = () => {
    try {
        const allFiles = fs.readdirSync(dir);
        const allBlogs = allFiles.map((file) => {
            const filePath = path.join(dir, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            const readTime = readingTime(content);
            return { data, content, readTime };
        });
        return allBlogs;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
};

export const getAllTopics = () => {
    try {
        const allFiles = fs.readdirSync(dir);
        const allTopics = allFiles.map((file) => {
            const filePath = path.join(dir, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data } = matter(fileContent);
            return data.Topic;
        });

        return [...new Set(allTopics)];
    } catch (error) {
        console.error("Error fetching topics:", error);
        return [];
    }
};
