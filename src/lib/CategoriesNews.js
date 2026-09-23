export async function getCategoriesNews(id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    return data.data;
}