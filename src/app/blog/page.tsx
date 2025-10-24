import { PageLayout } from "@/util/PageLayout";
import { Title } from "../about/components/Utils.about";
import Image from "next/image";
import { Dot } from "lucide-react";
import SearchBar from "./components/SearchComponent";
import BlogTabs from "./components/BlogTabs";
import BlogPagination from "./components/BlogPagination";
import { FromBlogSection } from "../services/components/FromOurBlog";
import TakeActionCard from "../services/components/TakeAction";
import { getPosts } from "@/services/getPost";
import {  RichTextRenderer } from "./components/textRenderer";
import moment from "moment"




export default async function page() {

    const posts = await getPosts();
    const latest = posts.data[0]
    console.log("POSTS, ", posts)
    return (
      <section className={` grid gap-4 md:gap-8 mt-14 md:mt-18`}>
        <div className=" text-center min-h-20 flex flex-col items-center py-4 justify-center">
          <Title title="Exel Consultancy Blog" />
          <p> Payroll, Compliance & Financial Insights for UK Businesses</p>
        </div>

        {/* Hero section  */}
         <div className={`${PageLayout} bg-primary h-auto py-6 md:py-20 items-center justify-between  w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 text-start`}>
                <div className={`justify-self-start`}>
                    <Image src={latest?.coverImage?.url} alt={"FAQ"} width={400} height={300} className='rounded-lg shadow-lg ' />
                </div>
                <div className={`flex flex-col gap-4 md:gap-8 justify-self-end text-white`}>
                  <h3 className="text-lg font-semibold uppercase">Latest from Our Blog</h3>
                    <h1 className='text-3xl font-bold'>{latest.title} </h1>
                    <div className='text-lg'> <RichTextRenderer content={latest.excerpt} /> </div>
                    <div className=' flex gap-3'>
                        <p className="capitalize"> {latest.category} </p>
                        <Dot />
                        <p> { moment(latest.publishedDate).format("MMM YY") } </p>
                    </div>
                </div>
            </div>


            {/* <SearchBar /> */}
            <BlogTabs blogs={posts?.data} />

            {/* <FromBlogSection /> */}
            {/* <BlogPagination currentPage={1} totalPages={10} onPageChange={(page) => console.log("Change to page:", page)} /> */}
              {/* <TakeActionCard title="Still Need Help?" description="Can't find what you're looking for? Our payroll and finance experts are here to help." cta={{text: "Get expert help", link: "#"}} /> */}
      </section>
    );
}
