import { getNewsCategories } from "@/lib/data";
import Link from "next/link";

const cards = [
  {
    id: 1,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 2,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
  {
    id: 3,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 4,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
  {
    id: 5,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 6,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
  {
    id: 7,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 8,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
  {
    id: 9,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 10,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
  {
    id: 11,
    titleBn:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developers practice, not for users",
  },
  {
    id: 12,
    titleBn: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the developers practice",
  },
];

const NewsCategories = async ({ id }) => {
  const categories = await getNewsCategories();

  return (
    <div className="w-full max-w-xs">
      {/* Category Buttons */}
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Link
            key={category.category_id}
            href={`/categorynews/${category.category_id}`}
            className={`block w-full rounded-lg p-3 transition hover:font-bold hover:text-black ${
              category.category_id === id && "bg-gray-200 font-medium"
            }`}
          >
            {category.category_name}
          </Link>
        ))}
      </div>

      {/* Cards Section */}
      <div className="mt-8 space-y-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <p className="font-medium text-gray-800">
              {card.titleBn}
            </p>

            <p className="mt-2 font-bold text-gray-800 bg-red-300">
              {card.titleEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCategories;