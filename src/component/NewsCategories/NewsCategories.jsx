import { getNewsCategories } from "@/lib/NewsCategories";
import Link from "next/link";

const NewsCategories = async ({id}) => {
    const categories = await getNewsCategories();
    return (
        <div className="flex flex-col gap-2 w-full max-w-xs">
            {categories.map((category) => (
                <Link 
                    key={category.category_id}
                    href={`/categorynews/${category.category_id}`} 
                    className={`block w-full p-3 hover:text-black hover:font-bold rounded-lg transition ${category.category_id === id && "bg-gray-200 font-medium rounded-lg"}`}
                >
                    {category.category_name}
                </Link>
            ))}
        </div>
    );
};

export default NewsCategories;