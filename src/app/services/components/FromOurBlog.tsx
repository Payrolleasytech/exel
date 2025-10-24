import { ButtonExel } from "@/components/ButtonExel";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

interface ResourceCard {
    id: number;
    title: string;
    description: string;
    image: string;
    publishedDate: string;
}

export const resources: ResourceCard[] = [
    {
        id: 1,
        title: "IR35 Changes 2025: What Every Business Needs to Know",
        description: "Complete guide to the latest off-payroll working regulations and how to ensure compliance",
        image: "/faq.svg",
        publishedDate: "July 2025",
    },
    {
        id: 2,
        title: "Payroll Software vs Outsourcing: Total Cost Comparison",
        description: "Detailed analysis of costs, benefits and considerations for each approach with real UK business examples",
        image: "/faq.svg",
        publishedDate: "June 2025",
    },
    {
        id: 3,
        title: "HMRC Making Tax Digital: Payroll Software Requirements",
        description: "Everything you need to know about MTD compliance and choosing compatible payroll software",
        image: "/faq.svg",
        publishedDate: "April 2025",
    },
    {
        id: 4,
        title: "IR35 Changes 2025: What Every Business Needs to Know",
        description: "Complete guide to the latest off-payroll working regulations and how to ensure compliance",
        image: "/faq.svg",
        publishedDate: "March 2025",
    },
];

export const FromBlogSection = () => {
    return (
        <section className="w-full bg-background py-12">
            {/* Header with blue background */}
            <div className=" mb-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm font-medium mb-2">FROM OUR BLOG</p>
                    <h2 className="text-2xl font-bold">Suggested Resources on Payroll & Compliance</h2>
                </div>
            </div>

            {/* Resource Grid */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {resources.map((resource) => (
                        <Card key={resource.id} className="overflow-hidden  pt-0 border hover:shadow-lg transition-shadow duration-300">
                            <div className="relative h-52 w-full">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover "
                                />
                            </div>

                            <CardContent className="p-4">
                                <h3 className="font-semibold text-sm leading-tight mb-2 text-foreground">
                                    {resource.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                    {resource.description}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    <span className="font-bold">Published:</span> {resource.publishedDate}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <ButtonExel
                        variant="outline"
                        className="border-brand-blue text-brand-blue px-8 py-2"
                    >
                        View All Payroll Resources
                    </ButtonExel>
                </div>
            </div>
        </section>
    );
};
