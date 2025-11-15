"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

const tabs = [
    { label: "All", value: "all" },
    { label: "Payroll Software", value: "payroll-software" },
    { label: "Payroll Solutions", value: "payroll-solutions" },
    { label: "Umbrella Services", value: "umbrella-service" },
    { label: "Accountancy Services", value: "accountancy-services" },
];

interface BlogTabProps {
    title: string;
    excerpt: string[]; // Rich text array
    coverImage: {
        url: string;
    };
    altText: string;
    content: string;
    publishedDate: string;
    slug: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
}

interface TabsProps {
    blogs: BlogTabProps[];
}

export default function BlogTabs({ blogs }: TabsProps) {
    // Filter blogs based on selected category
    const getFilteredBlogs = (categoryValue: string) => {
        if (categoryValue === "all") {
            return blogs;
        }
        return blogs.filter(blog => blog.category === categoryValue);
    };

    // Extract text from rich text excerpt
    const extractTextFromExcerpt = (excerpt: any[]): string => {
        if (!excerpt || !Array.isArray(excerpt)) return "";
        
        const extractTextFromNode = (node: { text: string; children: any[]; }): string => {
            if (node.text) return node.text;
            if (node.children && Array.isArray(node.children)) {
                return node.children.map(extractTextFromNode).join('');
            }
            return '';
        };

        const text = excerpt.map(extractTextFromNode).join(' ').trim();
        return text.slice(0, 150) + (text.length > 150 ? '...' : '');
    };

    // Render blog cards
    const renderBlogCards = (filteredBlogs: BlogTabProps[]) => {
        if (!filteredBlogs || filteredBlogs.length === 0) {
            return (
                <div className="text-center py-8">
                    <p className="text-gray-600">No articles found in this category.</p>
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 2lg:grid-cols-3 gap-6 mb-8">
                {filteredBlogs.map((blog) => (
                    <Link href={`/blog/${blog?.slug}`} key={blog?.slug}>
                      <Card key={blog.slug} className="overflow-hidden pt-0 border cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 w-full">
                            <Image
                                src={blog.coverImage?.url || "/default-image.jpg"}
                                alt={blog.altText || blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-semibold text-sm leading-tight mb-2 text-foreground">
                                {blog.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                {extractTextFromExcerpt(blog.excerpt)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                <span className="font-bold">Published:</span>{" "}
                                {moment(blog.publishedDate).format("Do MMM, YY")}
                            </p>
                        </CardContent>
                    </Card>
                    </Link>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full border-b">
            <Tabs defaultValue="all" className="max-w-3xl mx-auto flex">
                {/* Tab Headers */}
                <TabsList className="w-full justify-start h-auto p-0 bg-[#DDE1E6] rounded-none">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="relative border-r-2 px-3 py-2 text-sm border-0 rounded-none font-medium text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
                        >
                            {tab.label}
                            <span className="absolute left-0 right-0 -bottom-px h-[2px] data-[state=active]:bg-primary data-[state=inactive]:bg-transparent"></span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Tab Contents - Each tab shows filtered blogs */}
                <TabsContent value="all" className="p-4">
                    {renderBlogCards(getFilteredBlogs("all"))}
                </TabsContent>
                
                <TabsContent value="payroll-software" className="p-4">
                    {renderBlogCards(getFilteredBlogs("payroll-software"))}
                </TabsContent>
                
                <TabsContent value="payroll-solutions" className="p-4">
                    {renderBlogCards(getFilteredBlogs("payroll-solutions"))}
                </TabsContent>
                
                <TabsContent value="umbrella-service" className="p-4">
                    {renderBlogCards(getFilteredBlogs("umbrella-service"))}
                </TabsContent>
                
                <TabsContent value="accountancy-services" className="p-4">
                    {renderBlogCards(getFilteredBlogs("accountancy-services"))}
                </TabsContent>
            </Tabs>
        </div>
    );
}