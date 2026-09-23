const cards = [
  {
    id: 1,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 2,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 3,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 4,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 5,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 6,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 7,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 8,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 9,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 10,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 11,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 12,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 13,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
  {
    id: 14,
    title: "নির্মাণকারীর অনুশীলনের জন্য তৈরি ওয়েবসাইট",
    titleEn: "A Website Created for the Developer's Practice",
  },
  {
    id: 15,
    title:
      "শুধুমাত্র নির্মাণকারীর অনুশীলনের জন্য সংবাদ ও তথ্য দেওয়া হয়েছে, ইউজারদের জন্য নয়",
    titleEn:
      "News and information are provided only for the developer's practice, not for users",
  },
];

const RightSideBar = () => {
  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-lg border bg-white p-5 shadow-sm"
        >
          <p className="text-md font-bold text-gray-800 bg-red-300">
            {card.title}
          </p>

          <p className="mt-2 text-md text-gray-500">
            {card.titleEn}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RightSideBar;