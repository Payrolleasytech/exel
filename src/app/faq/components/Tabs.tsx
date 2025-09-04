import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageLayout } from '@/util/PageLayout';
import CustomAccordion from './GettingStarted';
import { accountancyservicesData, gettingstartedData, payrollsoftwareData, payrollsolutionsData, umbrellaservicesData } from './data';
import { Title } from '@/app/about/components/Utils.about';

export default function TabsComponent() {
    const categories = [
        { 
            value: "getting-started", 
            label: "Getting Started", 
            data: gettingstartedData, 
            bgColor: "bg-[#F2F4F8]" 
        },
        { 
            value: "payroll-software", 
            label: "Payroll Software", 
            data: payrollsoftwareData, 
            bgColor: "bg-[#D0E1F2B2]" 
        },
        { 
            value: "payroll-solutions", 
            label: "Payroll Solutions", 
            data: payrollsolutionsData, 
            bgColor: "bg-[#F2F4F8]" 
        },
        { 
            value: "umbrella-services", 
            label: "Umbrella Services", 
            data: umbrellaservicesData, 
            bgColor: "bg-[#D0E1F2B2]" 
        },
        { 
            value: "accountancy-services", 
            label: "Accountancy Services", 
            data: accountancyservicesData, 
            bgColor: "bg-[#F2F4F8]" 
        },
    ];

    const allTabs = [{ value: "all", label: "All" }, ...categories];

    return (
        <section className={`${PageLayout} w-full`}>
            <Tabs defaultValue="all" className="w-full">
                <TabsList className='w-full bg-white flex h-auto flex-wrap'>
                    {allTabs.map((tab) => (
                        <TabsTrigger
                            value={tab.value}
                            key={tab.value}
                            className="border-b-3 rounded-none px-4 border-t-0 border-l-0 border-r-0
                                transition-all duration-300 shadow-none outline-0 cursor-pointer
                                data-[state=active]:border-primary data-[state=active]:text-primary
                                data-[state=inactive]:text-gray-500 whitespace-nowrap"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* All Tab Content */}
                <TabsContent value="all" className="">
                    {categories.map((category) => (
                        <div key={category.value} className={`${category.bgColor} py-8 lg:py-16`}>
                            <Title title={category.label} />
                            <CustomAccordion data={category.data} />
                        </div>
                    ))}
                </TabsContent>

                {/* Individual Category Tabs */}
                {categories.map((category) => (
                    <TabsContent 
                        key={category.value} 
                        value={category.value}
                        className={`${category.bgColor} py-8 lg:py-16 space-y-4`}
                    >
                        <Title title={category.label} />
                        <CustomAccordion data={category.data} />
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}