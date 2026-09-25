export async function getNewsCategories() {
    const res = await fetch("https://news-nest-server-demo.onrender.com/api/news/categories");
    const data = await res.json();
    return data.data;
}

export async function getCategoriesNews(id) {
    const res = await fetch(`https://news-nest-server-demo.onrender.com/api/news/category/${id}`);
    const data = await res.json();
    return data.data;
}

export async function getNewsDetails(id) {
    const res = await fetch(`https://news-nest-server-demo.onrender.com/api/news/${id}`);
    const data = await res.json();
    return data.data;
}