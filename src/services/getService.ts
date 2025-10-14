

export async function getServices() {
  const baseUrl = process.env.NEXT_STRAPI_API_URL
  const res = await fetch(`${baseUrl}/api/services`, {
    next: { revalidate: 60}
  });
  if (!res.ok) return null;

return res.json();

  
}


// lib/api.ts




export async function getServiceBySlug(slug: string) {
  const baseUrl = process.env.NEXT_STRAPI_API_URL || "http://localhost:1337";



  const res = await fetch(`${baseUrl}/api/services/slug/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null
  }

  const data = await res.json();
  return data.data ?? null;
}
