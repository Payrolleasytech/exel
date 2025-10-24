export async function getPosts() {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://tidy-fish-f8bacf1595.strapiapp.com";
console.log("URLLL", `${url}/api/posts`)

  const res = await fetch(`${url}/api/posts`, {
    next: { revalidate: 60}
  });
  if (!res.ok) return null;

return res.json();

  
}