"use client"
import { authClient } from "@/app/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

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

  const handleGoogleSignIn = async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  
  }
  const handleGithubSignIn = async()=>{
    const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log(data);
  }
  return (
    <div className="space-y-4">
      {/* Social Login */}
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-sm font-bold text-gray-800">Login With</p>

        <button onClick={handleGoogleSignIn} className="flex w-full items-center justify-center gap-2 rounded-md border border-blue-400 bg-white px-3 py-1.5 text-xs text-blue-500 hover:bg-gray-50">

          <FaGoogle />
          <p className="font-semibold">Login with Google</p>
        </button>

        <button onClick={handleGithubSignIn} className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-500 bg-white px-3 py-1.5 text-xs text-gray-800 hover:bg-gray-50">
          <FaGithub />
          <p className="font-semibold">Login with Github</p>
        </button>
      </div>
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