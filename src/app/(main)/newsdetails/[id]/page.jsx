import { getNewsDetails } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const NewsDetailsPage = async ({params}) => {
    const {id} = await params;
    const newsDetails = await getNewsDetails(id)
    return (
        <div className="space-y-10 w-10/12 mx-auto">
            {newsDetails.data.map(
                ({
                    _id,
                    category_id,
                    title,
                    details,
                    image_url,
                    thumbnail_url,
                    total_view,
                    rating,
                    author,
                }) => {
                    const { name, published_date, img } = author;

                    return (
                        <article
                            key={_id}
                            className="border rounded-lg bg-white p-5 shadow-sm"
                        >
                            {/* Category */}
                            <p className="text-sm font-medium text-gray-500 mb-3">
                                Dragon News
                            </p>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-5">
                                {title}
                            </h1>

                            {/* Main Image */}
                            <div className="relative w-full h-62.5 md:h-100 mb-5">
                                <Image
                                    src={image_url}
                                    alt={title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Author + Date */}
                            <div className="flex items-center gap-3 mb-5">
                                <Image
                                    src={img}
                                    alt={name}
                                    width={45}
                                    height={45}
                                    className="rounded-full"
                                />

                                <div>
                                    <p className="font-semibold text-gray-800">{name}</p>
                                    <p className="text-sm text-gray-500">
                                        {published_date}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <p className="text-gray-600 leading-7 text-justify">
                                {details}
                            </p>

                            {/* Bottom Info */}
                            <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t">
                                <p className="text-sm text-gray-600">
                                    👁 {total_view} views
                                </p>

                                <p className="text-sm text-gray-600">
                                    ⭐ {rating.number} — {rating.badge}
                                </p>
                            </div>

                            {/* Button */}
                            <Link href={`/categorynews/${category_id}`}>
                                <Button className="mt-6 bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 transition">
                                    ← All news in this category
                                </Button>
                            </Link>
                        </article>
                    );
                }
            )}
        </div>
    );
};

export default NewsDetailsPage;