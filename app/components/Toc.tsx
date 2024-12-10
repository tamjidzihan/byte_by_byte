'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";

interface Props {
    headings: string[] | null;
}

function Toc({ headings }: Props) {
    const [active, setActive] = useState("");

    return (
        <nav className=" top-32 overflow-auto toc-inner mb-20">
            <ul>
                {headings?.map((heading: any) => (
                    <li
                        key={heading.uid}
                        className="mt-4 text-lg text-gray-700"
                        style={{
                            paddingLeft: heading.level === 3 ? "1rem" : "",
                            color: heading.id === active ? "#6366f1" : "",
                        }}
                        onClick={() => {
                            setActive(heading.id);
                        }}
                    >
                        <Link href={`#${heading.id}`}>{heading.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Toc;