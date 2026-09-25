import { getCategoriesNews } from "@/lib/data";
import { Avatar, Button, Card, CardFooter, CardHeader, Chip} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const CategoriesNews = async ({id}) => {

    const news = await getCategoriesNews(id);

    return (
        <div className="flex flex-col w-11/12 mx-auto gap-6 py-6">
            {news.map((specificNews) => {
                // Destructuring all necessary properties from specificNews
                const {
                    _id,
                    title,
                    details,
                    image_url,
                    total_view,
                    rating,
                    author,
                    others_info
                } = specificNews;

                // Nested destructuring for author, rating & others_info
                const { name, published_date, img: authorImg } = author || {};
                const { number: ratingNumber } = rating || {};
                const { is_trending } = others_info || {};

                // Format published date (YYYY-MM-DD)
                const formattedDate = published_date ? published_date.split(" ")[0] : "";

                return (
                    <Card key={_id} className="p-2 border border-default-100 shadow-sm rounded-xl">
                        {/* Header: Author Info & Actions */}
                        <CardHeader className="flex justify-between items-center pb-2">
                            <div className="flex items-center gap-3">
                                <Avatar
                                    src={authorImg}
                                    name={name}
                                    size="md"
                                    radius="full"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-default-900 leading-snug">
                                        {name}
                                    </span>
                                    <span className="text-xs text-default-400">
                                        {formattedDate}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 text-default-400">
                                <Button isIconOnly variant="light" size="sm" className="text-default-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </Button>
                                <Button isIconOnly variant="light" size="sm" className="text-default-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-10.628a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 10.628a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                                    </svg>
                                </Button>
                            </div>
                        </CardHeader>

                        {/* Card Content & Media */}
                        <div className="py-2 overflow-visible">
                            <h3 className="text-base font-bold text-default-900 leading-snug mb-3 line-clamp-2">
                                {title}
                            </h3>

                            <div className="relative mb-3">
                                <Image
                                    alt={title}
                                    className="object-cover w-full h-45 rounded-lg"
                                    src={image_url?.[0]}
                                    width={400}
                                    height={180}
                                />

                                {is_trending && (
                                    <Chip
                                        size="sm"
                                        color="danger"
                                        variant="flat"
                                        className="absolute top-2 right-2 z-10 font-medium"
                                    >
                                        Trending
                                    </Chip>
                                )}
                            </div>

                            <p className="text-xs text-default-500 leading-relaxed line-clamp-3 mb-2">
                                {details}
                            </p>

                            <Link
                                href={`/newsdetails/${_id}`}
                                className="text-xs font-semibold text-orange-500 hover:underline"
                            >
                                Read More
                            </Link>
                        </div>

                        <div className="border-t border-default-200 my-2" />

                        {/* Footer: Ratings and Views */}
                        <CardFooter className="flex justify-between items-center pt-1 pb-2">
                            <div className="flex items-center gap-1.5">
                                <div className="flex text-orange-400 gap-0.5 text-sm">
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                    <span>★</span>
                                </div>
                                <span className="text-xs font-semibold text-default-600">
                                    {ratingNumber}
                                </span>
                            </div>

                            <div className="flex items-center gap-1 text-default-400 text-xs font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <span>{total_view}</span>
                            </div>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
};

export default CategoriesNews;