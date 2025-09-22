import React from 'react'
import { BlogBreadCrumb } from '../components/BlogBreadCrumb'
import { Title } from '@/app/about/components/Utils.about'
import { blogSections } from '../data'
import Image from 'next/image'

// interface Props {
//     section: string;
//     link: string;
// }

// interface SectionPsps {
//     sections: Props[]
// }

export default function BlogPostPage() {
    return (
        <div className={`px-4 md:px-8 xl:px-14 2xl:px-20 my-4 md:my-20 py-4 grid gap-4 lg:gap-6 `}>
            <BlogBreadCrumb service="Umbrella Services" postTitle="2025 IR35 Changes: What Contractors Must Know" />
            <Title title="2025 IR35 Changes: What Contractors Must Know" className="text-start" />
            <p>
                <span className="font-bold">Written by:</span> John Doe | <span className="font-bold">Date:</span> October 15, 2024 </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-1 rounded-lg p-2">
                    <h3 className="uppercase text-primary font-bold mb-4"> Jump to section</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                        {blogSections.map((section, index) => (
                            <li key={index}>
                                <a href={section.link} className="text-blue-600 hover:underline">
                                    {section.section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="col-span-1 md:col-span-2 lg:col-span-3 grid gap-4 lg:gap-6">
                    <div className="w-full">

                        <Image src={"/plog-post.png"} alt={"Blog Post"} width={400} height={100} className='rounded-lg w-full' />
                        <p >
                            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
                        </p>
                    </div>
                    {
                        blogSections.map((section, index) => (
                            <div key={index} id={section.link.substring(1)} className="w-full">
                                <h3 className="text-2xl font-bold mb-2">{section.section}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
