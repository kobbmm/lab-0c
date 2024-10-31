import newsdb from "./[slug]/db"
import Link from "next/link"
import React from 'react';

// เปลี่ยน slug ลบ "-"ออก
const convertSlugToText = (slug: string): string => {
    const words = slug.split('-');
    return words.join(' ').replace(/\b\w/g, char => char.toUpperCase());
};


const BlogPosts: React.FC = () => {
    return (
        <div>
            <h2>Blog Titles</h2>
            <ul>
                {newsdb.map((post, index) => (
                    <li key={index}>{convertSlugToText(post.slug)}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;
