"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { PageLayout } from "@/util/PageLayout";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredBlogs.map((blog) => (
                    <Link href={`/blog/${blog?.slug}`} key={blog?.slug}>
                        <Card key={blog.slug} className="overflow-hidden pt-0 border cursor-pointer hover:shadow-lg transition-shadow duration-300 max-w-md h-80">
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
        <div className={`w-full border-b ${PageLayout} `}>
            {/* Debug info - remove in production */}
            <div className="text-xs text-red-500 p-2 md:hidden">
                {/* Mobile view - Tabs should scroll horizontally */}
            </div>
            
            <Tabs defaultValue="all" className="w-full">
                {/* Mobile-optimized tab headers */}
                <div className="w-full bg-red-50 md:bg-transparent"> {/* Remove bg color in production */}
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 md:overflow-visible">
                        <TabsList className="inline-flex w-auto min-w-full md:flex md:w-full md:justify-stretch h-12 md:h-auto p-0 bg-[#DDE1E6] rounded-none space-x-0">
                            {tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.value}
                                    value={tab.value}
                                    className="flex-shrink-0 px-6 py-3 text-sm border-0 rounded-none font-medium text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm whitespace-nowrap first:border-l-0 border-l border-gray-300"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </div>

                {/* Tab Contents */}
                <div className={`w-full `}>
                    <TabsContent value="all" className="mt-6">
                        {renderBlogCards(getFilteredBlogs("all"))}
                    </TabsContent>

                    <TabsContent value="payroll-software" className="mt-6">
                        {renderBlogCards(getFilteredBlogs("payroll-software"))}
                    </TabsContent>

                    <TabsContent value="payroll-solutions" className="mt-6">
                        {renderBlogCards(getFilteredBlogs("payroll-solutions"))}
                    </TabsContent>

                    <TabsContent value="umbrella-service" className="mt-6">
                        {renderBlogCards(getFilteredBlogs("umbrella-service"))}
                    </TabsContent>

                    <TabsContent value="accountancy-services" className="mt-6">
                        {renderBlogCards(getFilteredBlogs("accountancy-services"))}
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}