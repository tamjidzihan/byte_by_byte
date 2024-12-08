/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";

interface Props {
    headings: any[];
}


function Toc({ headings }: Props) {
    const [active, setActive] = useState("");

    return (
        <nav className="sticky top-32 overflow-auto toc-inner">
            <ul>
                {headings.map((heading) => (
                    <li
                        key={heading.uid}
                        className="mt-4 text-lg text-gray-700 dark:text-gray-400"
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