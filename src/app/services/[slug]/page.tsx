import { notFound } from "next/navigation";
import axios from "axios";

interface PageProps {
  params: { slug: string }
}


export async function generateStaticParams() {
    const services = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services`);
    return services.data.map((service: { slug: string }) => ({
        slug: service.slug,
    }));
}

async function getService(slug: string) {
  const res = await fetch(`${process.env.API_URL}/services/${slug}`, {
    next: { revalidate: 86400 },
  })

  if (!res.ok) return null
  return res.json()
}


export default async function ServicePage({ params }: PageProps) {
  const service = await getService(params.slug)

  if (!service) return notFound();

  
return <div>{service.name}</div>

}


export const ServicePageBuild = () => {
  return (
    <div>
      <h1>Service Page</h1>
    </div>
  );
};
