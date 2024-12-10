import Image from 'next/image'
import React from 'react'
import { Laptop, Linkedin } from 'lucide-react';


const AboutMePage = () => {
    return (
        <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
            <div className="h-64 w-full justify-center flex">
                <Image
                    src="/about.png"
                    alt='about image'
                    className="h-64"
                    height={500}
                    width={300}
                />
            </div>
            <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
                Hi,{" "}
                <span className="bg-indigo-400 text-white rounded px-1 dark:bg-indigo-500">
                    I’m Tamjid Islam
                </span>{" "}
                . Pleased to meet you!
            </h2>
            <p className="text-gray-600 mt-4 dark:text-indigo-200">
                I’m a passionate self-taught developer and freelancer. I specialize in creating innovative web technologies and products, with a strong interest in freelancing projects that challenge my skills.
            </p>
            <p className="text-gray-600 mt-4 dark:text-indigo-200">
                Beyond web development, I’m fascinated by Deep Learning and Natural Language Processing and enjoy exploring how these fields can drive the future of technology. Let’s connect and create something extraordinary together!
            </p>

            <div className="text-center pt-8">
                <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-indigo-600">
                    <Laptop />
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://tizdev.netlify.app/"
                    >
                        See My Works
                    </a>
                </button>

                <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-indigo-600">
                    <Linkedin />
                    <a
                        className="linkedin-follow-button"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/tamzid-islam/"
                    >
                        Follow Me
                    </a>
                </button>
            </div>
        </div>
    )
}

export default AboutMePage