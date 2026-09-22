import { getNewsCategories } from "@/lib/categories";
import Link from "next/link";

const Categories = async ({params}) => {
    // const {id} = await params
    // console.log(id);
    const categories = await getNewsCategories();

    return (
        <div className="flex flex-col gap-2 w-full max-w-xs">
            {categories.map((category) => (
                <Link 
                    key={category.category_id}
                    href={`/categories/${category.category_id}`} 
                    className="block w-full p-3 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                >
                    {category.category_name}
                </Link>
            ))}
        </div>
    );
};

export default Categories;