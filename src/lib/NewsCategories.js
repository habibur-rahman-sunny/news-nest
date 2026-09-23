export async function getNewsCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data.news_category;
}