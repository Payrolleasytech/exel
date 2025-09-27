

export async function getServices() {
  const res = await fetch("http://localhost:1337/api/services", {
    next: { revalidate: 60}
  });
  if (!res.ok) return null;

return res.json();

  
}


// lib/api.ts




export async function getServiceBySlug(slug: string) {
  const API_URL = process.env.NEXT_STRAPI_API_URL || "http://localhost:1337";



  const res = await fetch(`${API_URL}/api/services/slug/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null
  }

  const data = await res.json();
  return data.data ?? null;
}
