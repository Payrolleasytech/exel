import { PageLayout } from "@/util/PageLayout";
import { Title } from "../about/components/Utils.about";
import Image from "next/image";
import { Dot } from "lucide-react";
import BlogTabs from "./components/BlogTabs";
import { getPosts } from "@/services/getPost";
import { RichTextRenderer } from "./components/textRenderer";
import moment from "moment"

export default async function page() {
    const posts = await getPosts();
    const latest = posts.data[0]

    return (
      <section className="w-full overflow-x-hidden mt-20"> {/* Added overflow-x-hidden */}
        <div className="text-center min-h-20 flex flex-col items-center py-4 justify-center px-4"> {/* Added px-4 */}
          <Title title="Exel Consultancy Blog" />
          <p className="px-4"> Payroll, Compliance & Financial Insights for UK Businesses</p> {/* Added px-4 */}
        </div>

        {/* Hero section */}
        <div className={`${PageLayout} bg-primary h-auto py-6 md:py-20 items-center justify-between w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 text-start px-4 md:px-0`}> {/* Added px-4 md:px-0 */}
          <div className="justify-self-start w-full"> {/* Added w-full */}
            <Image 
              src={latest?.coverImage?.url} 
              alt={"FAQ"} 
              width={400} 
              height={300} 
              className='rounded-lg shadow-lg w-full max-w-md' /* Added w-full and max-w-md */
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-8 justify-self-end text-white w-full px-4 md:px-0"> {/* Added w-full and px-4 */}
            <h3 className="text-lg font-semibold uppercase">Latest from Our Blog</h3>
            <h1 className='text-3xl font-bold'>{latest.title} </h1>
            <div className='text-lg'> <RichTextRenderer content={latest.excerpt} /> </div>
            <div className='flex gap-3'>
              <p className="capitalize"> {latest.category} </p>
              <Dot />
              <p> { moment(latest.publishedDate).format("MMM YY") } </p>
            </div>
          </div>
        </div>

        {/* BlogTabs - Ensure it has proper width constraints */}
        <div className="w-full px-4 md:px-0"> {/* Added container with padding */}
          <BlogTabs blogs={posts?.data} />
        </div>
      </section>
    );
}